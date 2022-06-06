
import React from 'react'
import Widget from "../Components/widget/Widget";
import Chart from '../Components/chart/Chart';
import Featured from '../Components/featured/Featured';
import HeaderComponent from '../Components/HeaderComponent';
import SideBar from '../Components/SideBar';

const Dashboard = () => {
  return (
    <div className="pere">
      <div className="gauche">
             <SideBar/>
      </div>
      <div className="droit">
             <HeaderComponent/>
      <div className="container">
     
      <div className="widgets">
       <Widget type="parfums"/>
       <Widget type="maquillage"/>
       <Widget type="beauté"/>
       <Widget type="soin"/>
      </div>
      <div className="charts">
        <Featured/>
        <Chart/>
      </div>
        </div>
    </div>


   
    </div>
    
  )
}

export default Dashboard
