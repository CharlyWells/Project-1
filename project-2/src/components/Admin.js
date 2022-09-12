import React from 'react'
import './Admin.css'
import Logo  from "../images/Logo.png"



function Admin() {
    return (
        <div id='header'>
        <img src={Logo}  alt=""  className="img-2"/>
        <figcaption class='group-1'> DPMG1</figcaption>
      
    
        <div class='row'>
        <div class='day square'><h3>Total Clients</h3></div>
        
      </div>
      
        <section class='day square'>
            <h3>New Registration</h3>
        </section>

        
      <div class='row'>
        <div class='day square'><h3>Appointments History</h3></div>
        
      </div>
      <div class='row secondary-background'>
        <div class='day square'><h3>Physician Visit</h3></div>
        
      </div>
      <div class='row'>
        <div class='day square'><h3>View Patients Seen Today</h3></div>
       
      </div>
      </div>
      




  

     
    )
}

export default Admin;

