import React from "react";
import "./FlagCard.css";

const FlagCard = ({ country }) => {
  return (
    <div className="flag-card">
      <img src={country.flag} alt={country.name ? `${country.name} flag` : "Country flag"} className="flag-image" />
      <p className="country-name">{country.name || "Unknown Country"}</p>
    </div>
  );
};

export default FlagCard;
