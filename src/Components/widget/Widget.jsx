import React from 'react';
import "../../assets/css/widget.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import GradeIcon from '@mui/icons-material/Grade';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
const Widget = ({ type }) => {
   let data;
   //temporary
   const amount = 100;
   const pers = 20;
   switch (type) {
       case "parfums":
           data ={
               title: "PARFUMS",
               isMoney: true,
               link: "Voir plus",
               icon: <FilterVintageIcon className="icon" style={{ color:"crimson", backgroundColor:"rgba(224, 64, 33, 0.8)"}}/>
           };
           break;
           case "maquillage":
            data ={
                title: "MAQUILLAGE",
                isMoney: true,
                link: "Voir plus",
                icon: <FavoriteIcon className="icon" style={{ color:"green", backgroundColor:"rgba(68, 227, 57, 0.8)"}}/>
            };
            break;
            case "beauté":
                data ={
                    title: "BEAUTE",
                    isMoney: true,
                    link: "Voir plus",
                    icon: <GradeIcon className="icon" style={{ color:"blue", backgroundColor:"rgba(86, 89, 231, 0.8)"}}/>
                };
                break;
                case "soin":
                    data ={
                        title: "SOIN",
                        isMoney: true,
                        link: "Voir plus",
                        icon: <InsertEmoticonIcon className="icon" style={{ color:"#8734c2", backgroundColor:"#ae7fd0"}}/>
                    };
                    break;
           default:
           break;
   }


  return (
    <div className="widget">
          <div className="left">
              <span className="title">{data.title}</span>
              <span className="count">{data.isMoney && "$"} {amount} </span>
              <span className="link">{data.link}</span>
           </div>  
         <div className="right">
             <div className="percentage">
                 <KeyboardArrowUpIcon/>
                 {pers}%
             </div>
             {data.icon}
         </div> 

    </div>
  )
}

export default Widget