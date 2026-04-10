import React from "react";
import ReactDOM from "react-dom/client";

const IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://png.pngtree.com/png-clipart/20250111/original/pngtree-a-chef-holding-hamburger-and-fries-png-image_20111871.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const resObj = {
  restaurants: [
    {
      id: "1001842",
      name: "Pizza Hut",
      locality: "Gautam Buddha Nagar",
      areaName: "Gautam Buddha Nagar",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      totalRatings: "566",
      costForTwo: "₹350 for two",
      deliveryTime: "30-35 mins",
      lastMileTravel: "4.8 km",
      discount: "66% OFF UPTO ₹126",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/93fc7d6b-f289-470a-b680-9f5b9d0b75eb_1001842.JPG",
      link: "https://www.swiggy.com/city/noida-1/pizza-hut-gautam-buddha-nagar-rest1001842",
      googleRating: { rating: "4.4", ratingCount: "129" },
    },
    {
      id: "301417",
      name: "Barbeque Nation",
      locality: "Beta 2",
      areaName: "Beta 2",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Kebabs",
        "Biryani",
        "Street Food",
        "Snacks",
      ],
      avgRating: 4.3,
      totalRatings: "1.7K+",
      costForTwo: "₹600 for two",
      deliveryTime: "45-55 mins",
      lastMileTravel: "10.1 km",
      discount: "66% OFF UPTO ₹126",
      isOpen: true,
      cloudinaryImageId: "r9vj1kuismiimtqb2nhl",
      link: "https://www.swiggy.com/city/noida-1/barbeque-nation-beta-2-rest301417",
      googleRating: { rating: "4.4", ratingCount: "6.9K+" },
    },
    {
      id: "1056592",
      name: "Burger King",
      locality: "GautamBudh Nagar",
      areaName: "India Expo",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      totalRatings: "2.4K+",
      costForTwo: "₹350 for two",
      deliveryTime: "30-40 mins",
      lastMileTravel: "4.5 km",
      discount: "66% OFF UPTO ₹126",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/d27f4be3-c0be-4b2f-925a-014a41809c38_1056592.jpg",
      link: "https://www.swiggy.com/city/noida-1/burger-king-gautambudh-naga-india-expo-rest1056592",
      googleRating: null,
      badge: "Best in Burger",
    },
    {
      id: "102190",
      name: "Wow! Momo",
      locality: "Knowledge Park",
      areaName: "Surajpur",
      cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
      avgRating: 4.1,
      totalRatings: "2.5K+",
      costForTwo: "₹300 for two",
      deliveryTime: "35-45 mins",
      lastMileTravel: "4.8 km",
      discount: "66% OFF UPTO ₹126 + ₹66 Cashback",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/30/87669207-6a4f-4be8-ad8b-7668ca704379_102190.jpg",
      link: "https://www.swiggy.com/city/noida-1/wow-momo-knowledge-park-surajpur-rest102190",
      googleRating: { rating: "4.4", ratingCount: "206" },
      badge: "Best in Momo",
    },
    {
      id: "222657",
      name: "Biryani By Kilo",
      locality: "Alpha 2",
      areaName: "Alpha 2",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4.3,
      totalRatings: "6.5K+",
      costForTwo: "₹700 for two",
      deliveryTime: "50-60 mins",
      lastMileTravel: "8.1 km",
      discount: "₹125 OFF ABOVE ₹599",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/c2d501db-0501-42a8-b4fd-6deb636a451b_222657.JPG",
      link: "https://www.swiggy.com/city/noida-1/biryani-by-kilo-alpha-2-rest222657",
      googleRating: { rating: "3.8", ratingCount: "153" },
      badge: "Gourmet",
    },
    {
      id: "45862",
      name: "Burger King",
      locality: "Jaypee Greens",
      areaName: "Surajpur Site 4",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      totalRatings: "17K+",
      costForTwo: "₹350 for two",
      deliveryTime: "30-40 mins",
      lastMileTravel: "4.8 km",
      discount: "66% OFF UPTO ₹126",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/234317cb-d389-4007-bd27-8aec457471a2_45862.jpg",
      link: "https://www.swiggy.com/city/noida-1/burger-king-jaypee-greens-surajpur-site-4-rest45862",
      googleRating: { rating: "4.3", ratingCount: "1.2K+" },
      badge: "Best in Burger",
    },
    {
      id: "239611",
      name: "Faasos - Wraps, Rolls & Shawarma",
      locality: "UPSIDC",
      areaName: "Surajpur Site 4",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.0,
      totalRatings: "4.0K+",
      costForTwo: "₹200 for two",
      deliveryTime: "35-40 mins",
      lastMileTravel: "4.5 km",
      discount: "₹166 OFF ABOVE ₹999",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/109e3456-1c81-4211-a55c-619de50f770b_239611.JPG",
      link: "https://www.swiggy.com/city/noida-1/faasos-wraps-rolls-and-shawarma-upsidc-surajpur-site-4-rest239611",
      googleRating: null,
      badge: "Best in Rolls",
    },
    {
      id: "336061",
      name: "Wendy's Burgers",
      locality: "UPSIDC",
      areaName: "Surajpur Site 4",
      cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
      avgRating: 4.2,
      totalRatings: "4.4K+",
      costForTwo: "₹200 for two",
      deliveryTime: "35-40 mins",
      lastMileTravel: "4.5 km",
      discount: "₹166 OFF ABOVE ₹999",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/6b9c3ae9-5811-449c-92dd-c4e198f566b1_336061.JPG",
      link: "https://www.swiggy.com/city/noida-1/wendys-burgers-upsidc-surajpur-site-4-rest336061",
      googleRating: null,
    },
    {
      id: "438956",
      name: "Baskin Robbins - Ice Cream Desserts",
      locality: "F Block",
      areaName: "Surajpur",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.6,
      totalRatings: "86",
      costForTwo: "₹250 for two",
      deliveryTime: "30-35 mins",
      lastMileTravel: "4.5 km",
      discount: "₹66 OFF ABOVE ₹499",
      isOpen: true,
      isVeg: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/2261ae3d-67d9-4f95-b53e-735ce5605f5f_438956.JPG",
      link: "https://www.swiggy.com/city/noida-1/baskin-robbins-ice-cream-desserts-f-block-surajpur-rest438956",
      googleRating: null,
      badge: "Best in Ice Cream",
    },
    {
      id: "59395",
      name: "Bikkgane Biryani",
      locality: "The Grand Venice Mall",
      areaName: "Jaypee Greens",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "Andhra",
        "Lucknowi",
        "Kolkata",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.5,
      totalRatings: "14K+",
      costForTwo: "₹400 for two",
      deliveryTime: "35-40 mins",
      lastMileTravel: "5.0 km",
      discount: "66% OFF UPTO ₹136 + ₹66 Cashback",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/4/e68a50e1-5cdc-4ab4-be04-aa701fc64b86_59395.JPG",
      link: "https://www.swiggy.com/city/noida-1/bikkgane-biryani-the-grand-venice-mall-jaypee-greens-rest59395",
      googleRating: null,
      badge: "Best in Biryani",
    },
    {
      id: "239614",
      name: "Oven Story Pizza",
      locality: "UPSIDC",
      areaName: "Surajpur Site 4",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.2,
      totalRatings: "3.7K+",
      costForTwo: "₹400 for two",
      deliveryTime: "20-25 mins",
      lastMileTravel: "4.5 km",
      discount: "66% OFF UPTO ₹126 + ₹66 Cashback",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/25432bea-ff07-4848-8e4e-2ede03c7f55a_239614.jpg",
      link: "https://www.swiggy.com/city/noida-1/oven-story-pizza-upsidc-surajpur-site-4-rest239614",
      googleRating: null,
    },
    {
      id: "239613",
      name: "Behrouz Biryani",
      locality: "UPSIDC",
      areaName: "Surajpur Site 4",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.2,
      totalRatings: "1.9K+",
      costForTwo: "₹500 for two",
      deliveryTime: "30-35 mins",
      lastMileTravel: "4.5 km",
      discount: "66% OFF UPTO ₹126 + ₹66 Cashback",
      isOpen: true,
      cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
      link: "https://www.swiggy.com/city/noida-1/behrouz-biryani-upsidc-surajpur-site-4-rest239613",
      googleRating: null,
      badge: "Gourmet",
    },
    {
      id: "584332",
      name: "KFC",
      locality: "Gamma 1",
      areaName: "Greater Noida",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.0,
      totalRatings: "4.3K+",
      costForTwo: "₹400 for two",
      deliveryTime: "35-40 mins",
      lastMileTravel: "7.7 km",
      discount: "50% OFF",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/8/e3bca88d-1669-4279-a0e6-121bee6cf7b6_584332.JPG",
      link: "https://www.swiggy.com/city/noida-1/kfc-gamma-1-greater-noida-rest584332",
      googleRating: null,
    },
    {
      id: "239620",
      name: "LunchBox - Meals and Thalis",
      locality: "UPSIDC",
      areaName: "Surajpur Site 4",
      cuisines: ["Thalis", "North Indian", "Biryani"],
      avgRating: 4.0,
      totalRatings: "3.7K+",
      costForTwo: "₹200 for two",
      deliveryTime: "35-40 mins",
      lastMileTravel: "4.5 km",
      discount: "ITEMS AT ₹99",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/4ac0988f-673e-4bd6-8ca7-d363af696fa2_239620.jpg",
      link: "https://www.swiggy.com/city/noida-1/lunchbox-meals-and-thalis-upsidc-surajpur-site-4-rest239620",
      googleRating: null,
      badge: "High Protein",
    },
    {
      id: "362222",
      name: "Natural Ice Cream",
      locality: "Greater Noida 2",
      areaName: "Surajpur Site 4",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      totalRatings: "864",
      costForTwo: "₹150 for two",
      deliveryTime: "25-30 mins",
      lastMileTravel: "4.5 km",
      discount: "30% OFF UPTO ₹75",
      isOpen: true,
      isVeg: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/3c8f9157-4047-4411-97ab-93bdde8d52be_362222.jpg",
      link: "https://www.swiggy.com/city/noida-1/natural-ice-cream-greater-noida-2-surajpur-site-4-rest362222",
      googleRating: null,
      badge: "Best in Ice Cream",
    },
    {
      id: "1097188",
      name: "Krispy Kreme - Doughnuts & Coffee",
      locality: "GautamBudh Nagar",
      areaName: "SECTOR ALPHA 2",
      cuisines: ["Desserts", "Cafe", "Bakery", "Coffee", "Beverages", "Snacks"],
      avgRating: 4.3,
      totalRatings: "94",
      costForTwo: "₹350 for two",
      deliveryTime: "35-45 mins",
      lastMileTravel: "8.1 km",
      discount: "50% OFF",
      isOpen: true,
      isVeg: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/10/bc5f8e8e-c172-4a04-9472-52845a29770b_1097188.JPG",
      link: "https://www.swiggy.com/city/noida-1/krispy-kreme-doughnuts-and-coffee-gautambudh-nagar-sector-alpha-2-rest1097188",
      googleRating: null,
    },
    {
      id: "239618",
      name: "The Good Bowl",
      locality: "UPSIDC",
      areaName: "Surajpur Site 4",
      cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
      avgRating: 4.2,
      totalRatings: "1.4K+",
      costForTwo: "₹400 for two",
      deliveryTime: "30-35 mins",
      lastMileTravel: "4.5 km",
      discount: "₹166 OFF ABOVE ₹449",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/15f1a786-f3b2-4592-a3eb-d0e41d26ff5c_239618.jpg",
      link: "https://www.swiggy.com/city/noida-1/the-good-bowl-upsidc-surajpur-site-4-rest239618",
      googleRating: null,
    },
    {
      id: "239617",
      name: "Sweet Truth - Cake and Desserts",
      locality: "UPSIDC",
      areaName: "Surajpur Site 4",
      cuisines: ["Desserts", "Ice Cream", "Bakery", "Beverages"],
      avgRating: 4.2,
      totalRatings: "978",
      costForTwo: "₹450 for two",
      deliveryTime: "35-40 mins",
      lastMileTravel: "4.5 km",
      discount: "₹166 OFF ABOVE ₹999",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/cfc88d2f-d544-44d4-9b60-49f7dbdeee05_239617.JPG",
      link: "https://www.swiggy.com/city/noida-1/sweet-truth-cake-and-desserts-upsidc-surajpur-site-4-rest239617",
      googleRating: null,
    },
    {
      id: "322761",
      name: "Biryani Badshah",
      locality: "The Grand Venice Mall",
      areaName: "Jaypee Greens",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "Andhra",
        "Lucknowi",
        "Kolkata",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      totalRatings: "3.2K+",
      costForTwo: "₹350 for two",
      deliveryTime: "30-35 mins",
      lastMileTravel: "5.0 km",
      discount: "₹166 OFF ABOVE ₹749",
      isOpen: true,
      cloudinaryImageId: "pthjfmibo8qfci1wptyp",
      link: "https://www.swiggy.com/city/noida-1/biryani-badshah-the-grand-venice-mall-jaypee-greens-rest322761",
      googleRating: null,
    },
    {
      id: "1053919",
      name: "Honest Bowl",
      locality: "UPSIDC",
      areaName: "Surajpur Site 4",
      cuisines: ["North Indian", "High Protein", "Biryani"],
      avgRating: 4.1,
      totalRatings: "80",
      costForTwo: "₹200 for two",
      deliveryTime: "30-35 mins",
      lastMileTravel: "4.5 km",
      discount: "60% OFF UPTO ₹110",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/12/5f9d65a4-0bc9-446b-9c7a-6f816c273884_1053919.JPG",
      link: "https://www.swiggy.com/city/noida-1/honest-bowl-upsidc-surajpur-site-4-rest1053919",
      googleRating: null,
      badge: "High Protein",
    },
    {
      id: "1094446",
      name: "Shawarmajaan",
      locality: "UPSIDC",
      areaName: "Surajpur Site 4",
      cuisines: ["Shawarma", "Rolls", "Fast Food"],
      avgRating: 3.9,
      totalRatings: "68",
      costForTwo: "₹200 for two",
      deliveryTime: "30-35 mins",
      lastMileTravel: "4.5 km",
      discount: "ITEMS AT ₹99",
      isOpen: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/e016c1d7-d411-425f-b046-f04aadacde8f_1094446.jpg",
      link: "https://www.swiggy.com/city/noida-1/shawarmajaan-upsidc-surajpur-site-4-rest1094446",
      googleRating: null,
    },
  ],
};

const Body = () => {
  return (
    <div className="Body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="res-container">
        {resObj.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
