import React, { Component } from 'react';
import ParfumsService from '../../Services/ParfumsService';
import '../../assets/css/update.css';
import HeaderComponent from '../../Components/HeaderComponent';
import SideBar from '../../Components/SideBar';
//import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, TablePagination, Paper } from '@material-ui/core';

class ListParfurmsComponet extends Component {
    constructor(props){
        super(props)
        this.state = {
            parfums: []
        }
      this.addParfums = this.addParfums.bind(this);
      this.editParfums = this.editParfums.bind(this);
      this.deleteParfums = this.deleteParfums.bind(this);

    }
    
    deleteParfums(id){
        ParfumsService.deleteParfums(id).then( res => {
         this.setState({parfums: this.state.parfums.filter(parfums => parfums.id !== id)});
        });
    }
    editParfums(id){
        this.props.history.push(`/update-parfums/${id}`);
     }
    componentDidMount(){
        ParfumsService.getParfums().then((res) =>{
            this.setState({ parfums: res.data});
        });
    }

    viewParfums(id){
        this.props.history.push(`/view-parfums/${id}`);  
    }
  
    
    
    addParfums(){
        this.props.history.push('/add-parfums');
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
               <button className="button" onClick={this.addParfums} >
               <i className="fas fa-plus"></i> Ajouter
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
                        {
                            this.state.parfums.map(
                                parfums =>
                                <tr key = {parfums.id}>
                                    <td> <img src={parfums.image} alt ="" style= {{ margin: "6px", width: "80px ",height: "80px" ,borderRadius: "8px"}} /></td>
                                    <td>{parfums.nomProduit}</td>
                                    <td>{parfums.description}</td>
                                    <td>{parfums.prix}</td>
                                    <td>{parfums.quantite}</td>
                                    {/*  <td>{parfums.image}</td>*/}
                                    
                                  
                                    <td >
                                        <button className="bn bn1" onClick= { () => this.editParfums(parfums.id)} style= {{  }} >  
                                      Modifier 
                                         {/* <i className="fas fa-edit"></i>  <i class="fas fa-redo"></i> */}
                                        </button>
                                        
                                        <button className="bn bn1" style= {{}} onClick= { () => this.viewParfums(parfums.id)}> 
                                        Details
                                          {/*<i className="fas fa-copy"></i> <i class="fas fa-ellipsis-v"></i>   */}
                                        </button>

                                        <button className="bn bn1" style= {{}} onClick= { () => this.deleteParfums(parfums.id)}> 
                                        
                                     {/*  <i class="fas fa-ban"></i> */}
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

export default ListParfurmsComponet;