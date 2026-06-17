import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Signin from "./components/Signin";
import Signup from './components/Signup';
import Getproducts from './components/Getproducts';
import Addproduct from './components/Addproduct';
import Makepayment from './components/Makepayment';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <nav className='navbar'>
         <div className='logo'>GamingGarden - Buy & Sell Games Online</div>

         <div className='nav-links'>
          <Link to = '/' className='btn btn-success m-2'>Home</Link> 
          <Link to = '/addproduct' className='btn btn-success   m-2'>Add Product</Link> 
          <Link to = '/signup' className='btn btn-success m-2'>Sign Up</Link>
          <Link to = '/signin' className='btn btn-success m-2'>Sign In</Link> 
          {/* this is the default page */}
         </div>
        </nav>
       </header>

       
       
      <Routes>
         <Route path ='/signup' element = {<Signup />}/>
         <Route path = "/signin" element = {<Signin />}/>
         <Route path ='/' element = {<Getproducts />}/>
         <Route path = "/addproduct" element = {<Addproduct />}/>
         <Route path = "/makepayment" element = {<Makepayment />}/>
      </Routes>
      <Footer/>
    </div>  
    
     </BrowserRouter>
  );
}

export default App;
