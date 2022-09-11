import React from 'react'
import Me from  "../images/Me.png"
import Logo  from "../images/Logo.png"
import './LoginForm.css'



function LoginForm() {
    return (
        <form>

            
        

        <section className='section-1'>
        <img src={Logo}  alt=""  className="img-2"/>
        <figcaption class='group-1'> DPMG1</figcaption> 


        <section class='section-2'>
        <img src={Me}  alt=""  class="i-img"/>
            <p class='paragraph-1'>Seamlessly making your hospital processes easy whiles saving cost and optimizing productivity</p>
        </section>

        

        <h2 class="sign-1">Sign-In</h2>
        <p class="access-1">Access the DPMG1 panel using your username and passcode</p>
        </section>

        <div class='form-group'>
               <label for='name'>Username</label><br/>
               <input type="text" name="name" id="name" required/>
        </div>


        <div class='form-group'>
            <label for='password'>Passcode </label><br/>
            <input type="password" name="password" id="password" required/>
        </div>
    
       <div class='form-group-1'>
        <br/>
       <input type="submit"  value="Submit"/>
       </div>

       

        <footer id="about">
       <p>Posted by:Wellington Charlotte</p>
       <div class="copyright">
          &copy; 2022 Wellington Charlotte. All Rights Reserved
        </div>
     </footer>
            

        </form>
       
     
    )
}

export default LoginForm;
