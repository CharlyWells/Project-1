import React from 'react'
import doctors-removebg-preview.png from '../public/doctors-removebg-preview';

function LoginForm() {
    return (
        <form>
        <section className='section-1'>
        <h2>Sign-In</h2>
        <p>Access the DPMG1 panel using your username and passcode</p>
        </section>

        <div className='form-group'>
               <label for='name'>Username</label><br/>
               <input type="text" name="name" id="name" required/>
        </div>

        <div className='form-group'>
            <label for='password'>Passcode </label><br/>
            <input type="password" name="password" id="password" required/>
        </div>
    
       <div className='form-group-1'>
        <br/>
       <input type="submit"  value="Submit"/>
       </div>

        <section className='section-2'>
            <img/>
            <p className='paragraph-1'>Seamlessly making your hospital processes easy whiles saving cost and optimizing productivity</p>
        </section>

        
            

        </form>
       
     
    )
}

export default LoginForm
