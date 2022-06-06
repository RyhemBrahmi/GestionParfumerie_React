import React, { Component, useState } from 'react';
import ParfumsService from '../../Services/ParfumsService';
import '../../assets/css/update.css';
import HeaderComponent from '../../Components/HeaderComponent';
import SideBar from '../../Components/SideBar';

class CreateParfumsComponet extends Component {
    constructor(props){
        super(props)
        this.state = {
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
        this.saveParfums = this.saveParfums.bind(this);
        this.saveI = this.saveI.bind(this);

    }
    saveParfums = (e) => {
        e.preventDefault();
        let parfums = {nomProduit: this.state.nomProduit,description: this.state.description,prix: this.state.prix,image: this.state.image};
        console.log('parfums => ' + JSON.stringify(parfums));
        ParfumsService.createParfums(parfums).then(res => {
            this.props.history.push('/parfums');
        })
    }
    
    saveI = (e) => {
        e.preventDefault();
        let baseImage = {baseImage:this.state.baseImage };
        let base64Image = this.state.baseImage;

        var image =  base64Image.split(",");

        // console.log(image[0]); // First part of the base64 string
        // console.log(image[1]); // Second main pa

        ParfumsService.uploadImage(image[1]).then(res => {
            // this.props.history.push('/image');
            console.log("**", res);

            let uplaodedImage = res.data;

            // Create new parfum object
            let parfums = {nomProduit: this.state.nomProduit,description: this.state.description,prix: this.state.prix,image: uplaodedImage};
            console.log(parfums);
 
            ParfumsService.createParfums(parfums).then(res => {
                this.props.history.push('/parfums');
            })
 

            // console.log("hany nemchy");
        })
      
    }
    
    changeBase=(event) => {
        this.setState({baseImage: event.target.value})
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
        this.props.history.push('/parfums');
    }
   
    render() {
      

      /*  this.setState({baseImage: ""});*/
      /*const[baseImage, setBaseImage] = useState("");*/
        const uploadImage = async (e) => {
        /*console.log(e.target.files);*/
        const file=e.target.files[0];
        const base64=await convertBase64(file);
        //console.log(base64);
        this.setState({baseImage: base64 });
    };
    
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
                        <div className="card col-md-6 offset-md-3 offset-md-3" style= {{ marginTop: "15px" }} >
                            <h3 className="text-center">Ajouter parfums</h3>
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
                                        <label>Prix</label>
                                        <input placeholder="Prix" name="prix" 
                                        className="form-control" value={this.state.prix} onChange={this.changePrixHandler}/>
                                    </div>
                                    <div className="form-group">
                                    <label>Quantite</label>
                                    <input placeholder="Quantite" name="quantite" 
                                    className="form-control" value={this.state.quantite} onChange={this.changeQuantiteHandler}/>
                                </div>
                                    {/**<div className="form-group">
                                        <label>Image</label>
                                        <input placeholder="Image" name="image" 
                                        className="form-control" value={this.state.image} onChange={this.changeImageHandler}/>
                                    </div> */}
                                    <div className="form-group">
                                    <label>Image</label>
                                        <input type="file" onChange={(e) => {
                                            uploadImage(e);
                                        }} />
                                        <br></br>
                                        <img src={this.state.baseImage} alt ="" height= "80px" />
                                          
                                       {/*  <button className="btn btn-success" onClick={this.saveI} >uploadImage</button> */}
                                    </div>

                                    <button className="button button1" onClick={this.saveI} >Enregistrer</button>
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

export default CreateParfumsComponet;