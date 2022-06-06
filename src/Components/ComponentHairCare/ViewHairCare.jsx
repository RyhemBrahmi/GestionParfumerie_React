import React, { Component } from 'react';
import HairCareService from '../../Services/HairCareService'
import HeaderComponent from '../../Components/HeaderComponent';
import SideBar from '../../Components/SideBar';

class ViewHairCare extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            hairCare:{}
        }
    }
    componentDidMount(){
        HairCareService.getHairCareById(this.state.id).then( res => {
         this.setState({hairCare: res.data});
     })
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
                   <div className = "card col-md-6 offset-md-3" style= {{ marginTop: "20px" }} >
                <h1 className="text-center">
                {this.state.hairCare.nomProduit}
                </h1>
                <div className="card-body">
                <div className="row">
                        <div className="form-group">
                                    <img src={this.state.hairCare.image} style= {{  width: "100%",height: "200px" }}/>
                                </div>
                    </div>
                    <div className="row">
                        <h5>Description :</h5>
                         <div>
                             {this.state.hairCare.description}
                         </div>
                    </div>
                    <div className="row">
                    <h5>Prix :</h5> 
                         <div>
                             {this.state.hairCare.prix} DT
                         </div>
                    </div>
                    <div className="row">
                    <h5>Quantite :</h5> 
                         <div>
                             {this.state.hairCare.quantite} DT
                         </div>
                    </div>

                </div>

            </div>
       
                   </div>
          </div>
        </div>
        );
    }
}

export default ViewHairCare;