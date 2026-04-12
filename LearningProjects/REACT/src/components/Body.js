import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resObj.restaurants);

  return (
    <div className="Body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
        />
        <button className="search-btn">Search</button>
        <button className="search-btn" onClick={() => {
            const filterLogic = listOfRestaurants.filter((res) => resObj.res.avgRating > 4.5);
            setListOfRestaurants(filterLogic);
        }}  >Top Rated Restaurants</button>
      </div>

      <div className="res-container">
        {resObj.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;