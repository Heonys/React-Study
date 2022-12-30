import { createBrowserRouter } from "react-router-dom";
import Contents from "components/Contents";
import Detail from "components/Detail";
import App from "App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>error</div>,
    children: [
      { index: true, element: <Contents /> },
      { path: "/video", element: <Contents /> },
      { path: "/video/:keyword", element: <Contents /> },
      { path: "/video/detail/:id", element: <Detail /> },
    ],
  },
]);

export default router;
