import { Link } from "react-router-dom";

const Signup = () => {
    return(
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign Up</h2>
                <form onSubmit ={submit} >
                    <input 
                    type ="text" 
                    className = "form-control" 
                    value = {username} 
                    onClick ={(e) => setUsername(e.target.value)} 
                    placeholder="Enter Username" 
                    required/>

                    <input 
                    type="email" 
                    className="form-control"
                    value={email} 
                    onClick={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email" 
                    required/>

                    <input 
                    type="password" 
                    className="form-control" 
                    value={password}
                    onClick={(e) => setPassword(e.target.value)} 
                    placeholder="Enter Password" 
                    required/>

                    <input 
                    type="text" 
                    className="form-control"
                    value={phone}
                    onClick={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number" 
                    required/>

                    <button type="submit" className="btn btn-primary">
                        Create Account
                    </button>
                </form>
            </div>

        </div>
    );
}
export default Signup;