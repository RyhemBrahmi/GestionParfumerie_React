import React, { Component } from 'react';
//import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
//import PaletteIcon from '@mui/icons-material/Palette';
/** import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';*/


import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import ListParfurmsComponet from './ListParfurmsComponet';
const FooterComponent = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#8734c2" >
        <CDBSidebarHeader prefix={ <span className="material-icons md-9">reorder</span>}>
          <a href="/" className="text-decoration-none" style={{ color: "#8734c2" }}>
            Parfumerie
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu className="buttonDesign" >
            <NavLink exact to="/dashboard"  activeClassName="activeClicked" /*style={{  fontStyle:"italic" }} */>
              <CDBSidebarMenuItem style={{  borderRadius: "25px" }} >
                <span className="material-icons" style={{ marginTop:"5px", marginLeft:"4px",marginRight: "28px"}}  >space_dashboard</span>
                <span className="fontStyle" style={{ position: "absolute"}} >Dashboard</span>
                </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/parfums" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{  borderRadius: "25px"}}  >
                 <span className="material-icons" style={{ marginTop:"5px", marginLeft:"4px",marginRight: "28px"}}  >filter_vintage</span> 
              <span className="fontStyle" style={{ position: "absolute"}} >Parfums Femme</span>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/homme" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{  borderRadius: "25px"}}  >
                <span className="material-icons" style={{ marginTop:"5px", marginLeft:"4px",marginRight: "28px"}} >sentiment_very_satisfied</span>
              <span className="fontStyle" style={{ position: "absolute"}} >Parfums Homme</span>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/MaquillageYeux" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{  borderRadius: "25px"}}  >
                <span className="material-icons" style={{ marginTop:"5px", marginLeft:"4px",marginRight: "28px"}} >color_lens</span>
                <span className="fontStyle" style={{ position: "absolute"}} >Maquillage Yeux</span>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Beaute&Cheveux" activeClassName="activeClicked">
              <CDBSidebarMenuItem  style={{  borderRadius: "25px"}} > 
              <span className="material-icons" style={{ marginTop:"5px", marginLeft:"4px",marginRight: "28px"}} >local_florist</span> 
              <span className="fontStyle" style={{ position: "absolute"}} >Beauté & Cheveux</span>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/peau" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{  borderRadius: "25px"}}  > 
              <span className="material-icons" style={{ marginTop:"5px", marginLeft:"4px",marginRight: "28px"}} >spa</span> 
              <span className="fontStyle" style={{ position: "absolute"}} >Soin de la peau</span>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/cheveux" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{  borderRadius: "25px"}}  > 
              <span className="material-icons" style={{ marginTop:"5px", marginLeft:"4px",marginRight: "28px"}}  ><span class="material-icons">air</span></span> 
               <span className="fontStyle" style={{ position: "absolute"}} >Soin des cheveux</span>
              </CDBSidebarMenuItem>
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
export default FooterComponent;
