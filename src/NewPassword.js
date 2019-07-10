import React from 'react';
import './NewPassword.css';
import Login from './Login';
import Forgot from './Forgot';
import Register from './Register';
import {withRouter} from 'react-router-dom';


class NewPassword extends React.Component{
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

cancelNewPassword(){

}
saveNewPassword()
{

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
                <h2 className="font-weight-bold">Set New Password :)</h2>
                  <div className="pb-2">
                  <label className="font-weight-bold">Enter New Password</label>
                  <div className="input-group">
                  <input type="email" className="round-box form-control" placeholder="Enter New Password" />
                  <i className="offset-11 fas fa-user user-icon"></i>
                  </div>
                  </div>
                   <div className="pb-2">
                  <label className="font-weight-bold">Confirm New Password</label>
                  <div className="input-group">
                  <input type="email" className="round-box form-control" placeholder="Confirm New Password" />
                  <i className="offset-11 fas fa-user user-icon"></i>
                  </div>
                  </div>

                  <div className="row">

                  <div className="col-6">
                  <button className="btn mt-3 mb-3 font-weight-bold text-white btn-block btn-color" onClick={this.cancelNewPassword.bind(this)}>Cancel</button>

                  </div>
                  <div className="col-6">
                  <button className="btn mt-3 mb-3 font-weight-bold text-white btn-block btn-color" onClick={this.saveNewPassword.bind(this)}>Save</button>

                  </div>
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

export default withRouter(NewPassword);

             





