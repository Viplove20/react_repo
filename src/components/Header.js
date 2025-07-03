import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btn , setbtn] = useState("Login");

    useEffect(() => {
        console.log('header useEffect called');
    },[btn]);
    
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(userContext);
    
    const cartItems = useSelector((store) => store.cart.items);
    
    return (
        <div className="flex justify-between m-1 bg-orange-200">
            <div className="logo-container">
                <Link to="/">
                <img className="w-20 ml-1 pt-1" src={LOGO_URL}/>
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to="/">🏠</Link></li>
                    <li className="px-4"><Link to="/about">📰</Link></li>
                    <li className="px-4"><Link to="/contact">📞</Link></li>
                    <li className="px-4 "><Link to="/cart">🛒({cartItems.length})</Link></li>
                    <button onClick={
                        () => { 
                            btn === "Login" ? setbtn("Logout") : setbtn("Login")
                        }}>{btn}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    <li className="px-4">{onlineStatus ? "🟢" : "🔴"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;