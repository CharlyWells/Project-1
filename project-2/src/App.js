import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import "./App.css";

function App() {
  
  const adminUser  = {
    name: "Admin143",
    email: "wellingtoncharlottenaaodarley@gmail.com",
    password: "admin12341234"
  }
   
  const doctor = {
   
    name: "newdoc",
    email: "",
    password: "doc12341234"
  }

  const nurse = {
    name: "newnurse",
    email: "",
    password: "nurse12341234"
  }



  const Patient = {
    username: "newuser",
    email: "",
    password: "patient12341234"
  }
 

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError]= useState("");

  const Login = details => {
      console.log(details);

      if(details.email == adminUser.email && details.password==adminUser.password){
      console.log("Logged in");
  } else{
    console.log("Details do not match!");
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div className ="App">
        {(user.email !== "") ? (
          <div className='welcome'>
            <h2>Welcome, <span>{user.name}</span></h2>
            <button>Logout</button>
          </div>
        ): (
          <LoginForm Login={Login} error={error}/>
        )}
    </div>
  )
}
}

export default App;

