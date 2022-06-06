import React, { Component } from 'react';
import BeautyHairService from '../../Services/BeautyHairService'
import '../../assets/css/update.css';
import HeaderComponent from '../../Components/HeaderComponent';
import SideBar from '../../Components/SideBar';

class ListBeautyHair extends Component {
    constructor(props){
        super(props)
        this.state = {
           beautyHair: []
        }
      this.addBeautyHair = this.addBeautyHair.bind(this);
      this.editBeautyHair = this.editBeautyHair.bind(this);
      this.deleteBeautyHair = this.deleteBeautyHair.bind(this);
    
    }
    
    deleteBeautyHair(id){
        BeautyHairService.deleteBeautyHair(id).then( res => {
         this.setState({beautyHair: this.state.makeup.filter(beautyHair => beautyHair.id !== id)});
        });
    }
    editBeautyHair(id){
        this.props.history.push(`/update-beautyHair/${id}`);
     }
    componentDidMount(){
        BeautyHairService.getBeautyHair().then((res) =>{
            this.setState({ beautyHair: res.data});
        });
    }
    
    viewBeautyHair(id){
        this.props.history.push(`/view-beautyHair/${id}`);  
    }
    
    
    
    addBeautyHair(){
        this.props.history.push('/add-beautyHair');
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
     <button className="button" onClick={this.addBeautyHair} >
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
              {this.state.beautyHair.map(
                    beautyHair =>
                      <tr key={beautyHair.id}>
                          <td> <img src={beautyHair.image} alt="" style= {{ margin: "6px", width: "80px ",height: "80px" ,borderRadius: "8px"}}></img></td>
                          <td>{beautyHair.nomProduit}</td>
                          <td>{beautyHair.description}</td>
                          <td>{beautyHair.prix}</td>
                          <td>{beautyHair.quantite}</td>
                        
                          <td>
                              <button className="bn bn1" onClick= { () => this.editBeautyHair(beautyHair.id)} style= {{  }} >  
                              Modifier 
                               {/* <i className="fas fa-edit"></i>  <i class="fas fa-redo"></i> */}
                              </button>
                              
                              <button className="bn bn1" style= {{}} onClick= { () => this.viewBeautyHair(beautyHair.id)}> 
                              Details
                                {/*<i className="fas fa-copy"></i> <i class="fas fa-ellipsis-v"></i>   */}
                              </button>

                              <button className="bn bn1" style= {{}} onClick= { () => this.deleteBeautyHair(beautyHair.id)}> 
                               {
                               /*  <i class="fas fa-ban"></i> */}
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

export default ListBeautyHair;