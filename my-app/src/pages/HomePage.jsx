import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <div className="min-h-[85vh] px-16" id="main-container">
        <h1>Hello world!</h1>
      </div>
      <Footer />
    </>
  );
}
