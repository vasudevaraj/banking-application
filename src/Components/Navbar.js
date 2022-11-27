import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Navbar = () => {
    let user = JSON.parse(localStorage.getItem('user-info'));
    console.warn(user)
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        navigate('/register');
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <Link to="/home">Banking</Link>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    
                        {
                            localStorage.getItem('user-info') ?
                            <>
                            <ul className="navbar-nav mr-auto ">
                            <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link to="/home">Home</Link>
                            </a>
                        </li>
                        </ul>
                            </>
                            :
                            <ul className="navbar-nav mr-auto ">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link to="/register">Register</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link to="/login">Login</Link>
                            </a>
                        </li>
                        </ul>
                        }
                        
                        <div>
                        {localStorage.getItem('user-info')?
                        <ul className="navbar-nav ml-auto ">
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >
                                {user && user.username}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#" onClick={logOut}>Logout</a>

                            </div>
                        </li>
                    </ul>
                    :
                    null
                        
                    }
                  
                    
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;