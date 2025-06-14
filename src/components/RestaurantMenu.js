import React, { useEffect } from "react";
import mockMenu from "../utils/mockMenu.js";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const {resId} = useParams(); 
  const data= mockMenu.filter(item => item.card.info.resId === resId);

  return (
    <div>
    {
      data.map((item) => {
        return (
          <div className="menu" key={item.card.info.id}>
            <div className="items-container">
            <div className="item-details">
              <h2>{item.card.info.name}</h2>
            <h4>Description: {item.card.info.description}</h4>
            <h4>Category: {item.card.info.itemAttribute.vegClassifier}</h4>
            <h4>Price for 2: {item.card.info.price/100}</h4>
            <h5>Rating: {item.card.info.ratings.aggregatedRating.rating}</h5>
            </div>
            <div className="item-img">
            <img className="img-dish"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                item.card.info.imageId
              }
            ></img>
            </div>
            </div>
          </div>
        );
      })
    }
    </div>
  );
};

export default RestaurantMenu;
