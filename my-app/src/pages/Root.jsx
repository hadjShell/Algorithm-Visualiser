import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <div
        className="px-16 min-h-[92.5vh] flex flex-col justify-between"
        id="main-container"
      >
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
