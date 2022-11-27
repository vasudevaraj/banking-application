import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router";
import { Form, Button } from 'semantic-ui-react';
import Navbar from "./Navbar";


const Register = () => {
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/login");
        }
    },[])


    

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         firstname: '',
    //         lastname: '',
    //         username: '',
    //         email: '',
    //         password: '',
    //         submitted: false,
    //         error: false,
    //         navigate: false
    //     }
    // }

    
    // const handleChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value, submitted: false });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = {firstname, lastname, username, email, password};
        if (firstname === '' || lastname === '' || username === '' || email === '' || password === '') {
            //this.setState({ error: true, submitted: false, navigate: false });
            //console.log(this.state);
            setError(true);
            setSubmitted(false);
        }
        else {
            //this.setState({ navigate:true, submitted: true, error: false });
            //console.log(this.state);
            setSubmitted(true);
            setError(false);
            localStorage.setItem("user-info",JSON.stringify(inputs));
            //this.props.history.push('home');
            //window.location.href="http://localhost:3001/login"
            //alert('User')
            navigate("/login");
        }
    }

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {username} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    

    

        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div>
                                        <h1 className="heading">Registration form</h1>
                                    </div>

                                    <div className="messages">
                                        {errorMessage()}
                                        {successMessage()}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <Form >
                                        <Form.Field>
                                            <label for="fname">First Name:</label><br />
                                            <input type="text" id="fname" name="firstname" value={firstname} onChange={(e)=>setFirstName(e.target.value)} /><br />
                                        </Form.Field>
                                        <Form.Field>
                                            <label for="lname">Last Name:</label><br />
                                            <input type="text" id="lname" name="lastname" value={lastname} onChange={(e)=>setLastName(e.target.value)} /><br />
                                        </Form.Field>
                                        <Form.Field>
                                            <label for="uname">Username:</label><br />
                                            <input type="text" id="uname" name="username" value={username}  onChange={(e)=>setUsername(e.target.value)} /><br />
                                        </Form.Field>
                                        <Form.Field>
                                            <label for="email">Email:</label><br />
                                            <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
                                        </Form.Field>
                                        <Form.Field>
                                            <label for="password">Password:</label><br />
                                            <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
                                        </Form.Field>
                                        <Button  type="submit" value="Submit" className="btn btn-success " onClick={handleSubmit}>Submit</Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </div>

            </div>
        )
    }

export default Register;