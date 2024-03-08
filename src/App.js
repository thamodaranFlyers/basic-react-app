import "./App.css";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectPage from "./pages/ProjectPage";
import SupportPage from "./pages/SupportPage";
import { PrivateRoute } from "./PrivateRoute";
import { Layout } from "./Layout";

function App() {
  //think of this as a dashboard page
  const router = [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "logout",
      element: <LogoutPage />,
    },
  ];

  const authRoute = [
    {
      path: "/dashboard",
      element: <ProjectListPage />,
    },
    {
      path: "/projects",
      element: <ProjectListPage />,
    },
    {
      path: "/project/:id",
      element: <ProjectPage />,
    },
    {
      path: "/support",
      element: <SupportPage />,
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <>
            {authRoute.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PrivateRoute>
                    <Layout>{route.element}</Layout>
                  </PrivateRoute>
                }
              />
            ))}
            {router.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;
