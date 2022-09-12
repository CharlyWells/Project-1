import React from 'react'
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
    <div style= {{backgroundColor:"#white"}}>
    <LoginForm />
    <Admin/>
    </div>
    </Router>
  )
}

export default App
