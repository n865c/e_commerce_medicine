import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/Pages/Homepage/HomePage';

function App() {
  return (
    <div >
      <Navigation/>
     <div>
      <HomePage/>
     </div>
    </div>
  );
}

export default App;
