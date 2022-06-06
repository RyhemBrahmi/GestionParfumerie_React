import React, { Component } from 'react';
import '../assets/css/Header.css'
import '../assets/img/admin.jpg';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header">
       <div className="wrapper">
        <div className="search">
          <input className="input" type="text" placeholder="Chercher..." />
          <SearchOutlinedIcon/>
        </div>
       <div className="items">
         <div className="item">
          <LanguageOutlinedIcon/>
          Français
         </div>
         <div className="item">
          <DarkModeOutlinedIcon/>
         </div>
         <div className="item">
          <FullscreenExitOutlinedIcon/>
         </div>
         <div className="item">
          <NotificationsNoneOutlinedIcon/>
          <div className="counter">1</div>
         </div>
         <div className="item">
          <ChatBubbleOutlinedIcon/>
          <div className="counter">2</div>
         </div>
         <div className="item">
         <img src={require('../assets/img/admin.jpg')} style= {{ margin: "6px", width: "30px ",height: "30px" ,borderRadius: "50%"}}/>
         </div>
         <div className="item">
         <Button component={Link} to="/">
         <ListOutlinedIcon style= {{ color: "white"}}/>
           </Button>
         </div>
        
       </div>
       </div>
          
      </div>
    );
  }
}

export default HeaderComponent;