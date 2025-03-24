
import Layoutdf from "../../layout";
import Cart from "../../pages/cart";
import Home from "../../pages/home";
export const routes=[
    {
        path:"/",
        element:<Layoutdf />,
        children:[
            {
                path:"/",
                element:<Home />,
            },
            {
                path:"/cart",
                element:<Cart />,
            }
        ]
    }
]