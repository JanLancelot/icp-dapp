import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import VolunteerForm from "./pages/VolunteerForm";
import Authentication from "./pages/Authentication";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import Organization from "./pages/Organization";
import CreateOrgProfile from "./pages/CreateOrgProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/opportunities",
      element: <Discover />
    },
    {
      path: "/application-form",
      element: <VolunteerForm />
    },
    {
      path: "/authentication",
      element: <Authentication />
    },
    {
      path: "/help-center",
      element: <Help />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/organizations",
      element: <Organization />
    },
    {
      path: "/create-org-profile",
      element: <CreateOrgProfile />
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
