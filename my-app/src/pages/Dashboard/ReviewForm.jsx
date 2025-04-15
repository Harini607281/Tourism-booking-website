import { useState } from "react";
import "./ReviewForm.scss";
import axios from "axios";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    destination: "",
    writereview: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:5002/addreview",formData,{
      headers:{
          "x-token":localStorage.getItem("token"),
          "Content-Type":"application/json"
      }
    })
    .then((res)=>{
        setFormData({
          name: "",
          email: "",
          mobile: "",
          destination: "",
          writereview: "",
        });
        alert("Review Added Succesfully");

    })
    .catch((err)=>{
      console.log("error",err);
      alert("error occured");
    })
    
  };

  return (
    <div className="review-form-container">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="mobile" placeholder="Your Mobile Number" value={formData.mobile} onChange={handleChange} required />
        <input type="text" name="destination" placeholder="Your Destination" value={formData.destination} onChange={handleChange} required />
        <textarea name="writereview" placeholder="Write your review..." value={formData.writereview} onChange={handleChange} required />
        <button type="submit" className="submit-btn">Submit</button>
        {submitted && <p className="success-message">Thank you for your review! 🌍✨</p>}
      </form>
    </div>
  );
};

export default ReviewForm;
