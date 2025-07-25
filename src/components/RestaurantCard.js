import { RESTAURANT_IMG_URL } from "../utils/constants";
import { Link } from "react-router";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, name, cuisines, avgRating, deliveryTime } =
    resData?.info; //conditional chaing
    console.log('image id', resData.info.cloudinaryImageId);
  return (
    <Link style={{ textDecoration: 'none', color: 'inherit' }} key={id} to={`/restaurants/${id}`}>
      <div className="m-4 p-4 w-52 h-100 bg-orange-100  hover:bg-orange-200 rounded-lg">
        <img
          className="w-44 h-44 rounded-md"
          alt="res-img"
          src={RESTAURANT_IMG_URL + resData.info.cloudinaryImageId} 
        />
        <div className="h-40">
           <h3 className="font-bold text-lg py-2">{name}</h3>
            <h6 className="font-light">{cuisines.join(", ")}</h6>
        </div>
        <div className="py-2">
          <h6 className="font-medium">{avgRating} ⭐</h6>
        </div>
      </div>
    </Link>
  );
};


//HOC
export const withPromotedLabel = (RestaurantCard) => {
  return (props) =>{
    return (
      <div className="relative">
        <label className="absolute bottom-98 left-2 p-1 rounded-sm font-light bg-orange-950 text-white ">Promoted</label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    )
  }
}
export default RestaurantCard;
