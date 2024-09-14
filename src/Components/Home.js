import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cricket_icon from "../Assets/cricket.png";
import badminton_icon from "../Assets/badminton.png";
import football_icon from "../Assets/football.png";
import volleyball_icon from "../Assets/VolleyBall.png";
import stadium_icon from "../Assets/sign_Bg.jpeg"; // Fallback image for grounds
import Map from "./Map";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [grounds, setGrounds] = useState([]);

  // Fetch data from the backend API
  useEffect(() => {
    const fetchGrounds = async () => {
      try {
        const response = await fetch(
          "https://your-backend-api-url.com/grounds"
        ); // Replace with your API URL
        const data = await response.json();
        setGrounds(data); // Assuming the API returns an array of ground objects
      } catch (error) {
        console.error("Error fetching grounds:", error);
      }
    };

    fetchGrounds();
  }, []);

  const handleClick = (groundId) => {
    // Navigate to the ground details page with the selected ground's ID
    navigate("/ground", { state: { groundId } });
  };

  return (
    <>
      <div className="pages">
        <a href="/">Home</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-style">
        <div className="nav-underline"></div>
      </div>

      {location.pathname !== "/authpage" && location.pathname !== "/ground" && (
        <>
          <div className="games">
            <div className="hover">
              <img className="image" src={cricket_icon} alt="Cricket" />
              <p>Cricket</p>
            </div>
            <div className="hover">
              <img className="image" src={football_icon} alt="FootBall" />
              <p>FootBall</p>
            </div>
            <div className="hover">
              <img className="image" src={badminton_icon} alt="Badminton" />
              <p>Badminton</p>
            </div>
            <div className="hover">
              <img className="image" src={volleyball_icon} alt="VolleyBall" />
              <p>VolleyBall</p>
            </div>
          </div>

          <div className="map-grounds" id="home">
            <div className="grounds-container">
              {grounds.map((ground, index) => (
                <div className="pitches" key={index}>
                  <img
                    className="pitches-img"
                    src={ground.image || stadium_icon} // Use a fallback image if none is provided
                    alt={`${ground.name}-Picture`}
                  />
                  <div className="info">
                    <div className="info-text">
                      <div className="name-review">
                        <h3>{ground.name}</h3>
                        <span className="review">{ground.rating}/5 ⭐</span>
                      </div>
                      <p>{ground.location}</p>
                    </div>
                    <button onClick={() => handleClick(ground.id)}>
                      Book Now at Rs.{ground.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="map-container">
              <span>
                <h1>Book Your Nearest</h1>
              </span>
              <div className="map">
                <Map />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
