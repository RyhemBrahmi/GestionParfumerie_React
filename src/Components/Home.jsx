import React, { Component } from 'react'

import HeaderComponent from '../Components/HeaderComponent';
import SideBar from '../Components/SideBar';


export default class Home extends Component {
  render() {
    return (

           <div className="pere">
      
      <div className="gauche">
        <SideBar/>
       
      </div>
     
          <div className="droit">
          <HeaderComponent/>
            <div className="container">
           
    
              </div>
          </div>

              
          

   
    </div>
    
    )
  }
}
