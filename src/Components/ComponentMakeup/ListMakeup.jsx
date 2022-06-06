import React, { Component } from 'react';
import '../../assets/css/update.css';
import MakeupService from '../../Services/MakeupService';
import HeaderComponent from '../../Components/HeaderComponent';
import SideBar from '../../Components/SideBar';

class ListMakeup extends Component {
  constructor(props){
    super(props)
    this.state = {
        makeup: []
    }
  this.addMakeup = this.addMakeup.bind(this);
  this.editMakeup = this.editMakeup.bind(this);
  this.deleteMakeup = this.deleteMakeup.bind(this);

}

deleteMakeup(id){
  MakeupService.deleteMakeup(id).then( res => {
     this.setState({makeup: this.state.makeup.filter(makeup => makeup.id !== id)});
    });
}
editMakeup(id){
    this.props.history.push(`/update-makeup/${id}`);
 }
componentDidMount(){
  MakeupService.getMakeup().then((res) =>{
        this.setState({ makeup: res.data});
    });
}

viewMakeup(id){
    this.props.history.push(`/view-makeup/${id}`);  
}



addMakeup(){
    this.props.history.push('/add-makeup');
}
    render() {
        return (
          <div className="pere">
          <div className="gauche">
                 <SideBar/>
          </div>
          <div className="droit">
                 <HeaderComponent/>
                 <div className="container">
                 <h2 className="test" style= {{  marginTop:"20px"}} > </h2>

<div >
   <button className="button" onClick={this.addMakeup} >
   <i class="fas fa-plus"></i> Ajouter
       </button>
</div>

<div className = "row">
<table className = "table table-striped table-bordered" style= {{ width : "90%", margin:"auto" ,   borderCollapse: "collapse" }}>   
      <thead>
            <tr>
                  <th>Img </th>
                  <th>Nom Produit </th>
                  <th>Description</th>
                  <th>Prix </th>
                  <th>Qté </th>
                  <th>Action </th>
            </tr>
      </thead>
        <tbody>
            {this.state.makeup.map(
                  makeup =>
                    <tr key={makeup.id}>
                        <td> <img src={makeup.image} alt="" style= {{ margin: "6px", width: "80px ",height: "80px" ,borderRadius: "8px"}}></img></td>
                        <td>{makeup.nomProduit}</td>
                        <td>{makeup.description}</td>
                        <td>{makeup.prix}</td>
                        <td>{makeup.quantite}</td>
                      
                        <td>
                            <button className="bn bn1" onClick= { () => this.editMakeup(makeup.id)} style= {{  }} >  
                            Modifier 
                               {/* <i className="fas fa-edit"></i>  <i class="fas fa-redo"></i> */}
                              </button>
                            
                            <button className="bn bn1" style= {{}} onClick= { () => this.viewMakeup(makeup.id)}> 
                            Details
                                {/*<i className="fas fa-copy"></i> <i class="fas fa-ellipsis-v"></i>   */}
                              </button>

                            <button className="bn bn1" style= {{}} onClick= { () => this.deleteMakeup(makeup.id)}> 
                             {/* <i class="fas fa-ban"></i>  */}
                             <i className="fas fa-archive"> </i>
                              </button>
                           
                        </td>
                    </tr>
                )
            }
        </tbody>

    </table>
     </div>
     
                 </div>
        </div>
    
    
       
        </div>
        );
    }
}

export default ListMakeup;