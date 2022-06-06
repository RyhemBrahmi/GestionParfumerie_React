import React, { Component } from 'react';
import '../../assets/css/update.css';
import ParfumsHommeService from '../../Services/ParfumsHommeService';
import HeaderComponent from '../../Components/HeaderComponent';
import SideBar from '../../Components/SideBar';

class ListParfHomme extends Component {

  constructor(props){
    super(props)
    this.state = {
        parfumsHomme: []
    }
  this.addParfumsHomme = this.addParfumsHomme.bind(this);
  this.editParfumsHomme = this.editParfumsHomme.bind(this);
  this.deleteParfumsHomme = this.deleteParfumsHomme.bind(this);

}

deleteParfumsHomme(id){
  ParfumsHommeService.deleteParfumsHomme(id).then( res => {
     this.setState({parfumsHomme: this.state.parfumsHomme.filter(parfumsHomme => parfumsHomme.id !== id)});
    });
}
editParfumsHomme(id){
    this.props.history.push(`/update-parfumsHomme/${id}`);
 }
componentDidMount(){
  ParfumsHommeService.getParfumsHomme().then((res) =>{
        this.setState({ parfumsHomme: res.data});
    });
}

viewParfumsHomme(id){
    this.props.history.push(`/view-parfumsHomme/${id}`);  
}



addParfumsHomme(){
    this.props.history.push('/add-parfumsHomme');
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
     
      <h2 className="test" style= {{  marginTop:"20px"}} ></h2>

<div >
   <button className="button" onClick={this.addParfumsHomme} >
   <i className="fas fa-plus"></i> Ajouter
       </button>
</div>

<div className = "row">
<table className = "table table-striped table-bordered" style= {{ width : "90%", margin:"auto" ,   borderCollapse: "collapse" }}>   
      <thead>
                <th>Img </th>
                <th>Nom Produit </th>
                <th>Description</th>
                <th>Prix </th>
                <th>Qté </th>
                <th>Action </th>
      </thead>
        <tbody>
            {this.state.parfumsHomme.map(
                  parfumsHomme =>
                    <tr key={parfumsHomme.id}>
                        <td> <img src={parfumsHomme.image} alt="" style= {{ margin: "6px", width: "80px ",height: "80px" ,borderRadius: "8px"}}></img></td>
                        <td>{parfumsHomme.nomProduit}</td>
                        <td>{parfumsHomme.description}</td>
                        <td>{parfumsHomme.prix}</td>
                        <td>{parfumsHomme.quantite}</td>
                      
                        <td>
                            <button className="bn bn1" onClick= { () => this.editParfumsHomme(parfumsHomme.id)} style= {{  }} >  
                            Modifier 
                             {/* <i className="fas fa-edit"></i>  <i class="fas fa-redo"></i> */}
                            </button>
                            
                            <button className="bn bn1" style= {{}} onClick= { () => this.viewParfumsHomme(parfumsHomme.id)}> 
                            Details
                              {/*<i className="fas fa-copy"></i> <i class="fas fa-ellipsis-v"></i>   */}
                            </button>

                            <button className="bn bn1" style= {{}} onClick= { () => this.deleteParfumsHomme(parfumsHomme.id)}> 
                            {/* <i class="fas fa-ban"></i> */}
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

export default ListParfHomme;