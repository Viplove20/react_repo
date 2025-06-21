import { RESTAURANT_IMG_URL } from "../utils/constants";
import { Link } from "react-router";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, name, cuisines, avgRating, deliveryTime } =
    resData?.info; //conditional chaing
  return (
    <Link style={{ textDecoration: 'none', color: 'inherit' }} key={id} to={`/restaurants/${id}`}>
      <div className="res-card">
        <img
          className="res-image"
          alt="'res-img"
          src={RESTAURANT_IMG_URL + resData.info.cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h6>{cuisines.join(", ")}</h6>
        <h6>{avgRating}</h6>
        <h6>{deliveryTime}</h6>
      </div>
    </Link>
  );
};

export default RestaurantCard;
