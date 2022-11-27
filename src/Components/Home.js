import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link, Outlet } from "react-router-dom";
import ph1 from '../Images/ph1.jpg';
import ph2 from '../Images/ph2.jpg';
import ph3 from '../Images/ph3.jpg';
import Navbar from "./Navbar";


const Home = (props) => {

    return (
        <div>
            <Navbar/>
            <div>
            <Carousel className="p-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ph1}
                        alt="First slide"
                        height="600"
                        width="1340"
                    />
                    <Carousel.Caption style={{ color: "black" }}>
                        <h3>Free Learning Platform</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ph2}
                        alt="Second slide"
                        height="600"
                        width="1340"
                    />

                    <Carousel.Caption style={{ color: "black" }}>
                        <h3>Learning that gets you</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ph3}
                        alt="Third slide"
                        height="600"
                        width="1600"
                    />

                    <Carousel.Caption style={{ color: "black" }}>
                        <h3>Unlock the power of your people</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div >
                        <ul className="navbar-nav">
                            <li className="nav-item nav-link pr-5">
                                <button type="button" className=" btn btn-primary btn-lg">
                                    <Link to="/teachOnUdemy" style={{color:"black"}}>Open Savings Account</Link>
                                </button>
                            </li>
                            <li className="nav-item nav-link pr-5">

                                <button type="button" className="nav-item nav-link btn btn-primary btn-lg">
                                    <Link to="/home/applyLoan" style={{color:"black"}}>Apply Home Loan</Link>
                                </button>
                            </li>
                            <li className="nav-item nav-link pr-5">
                                <button type="button" className="nav-item nav-link btn btn-primary btn-lg">
                                    <Link to="/home/loanCalculator" style={{color:"black"}}>Home Loan Calculator</Link>
                                </button>
                            </li >
                            <li className="nav-item nav-link pr-5">
                                <button type="button" className="nav-item nav-link btn btn-primary btn-lg">
                                    <Link to="/signUp" style={{color:"black"}}>Credit card</Link>
                                </button>
                            </li>
                            <li className="nav-item nav-link pr-5">
                                <button type="button" className="nav-item nav-link btn btn-primary btn-lg">
                                    <Link to="/signUp" style={{color:"black"}}>Personal Loan</Link>
                                </button>
                            </li>
                        </ul>
                        <Outlet/>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    )
}
export default Home;