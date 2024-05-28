import { createBrowserRouter } from "react-router-dom";
import ActivityList from "../activity/components/ActivityList";
import ActivityForm from "../activity/components/ActivityForm";
import Activity from "../activity/activity";
import Layout from "../shared/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "list",
        element: <Activity />,
        children: [
          {
            index: true,
            element: <ActivityList />,
          },
          {
            path: "form",
            element: <ActivityForm />,
          },
        ],
      },
    ],
  },
]);

export default router;
