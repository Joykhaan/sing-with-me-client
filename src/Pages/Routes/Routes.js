import Main from "../../Layout/Main/Main";
import Home from "../Home/Home";
import Review from "../Home/Services/Review/Review";
import Service from "../Home/Services/Service/Service";
import Login from "../Login/Login";
import Register from "../Register/Register";


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
                path:'/service/:id',
                element:<Service></Service>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path:'/review',
                element:<Review></Review>,
                loader:() => fetch('http://localhost:5000/review'),
            }
        ]
            
        
    }
])

export default router;