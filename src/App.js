import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Signin from "./components/Signin";
import Signup from './components/Signup';
import Getproducts from './components/Getproducts';
import Addproduct from './components/Addproduct';
import Makepayment from './components/Makepayment';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Sokogarden - Buy & Sell Online</h1>

      </header>

       <nav className='m-4'>
      <Link to = '/' className='btn btn-success mx-2'>Home</Link> 
      <Link to = '/addproduct' className='btn btn-success mx-2'>Add Product</Link> 
      <Link to = '/signup' className='btn btn-success mx-2'>Sign Up</Link>
      <Link to = '/signin' className='btn btn-success mx-2'>Sign In</Link> 
      
      {/* this is the default page */}
       
       </nav>
       
      <Routes>
         <Route path ='/signup' element = {<Signup />}/>
         <Route path = "/signin" element = {<Signin />}/>
         <Route path ='/' element = {<Getproducts />}/>
         <Route path = "/addproduct" element = {<Addproduct />}/>
         <Route path = "/makepayment" element = {<Makepayment />}/>
      </Routes>
     
    </div>
    </BrowserRouter>

  );
}

export default App;
