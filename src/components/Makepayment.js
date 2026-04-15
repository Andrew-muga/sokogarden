import {useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Makepayment = () => {
    //extract the location of the received request 
    const {product} = useLocation().state || {};

    //create a hook to hold phone number
    const[phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    //create a submit function
    const submit = async (e) => {
        e.preventDefault();//prevents default action

        //update the state using the setMessage()
        setMessage("Please wait as we process your request!");

        //create an object of the formdata
        const data = new FormData();
        data.append("phone", phone);
        data.append("amount", product.product_cost)

        //post our data to the api
        const response = await axios.post("https://andrewmuga.alwaysdata.net/api/mpesa_payment", data);

        setMessage("Please complete payment on your phone");
    }//(e) stands for an event

    return(
        <div>
            <h1>LIPA NA MPESA</h1>
            <p>Product Name :{product.product_name}</p>
            <p>Product Cost :{product.product_cost}</p>

            <form onSubmit={submit}>
                {message}  <br/>
                
                <input
                    type="text"
                    placeholder = "Enter your phone number"
                    value = {phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <br /> <br />
                <button className="btn btn-dark">Make Payment </button>

            </form>
        </div>
    );
};

export default Makepayment;