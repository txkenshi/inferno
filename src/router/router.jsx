import { createBrowserRouter } from "react-router-dom"
import Root from "../pages/Root"

import CatalogPage from "../pages/CatalogPage"
import HomePage from "../pages/HomePage"
import SingleProductPage from "../pages/SingleProductPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/catalog",
                element: <CatalogPage />,
            },
            {
                path: "/catalog/:id",
                element: <SingleProductPage />,
            },
        ]
    }
])

export default router