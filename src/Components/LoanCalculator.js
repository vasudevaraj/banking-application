import React, { useState } from "react";

const LoanCalculator = () => {
    const [userValues, setUserValues] = useState({
        amount: '',
        interest: '',
        years: ''
    });

    const [results, setResults] = useState({
        monthlyPayment: '',
        totalPayment: '',
        totalInterest: '',
        isResult: false
    })

    const [error, setError] = useState('');

    const isValid = () => {
        const { amount, interest, years } = userValues;
        let actualError = '';
        // Validate if there are values
        if (!amount || !interest || !years) {
          actualError = 'All the values are required';
        }
        // Validade if the values are numbers
        if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
          actualError = 'All the values must be a valid number';
        }
        // Validade if the values are positive numbers
        if (
          Number(amount) <= 0 ||
          Number(interest) <= 0 ||
          Number(years) <= 0
        ) {
          actualError = 'All the values must be a positive number';
        }
        if (actualError) {
          setError(actualError);
          return false;
        }
        return true;
      };

    const calculateResults = ({ amount, interest, years }) => {
        const userAmount = Number(amount);
        const calculatedInterest = Number(interest) / 100 / 12;
        const calculatedPayments = Number(years) * 12;
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (userAmount * x * calculatedInterest) / (x - 1);

        if (isFinite(monthly)) {
            const monthlyPaymentCalculated = monthly.toFixed(2);
            const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
            const totalInterestCalculated = (monthly * calculatedPayments - userAmount).toFixed(2);

            setResults({
                monthlyPayment: monthlyPaymentCalculated,
                totalPayment: totalPaymentCalculated,
                totalInterest: totalInterestCalculated,
                isResult: true
            })
        }
        return;
    }

    const clearFields = () => {
        setUserValues({
            amount:'',
            interest:'',
            years:''
        })

        setResults({
            monthlyPayment:'',
            totalPayment:'',
            totalInterest:'',
            isResult:false
        })
    }

    const handleInputChange = (e) => {
        setUserValues({ ...userValues, [e.target.name]: e.target.value })
    }

    const handleSubmitValues = (e) => {
        e.preventDefault();
        console.log(userValues);
        if(isValid()){
            setError('');
            calculateResults(userValues);
        }
        
    }

    return (
        <div>
            <h1>Loan Calculator</h1>
            <p>{error}</p>
            <form onSubmit={handleSubmitValues}>
                {!results.isResult ? (
                    <div>
                        <div>
                            <label>Amount:</label>
                            <input
                                type='text'
                                name='amount'
                                placeholder='Loan amount'
                                value={userValues.amount}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Interest:</label>
                            <input
                                type='text'
                                name='interest'
                                placeholder='Interest'
                                value={userValues.interest}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Years:</label>
                            <input
                                type='text'
                                name='years'
                                placeholder='years'
                                value={userValues.years}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                ) : (
                    <div>
                        <h4>
                            Loan amount: ₹{userValues.amount} <br />
                            Interest:{userValues.interest}% <br />
                            Years to repay: {userValues.years}
                        </h4>
                        <div>
                            <label>Monthly Payment:</label>
                            <input type='text' value={results.monthlyPayment} disabled />
                        </div>
                        <div>
                            <label>Total Payment: </label>
                            <input type='text' value={results.totalPayment} disabled
                            />
                        </div>
                        <div>
                            <label>Total Interest:</label>
                            <input type='text' value={results.totalInterest} disabled
                            />
                        </div>
                        <div>
                            <input value='Calculate again' type='button' onClick={clearFields}/>
                        </div>
                    </div>
                )}

            </form>

        </div>
    )
}

export default LoanCalculator