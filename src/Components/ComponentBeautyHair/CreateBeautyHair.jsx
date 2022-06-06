import React, { Component } from 'react';
import BeautyHairService from '../../Services/BeautyHairService'
import HeaderComponent from '../../Components/HeaderComponent';
import SideBar from '../../Components/SideBar';
       

class CreateBeautyHair extends Component {
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
        this.saveBeautyHair = this.saveBeautyHair.bind(this);
        this.saveI = this.saveI.bind(this);

    }
    saveBeautyHair = (e) => {
        e.preventDefault();
        let beautyHair = {nomProduit: this.state.nomProduit,description: this.state.description,prix: this.state.prix, quantite: this.state.quantite, image: this.state.image};
        console.log('beautyHair => ' + JSON.stringify(beautyHair));
        BeautyHairService.createBeautyHair(beautyHair).then(res => {
            this.props.history.push('/beautyHair');
        })
    }
    
    saveI = (e) => {
        e.preventDefault();
       // let baseImage = {baseImage:this.state.baseImage };
        let base64Image = this.state.baseImage;

        var image =  base64Image.split(",");

        // console.log(image[0]); // First part of the base64 string
        // console.log(image[1]); // Second main pa

        BeautyHairService.uploadImage(image[1]).then(res => {
            // this.props.history.push('/image');
            console.log("**", res);

            let uplaodedImage = res.data;

            // Create new parfum object
            let beautyHair = {nomProduit: this.state.nomProduit,description: this.state.description,prix: this.state.prix, quantite: this.state.quantite, image: uplaodedImage};
            console.log(beautyHair);
 
            BeautyHairService.createBeautyHair(beautyHair).then(res => {
                this.props.history.push('/beautyHair');
            })
 

           
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
        this.props.history.push('/beautyHair');
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
                        <h3 className="text-center">Ajouter Beauté & Cheveux </h3>
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
                        
                                <div className="form-group">
                                <label>Image</label>
                                    <input type="file" onChange={(e) => {
                                        uploadImage(e);
                                    }} />
                                    <br></br>
                                    <img src={this.state.baseImage} alt="" height="80px"/>
                                      
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

export default CreateBeautyHair;