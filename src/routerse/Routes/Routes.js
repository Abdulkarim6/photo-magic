import { createBrowserRouter } from "react-router-dom";
import AllServices from "../../components/AllServices/AllServices";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";

import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/allservices', element: <AllServices></AllServices>
            },
            {
                path: '/serviceDetail/:id', element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
])