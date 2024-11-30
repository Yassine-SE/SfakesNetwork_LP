import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Notfound from './pages/Notfound.jsx'


const router = createBrowserRouter([
    {
         path: "/",
         element: <Home />,
    },
    {
         path: "/privacy",
         element: <Privacy />,
    },
    {
         path: "terms",
         element: <Terms />,
    },
    {
         path: "*",
         element: <Notfound />,
    },

]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
