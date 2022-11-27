import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApplyLoan from "./Components/ApplyLoan";
import Home from "./Components/Home";
import LoanCalculator from "./Components/LoanCalculator";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Protected from "./Components/Protected";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Protected Cmp={Home} />} />
            <Route path="/home/loanCalculator" element={<LoanCalculator />} />
            <Route path="/home/applyLoan" element={<ApplyLoan />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
