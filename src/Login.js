import React from 'react';
import './Login.css';
import Register from './Register';
import Forgot from './Forgot';
import {withRouter} from 'react-router-dom';
import axios from 'axios';




class Login extends React.Component{
  constructor(props){
     super(props);
     this.state={



     }
  }

Register(){

    this.props.history.push('/Register');

}


render(){
  return (
    <div className="container-fluid">

    
    <div className="row">
       
        <div className="col-lg-4 col-md-3 col-sm-12"></div>
        <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="login-area">
            <div className="logo-title text-center">
            <img src='/assets/bench.png' className="logo"></img>

            <span className="font-weight-bold logo-text text-dark">POGO</span>
            <span className="font-weight-bold logo-text text-primary">BENCH</span>
            </div>
            <div className="card">
              <div className="card-body">
                
                  <div>
                  <label for="exampleInputEmail1">Username or Email address</label>
                  <div className="input-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username or Email" />
                  <i className="offset-11 fas fa-user user-icon"></i>
                  </div>
                  </div>
                  <div>
                  <label for="exampleInputEmail1">Password</label>
                  <div className="input-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a password" />
                  <i className="offset-11 fas fa-key user-icon"></i>
                  </div>
                  </div>
                  
                 
                

                <button className="btn mt-3 mb-3 font-weight-bold text-white btn-block btn-color">LOGIN
                </button>

               
                <div className="row">
                <div className="col-6">
                <input className="" type="checkbox" /> 
                <label style={{position:"absolute"}}>keep me signed in</label>
                </div>
                <div className="col-6 text-right ">Forgot Password</div>
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

export default withRouter(Login);


