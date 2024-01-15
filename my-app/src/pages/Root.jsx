import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Root() {
  const [nav, setNav] = useState("");

  useEffect(() => {
    setNav(localStorage.getItem("nav"));
    return () => {
      setNav("");
      localStorage.removeItem("nav");
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("nav", nav);
  }, [nav]);

  return (
    <>
      <MainNav nav={nav} setNav={setNav} />
      <div
        className="px-16 min-h-[92.5vh] flex flex-col justify-between"
        id="main-container"
      >
        <Outlet context={[nav, setNav]} />
        <Footer />
      </div>
    </>
  );
}
