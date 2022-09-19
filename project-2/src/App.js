import {useState} from 'react'
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Admin from './components/Admin';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

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

    <div class="container">
        <h1>React Dashboard</h1>
    </div>
    
    
    <Navbar sidebarOpen={sidebarOpen} openSidebar={closeSidebar}/>
    
    
       
    
      
    </div>
    <Sidebar sidebarOpen={sidebarOpen} closeSidebar={openSidebar}/>
    </Router>
  )
}

export default App
