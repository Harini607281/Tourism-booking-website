import { useState } from "react";
import "./CityCard.scss";
import { useNavigate } from "react-router-dom";

const CityCard = ({ city }) => {
  const navigate = useNavigate();
  const topage = () => {
    const token=localStorage.getItem("token");
    if(!token)
    {
      navigate('/login');
    }
    else
    {

    if (city.name === "Paris") {
      navigate(`/details/${city.name}`, { state: { cityName: city.name } });
    }
    else if(city.name === "New York")
    {
      navigate(`/details/${city.name}`, { state: { cityName: city.name } });
    }
    else if(city.name==="Tokyo")
    {
      navigate(`/details/${city.name}`,{state:{cityName:city.name}});
    }
    else if(city.name==="London")
      {
        navigate(`/details/${city.name}`,{state:{cityName:city.name}});
      }
      else if(city.name==="Sydney")
        {
          navigate(`/details/${city.name}`,{state:{cityName:city.name}});
        }
        else if(city.name==="Rome")
          {
            navigate(`/details/${city.name}`,{state:{cityName:city.name}});
          }
          else if(city.name==="Istanbul")
            {
              navigate(`/details/${city.name}`,{state:{cityName:city.name}});
            }
            else if(city.name==="Barcelona")
              {
                navigate(`/details/${city.name}`,{state:{cityName:city.name}});
              }
              else if(city.name==="Dubai")
                {
                  navigate(`/details/${city.name}`,{state:{cityName:city.name}});
                } 
                else if(city.name==="Hong Kong")
                  {
                    navigate(`/details/${city.name}`,{state:{cityName:city.name}});
                  }
             
  };
  }


  return (
    <div className="city-card" onClick={topage} style={{ cursor: "pointer" }}>
      <div className="image-container">
        <h2>{city.name}</h2>
        <img src={city.image} alt={city.name} className="city-image" />
        
        
        <div className="city-info">
          <h3 className="city-name">{city.name}</h3>
          <p className="city-description">{city.description}</p>
          <div className="pac">
            Package
          </div>
          <div className="a">{city.name=="Paris" && <div className="cou"><div>&#8377;250000</div><span><del>&#8377;300000</del></span></div>}</div>
          <div className="a">{city.name=="New York" && <div className="cou"><div>&#8377;300000</div><span><del>&#8377;400000</del></span></div>}</div>
          <div className="a">{city.name=="Tokyo" && <div className="cou"><div>&#8377;200000</div><span><del>&#8377;300000</del></span></div>}</div>
          <div className="a">{city.name=="London" && <div className="cou"><div>&#8377;25000</div><span><del>&#8377;300000</del></span></div>}</div>
          <div className="a">{city.name=="Sydney" && <div className="cou"><div>&#8377;300000</div><span><del>&#8377;400000</del></span></div>}</div>
          <div className="a">{city.name=="Dubai" && <div className="cou"><div>&#8377;250000</div><span><del>&#8377;300000</del></span></div>}</div>
          <div className="a">{city.name=="Rome" && <div className="cou"><div>&#8377;250000</div><span><del>&#8377;300000</del></span></div>}</div>
          <div className="a">{city.name=="Istanbul" && <div className="cou"><div>&#8377;300000</div><span><del>&#8377;400000</del></span></div>}</div>
          <div className="a">{city.name=="Barcelona" && <div className="cou"><div>&#8377;250000</div><span><del>&#8377;300000</del></span></div>}</div>
          <div className="a">{city.name=="Hong Kong" && <div className="cou"><div>&#8377;200000</div><span><del>&#8377;300000</del></span></div>}</div>
          <br/>
          <div className="md">click here to know more details.</div>
        </div>
        
      </div>
    </div>
  );
};

const TravelList = () => {
  const cities = [
  {name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", description: "Paris, the capital of France, is one of the most iconic and beautiful cities in the world. Known as the City of Light(La Ville Lumière), it is famous for its rich history, stunning architecture, world-class museums, and vibrant culture."},
    { name: "New York", image: "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D", description: "New York City (NYC) is one of the most dynamic and influential cities in the world. Known as The Big Apple, it is a global center for finance, culture, entertainment, and technology. Located in the state of New York, NYC is famous for its iconic skyline, diverse population, and fast-paced lifestyle"},
    { name: "Tokyo", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D", description: "Tokyo is a dynamic metropolis where ancient traditions meet cutting-edge technology. From historic temples like Senso-ji to the neon-lit streets of Akihabara and Shibuya, the city offers a unique mix of past and future. With world-class cuisine, efficient public transport, and vibrant pop culture, Tokyo is a global hub of innovation and entertainment.",},
    { name: "London", image: "https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D", description: "London is a historic yet modern city, home to iconic landmarks like Big Ben, Buckingham Palace, and the Tower of London. It is a cultural melting pot with world-class museums, theaters in the West End, and a diverse food scene. As a global financial and fashion center, London blends tradition with contemporary urban life.",},
    { name: "Sydney", image: "https://images.unsplash.com/photo-1549180030-48bf079fb38a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3lkbmV5fGVufDB8fDB8fHww", description: "Sydney is known for its breathtaking harbor, stunning beaches, and outdoor lifestyle. The city’s landmarks, such as the Sydney Opera House and Harbour Bridge, attract millions of visitors each year. With a mix of modern skyscrapers, coastal walks, and a vibrant arts scene, Sydney is one of the most livable cities in the world.",},
    { name: "Dubai", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D", description: "Dubai is a futuristic city that has transformed from a desert outpost into a global business and tourism hub. Known for its skyscrapers, including the world’s tallest building, Burj Khalifa, it offers luxury shopping, thrilling desert safaris, and extravagant experiences. With a blend of Middle Eastern traditions and modern innovation, Dubai is a city of ambition and opulence.",},
    { name: "Rome", image: "https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Rome, the Eternal Cityis a living museum filled with ancient ruins, Renaissance art, and vibrant street life. Landmarks like the Colosseum, Vatican City, and Trevi Fountain showcase its rich history and architectural brilliance. With delicious Italian cuisine and a romantic atmosphere, Rome remains a top destination for travelers worldwide.",},
    { name: "Istanbul", image:"https://images.pexels.com/photos/18425281/pexels-photo-18425281/free-photo-of-galata-tower.jpeg?auto=compress&cs=tinysrgb&w=600", description:"Istanbul is a city that bridges Europe and Asia, offering a unique blend of cultures, architecture, and traditions. Famous for its historic sites like the Hagia Sophia, Blue Mosque, and Grand Bazaar, it is a place where the past and present coexist. With rich Ottoman heritage, flavorful cuisine, and breathtaking views over the Bosphorus, Istanbul is truly enchanting.", },
    { name: "Barcelona", image: "https://images.pexels.com/photos/705423/pexels-photo-705423.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Barcelona is a vibrant Mediterranean city known for its stunning architecture, lively beaches, and energetic street life. Antoni Gaudí’s masterpieces, such as Sagrada Familia and Park Güell, give the city a unique artistic charm. With a strong Catalan identity, delicious cuisine, and a passionate football culture, Barcelona is both historic and modern.",},
    { name: "Hong Kong", image: "https://images.pexels.com/photos/792832/pexels-photo-792832.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Hong Kong is a high-energy city famous for its stunning skyline, bustling markets, and world-class shopping. As a fusion of Chinese and Western influences, it offers a unique mix of traditions, from temples and street food stalls to luxury malls and financial hubs. Whether exploring Victoria Peak, Disneyland, or the city’s vibrant nightlife, Hong Kong never fails to impress.",}
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(cities.length / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCities = cities.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="travel-list-container">
      <div className="travel-list">
        {currentCities.map((city, index) => (
          <CityCard key={index} city={city} />
          
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button 
            key={i} 
            className={currentPage === i + 1 ? "active" : ""} 
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TravelList;
