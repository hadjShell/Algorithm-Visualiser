import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <div className="px-16" id="main-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
