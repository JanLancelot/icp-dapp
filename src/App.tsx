import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import VolunteerForm from "./pages/VolunteerForm";
import Authentication from "./pages/Authentication";
import { HelpCenterComponent } from "./components/help-center";
import Help from "./pages/Help";

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
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
