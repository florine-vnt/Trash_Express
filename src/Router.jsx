import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import DisclaimerPage from "./pages/DisclaimerPage";
import DetailPage from "./pages/DetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () =>
          fetch(
            `https://my-json-server.typicode.com/florine-vnt/api-trash/dechetterie/`
          ),
      },
      {
        path: "/disclaimer",
        element: <DisclaimerPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
        loader: ({ params }) =>
          fetch(
            `https://my-json-server.typicode.com/florine-vnt/api-trash/dechetterie/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
