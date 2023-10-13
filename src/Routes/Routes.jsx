import { createBrowserRouter } from "react-router-dom";
import MainLayout  from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login-Register/Login/Login";
import Register from "../Components/Login-Register/Register/Register";
import NewsDetails from "../Components/Home/NewsDetails";
import PrivateRoute from "./Private/PrivateRoute";

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
        path: '/news/:id',
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element:<Register/>
      }
    ],
  },
]);

export default routes;
