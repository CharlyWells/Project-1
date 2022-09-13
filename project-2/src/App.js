import {useState} from 'react'
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Admin from './components/Admin';
import Navbar from './components/Navbar';

const App = () => {

     const[sidebarOpen, setSidebarOpen] = useState(false);

     const openSidebar = () => {
      setSidebarOpen(true);
     }

     const closeSidebar = () => {
        setSidebarOpen(false);
     }

  return (
    <Router>
    <div style= {{backgroundColor:"#white"}}>

    <LoginForm />
    <Admin/>
    <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
    
    
       
    <div class="container">
        <h1>React Dashboard</h1>
    </div>
    
      
    </div>
    </Router>
  )
}

export default App
