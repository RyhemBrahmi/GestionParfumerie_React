import React, { Component } from 'react';
import SkinCareService from '../../Services/SkinCareService'
import '../../assets/css/update.css';
import HeaderComponent from '../../Components/HeaderComponent';
import SideBar from '../../Components/SideBar';

class ListSkinCare extends Component {
    constructor(props){
        super(props)
        this.state = {
            skinCare: []
        }
      this.addSkinCare = this.addSkinCare.bind(this);
      this.editSkinCare = this.editSkinCare.bind(this);
      this.deleteSkinCare = this.deleteSkinCare.bind(this);
    
    }
    
    deleteSkinCare(id){
      SkinCareService.deleteSkinCare(id).then( res => {
         this.setState({skinCare: this.state.skinCare.filter(skinCare => skinCare.id !== id)});
        });
    }
    editSkinCare(id){
        this.props.history.push(`/update-skinCare/${id}`);
     }
    componentDidMount(){
        SkinCareService.getSkinCare().then((res) =>{
            this.setState({ skinCare: res.data});
        });
    }
    
    viewSkinCare(id){
        this.props.history.push(`/view-skinCare/${id}`);  
    }
    
    
    
    addSkinCare(){
        this.props.history.push('/add-skinCare');
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
     <button className="button" onClick={this.addSkinCare} >
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
              {this.state.skinCare.map(
                    skinCare =>
                      <tr key={skinCare.id}>
                          <td> <img src={skinCare.image} alt="" style= {{ margin: "6px", width: "80px ",height: "80px" ,borderRadius: "8px"}}></img></td>
                          <td>{skinCare.nomProduit}</td>
                          <td>{skinCare.description}</td>
                          <td>{skinCare.prix}</td>
                          <td>{skinCare.quantite}</td>
                          
                        
                          <td>
                              <button className="bn bn1" onClick= { () => this.editSkinCare(skinCare.id)} style= {{  }} >  
                              Modifier 
                               {/* <i className="fas fa-edit"></i>  <i class="fas fa-redo"></i> */}
                              </button>
                              
                              <button className="bn bn1" style= {{}} onClick= { () => this.viewSkinCare(skinCare.id)}> 
                              Details
                                {/*<i className="fas fa-copy"></i> <i class="fas fa-ellipsis-v"></i>   */}
                              </button>

                              <button className="bn bn1" style= {{}} onClick= { () => this.deleteSkinCare(skinCare.id)}> 
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

export default ListSkinCare;