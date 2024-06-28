const { default: products } = require("razorpay/dist/types/products.js");
const Category = require("../models/category.model.js");
const Product = require("../models/product.model.js");
const createProduct = async (reqData) => {
  try {
    let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

    if (!topLevel) {
      topLevel = new Category({
        name: reqData.topLevelCategory,
        level: 1,
      });
    }
    let secondLevel = await Category.findOne({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
    });
    if (!secondLevel) {
      secondLevel = new Category({
        name: reqData.secondLevelCategory,
        parentCategory: topLevel.id,
        level: 2,
      });
    }
    let thirdLevel = await Category.findOne({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
    });
    if (!thirdLevel) {
      thirdLevel = new Category({
        name: reqData.thirdLevelCategory,
        parentCategory: secondLevel.id,
        level: 3,
      });
    }

    const product = new Product({
      title: reqData.title,
      description: reqData.description,
      quantity: reqData.quantity,
      price: reqData.price,
      discountPrice: reqData.discountPrice,
      discountPercent: reqData.discountPercent,
      companyName: reqData.companyName,
      weight: reqData.weight,
      imageUrl: reqData.imageUrl,
      category: thirdLevel._id,
    });
    return await product.save();
  } catch (err) {
    throw new Error(err.message);
  }
};
const deleteProduct = async (productId) => {
  try {
    const product = await findProductById(productId);
    await Product.findByIdAndDelete(productId);
    return "Product deleted Successfully";
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateProduct = async (productId, reqData) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, reqData);
    return updatedProduct;
  } catch (err) {
    throw new Error(err.message);
  }
};

const findProductById = async (id) => {
  try {
    const product = await Product.findById(id).populate("category").exec();
    if (!product) {
      throw new Error("Product not found with id" + id);
    }
    return product;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllProducts = async (reqQuery) => {
  try {
    let {
      category,
      weights,
      minPrice,
      maxPrice,
      minDiscount,
      sort,
      stock,
      pageNumber,
      pageSize,
    } = reqQuery;
    pageSize = pageSize || 10;
    let query = Product.find().populate("category");
    if (category) {
      const existCategory = await Category.findOne({ name: category });
      if (existCategory) {
        query = query.where("category").equals(existCategory._id);
      } else {
        return { content: [], currentPage: 1, totalPage: 0 };
      }
    }
    if (weights) {
      const wightSet = new Set(wights);
      query.query.where("weights.name").in([...wightSet]);
    }
    if (minPrice && maxPrice) {
      query = await query.where("discountedPrice").gte(minPrice).lte(maxPrice);
    }
    if (minDiscount) {
      query = await query.where("discountPercent").gt(minDiscount);
    }
    if (stock) {
      if (stock == "in_stock") {
        query = query.where("quantity").gt(0);
      } else if (stock == "out_of_stock") {
        query = query.where("quantity").gt(1);
      }
    }
    if (sort) {
      const sortDirection = sort === "price_high" ? -1 : 1;
      query = query.sort({ discountedPrice: sortDirection });
    }
    const totalProducts = await Product.countDouments(query);
    const skip = (pageNumber - 1) * pageSize;
    query = query.skip(skip).limit(pageSize);
    const products = await query.exec();
    const totalPages = Math.ceil(totalProducts / pageSize);
    return { content: products, currentPage: pageNumber, totalPages };
  } catch (err) {
    throw new Error(err.message);
  }
};

const createMultipleProduct = async (products) => {
  for (let product of products) {
    await createProduct(product);
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMultipleProduct,
};
