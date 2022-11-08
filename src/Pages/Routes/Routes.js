import Main from "../../Layout/Main/Main";
import Home from "../Home/Home";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            }
        ]
            
        
    }
])

export default router;