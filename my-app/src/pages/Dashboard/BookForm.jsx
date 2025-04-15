import { useState } from "react";
import "./BookForm.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    destination: "",
    monthslot: "",
    days: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:5002/bookform",formData,{
      headers: {
          "x-token":localStorage.getItem("token"),
          "Content-Type": "application/json"
      }
  })
    .then((res)=>{
       setFormData({ fullname: "",
        email: "",
        mobile: "",
        destination: "",
        monthslot: "",
        days: "",})
        alert("Your Booking is Confirmed");
        alert("thank you");
        navigate('/')
    })
    .catch((err)=>{
      console.log("error occured",err);
      alert("sorry try again");
    })
  
  };
  
  return (
    <div className="booking-container">
      <div className="form-box">
        <h2>Book Your Trip</h2>

        {submitted ? (
          <p className="success-message">Thank you! Your trip has been booked.</p>
        ) : (
          <form onSubmit={handleSubmit}>
           
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

           
            <div className="input-group">
              <label>Mobile</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>

         
            <div className="input-group">
              <label>Destination</label>
              <input type="text" name="destination" value={formData.destination} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Month Slot</label>
              <input type="text" name="monthslot" value={formData.monthslot} onChange={handleChange} required />
            </div>


            <div className="input-group">
              <label>Days</label>
              <input type="text" name="days" value={formData.days} onChange={handleChange} required />
            </div>

           
            <button type="submit" className="submit-btn">Book Now</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
