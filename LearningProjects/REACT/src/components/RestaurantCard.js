import React from "react";
import { IMG_CDN } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    avgRating,
    cuisines,
    deliveryTime,
    costForTwo,
    discount,
    cloudinaryImageId,
  } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img src={IMG_CDN + cloudinaryImageId} alt={name} className="res-logo" />
      <h3>{name}</h3>
      <h4>{avgRating} stars ⭐</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
      <h4>{discount}</h4>
    </div>
  );
};



export default RestaurantCard;