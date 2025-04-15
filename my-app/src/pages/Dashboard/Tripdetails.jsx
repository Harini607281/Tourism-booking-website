import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import './Tripdetails.scss'
import ReviewForm from "./ReviewForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const cities = [
  {name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", description: "Paris, the capital of France, is one of the most iconic and beautiful cities in the world. Known as the City of Light(La Ville Lumière), it is famous for its rich history, stunning architecture, world-class museums, and vibrant culture.",price:"300000",originalPrice:"250000"},
    { name: "New York", image: "https://plus.unsplash.com/premium_photo-1697730150275-dba1cfe8af9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV3JTIwWW9yayUyMENpdHklMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D", description: "New York City (NYC) is one of the most dynamic and influential cities in the world. Known as The Big Apple, it is a global center for finance, culture, entertainment, and technology. Located in the state of New York, NYC is famous for its iconic skyline, diverse population, and fast-paced lifestyle",price:"500000",originalPrice:"450000"},
    { name: "Tokyo", image: "https://media.istockphoto.com/id/1131743616/photo/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan.webp?a=1&b=1&s=612x612&w=0&k=20&c=M4BnBxDnlp1EQGHutJR9AAUI_7O9nwCvXKpuUmqrUdQ=", description: "Tokyo is a dynamic metropolis where ancient traditions meet cutting-edge technology. From historic temples like Senso-ji to the neon-lit streets of Akihabara and Shibuya, the city offers a unique mix of past and future. With world-class cuisine, efficient public transport, and vibrant pop culture, Tokyo is a global hub of innovation and entertainment.",price:"300000",originalPrice:"250000"},
    { name: "London", image: "https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D", description: "London is a historic yet modern city, home to iconic landmarks like Big Ben, Buckingham Palace, and the Tower of London. It is a cultural melting pot with world-class museums, theaters in the West End, and a diverse food scene. As a global financial and fashion center, London blends tradition with contemporary urban life.",price:"400000",originalPrice:"350000"},
    { name: "Sydney", image: "https://images.unsplash.com/photo-1549180030-48bf079fb38a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3lkbmV5fGVufDB8fDB8fHww", description: "Sydney is known for its breathtaking harbor, stunning beaches, and outdoor lifestyle. The city’s landmarks, such as the Sydney Opera House and Harbour Bridge, attract millions of visitors each year. With a mix of modern skyscrapers, coastal walks, and a vibrant arts scene, Sydney is one of the most livable cities in the world.",price:"300000",originalPrice:"250000"},
    { name: "Dubai", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D", description: "Dubai is a futuristic city that has transformed from a desert outpost into a global business and tourism hub. Known for its skyscrapers, including the world’s tallest building, Burj Khalifa, it offers luxury shopping, thrilling desert safaris, and extravagant experiences. With a blend of Middle Eastern traditions and modern innovation, Dubai is a city of ambition and opulence.",price:"300000",originalPrice:"250000"},
    { name: "Rome", image: "https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Rome, the Eternal Cityis a living museum filled with ancient ruins, Renaissance art, and vibrant street life. Landmarks like the Colosseum, Vatican City, and Trevi Fountain showcase its rich history and architectural brilliance. With delicious Italian cuisine and a romantic atmosphere, Rome remains a top destination for travelers worldwide.",price:"400000",originalPrice:"360000"},
    { name: "Istanbul", image:"https://images.pexels.com/photos/18425281/pexels-photo-18425281/free-photo-of-galata-tower.jpeg?auto=compress&cs=tinysrgb&w=600", description:"Istanbul is a city that bridges Europe and Asia, offering a unique blend of cultures, architecture, and traditions. Famous for its historic sites like the Hagia Sophia, Blue Mosque, and Grand Bazaar, it is a place where the past and present coexist. With rich Ottoman heritage, flavorful cuisine, and breathtaking views over the Bosphorus, Istanbul is truly enchanting.",price:"300000",originalPrice:"250000" },
    { name: "Barcelona", image: "https://images.pexels.com/photos/705423/pexels-photo-705423.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Barcelona is a vibrant Mediterranean city known for its stunning architecture, lively beaches, and energetic street life. Antoni Gaudí’s masterpieces, such as Sagrada Familia and Park Güell, give the city a unique artistic charm. With a strong Catalan identity, delicious cuisine, and a passionate football culture, Barcelona is both historic and modern.",price:"500000",originalPrice:"450000"},
    { name: "Hong Kong", image: "https://images.pexels.com/photos/792832/pexels-photo-792832.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Hong Kong is a high-energy city famous for its stunning skyline, bustling markets, and world-class shopping. As a fusion of Chinese and Western influences, it offers a unique mix of traditions, from temples and street food stalls to luxury malls and financial hubs. Whether exploring Victoria Peak, Disneyland, or the city’s vibrant nightlife, Hong Kong never fails to impress.",price:"300000",originalPrice:"250000"}
  ];



const CityDetails = () => {
  const { name } = useParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("trip");
  const cityName = location.state?.cityName;
  const city = cities.find((c) => c.name === cityName);
  const navigate=useNavigate();
  const bookfof=function(){
    navigate('/bookform');
  }
  const signout=function(){
    localStorage.removeItem("token");
    navigate('/login')
  }

  if (!city) {
    return <h2>City not found!</h2>;
  }

 

  return (
    <div className="city-details">
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
    <div className="nextaf">
     
      <div className="maim">
      <img src={city.image}/>
      <br/>
      </div>
      <div className="str">
        <div className="cns">
          {city.name}..
        </div>
       <div className="st">Start Your Beautiful,</div>
       <div className="jn">Journey|</div>
       <div className="fh">from here.</div>
      </div>
      <br/>
      <div className="afim">
      <div className="mainme">
      <div className="menu">
        <button className={activeTab === "trip" ? "active" : ""} onClick={() => setActiveTab("trip")}>
          Trip Details
        </button>
        <button className={activeTab === "guide" ? "active" : ""} onClick={() => setActiveTab("guide")}>
          Guide Details
        </button>
        <button className={activeTab === "cost" ? "active" : ""} onClick={() => setActiveTab("cost")}>
          Cost
        </button>
        <button className={activeTab === "book" ? "active" : ""} onClick={() => setActiveTab("book")}>
          Book
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "trip" && <div><h2>{city.name}</h2>
        <h3>Trip Details:</h3><p>Discover the Beauty and Culture Embark on an unforgettable journey to explore breathtaking landscapes, rich history, and vibrant cultures. Whether you’re strolling through charming city streets, visiting iconic landmarks, or indulging in the local cuisine, every moment promises a unique and immersive experience. From ancient wonders to modern marvels, each destination offers a blend of tradition and contemporary charm, making it a perfect getaway for travelers of all kinds. A Seamless and Comfortable Travel ExperienceEnjoy a hassle-free trip with well-planned itineraries, comfortable accommodations, and expert guides to ensure you make the most of your journey. Whether you seek adventure, relaxation, or cultural enrichment, this trip caters to all your travel desires. With guided tours, leisure time, and exclusive experiences, you’ll create lasting memories while enjoying the beauty and excitement of your destination. Get ready for a perfect mix of exploration, comfort, and unforgettable moments!"</p></div>}
        {activeTab === "guide" && <div><h2>Guide Details</h2><p>Our professional and knowledgeable guides are passionate about bringing each destination to life. With years of experience and deep insights into the history, culture, and hidden gems of the region, they ensure an enriching journey tailored to your interests. Whether it’s a walking tour through historic streets, an adventure into nature, or a deep dive into local traditions, our guides make sure you experience the destination like never before.Enjoy a seamless travel experience with guides who take care of every detail, from navigating local transportation to recommending the best restaurants and attractions. Whether you're exploring ancient landmarks, indulging in authentic cuisine, or discovering off-the-beaten-path locations, our guides enhance every moment of your journey. With expert tips, engaging storytelling, and insider knowledge, they make your trip not just a vacation but a truly unforgettable adventure!</p></div>}
        {activeTab === "cost" && (
          <div className="cs">
            <h2>Trip Cost</h2>
           <p>
           Our travel packages are designed to offer the perfect balance of affordability and luxury. The total cost covers essential aspects of your trip, including flights, accommodations, guided tours, meals, and local transportation. Depending on your preferences, we offer budget-friendly, standard, and premium packages to suit every traveler’s needs. Whether you’re looking for a luxurious retreat or an adventure on a budget, we have flexible options to make your trip stress-free and enjoyable.
           </p>
           <ul>
           <li>✅<b>Accommodation Stay:</b>in comfortable hotels, resorts, or local homestays.</li>
         <li>  ✅ <b>Flights & Transfers:</b>Round-trip airfare and seamless transportation.</li>
         <li>✅ <b>Guided Tours:</b>Explore must-visit attractions with expert local guides.
         </li>
          <li>✅ <b>Meals:</b>Enjoy authentic local cuisine (breakfast, lunch, and dinner options).</li> 
           <li>✅ <b>Entry Fees:</b> Admission to popular landmarks, museums, and attractions.</li>
           <li>✅ <b>24/7 Support :</b>Assistance throughout your journey for a hassle-free experience.</li>
           </ul>
           <h3>The Estamated Cost</h3>
           <div>
           <strong>Price:</strong> ₹{city.price}{" "}
            {city.originalPrice && <span className="original-price">₹{city.originalPrice}</span>}
          </div>
          </div>
        )}
        {activeTab === "book" && (
          <div>
            <h2>Book Your Trip</h2>
            <p>Your next adventure awaits! Secure your spot now and experience an unforgettable journey filled with exploration, culture, and relaxation. Whether you're looking for a romantic getaway, an adventure-packed holiday, or a family vacation, we have the perfect package for you.</p>
            <p>{city.bookingInfo}</p>
            <button className="book-now" onClick={bookfof}>Book Now</button>
          </div>
        )}
      </div>
    </div>
    <ReviewForm/>
    </div>
    <br/>
    <hr/>
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
    </div>
    </div>
  );
};

export default CityDetails;
