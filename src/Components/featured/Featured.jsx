import React from 'react';
import "../../assets/css/featured.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Featured = () => {
  return (
    <div className="featured">
    <div className="top">
     <h1 className="title">Revenu Total</h1>
     <MoreVertIcon fontSize="small"/>
    </div>
    <div className="bottom">
     <div className="featureChart">
         <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
     </div>
     <p className="title">Total des ventes réalisées aujourd'hui</p>
     <p className="amount">$560</p>
     
   <p className="desc">Traitement des transactions précédentes. Les derniers paiements peuvent ne pas être inclus..</p>
   <div className="summary">
       <div className="item">
           
       </div>
   </div> 
    </div>
</div>
  )
}

export default Featured