import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {
    const [btn , setbtn] = useState("Login");

    useEffect(() => {
        console.log('header useEffect called');
    },[btn]);
    
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                <img className="logo" src={LOGO_URL}/>
                </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>{onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="">Cart</Link></li>
                    <button className="login-btn" onClick={
                        () => { 
                            btn === "Login" ? setbtn("Logout") : setbtn("Login")
                        }}>{btn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;