import { createBrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import NotFound from "pages/NotFound";
import Root from "pages/Root";
import AboutDetail from "pages/AboutDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/about/:id", element: <AboutDetail /> },
    ],
  },
]);

export default router;
