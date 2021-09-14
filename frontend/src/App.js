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

       <Router>
        <Switch>

          {/* <Route exact path="/">
            <ClientDash />
          </Route> */}

          <Route path="/client">
            <ClientDash />
          </Route>

          <Route path="/technician">
            <TechnicianDash />
          </Route>

          <Route path="/food">
            <FoodDash />
          </Route>

          <Route path="/plant">
            <PlantDash />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/Clientprofile">
            <ProfileClient />
          </Route>
          <Route path="/portfolio/client">
            <ClientPortfolioUpdate />
          </Route>

          <Route path="/search">
            <Search /> 
          </Route>

          {/* client search */}
          <Route path="/SearchTech">
            <ClientSearchTech /> 
          </Route>
          <Route path="/SearchFood">
            <ClientSearchFood /> 
          </Route>
          <Route path="/SearchPlant">
            <ClientSearchPlant /> 
          </Route>

          {/* requestjob */}
          <Route path="/requestJob/tech/:id">
            <RequestJobTech /> 
          </Route>
          <Route path="/requestPlant/plant/:id">
            <RequestJobPlant />  
          </Route>
          <Route path="/requestFood/food/:id">
            <RequestJobFood />  
          </Route>

          <Route path="/viewBid/:id">
            <BidClientView />
          </Route>
          <Route path="/bidTech/bid/:id">
            <BidTech /> 
          </Route>
          <Route path="/bidPlant/bid/:id">
            <BidPlant />
          </Route>  
          <Route path="/bidFood/bid/:id">
            <BidFood />
          </Route>

          {/* ongoinTech */}
          <Route path="/ongoingTech">
            <OngoingTech />
          </Route>
          <Route path="/ongoingPlant">
            <OngoingPlant />
          </Route>
          <Route path="/ongoingFood">
            <OngoingFood />
          </Route>

        </Switch>
      </Router>
       
    </Fragment>
  );
}

export default App;
