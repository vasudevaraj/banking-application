import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router";
import Navbar from './Navbar';

const Protected = (props) => {
    let Cmp = props.Cmp

    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
            navigate("/register");
        }
    },[])

    return(
        <div>
            <Cmp/>
        </div>
    )
}

export default Protected;