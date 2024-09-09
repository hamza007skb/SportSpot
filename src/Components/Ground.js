import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import HeroSlider, { Slide } from "hero-slider";
import Booking from "./Booking";
import Map from "./Map";
import Review from "./Review";
import std_icon from "../Assets/sign_Bg.jpeg";
import stdd_icon from "../Assets/login_Bg.jpeg";

export default function Ground() {
  // const location = useLocation();
  // const { stadium_icon } = location.state || {};
  const [reviews, setReviews] = useState([]);
  const [selectedPitch, setSelectedPitch] = useState(null);

  const handlePitchClick = (pitch) => {
    setSelectedPitch(pitch);
  };

  const addReview = (review) => {
    setReviews([review, ...reviews]);
  };
  return (
    <>
      <div className="page-ground">
        <div className="info-specific-ground">
          <div className="info-text-ground">
            <div className="name-rev">
              <div className="name-rating-ground">
                <h3>Boys Pitch</h3>
              </div>
              <div className="rating-ground">
                <span>4.3/5 ⭐</span>
              </div>
            </div>
            <div className="venue">
              <p>Stadium Type: Outdoor</p>
              <p>Sports Hours: 01:00 PM - 01:00 AM</p>
            </div>
            <div className="loc">
              <FaMapMarkerAlt className="icon" />
              <p>Bhuptian Chow, Raiwind</p>
              <br />
            </div>
          </div>
          <div className="pitch-pictures">
            <HeroSlider
              slidingAnimation="left_to_right"
              orientation="horizontal"
              initialSlide={1}
              onBeforeChange={(previousSlide, nextSlide) =>
                console.log("onBeforeChange", previousSlide, nextSlide)
              }
              onChange={(nextSlide) => console.log("onChange", nextSlide)}
              onAfterChange={(nextSlide) =>
                console.log("onAfterChange", nextSlide)
              }
              style={{ backgroundColor: "rgba(0,0,0,0.33)" }}
              settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 5000,
                height: "50vh",
              }}
            >
              <Slide
                background={{
                  backgroundImageSrc: std_icon,
                  backgroundAttachment: "fixed",
                }}
                style={{
                  backgroundSize: "contain", // Ensures the image is fully visible
                  backgroundPosition: "center", // Centers the image
                  backgroundRepeat: "no-repeat", // Prevents image repetition
                  height: "93vh", // Set custom height
                  width: "100%", // Set custom width
                }}
              />
              <Slide
                background={{
                  backgroundImageSrc: stdd_icon,
                  backgroundAttachment: "fixed",
                }}
                style={{
                  backgroundSize: "contain", // Ensures the image is fully visible
                  backgroundPosition: "center", // Centers the image
                  backgroundRepeat: "no-repeat", // Prevents image repetition
                  height: "93vh", // Set custom height
                  width: "100%", // Set custom width
                }}
              />
              <Slide
                background={{
                  backgroundImageSrc: std_icon,
                  backgroundAttachment: "fixed",
                }}
                style={{
                  backgroundSize: "contain", // Ensures the image is fully visible
                  backgroundPosition: "center", // Centers the image
                  backgroundRepeat: "no-repeat", // Prevents image repetition
                  height: "93vh", // Set custom height
                  width: "100%", // Set custom width
                }}
              />
              <Slide
                background={{
                  backgroundImageSrc: stdd_icon,
                  backgroundAttachment: "fixed",
                }}
                style={{
                  backgroundSize: "contain", // Ensures the image is fully visible
                  backgroundPosition: "center", // Centers the image
                  backgroundRepeat: "no-repeat", // Prevents image repetition
                  height: "93vh", // Set custom height
                  width: "100%", // Set custom width
                }}
              />
            </HeroSlider>
          </div>
          <p className="pitch-price">Rs.1500/Hour</p>
          <div className="description">
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur blanditiis modi perferendis? Quia natus nesciunt
              dolor odio, molestias pariatur accusantium, explicabo laborum
              blanditiis illum possimus nobis commodi. Enim voluptatum autem
              ducimus expedita. Consequatur animi nobis maxime quam, beatae
              ipsam optio. Quae sit quis labore aperiam cumque libero pariatur
              nostrum consectetur tempora? Facilis, numquam.
            </p>
          </div>
        </div>
        <div className="calender-map">
          <div className="calender">
            <Booking selectedPitch={selectedPitch} />
          </div>
          <div className="ground-loc">
            <div className="ground-map">
              <Map />
            </div>
          </div>
        </div>
      </div>

      <div className="ground-info">
        <p>Pitch Types</p>
        <div className="pitch-type spacing">
          <span
            className={`${selectedPitch === "7 v 7" ? "selected" : ""}`}
            onClick={() => handlePitchClick("7 v 7")}
          >
            Pitch - 7 v 7
          </span>
          <span
            className={`${selectedPitch === "8 v 8" ? "selected" : ""}`}
            onClick={() => handlePitchClick("8 v 8")}
          >
            Pitch - 8 v 8
          </span>
          <span
            className={`${selectedPitch === "9 v 9" ? "selected" : ""}`}
            onClick={() => handlePitchClick("9 v 9")}
          >
            Pitch - 9 v 9
          </span>
        </div>

        <p>Stadium Facilities</p>
        <div className="pitch-facility spacing">
          <span>Canteen</span>
          <span>Changing Room</span>
          <span>Toilets</span>
          <span>Parking</span>
        </div>

        <p>Equipment Provided</p>
        <div className="pitch-equipment spacing-1rem">
          <span>Football</span>
          <span>Paddle</span>
          <span>Bat n Ball</span>
        </div>
      </div>

      <div className="nav-style">
        <div className="nav-underline"></div>
      </div>

      <div className="review">
        <p className="review-p-heading">Customer Reviews</p>
        <Review addReview={addReview} />
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <div className="reviewer-name">
                <p>{review.username}</p>
                <p className="rev-date">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
              <p className="per-review">{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
