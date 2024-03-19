import HomeLayout from './pages/HomeLayout'
import Landing from './pages/Landing'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App