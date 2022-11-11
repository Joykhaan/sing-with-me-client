import Main from "../../Layout/Main/Main";
import Addservices from "../Addservice/Addservices";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Review from "../Home/Services/Review/Review";
import Service from "../Home/Services/Service/Service";
import Showallservices from "../Home/Showallservices/Showallservices";
import Showallservicescard from "../Home/Showallservices/Showallservicescard";
import Login from "../Login/Login";
import Myreview from "../Myreview/Myreview";
import Register from "../Register/Register";
import Update from "../Update/Update";
import Privateroute from "./Privateroute/Privateroute";


const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/services/:id',
                element:<Service></Service>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path:'/review',
                element:<Review></Review>,
                loader:() => fetch('http://localhost:5000/review'),
            },
            {
                path:'/myreview/:uid',
                element:<Privateroute><Myreview></Myreview></Privateroute>,
                loader:({params}) => fetch(`http://localhost:5000/myreview/${params.uid}`),
            },
            {
                path:'/addservices',
                element:<Privateroute><Addservices></Addservices></Privateroute>,
                loader:({params}) => fetch(`http://localhost:5000/myreview/${params.uid}`),
            },
            {
                path:'/allservices',
                element:<Showallservices></Showallservices>,
            },
            {
                path:'/blog',
                element:<Blog></Blog>,
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params}) => fetch(`http://localhost:5000/update/${params.id}`),
            },
        ]
            
        
    }
])

export default router;