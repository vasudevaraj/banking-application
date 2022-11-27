import React ,{ Component } from 'react';
import { Link } from "react-router-dom";
import { Form, Button } from 'semantic-ui-react';

class ApplyLoan extends Component {

    // States for registration
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            property: '',
            loanAmount: '',
            netSalary: '',
            submitted: false,
            error: false,
            loanError : false

        }
    }
  
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, submitted: false });
    }
  
  // Handling the form submission
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.username === '' || this.state.email === '' || this.state.property === '' || this.state.loanAmount === '' || this.state.netSalary === '') {
        this.setState({ error: true, loanError:false, submitted: false });
        console.log(this.state);
    }
    else if(this.state.loanAmount > this.state.netSalary * 50){
        this.setState({loanError:true, error: false, submitted: false });
    }
    else {
        this.setState({ submitted: true, error: false, loanError:false });
        console.log(this.state);
       // window.location.href="http://localhost:3001/login"
        //alert('User')
    }
}

 
  // Showing success message
     successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: this.state.submitted ? '' : 'none',
        }}>
        <h1>{this.state.username} successfully applied for loan and Application sent to approval!</h1>
      </div>
    );
  };
 
  loanAmountError = () => {
    return(
        <div
        className="error"
        style={{
          display: this.state.loanError ? '' : 'none',
        }}>
        <h1>Salary should not below 50 times the loan amount</h1>
      </div>
    )
  }
  // Showing error message if error is true
     errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: this.state.error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  render(){
  return (
    <div>
        <div className="container">
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div>
                                        <h1 className="heading">Loan Application form</h1>
                                        <p>
                                        {this.errorMessage()}
                                        {this.loanAmountError()}
                                        {this.successMessage()}
                                        </p>
                                    </div>

                                    
                                </div>
                                <div className="card-body">
                                    <Form >
                                        <Form.Field>
                                            <label for="fname">Username:</label><br />
                                            <input type="text" id="fname" name="username" onChange={this.handleChange} /><br />
                                        </Form.Field>
                                        <Form.Field>
                                            <label for="lname">Email:</label><br />
                                            <input type="text" id="lname" name="email" onChange={this.handleChange} /><br />
                                        </Form.Field>
                                        <Form.Field>
                                            <label for="uname">Property:</label><br />
                                            <input type="text" id="uname" name="property" onChange={this.handleChange} /><br />
                                        </Form.Field>
                                        <Form.Field>
                                            <label for="email">Loan Amount:</label><br />
                                            <input type="email" id="email" name="loanAmount" onChange={this.handleChange} /><br />
                                        </Form.Field>
                                        <Form.Field>
                                            <label for="password">Net Salary:</label><br />
                                            <input type="text" id="password" name="netSalary" onChange={this.handleChange} /><br />
                                        </Form.Field>
                                        <Button  type="submit" value="Submit" className="btn btn-success " onClick={this.handleSubmit}>Submit</Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </div>
    </div>
  );
}
}

export default ApplyLoan;