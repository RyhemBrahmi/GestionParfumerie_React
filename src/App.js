
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListParfurmsComponet from './Components/ComponentsParfumFemme/ListParfurmsComponet';
import HeaderComponent from './Components/HeaderComponent';
import React from 'react';
import CreateParfumsComponet from './Components/ComponentsParfumFemme/CreateParfumsComponet';
import UpdateParfumsComponents from './Components/ComponentsParfumFemme/UpdateParfumsComponents';
import ViewParfumsComponent from './Components/ComponentsParfumFemme/ViewParfumsComponent';
import SideBar from './Components/SideBar';
import ListParfHomme from './Components/ComponentParfHomme/ListParfHomme';
import ListMakeup from './Components/ComponentMakeup/ListMakeup';
import CreateParfumsHomme from './Components/ComponentParfHomme/CreateParfumsHomme';
import ViewParfumsHomme from './Components/ComponentParfHomme/ViewParfumsHomme';
import UpdateParfumsHomme from './Components/ComponentParfHomme/UpdateParfumsHomme';
import CreateMakeup from './Components/ComponentMakeup/CreateMakeup';
import UpdateMakeup from './Components/ComponentMakeup/UpdateMakeup';
import ViewMakeup from './Components/ComponentMakeup/ViewMakeup';
import ListBeautyHair from './Components/ComponentBeautyHair/ListBeautyHair';
import CreateBeautyHair from './Components/ComponentBeautyHair/CreateBeautyHair';
import UpdateBeautyHair from './Components/ComponentBeautyHair/UpdateBeautyHair';
import ViewBeautyHair from './Components/ComponentBeautyHair/ViewBeautyHair';
import ListSkinCare from './Components/ComponentSkinCare/ListSkinCare';
import CreateSkinCare from './Components/ComponentSkinCare/CreateSkinCare';
import UpdateSkinCare from './Components/ComponentSkinCare/UpdateSkinCare';
import ViewSkinCare from './Components/ComponentSkinCare/ViewSkinCare';
import ListHairCare from './Components/ComponentHairCare/ListHairCare';
import CreateHairCare from './Components/ComponentHairCare/CreateHairCare';
import UpdateHairCare from './Components/ComponentHairCare/UpdateHairCare';
import ViewHairCare from './Components/ComponentHairCare/ViewHairCare';
import  Dashboard  from './Components/Dashboard';
import Login from './Components/Login/Login';
import Home from './Components/Home';


function App() {
  return (
   
    <div >
       <Router> 
                <Switch > 
                <Route path="/home" exact render={props => <Home {...props} />} />

                
                  <Route path="/" exact render={props => <Login {...props} />} />
                  <Route path="/dashboard" exact render={props => <Dashboard {...props} />} />

                {/**Router Parfums femme */}

                  <Route path="/parfums" render={props => <ListParfurmsComponet {...props} />} />
                  <Route path="/add-parfums" render={props => <CreateParfumsComponet {...props} />} />
                  <Route path="/update-parfums/:id" render={props => <UpdateParfumsComponents {...props} />} />
                  <Route path="/view-parfums/:id" render={props => <ViewParfumsComponent {...props} />} />


                {/**Router Parfums Homme */}
                <Route path="/parfumsHomme" render={props => <ListParfHomme {...props} />} />
                <Route path="/add-parfumsHomme" render={props => <CreateParfumsHomme {...props} />} />
                <Route path="/update-parfumsHomme/:id" render={props => <UpdateParfumsHomme {...props} />} />
                <Route path="/view-parfumsHomme/:id" render={props => <ViewParfumsHomme {...props} />} />


                {/**Router Makeup */}
                <Route path="/makeup" render={props => <ListMakeup {...props} />} />
                <Route path="/add-makeup" render={props => <CreateMakeup {...props} />} />
                <Route path="/update-makeup/:id" render={props => <UpdateMakeup {...props} />} />
                <Route path="/view-makeup/:id" render={props => <ViewMakeup {...props} />} />


                 {/**Router BeautyHair */}
                 <Route path="/beautyHair" render={props => <ListBeautyHair {...props} />} />
                <Route path="/add-beautyHair" render={props => <CreateBeautyHair {...props} />} />
                <Route path="/update-beautyHair/:id" render={props => <UpdateBeautyHair {...props} />} />
                <Route path="/view-beautyHair/:id" render={props => <ViewBeautyHair {...props} />} />

                {/**Router SkinCare */}
                <Route path="/skinCare" render={props => <ListSkinCare {...props} />} />
                <Route path="/add-skinCare" render={props => <CreateSkinCare {...props} />} />
                <Route path="/update-skinCare/:id" render={props => <UpdateSkinCare {...props} />} />
                <Route path="/view-skinCare/:id" render={props => <ViewSkinCare {...props} />} />

                {/**Router HairCare */}
                <Route path="/hairCare" render={props => <ListHairCare {...props} />} />
                <Route path="/add-hairCare" render={props => <CreateHairCare {...props} />} />
                <Route path="/update-hairCare/:id" render={props => <UpdateHairCare {...props} />} />
                <Route path="/view-hairCare/:id" render={props => <ViewHairCare {...props} />} />


                </Switch >
    </Router>
   
    </div>
   
   
  );
}

export default App;
