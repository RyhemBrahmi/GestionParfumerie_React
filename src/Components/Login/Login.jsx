import { Collapse } from 'bootstrap';
import React, { Component } from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import '../../assets/img/us.png';
import '../../assets/img/login.png';
import '../../assets/css/Login.css'
import { Link } from 'react-router-dom';

import  AdminService  from '../../Services/AdminService';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }// lazem nzidou hadom 

  handleEmailChange(e) {
    this.setState({email: e.target.value});
 }
 handlePasswordChange(e) {
    this.setState({password: e.target.value});
 }

 handleLogin(e) {
   e.preventDefault();

  const email = this.state.email;
  const password = this.state.password;

  // console.log("EMail: ", email);
  // console.log("Password: ", password);

  // Send post request contains admin object to http://localhost:8080/api/v7/get-by-username to check if user is already exsit in db

  const user = {
    userName: email,
    passWord: password
  }

   AdminService.getUserByUsernamePassword(user).then(response => {
      const data = response?.data;
      // console.log(typeof data);

      if(!data || data.length == 0) {
        alert("Admin not found");
        return;
      }

      // Redirect to dashboard page
      console.log("REdirect to dashbaord page"); 
      this.props.history.push('/dashboard'); 
      
      /* <Link to="/dashboard">
      Go dashaboard
      </Link>*/


   }, err => {
     console.log(err);
   })


}
  render() {
   
    this.handleEmailChange = this.handleEmailChange.bind(this);
    

    return (
      <div>
            <Container className="mt-5">
              <Row >
              <Col lg={4} md={9} sm={12} className="text-center">
              <img src={require('../../assets/img/us.png')} style= {{ marginBottom: "1rem", width: "80px ",height: "80px"}}/>

              <Form onSubmit={this.handleLogin}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Control type="text" placeholder="Enter username" onChange={this.handleEmailChange} />
                 </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
                 </Form.Group>

                 <Button variant="primary col-12" type="submit">Login</Button>

                
              </Form>
              </Col>
              <Col lg={4} md={6} sm={12} >
              <img src={require('../../assets/img/login.png')} style= {{ marginTop: "-50px" ,width: "800px",height: "550px"}} />

              </Col>
              </Row>
            </Container>

      </div>
      
    )
  }
}
