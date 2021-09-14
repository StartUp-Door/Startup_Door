import React,{Fragment} from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";

import Client_Dashbord from './components/Dashbords/Client_Dashbord';
import Login from "./components/Authtication/Login";
import Register from "./components/Authtication/Register";

import TechnicianDash from "./pages/Technician/TechnicianDash.js";
import FoodDash from "./pages/Food/FoodDash.js";
import PlantDash from "./pages/Plant/PlantDash.js";
import Profile from "./pages/Profile/Profile.js";
import ClientDash from './pages/Client/ClientDash.js' 
import Search from './pages/Client/Search'

import ProfileClient from './pages/ClientProfile/Profile'
import ClientPortfolioUpdate from './pages/ClientProfile/Client.UpdateProfile'

import ClientSearchTech from './pages/Client/clientSearchTech' 
import ClientSearchFood from './pages/Client/clientSearchFood' 
import ClientSearchPlant from './pages/Client/clientSearchPlant'

import RequestJobTech from './pages/Client/RequestJobTech'
import RequestJobPlant from './pages/Client/RequestJobPlant'
import RequestJobFood from './pages/Client/RequestJobFood'

import BidTech from './pages/Bid/BidTech.js'
import BidPlant from './pages/Bid/BidPlant'
import BidFood from './pages/Bid/BidFood'

import BidClientView from './pages/Bid/BidClientView'

import OngoingTech from './pages/Technician/Ongoing'
import OngoingPlant from './pages/Plant/Ongoing'  
import OngoingFood from './pages/Food/Ongoing' 

function App() {
  return (
    <Fragment>
    {/*}  <Router>
        <Switch>
          <Route path="/register" component={Register}  />
        </Switch>
      </Router>*/}
       {/*<Register />*/}
       <Login />
       
    </Fragment>
  );
}

export default App;
