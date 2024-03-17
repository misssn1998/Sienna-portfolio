import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const HomeLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default HomeLayout;
