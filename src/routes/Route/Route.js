import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Details from "../../others/Details/Details";
import ProtectedRoute from "../../others/ProtectedRoute/ProtectedRoute";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Pdf from "../../pages/Pdf/Pdf";
import Register from "../../pages/Register/Register";
import LeftSide from "../../pages/Shared/LeftSide/LeftSide";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://learning-programming-language-server-site.vercel.app/details/`)
      },
      {
        path: "/category",
        element: <LeftSide></LeftSide>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch(`https://learning-programming-language-server-site.vercel.app/details/`)
      },
      {
        path: "/details/:id",
        element: <Category></Category>,
        loader: ({ params }) => fetch(`https://learning-programming-language-server-site.vercel.app/details/${params.id}`)
      },
      {
        path: "/category/:id",
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://learning-programming-language-server-site.vercel.app/category/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/pdf",
        element: <Pdf></Pdf>,
      },
      {
        path: "/newsCategory/:id",
        element: <PrivateRoute><ProtectedRoute></ProtectedRoute></PrivateRoute>,
        loader: ({ params }) => fetch(`https://learning-programming-language-server-site.vercel.app/newsCategory/${params.id}`)
      }
    ],
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);