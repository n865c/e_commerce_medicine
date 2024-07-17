import axios from "axios";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";
import { api} from "../../config/apiConfig";

export const createorder=(reqData)=>async(dispatch)=>{
    console.log("req data",reqData);
    dispatch({type:CREATE_ORDER_REQUEST});

    try{
       
        const {data}=await api.post(`/api/orders/`,reqData.address);
        if(data.id){
            reqData.navigate({search:`step=3&order_id=${data.id}`})
        }
        console.log("created order-",data);
        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data,
        })
    }catch(err)
    {
           console.log("catch error :", err)
           dispatch({type:CREATE_ORDER_FAILURE,
            payload:err.message
           })
        
    }
    
}


export const getOrderById=(orderId)=>async(dispatch)=>{
    dispatch({type:GET_ORDER_BY_ID_REQUEST});
    try{
        const {data}=await api.get(`/api/orders/${orderId}`,)
        console.log("order by id ",data)
        dispatch({type:GET_ORDER_BY_ID_SUCCESS,
            payload:data,
        })

    }
    catch(err)
    {
        console.log("catch",err)
        dispatch({type:GET_ORDER_BY_ID_FAILURE,
            payload:err.message
        })

    }
}


