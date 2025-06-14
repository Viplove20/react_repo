import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router";


const Body = () => {

    function handleFilter(){
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
        setSearchedRestaurants(filteredList);
    }
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [searchedRestaurants, setSearchedRestaurants] = useState(resList);

    const [searchText, setSearchText] = useState("");

    function onChangeHandler(e){
           if(e.target.value === ''){
                setSearchedRestaurants(listOfRestaurants)
                setSearchText('');
           }
           else{
            setSearchText(e.target.value)
        }
    }

    function onRestaurantClickHandler(e){

    }
    // commented useEffect as this url is blocked due to CORS even with proxy
    // useEffect(() => {
    //     fetchData();
    // },[]);

    // const fetchData = async () => {
    //     const proxyUrl = "https://corsproxy.io/?";
    //     const targetUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    //     const data = await fetch(proxyUrl + encodeURIComponent(targetUrl));
    //     //const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const response = await data.json();
    //     console.log('res is ', response);
    // }

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className="search-box" 
                    placeholder="type..." 
                    value={searchText} 
                    onChange=
                    //{(e) => setSearchText(e.target.value) }
                    {onChangeHandler}
                    ></input>
                    <button className="search-btn" 
                    onClick={() =>{
                       const filterSearchedRestaurants = listOfRestaurants.filter((res) => ((res.info.name).toLowerCase()).includes(searchText.toLowerCase())
                    );
                    setSearchedRestaurants(filterSearchedRestaurants);
                    }}>Search</button>
                    <button className="reset-btn" onClick={() => {
                        setSearchedRestaurants(listOfRestaurants); 
                        setSearchText('');
                        }}>Reset</button>
                </div>
                
                <button className="filter-btn" onClick={handleFilter}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {searchedRestaurants.map ((item) =>{
                    return <RestaurantCard resData = {item} key={item.info.id}/>
                })}
                
            </div>
        </div>
    )
}

export default Body;