import HomeLayout from './pages/HomeLayout'
import Landing from './pages/Landing'
import Resume from './components/Resume'
import About from "./components/About"

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
  {
    path: "resume",
    element: <Resume />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App