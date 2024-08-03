import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "@components/layout/BaseLayout";
import MyProject from "@pages/MyProject";
import MyShelf from "@pages/MyShelf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/project",
        element: <MyProject />,
      },
      {
        path: "/shelf",
        element: <MyShelf />,
      },
    ],
  },
]);

export default router;
