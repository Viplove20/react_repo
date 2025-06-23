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
          <div className="p-2 m-2 h-56 flex justify-between bg-orange-100  hover:bg-orange-200" key={item.card.info.id}>
            <div className="items-container flex justify-between">
              <div className="item-details w-180 p-4 m-4 justify-center">
              <h2 className="font-extrabold">{item.card.info.name}</h2>
              <h5 className="font-normal">{item.card.info.description}</h5>
              <h6 className="font-light">Category: {item.card.info.itemAttribute.vegClassifier}</h6>
              <h4 className="font-extralight">Price for Two: {item.card.info.price/100}</h4>
              <h5 className="pb-4">{item.card.info.ratings.aggregatedRating.rating} ⭐</h5>
              </div>
              <div className="item-img py-6">
              <img className="rounded-lg justify-center h-40 w-50"
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
