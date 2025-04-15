import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './login.scss'
import { Navigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
  const [auth, setAuth] = useState(false); 
  const[data,setData]=useState({
    email:"",
    password:""
  })
  const changehandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submithandler=(e)=>{
    e.preventDefault();
    axios
    .post("http://localhost:5002/login",data,)
    .then((res)=>{
      localStorage.setItem('token',res.data.token);
      setData({email:"",password:""});
      setAuth(true); 
      alert("user loged in sucessfully");
    })
    .catch((err)=>{
      console.log("login failed",err);
      alert("invalid password or email");
    })
  }
  if (auth) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <div className='login'>
       <div className="card">
        <div className="left">
          <h1>
            Hello <br />
            People.
          </h1>
          <p>
            Welcome Here! To explore the world, share your experience, and discover a world of
            exciting places.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={submithandler}>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={data.email}
              onChange={changehandler}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={changehandler}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
