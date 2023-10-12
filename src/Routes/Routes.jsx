import { createBrowserRouter } from "react-router-dom";
import MainLayout  from "../Layout/MainLayout";
import Home from "../Components/Home/Home";

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
    ],
  },
]);

export default routes;
