import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios"; // For making API calls
import Booking from "./Booking";
import Map from "./Map";
import Review from "./Review";

export default function Ground() {
  const [groundData, setGroundData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [selectedPitch, setSelectedPitch] = useState(null);

  // Fetch ground data from API
  useEffect(() => {
    // Example API call to fetch ground details
    axios
      .get("https://your-api-url.com/ground/{ground_id}")
      .then((response) => {
        setGroundData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the ground data!", error);
      });
  }, []);

  const handlePitchClick = (pitch) => {
    setSelectedPitch(pitch);
  };

  const addReview = (review) => {
    setReviews([review, ...reviews]);
  };

  if (!groundData) {
    return <p>Loading...</p>; // Show loading state while data is being fetched
  }

  return (
    <>
      <div className="page-ground">
        <div className="info-specific-ground">
          <div className="info-text-ground">
            <div className="name-rev">
              <div className="name-rating-ground">
                <h3>{groundData.name}</h3> {/* Ground Name */}
              </div>
              <div className="rating-ground">
                <span>{groundData.rating}/5 ⭐</span> {/* Ground Rating */}
              </div>
            </div>
            <div className="venue">
              <p>Stadium Type: {groundData.stadiumType}</p> {/* Stadium Type */}
              <p>Sports Hours: {groundData.sportsHours}</p> {/* Sports Hours */}
            </div>
            <div className="loc">
              <FaMapMarkerAlt className="icon" />
              <p>{groundData.location}</p> {/* Ground Location */}
            </div>
          </div>
          <div className="pitch-pictures">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={groundData.images[0]}
                    className="d-block w-100"
                    alt="Ground Picture"
                  />
                </div>
                {groundData.images.slice(1).map((img, index) => (
                  <div key={index} className="carousel-item">
                    <img
                      src={img}
                      className="d-block w-100"
                      alt="Ground Picture"
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <p className="pitch-price">Rs.{groundData.price}/Hour</p>{" "}
          {/* Ground Price */}
          <div className="description">
            <h3>Description</h3>
            <p>{groundData.description}</p> {/* Ground Description */}
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
          {groundData.pitchTypes.map((pitchType, index) => (
            <span
              key={index}
              className={`${selectedPitch === pitchType ? "selected" : ""}`}
              onClick={() => handlePitchClick(pitchType)}
            >
              {pitchType}
            </span>
          ))}
        </div>

        <p>Stadium Facilities</p>
        <div className="pitch-facility spacing">
          {groundData.facilities.map((facility, index) => (
            <span key={index}>{facility}</span>
          ))}
        </div>

        <p>Equipment Provided</p>
        <div className="pitch-equipment spacing-1rem">
          {groundData.equipment.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
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
