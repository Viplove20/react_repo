import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList.js"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => {return store.cart.items});

    console.log('cart items are:', cartItems);
    const obj = {
        filterData: cartItems
    }
    console.log('obj', obj);

    const dispatch = useDispatch();
    const clearCartHandler = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center font-bold m-4 p-2">
            <h1 className="text-orange-900 font-bold text-xl p-3">Your Cart Items</h1>
            <div className="p-2 w-6/12 m-auto border-1 border-orange-300 shadow-2xl">
            <button className="bg-orange-950 text-white rounded-sm m-2 px-1 cursor-pointer hover:bg-orange-800" onClick={clearCartHandler}>Clear</button>
                {obj.filterData.length ? <ItemList data = {obj}/> : <h1 className="text-orange-900 font-normal">Cart is empty!!</h1>}
            </div>

        </div>
    )
}

export default Cart;