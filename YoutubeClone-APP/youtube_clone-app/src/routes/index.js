import { createBrowserRouter } from "react-router-dom";
import Contents from "components/Contents";
import Detail from "pages/Detail";
import Main from "pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>error</div>,
    children: [
      { index: true, element: <Contents /> },
      { path: "/detail/:id", element: <Detail /> },
    ],
  },
]);

export default router;