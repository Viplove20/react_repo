import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import fallbackImage from "../utils/fallbackImage.jpg";

const ItemList = (resData) => {

    console.log('resData', resData);
    const cartCount = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleAddItems = (item) => {
        console.log('item',item.card.info.name);
        console.log('price',item.card.info.price/100);
        dispatch(addItem(item));   
    }

    const handleRemoveItems = (item) => {
         console.log('item',item.card.info.name);
        console.log('price',item.card.info.price/100);
        dispatch(removeItem (item));    
    }

    return (
        <div className="items-center flex flex-col">
            {
                resData.data.filterData.map((item) => (
                    <div key= {Math.random()} className="border-b-1 border-orange-700 flex"> 
                        <div className="w-100" > 
                            <h1 className="font-bold text-lg text-left p-1">{item.card.info.name}</h1>
                            <h2 className="font-medium text-left px-1">Price: ₹ {item.card.info.price/100}</h2>
                            <h2 className="font-normal text-left px-1">Rating: {item.card.info.ratings.aggregatedRating.rating} ⭐</h2>
                            <p className="text-left font-extralight p-1"> {item.card.info.description} </p>
                        </div>
                        <div className="m-2">
                            <img className="w-40 h-40 content-center rounded-md" 
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId}
                            /> 
                            <div className="mx-8 my-1 w-24 bg-orange-900 text-amber-50 rounded-sm flex justify-between p-1 relative -mt-5">
                                <div className=" hover:bg-amber-800 w-8 rounded-sm">
                                    <button className=" hover:bg-amber-950 cursor-pointer w-8 rounded-sm" onClick={() => handleRemoveItems(item)}>-</button>
                                </div>
                                {/* <div>
                                    <span className="bg-white text-black font-normal px-1">{cartCount.length}</span>
                                </div> */}
                                <div>
                                    <button className=" hover:bg-amber-950 cursor-pointer w-8 rounded-sm" onClick={() => handleAddItems(item)}>+</button>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                ))
            }
            </div>
    )
}

export default ItemList;