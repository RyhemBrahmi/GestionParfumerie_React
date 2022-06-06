import React, { Component } from 'react';
import HairCareService from '../../Services/HairCareService'
import '../../assets/css/update.css';
import HeaderComponent from '../../Components/HeaderComponent';
import SideBar from '../../Components/SideBar';

class ListHairCare extends Component {
    constructor(props){
        super(props)
        this.state = {
            hairCare: []
        }
      this.addHairCare = this.addHairCare.bind(this);
      this.editHairCare = this.editHairCare.bind(this);
      this.deleteHairCare = this.deleteHairCare.bind(this);
    
    }
    
    deleteHairCare(id){
        HairCareService.deleteHairCare(id).then( res => {
         this.setState({hairCare: this.state.hairCare.filter(hairCare => hairCare.id !== id)});
        });
    }
    editHairCare(id){
        this.props.history.push(`/update-hairCare/${id}`);
     }
    componentDidMount(){
        HairCareService.getHairCare().then((res) =>{
            this.setState({ hairCare: res.data});
        });
    }
    
    viewHairCare(id){
        this.props.history.push(`/view-hairCare/${id}`);  
    }
    
    
    
    addHairCare(){
        this.props.history.push('/add-hairCare');
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
     <button className="button" onClick={this.addHairCare} >
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
              {this.state.hairCare.map(
                    hairCare =>
                      <tr key={hairCare.id}>
                          <td> <img src={hairCare.image} alt="" style= {{ margin: "6px", width: "80px ",height: "80px" ,borderRadius: "8px"}}></img></td>
                          <td>{hairCare.nomProduit}</td>
                          <td>{hairCare.description}</td>
                          <td>{hairCare.prix}</td>
                          <td>{hairCare.quantite}</td>
                        
                          <td>
                              <button className="bn bn1" onClick= { () => this.editHairCare(hairCare.id)} style= {{  }} >  
                              Modifier 
                               {/* <i className="fas fa-edit"></i>  <i class="fas fa-redo"></i> */}
                              </button>
                              
                              <button className="bn bn1" style= {{}} onClick= { () => this.viewHairCare(hairCare.id)}> 
                              Details
                                {/*<i className="fas fa-copy"></i> <i class="fas fa-ellipsis-v"></i>   */}
                              </button>

                              <button className="bn bn1" style= {{}} onClick= { () => this.deleteHairCare(hairCare.id)}> 
                              {/*   <i className="fas fa-ban"></i> */}
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

export default ListHairCare;