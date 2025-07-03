import RestaurantCard, {withPromotedLabel} from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js"; // custom hook


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

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


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

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <h1>Looks like you are offline, please check your internet connection!</h1>
    }
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body mx-1">
            <div className="filter flex justify-center">
                <div className="search pb-1">
                    <input className="border border-solid border-amber-300 ml-2 focus:outline focus:outline-orange-400"
                    type="text"  
                    placeholder="🔎 Search..." 
                    value={searchText} 
                    onChange=
                    //{(e) => setSearchText(e.target.value) }
                    {onChangeHandler}
                    ></input>
                    <button className="px-2 bg-orange-200 m-2 rounded-md hover:bg-orange-300" 
                    onClick={() =>{
                       const filterSearchedRestaurants = listOfRestaurants.filter((res) => ((res.info.name).toLowerCase()).includes(searchText.toLowerCase())
                    );
                    setSearchedRestaurants(filterSearchedRestaurants);
                    }}>Search</button>
                    <button className="px-2 bg-orange-200 rounded-md  hover:bg-orange-300" onClick={() => {
                        setSearchedRestaurants(listOfRestaurants); 
                        setSearchText('');
                        }}>Reset</button>

                    <button className="px-2 m-2 bg-orange-200 rounded-md  hover:bg-orange-300" onClick={handleFilter}>Top Rated Restaurants</button>
                </div>
                
                
            </div>
            <div className="flex flex-wrap justify-center">
               {
                searchedRestaurants.map((item) => (
                    item.info.avgRating <= 4.3 ? <RestaurantCardPromoted resData = {item} key={item.info.id}/> : <RestaurantCard resData = {item} key={item.info.id}/>
                ))
               } 
            </div>
        </div>
    )
}

export default Body;