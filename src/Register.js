import React from 'react';
import './Register.css';
import Forgot from './Forgot';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Login from './Login';




class Register extends React.Component{
  constructor(props){
     super(props);
     this.state={



     }
  }

Login(){

    this.props.history.push('/Login');

}
 
render(){
  return (
    <div className="container-fluid">

    
    <div className="row">
       
        <div className="col-lg-4 col-md-3 col-sm-12"></div>
        <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="Register-area">
            <div className="logo-title text-center">
            <img src='/assets/bench.png' className="logo"></img>

            <span className="font-weight-bold logo-text text-dark">POGO</span>
            <span className="font-weight-bold logo-text text-primary">BENCH</span>
            </div>
            <div className="card">
	            <div className="card-body">
	               
	               <div className="row">
               
                     <div className="col-6 ">
                     
                     <div>
	                  <label className="mb-2">First Name</label>
	                  <div className="input-group input-group-lg">
	                  <input type="text" class="mb-3 round-box"   placeholder="Enter a First Name" />
	                  <i className="offset-10 fas fa-user user-icon"></i>
	                  </div>
	                  </div>

                     <div>
	                  <label className="mb-2">Email</label>
	                  <div className="input-group input-group-lg">
	                  <input type="text" class="mb-3 round-box"   placeholder="Enter your Email" />
	                  <i className="offset-10 fas fa-envelope user-icon"></i>
	                  </div>
	                  </div>

                     <div>
	                  <label className="mb-2">Password</label>
	                  <div className="input-group input-group-lg">
	                  <input type="text" class="mb-3 round-box"   placeholder="Enter a Password" />
	                  <i className="offset-10 fas fa-key user-icon"></i>
	                  </div>
	                  </div>	                  
 

                     </div>
                     <div className="col-6 ">
                      

                     <div>
	                  <label className="mb-2">Last Name</label>
	                  <div className="input-group input-group-lg">
	                  <input type="text" class="mb-3 round-box"   placeholder="Enter a Last Name" />
	                  <i className="offset-10 fas fa-user user-icon"></i>
	                  </div>
	                  </div>

                     <div>
	                  <label className="mb-2">Phone Number</label>
	                  <div className="input-group input-group-lg">
	                  <input type="text" class="mb-3 round-box"   placeholder="Enter your phone number" />
	                  <i className="offset-10 fas fa-phone user-icon"></i>
	                  </div>
	                  </div>

                     <div>
	                  <label className="mb-2">Confirm Password</label>
	                  <div className="input-group input-group-lg">
	                  <input type="text" class="mb-3 round-box"   placeholder="Retype Password" />
	                  <i className="offset-10 fas fa-key user-icon"></i>
	                  </div>
	                  </div>	                  
 

                     </div>


                     </div>


                      <button className="btn mt-3 mb-3 font-weight-bold text-white btn-block btn-color">Register
                      </button>

               
                <div className="text-center">
                <input className="" type="checkbox" /> 
                <label className="pl-2">I agree to terms</label>
                </div>
                <br/>
                <div className="text-center">
                <label className="text-center mb-2 font-weight-bold">Already have and account? <a onClick={this.Login.bind(this)} className="text-primary">Sign in</a> </label>
                </div>

                    </div> 
	                  
	               
	            </div> 
           
            </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-12"></div>

    </div>


   
    
  
  );
}
}

export default withRouter(Register);


