import React,{Fragment} from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";

import Client_Dashbord from './components/Dashbords/Client_Dashbord';
import Login from "./components/Authtication/Login";
import Register from "./components/Authtication/Register";
import Landing from "./components/Landing/Landing"
function App() {
  return (
    <Fragment>
    {
 
     <Router>
        <Switch>
          <Route exact path="/" component={Landing}  />
          <Route exact path="/signup" component={Register}  />
        </Switch>
      </Router>
      }
       
    </Fragment>
  );
}

export default App;
