import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <h2>page not fount</h2>,
    children: [
      {
            path: "/",
            element: <Home/>
      }
    ]
  },
]);

export default router;