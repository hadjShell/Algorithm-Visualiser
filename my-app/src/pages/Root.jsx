import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <div
        className="min-h-[85vh] px-16 grid grid-cols-1 place-content-center"
        id="main-container"
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
