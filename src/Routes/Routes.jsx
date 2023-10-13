import { createBrowserRouter } from "react-router-dom";
import MainLayout  from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login-Register/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader:() => fetch('/data/news.json'),
        element: <Home></Home>,
      },
      {
        path: '/Login',
        element: <Login></Login>
      }
    ],
  },
]);

export default routes;
