import React from 'react'
import './Dashboard.scss';
import TravelList from "/home/harini/Documents/coursepdfs/project2/my-app/src/pages/Home/TravelList.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const curyear=new Date().getFullYear();
  const navigate=useNavigate();
  const signout=function(){
    localStorage.removeItem("token");
    navigate('/login');
  }
  return (
    <div className='db'>
    <div className='dashbo'>
    <div className='top'>
    <div className='logo'>
        Globtrat
      </div>
      <div className='bt'>
        <button className='expl'>explore</button>
        <Link to='/reviews'><button className='rev'>reviews</button></Link>
        <button className='siou' onClick={signout}>signout</button>
      </div>
    </div>
    </div>
    <div className='next'>
     <hr/>  
    <h1>
       Book Your Slot
    </h1>
    <div className='tci'>
     <TravelList/>
    </div>
    <br/><br/><br/><hr/>
    <div className='footer2'>
        <div className='footer21' >
        <div className='use'>
        useful Information
      </div >
          <div>Having Issues</div>
          <div>Contact Information</div>
          <div>Travel Safety</div>
          <div>Make a Plan</div>
          <div>About us</div>
        </div>
        <div className='footer21'>
        <div className='use'>
        trekking
      </div>
         <div>Trekking Details</div>
         <div>Acommodations</div>
        </div>
        <div className='footer21'>
        <div className='use'>
        Accomodation
      </div>
         <div>find Guides</div>
         <div>Health Issues
         </div>
         <div>Requirements</div>
        </div>
        <div className='footer21'>
        <div className='use'>
        Pay With Us
      </div>
          <div className='paym'>
          The payment is encrypted and <br/>transmitted securely <br/>with an SSL protocol.
          </div>
          <div>
            <img src="data:image/png;base64,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"/>
          </div>
          <div>
            Safety Pay
          </div>

        </div>
      </div>
      <div style={{"text-align":"center"}}>
        Copyright&copy; {curyear} Globetrot
      </div>
    </div>
    </div>
  )
}

export default Dashboard
