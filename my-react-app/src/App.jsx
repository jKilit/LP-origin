import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Layout, RequireAuth} from "./routes/layout/Layout";
import Login from "./routes/loginPage/LoginPage";
import Register from "./routes/registerPage/RegisterPage";
import LandingPage from "./routes/landingPage/LandingPage";
import HomePage from "./routes/homePage/HomePage";
import CoursesPage from "./routes/coursesPage/CoursesPage";
import SingleCoursePage from "./routes/singleCoursePage/SingleCoursePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import CreateCoursePage from "./routes/createCoursePage/CreateCoursePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/courses",
          element: <CoursesPage />,
        },
        {
          path: "/specific",
          element: <SingleCoursePage />,
        },
        {
          path: "/create-course",
          element: <CreateCoursePage />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
