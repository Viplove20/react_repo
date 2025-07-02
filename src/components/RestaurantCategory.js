import React, { useState, useEffect } from "react";
import ItemList from "./itemList";
import { createContext } from "react";

const RestaurantCategory = ({resData, showItems, onClick}) => {
    return (
        <div>
            <div className="w-6/12 bg-orange-100 p-4 mx-auto my-2 shadow-lg hover:bg-orange-200 text-lg font-bold rounded-md">
                <div className="flex justify-between cursor-pointer" onClick={onClick}>
                <span>{resData.category} ({resData.count})</span>
                {
                    showItems ? <span> ▲ </span> : <span> ▼ </span>
                }
                </div>
                {showItems && <ItemList data= {resData}/>}  
            </div>           
        </div>
           
    )
}

export default RestaurantCategory;