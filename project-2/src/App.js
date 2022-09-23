import {useState} from 'react'
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App = () => {

     
  return (
    <Router>
    <div style= {{backgroundColor:"#white"}}>

    <LoginForm />
    

    
    
    
      
    </div>
    </Router>
    
  )
}

export default App;
