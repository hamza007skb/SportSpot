import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import cricket_icon from "../Assets/cricket.png";
import badminton_icon from "../Assets/badminton.png";
import football_icon from "../Assets/football.png";
import volleyball_icon from "../Assets/VolleyBall.png";
import stadium_icon from "../Assets/sign_Bg.jpeg";
import Map from "./Map";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ground',  { state: { stadium_icon } });
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

      {location.pathname !== "/authpage" &&
        location.pathname !== "/authpage" && location.pathname !== "/ground" &&(
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
                <img className="image" src={volleyball_icon} alt="ValleyBall" />
                <p>VolleyBall</p>
              </div>
            </div>

            <div className="map-grounds" id="home">
              <div className="grounds-container">
                <div className="pitches">
                  <img
                    className="pitches-img"
                    src={stadium_icon}
                    alt="Ground-Picture"
                  />
                  <div className="info">
                    <div className="info-text">
                      <div className="name-review">
                        <h3>Boys Pitch</h3>
                        <span className="review">4.3/5 ⭐</span>
                      </div>
                      <p>Bhuptian Chow, Raiwind</p>
                    </div>
                    <button onClick={handleClick}>Book Now at Rs.1500</button>
                  </div>
                </div>

                <div className="pitches">
                  <img
                    className="pitches-img"
                    src={require("../Assets/sign_Bg.jpeg")}
                    alt="Ground-Picture"
                  />
                  <div className="info">
                    <div className="info-text">
                      <div className="name-review">
                        <h3>Boys Pitch</h3>
                        <span className="review">4.3/5 ⭐</span>
                      </div>
                      <p>Bhuptian Chow, Raiwind</p>
                    </div>
                    <button href="">Book Now at Rs.1500</button>
                  </div>
                </div>

                <div className="pitches">
                  <img
                    className="pitches-img"
                    src={require("../Assets/sign_Bg.jpeg")}
                    alt="Ground-Picture"
                  />
                  <div className="info">
                    <div className="info-text">
                      <div className="name-review">
                        <h3>Boys Pitch</h3>
                        <span className="review">4.3/5 ⭐</span>
                      </div>
                      <p>Bhuptian Chow, Raiwind</p>
                    </div>
                    <button href="">Book Now at Rs.1500</button>
                  </div>
                </div>

                <div className="pitches">
                  <img
                    className="pitches-img"
                    src={require("../Assets/sign_Bg.jpeg")}
                    alt="Ground-Picture"
                  />
                  <div className="info">
                    <div className="info-text">
                      <div className="name-review">
                        <h3>Boys Pitch</h3>
                        <span className="review">4.3/5 ⭐</span>
                      </div>
                      <p>Bhuptian Chow, Raiwind</p>
                    </div>
                    <button href="">Book Now at Rs.1500</button>
                  </div>
                </div>

                <div className="pitches">
                  <img
                    className="pitches-img"
                    src={require("../Assets/sign_Bg.jpeg")}
                    alt="Ground-Picture"
                  />
                  <div className="info">
                    <div className="info-text">
                      <div className="name-review">
                        <h3>Boys Pitch</h3>
                        <span className="review">4.3/5 ⭐</span>
                      </div>
                      <p>Bhuptian Chow, Raiwind</p>
                    </div>
                    <button href="">Book Now at Rs.1500</button>
                  </div>
                </div>

                <div className="pitches">
                  <img
                    className="pitches-img"
                    src={require("../Assets/sign_Bg.jpeg")}
                    alt="Ground-Picture"
                  />
                  <div className="info">
                    <div className="info-text">
                      <div className="name-review">
                        <h3>Boys Pitch</h3>
                        <span className="review">4.3/5 ⭐</span>
                      </div>
                      <p>Bhuptian Chow, Raiwind</p>
                    </div>
                    <button href="">Book Now at Rs.1500</button>
                  </div>
                </div>

                <div className="pitches">
                  <img
                    className="pitches-img"
                    src={require("../Assets/sign_Bg.jpeg")}
                    alt="Ground-Picture"
                  />
                  <div className="info">
                    <div className="info-text">
                      <div className="name-review">
                        <h3>Boys Pitch</h3>
                        <span className="review">4.3/5 ⭐</span>
                      </div>
                      <p>Bhuptian Chow, Raiwind</p>
                    </div>
                    <button href="">Book Now at Rs.1500</button>
                  </div>
                </div>

                <div className="pitches">
                  <img
                    className="pitches-img"
                    src={require("../Assets/sign_Bg.jpeg")}
                    alt="Ground-Picture"
                  />
                  <div className="info">
                    <div className="info-text">
                      <div className="name-review">
                        <h3>Boys Pitch</h3>
                        <span className="review">4.3/5 ⭐</span>
                      </div>
                      <p>Bhuptian Chow, Raiwind</p>
                    </div>
                    <button href="">Book Now at Rs.1500</button>
                  </div>
                </div>

                <div className="pitches">
                  <img
                    className="pitches-img"
                    src={require("../Assets/sign_Bg.jpeg")}
                    alt="Ground-Picture"
                  />
                  <div className="info">
                    <div className="info-text">
                      <div className="name-review">
                        <h3>Boys Pitch</h3>
                        <span className="review">4.3/5 ⭐</span>
                      </div>
                      <p>Bhuptian Chow, Raiwind</p>
                    </div>
                    <button href="">Book Now at Rs.1500</button>
                  </div>
                </div>
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
