import React, { useEffect, useState } from "react";
import mockMenu from "../utils/mockMenu.js";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const {resId} = useParams(); 
  const data= mockMenu.filter(item => item.card.info.resId === resId);
  
  const obj1 = {};
  data.forEach((item,index) =>{
    const cat = item.card.info.category;
    if(obj1[cat]){
      obj1[cat] = obj1[cat] + 1
    } else {
      obj1[cat] = 1
    }
  })

  const [showIndex, setShowIndex] = useState(0);

  const items = [];
  const keys = Object.keys(obj1);

  const show = (index) => {
    if(showIndex === index) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  }
  
  keys.map((item, index) =>{
    const filterData1 = data.filter((items) => items.card.info.category === item);
    const resData1 = {
      category: item,
      count: obj1[item],
      filterData: filterData1,
      itemIndex: index
    }
    items.push(<RestaurantCategory 
      key= {item} 
      resData = {resData1}
      showItems= {showIndex === index ? true : false}
      onClick = {() => show(index)}
      />)
  });

    return(
      <div className="text-center">
          {items}
      </div>
    );
};

export default RestaurantMenu;
