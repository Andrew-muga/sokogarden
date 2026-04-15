import { Link } from "react-router-dom";//it is used for navigation/routing
import {useState} from "react";// it is used for state management
import axios from "axios";//it is used to access the API
const Signup = () => {

    //initialize the variables
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState(" ");


    //an arrow function to submit user data
    const submit = async(e) => {
        e.preventDefault(); // prevent default JS actions e.g submit
        setLoading ("Please wait as we upload your data");
        
        try{
            // let the user enter their details
            // update the user details using the hooks
            // create an object called Formdata()

            const data = new FormData();
            data.append('username',username);
            data.append("email", email);
            data.append('password',password);
            data.append("phone", phone);

            //console.log({username,email,password,phone});

            //post the data to the API
            //Create an object to store the API details
            const response = await axios.post("https://andrewmuga.alwaysdata.net/api/signup", data,
                
            );
            //this is the endpoint
            //after the user has accessed the data
            //Clear the input fields
            setUsername("");
            setEmail("");
            setPassword("");
            setPhone("");
            


        } catch(error) {

            setLoading(" ");//update loading hook to be empty
            setError(error.message);
            setSuccess();
            
        }

    }

    return(
        <div className="row justify-content-center mt-4">
            <h1>Welcome to Sign Up Components</h1>
            <div className="col-md-6 card shadow p-4">
                <h2>Sign Up</h2>
                <form onSubmit={submit}>
                    {loading}
                    {error}
                    {success}
                    <input 
                    type="text" 
                    className = "form-control"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Enter Username" 
                    required/> <br />

                    <input 
                    type="email" 
                    className="form-control" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email" 
                    required/> <br />

                    <input 
                    type="password" 
                    className="form-control" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password" 
                    required/> <br /> 

                    <input 
                    type="text" 
                    className="form-control" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number" 
                    required/> <br />

                    <button type="submit" className="btn btn-primary">
                        Create Account
                    </button>
                </form>

                Already have an account ? <Link to = '/signin'>Sign In</Link> <br />
            </div>

        </div>
    );
}
export default Signup;