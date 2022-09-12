import React from 'react'
import './Admin.css'
import Logo  from "../images/Logo.png"



function Admin() {
    return (
        <div id='header'>
        <img src={Logo}  alt=""  className="img-2"/>
        <figcaption class='group-1'> DPMG1</figcaption>
      
    
      <section></section>
      
        <div class='day square'><h3>Total Clients</h3></div>
        
        
   
      
        <div class='day 1'><h3>New Registration</h3></div>
       
      
      <div class='row'>
        <div class='day 2'><h3>Appointments History</h3></div>
        <div class='task square'></div>
        <div class='task square'></div>
        <div class='task square'></div>
      </div>
      <div class='row secondary-background'>
        <div class='day 3'><h3>Physician Visit</h3></div>
        <div class='task square'></div>
        <div class='task square'></div>
        <div class='task square'></div>
      </div>
      </div>
    




  

     
    )
}

export default Admin;

