import {useState} from 'react'
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Admin from './components/Admin';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

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
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={openSidebar}/>
    
        <h1>React Dashboard</h1>
    </div>
    
    
    
    
       
    
      
    </div>
    
    </Router>
  )
}

export default App;
