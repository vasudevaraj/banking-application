import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";


const Login = () => {
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/home");
        }
    },[])

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    //const users = [{email: "admin@gmail.com", password:"admin"}];
    const users = localStorage.getItem('user-info')
    const getAuth = localStorage.getItem("authenticated")

    const handleSubmit = (e) => {
        e.preventDefault();
        //const account = users.find((user) => user.email === email);
        //if(account && account.password === password){
        if(users.email === email && users.password === password){
            localStorage.setItem("authenticated",true);
            navigate("/home")
        } 
    }
    
    return (
        
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        
        </div>
    )
}
export default Login;