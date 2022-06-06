import React from 'react';

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';


  const SideBar = () => {
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#8734c2">
          <CDBSidebarHeader prefix={<i className="fas fa-align-right"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit', fontStyle: 'normal', fontSize : "15px" }}>
            Parfumerie
            </a>
          </CDBSidebarHeader> 
  
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu className="buttonDesign" >
              <NavLink exact to="/dashboard" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns" style={{  borderRadius: "25px"}} >Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/parfums" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="female" style={{  borderRadius: "25px" }} >Parfums Femme</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/parfumsHomme" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user-tie" style={{  borderRadius: "25px" }} >Parfums Homme</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/makeup" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="heart" style={{  borderRadius: "25px" }} >Maquillage Yeux</CDBSidebarMenuItem>
              </NavLink>
  
              <NavLink exact to="/beautyHair" /*target="_blank"*/ activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="snowflake" style={{  borderRadius: "25px" }} >Beauté & Cheveux</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/skinCare" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="grin-beam" style={{  borderRadius: "25px" }} >Soin de la peau</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/hairCare" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="feather" style={{  borderRadius: "25px" }} > 
                
                 Soin des cheveux</CDBSidebarMenuItem>
              </NavLink>

           
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
             
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  
   

export default SideBar;
