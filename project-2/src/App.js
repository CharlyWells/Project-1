import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import "./App.css";

function App() {
  /*
  const adminUser  = {
    email: "wellingtoncharlottenaaodarley@gmail.com",
    password: "admin12341234"
  }
   
  const doctor = {
    username: "newdoc",
    password: "doc12341234"
  }

  const nurse = {
    username: "newnurse",
    password: "nurse12341234"
  }



  const Patient = {
    username: "newuser",
    password: "patient12341234"
  }
  */

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError]= useState("");

  const Login = details => {
      console.log(details);
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
          <LoginForm />
        )}
    </div>
  )
}

export default App;

