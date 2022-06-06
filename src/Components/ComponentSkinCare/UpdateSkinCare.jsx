import React, { Component } from 'react';
import SkinCareService from '../../Services/SkinCareService';
import HeaderComponent from '../../Components/HeaderComponent';
import SideBar from '../../Components/SideBar';

class UpdateSkinCare extends Component {
    constructor(props){
        super(props)
        this.state = {
           id: this.props.match.params.id,
           nomProduit:'',
           description:'',
           prix:'',
           quantite:'',
           image:'',
           baseImage:'',

        }
        this.changeNomProduitHandler = this.changeNomProduitHandler.bind(this);
        this.changedDescriptionHandler = this.changedDescriptionHandler.bind(this);
        this.changePrixHandler = this.changePrixHandler.bind(this);
        this.changeQuantiteHandler = this.changeQuantiteHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.updateSkinCare = this.updateSkinCare.bind(this);

    }
    componentDidMount(){
        SkinCareService.getSkinCareById(this.state.id).then( (res) =>{
            let skinCare = res.data;
            this.setState({nomProduit: skinCare.nomProduit,
                description: skinCare.description,
                prix: skinCare.prix,
                quantite: skinCare.quantite,
                image: skinCare.image
             });
        })
    }

  


 updateSkinCare = (e) => {
        e.preventDefault(); 
        let baseImage = {baseImage:this.state.baseImage };
        let base64Image = this.state.baseImage;
        var image =  base64Image.split(",")
      if (base64Image == !baseImage) 
      {
       
        console.log(" est nulle!"); 
       
          let skinCare = {nomProduit: this.state.nomProduit,description: this.state.description,prix: this.state.prix, quantite: this.state.quantite,image: this.state.image };
        console.log('skinCare => ' + JSON.stringify(skinCare));
        SkinCareService.updateSkinCare(skinCare, this.state.id).then( res => {
            this.props.history.push('/skinCare');
        });
    }
        else 
       
        {
            console.log(" il ya une image!"); 
                console.log("***", baseImage);
                SkinCareService.uploadImage(image[1]).then(res => {
                // this.props.history.push('/image');
                console.log("**", res);
                let uplaodedImage = res.data;

              let skinCare = {nomProduit: this.state.nomProduit,description: this.state.description,prix: this.state.prix, quantite: this.state.quantite, image: uplaodedImage};
              SkinCareService.updateSkinCare(skinCare, this.state.id).then( res => {
                  this.props.history.push('/skinCare');
              });
            });
        }

    }

    changeNomProduitHandler=(event) => {
        this.setState({nomProduit: event.target.value})
    }
    changedDescriptionHandler=(event) => {
        this.setState({description: event.target.value})
    }
    changePrixHandler=(event) => {
        this.setState({prix: event.target.value})
    }
    changeQuantiteHandler=(event) => {
        this.setState({quantite: event.target.value})
    }
    changeImageHandler=(event) => {
        this.setState({image: event.target.value})
    }
    cancel(){
        this.props.history.push('/skinCare');
    }
    render() {


        const uploadImage = async (e) => {
            /*console.log(e.target.files);*/
            const file=e.target.files[0];
            const base64=await convertBase64(file);
            console.log(base64);
            this.setState({baseImage: base64 });
        } ;
        const convertBase64=(file)=>{
            return new Promise((resolve,reject)=> {
                const fileReader= new FileReader();
                fileReader.readAsDataURL(file);
    
    
                fileReader.onload = ()=>{
                   resolve(fileReader.result);
                };
    
                fileReader.onerror = (error)=> {
                   reject(error);
                };
            });
        };
 
        return (
            <div className="pere">
            <div className="gauche">
                   <SideBar/>
            </div>
            <div className="droit">
                   <HeaderComponent/>
                   <div className="container">
                   <div className ="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3" style= {{ marginTop: "20px" }} >
                        <h3 className="text-center">Modifier Soin de la peau </h3>
                        <div className = "card-body">
                            <form>
                                <div className="form-group">
                                    <label>Nom Produit</label>
                                    <input placeholder="Nom Produit" name="nomProduit" 
                                    className="form-control" value={this.state.nomProduit} onChange={this.changeNomProduitHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input placeholder="Description" name="description" 
                                    className="form-control" value={this.state.description} onChange={this.changedDescriptionHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Quantite</label>
                                    <input placeholder="Quantite" name="quantite"
                                    className="form-control" value={this.state.quantite} onChange={this.changeQuantiteHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Prix</label>
                                    <input placeholder="Prix" name="prix" 
                                    className="form-control" value={this.state.prix} onChange={this.changePrixHandler}/>
                                </div>
                               
                                <div className="form-group">
                                    <input type="file" onChange={(e) => {
                                        uploadImage(e);
                                    }} />
                                    <br></br>
                                    <img src={this.state.image} alt="" style= {{  maxWidth: "100px ",height: "100px" }}/>
                                      
                             </div>
                             { /**   <div className="form-group">
                                    <img src={this.state.image}/>
                                </div>*/}
                              

                                <button className="button button1" onClick={this.updateSkinCare} >Enregistrer</button>
                                <button className="button button1" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>

                            </form>
                        </div>

                    </div>

                </div>
       
                   </div>
          </div>
        </div>
        );
    }
}

export default UpdateSkinCare;