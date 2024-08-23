import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./app/home";
import LoginRoute from "./auth/login";
import RegisterRoute from "./auth/register";

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRoute />,
    },
    {
      path: "/login",
      element: <LoginRoute />,
    },
    {
      path: "/register",
      element: <RegisterRoute />,
    },
  ]);

  return <RouterProvider router={router} />;
}
