import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root"
import Home from "../pages/Home"
const Router= createBrowserRouter([
    {
    path:'/',
    element:<Root/>,
        children:[
            {
            path:'/',
            element:<Home/>
            }
    ]
    }

])

export default Router