import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./Reviews.scss";
import axios from "axios";
const Reviews = () => {
    const [data, setData] = useState([]); 
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsLoggedIn(false);
        return;
      }
  
   
      axios
        .get('http://localhost:5002/allreviews', {
          headers: {
            'x-token': token,
          },
        })
        .then((res) => {
          setData(res.data); 
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching reviews:', err);
          if (err.response?.status === 401) {
            localStorage.removeItem('token'); 
            setIsLoggedIn(false);
          }
          setLoading(false); 
        });
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    };
  
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  return (
    <div className="reviews-container">
       <div className='dashbo'>
    <div className='top'>
    <div className='logo'>
        Globtrat
      </div>
      <div className='bt'>
        <button className='expl'>explore</button>
        <button className='siou' onClick={handleLogout}>signout</button>
      </div>
    </div>
    </div>
    <br/>
     <div>
      <h2>Traveler Reviews</h2>
      <div className="reviews-list">
        {data.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <p className="destination">Visited: {review.destination}</p>
            <p className="review-text">"{review.writereview}"</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Reviews;
