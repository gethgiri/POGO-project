import React from 'react';
import './Forgot.css';

import Login from './Login';
import Register from './Register';
import {withRouter} from 'react-router-dom';


class Forgot extends React.Component{
  constructor(props){
     super(props);
     this.state={



     }
  }

Register(){

    this.props.history.push('/Register');

}

backToLogin()
{
	this.props.history.push('/Login')
}

newPassword()
{
	this.props.history.push('/NewPassword')
}



render(){
  return (
    <div className="container-fluid">

    
    <div className="row">
       
        <div className="col-lg-4 col-md-3 col-sm-12"></div>
        <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="forgot-area">
            <div className="logo-title text-center">
            <img src='/assets/bench.png' className="logo"></img>

            <span className="font-weight-bold logo-text text-dark">POGO</span>
            <span className="font-weight-bold logo-text text-primary">BENCH</span>
            </div>
            <div className="card">
              <div className="card-body">
                <h2 className="font-weight-bold">Forgot your password?</h2>
                 <label className=" pr-2">Enter your email address below and we'll get you back on track.</label>
                  <div>
                  <label className="font-weight-bold">Email address</label>
                  <div className="input-group">
                  <input type="email" className="round-box form-control" placeholder="Enter Username or Email" />
                  <i className="offset-11 fas fa-user user-icon"></i>
                  </div>
                  </div>
                  <div className="row">
	                <div className="col-6">
	                <label  className="backtosign text-primary"><a onClick={this.backToLogin.bind(this)}>Back to sign in</a></label>
	                </div>
	                <div className="col-6 text-right text-primary ">
	                <button className="btn mt-3 mb-3 font-weight-bold text-white btn-block btn-color" onClick={this.newPassword.bind(this)}>Request Reset Link               </button>
                    </div>
	               </div>


                </div>
                  <label className="text-center mb-5 font-weight-bold">New to Pogobench? <a className="text-primary" onClick={this.Register.bind(this)}>Sign up now</a> </label>

               
              </div>
           
          </div>
          



            </div>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-12"></div>

    </div>
   
    
  
  );
}
}

export default withRouter(Forgot);

             








// <div>
//                   <label >Username or Email address</label>
//                   <div className="input-group">
//                   <input type="email" className="round-box form-control" id="exampleInputEmail1" placeholder="Enter Username or Email" />
//                   <i className="offset-11 fas fa-user user-icon"></i>
//                   </div>
//                   </div>
//                   <div>
//                   <label for="exampleInputEmail1">Password</label>
//                   <div className="input-group">
//                   <input type="email" className="round-box form-control" id="exampleInputEmail1" placeholder="Enter a password" />
//                   <i className="offset-11 fas fa-key user-icon"></i>
//                   </div>
//                   </div>
                  
                 
                

//                 <button className="btn mt-3 mb-3 font-weight-bold text-white btn-block btn-color">LOGIN
//                 </button>

               
//                 <div className="row">
//                 <div className="col-6">
//                 <input className="" type="checkbox" /> 
//                 <label style={{position:"absolute"}}>keep me signed in</label>
//                 </div>
//                 <div className="col-6 text-right ">Forgot Password</div>
//                 </div>



/*<div className="row">
	                <div className="col-6">
	                <label style={{position:"absolute"}} className="text-primary">Back to sign in</label>
	                </div>
	                <div className="col-6 text-right text-primary ">
	                <button className="btn mt-3 mb-3 font-weight-bold text-white btn-block btn-color">LOGIN
               </button>
               </div>
	               </div>*/


