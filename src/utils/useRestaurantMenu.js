import { useParams } from "react-router";
import mockMenu from "../utils/mockMenu.js";

const useRestaurantMenu = () => {
    const {resId} = useParams();
    const data = mockMenu.filter(item => item.card.info.resId);
    return data;
}

export default useRestaurantMenu;