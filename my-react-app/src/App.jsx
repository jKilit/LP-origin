import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth, RequireRole } from "./routes/layout/Layout";
import Login from "./routes/loginPage/LoginPage";
import Register from "./routes/registerPage/RegisterPage";
import LandingPage from "./routes/landingPage/LandingPage";
import HomePage from "./routes/homePage/HomePage";
import CoursesPage from "./routes/coursesPage/CoursesPage";
import SingleCoursePage from "./routes/singleCoursePage/SingleCoursePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import CreateCoursePage from "./routes/createCoursePage/CreateCoursePage";
import InstructorPage from "./routes/instructorPage/InstructorPage";
import CheckoutPage from "./routes/checkoutPage/CheckoutPage";

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
          path: "/courses/:id",
          element: <SingleCoursePage />,
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
        {
          path: "/checkout/:courseId",
          element: <CheckoutPage />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireRole role={"INSTRUCTOR"} />,
      children: [
        {
          path: "/create-course",
          element: <CreateCoursePage />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireRole role={"INSTRUCTOR"} />,
      children: [
        {
          path: "/instructor/:id",
          element: <InstructorPage />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireRole role={"STUDENT"} />,
      children: [
        {
          path: "/home",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
