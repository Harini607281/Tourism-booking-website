import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './register.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const[data,setData]=useState({
    fullname:"",
    email:"",
    mobile:"",
    password:"",
    confirmpassword:""
  })
  const navigate=useNavigate();
  const changehandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const submithandler=(e)=>{
    e.preventDefault();
    axios
    .post("http://localhost:5002/register",data)
    .then((res)=>{
      setData({fullname:"",email:"",mobile:"",password:"",confirmpassword:""});
      alert("user registered succesfully");
      navigate('/login');
    
    })
    .catch((err)=>{
      console.log("error ocuured",err);
      alert("user not registered")
    })
  }
  return (
    <div className='register'>
     <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form onSubmit={submithandler}>
            <input type="text" placeholder="Full Name" name="fullname" value={data.fullname} onChange={changehandler}/>
            <input type="email" placeholder="Email" name="email"  value={data.email} onChange={changehandler} />
            <input type="text" placeholder="Phone Number" name="mobile" value={data.mobile} onChange={changehandler} />
            <input type="password" placeholder="Password" name="password"  value={data.password} onChange={changehandler}/>
            <input type="password" placeholder="Confirm Password" name="confirmpassword"  value={data.confirmpassword} onChange={changehandler}/>
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="right">
          <h1>We <br /> Connect.</h1>
          <p>
            Welcome Here! To explore new cities, share your experiece,
            and discover a world of exciting places.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login"><button>Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Register
