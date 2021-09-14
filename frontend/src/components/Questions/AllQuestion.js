import React from 'react'
import Question1 from './Question1'

import Question2 from './Question2'
//import Navbar from '../Food/navbar/Navbar'
//import NewQuestion from './NewQuestion'
import AddProblem from './problemFeed/AddProblem'
import { ProblemContextProvider } from "./context/ProblemContext";
//import Rightbar from '../Technician/rightbar/Rightbar'
//import Sidebar from '../Technician/sidebar/Sidebar'
import Sidebar from './sidebar/Sidebar'
import Navbar from '../NoSearchNav/Navbar'
import "./styles.css";

export default function AllQuestion() {
    return (
        
            < ProblemContextProvider>
            <Navbar/>
            <div className="homeContainer">
                <div className="part1">
                <Sidebar/>
                </div>
                <div className="part2">
            
            <h1>Startup Door - FAQ</h1>
            <h2>Do you need a service? - Customer</h2>
            <Question1/>
            <h2>Are you a service provider? - Service Provider</h2>
            <Question2/>
          
            </div>
            <div className="part3">
                <AddProblem/>
            </div>
            </div>
           
           
            </ProblemContextProvider>
            
            
        
    )
}
