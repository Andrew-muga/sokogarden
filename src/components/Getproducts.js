import {useState, useEffect} from "react";//for state management
import axios from "axios";//for the api access
import { useNavigate } from "react-router-dom";//used to link other components

const Getproducts = () => {
    //initialize the hooks
    const [products, setProducts] = useState([]);//empty array
    const [loading, setLoading] = useState('');//loading message to show loading state
    const[error, setError] = useState('');//error message to show when an error occurs
    
    //create an object of useNavigate()
    const navigate = useNavigate();


        //specfy the location of images
    const img_url = "https://andrewmuga.alwaysdata.net/static/images/";

        //function to help fetch the data
    const getProducts = async () => {
        //set the state to be loading
        setLoading("Please wait we are retrieving the products.")

        //try - catch to assist managing the process

        try{
            const response = await axios.get('https://andrewmuga.alwaysdata.net/api/get_product_details');
            setProducts(response.data);
            setLoading("");
        } catch (error){
            setLoading("");
            setError("There is an error!");
        }
    }
    

    //useEffect to help trigger the process of product fetching once the component has fully loaded
    useEffect(() => {
        //call the function responsible for fetching the products
        getProducts();

    }, []);

    return (
        <section >
            <div className="row">
                <h3 className="mt-5">Available Games</h3>

            {/* bind the variables */}
                {loading && <p>{loading}</p> }
                {error &&<p className="text-danger">{error}</p>}

                {/* map the products and display them*/}
                {products.map((product) => (
                //create a UI for each product to be displayed on
                    <div className="col-md-3"  key={product.id}>
                        <div className="card shadow card-margin">
                            {/*   product image */}
                        <img className="product_img mt-4" src={img_url + product.product_photo} alt={product.product_name}/>
                        <div className="card h-100">
                            <div class = 'card-body'>
                                <h5 className="mt-2">{product.product_name}</h5>
                                <p className="text-muted">{product.product_description}</p>
                                <b className="text-secondary">Ksh{product.product_cost}</b> <br/>
                            </div>
                        {/* button*/}
                        <button className="btn btn-dark mt-2 w-100" onClick={() => navigate("/makepayment", {state : {product}})}>Buy Now </button>

                        </div>
                    </div>    
                </div>
            ))}

        </div>
        </section>
    );
}
export default Getproducts;