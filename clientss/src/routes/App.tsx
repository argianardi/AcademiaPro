import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/Layout";
import Students from "../pages/Students";
import Classes from "../pages/Classes";
import Teachers from "../pages/Teachers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "manage-classes",
        element: <Classes />,
      },
      {
        path: "manage-students",
        element: <Students />,
      },
      {
        path: "manage-teachers",
        element: <Teachers />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
