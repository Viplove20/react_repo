import React, { lazy, Suspense, useEffect, useState } from "react";
//import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { createRoot } from 'react-dom/client';
//import About from "./components/About.js";
import Error from "./components/Error.js";
import ContactUs from "./components/ContactUs.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import userContext from "./utils/userContext.js";


// lazy loading
const About = lazy(()=> import("./components/About.js"));
const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const userData= {
        name: "Viplove Pradhan"
        }
        setUserName(userData.name);
    }, []);

    
    return (
        <userContext.Provider value={{loggedInUser: userName}}>
        <div className="app">
            <Header/>
            <Outlet />
        </div>
        </userContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
        {
        path: "/",
        element: <Body/>
        },
        {
        path: "/about",
        element: <Suspense><About/></Suspense>
        },
        {
        path: "/contact",
        element: <ContactUs/>
        },
        {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
        }
        ],
        errorElement: <Error/>
    }
]);

//const root = ReactDOM.createRoot(document.getElementById("root"));
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);