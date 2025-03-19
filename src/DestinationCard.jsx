import React from "react";

const DestinationCard = ({ name, location, image, description, price }) => {
  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
};

export default DestinationCard;
