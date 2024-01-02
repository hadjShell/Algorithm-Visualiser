import Card from "../components/UI/Card";
import sortingImg from "../assets/sort_records.png";
import searchingImg from "../assets/search_text.png";
import recursionImg from "../assets/recursion_spiral_stairs.png";

export default function HomePage() {
  return (
    <>
      <section id="jumptron">
        <div className="py-2 pt-20 px-4 mx-auto max-w-screen-xl text-center">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
            Algorithm Visualiser
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Learn algorithms through animation.
          </p>
        </div>
      </section>

      <section
        id="cards"
        className="px-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 content-center"
      >
        <Card img={searchingImg} name="Searching Algorithms" to=""></Card>
        <Card
          img={sortingImg}
          name="Sorting Algorithms"
          to="sorting/insertion-sort"
        ></Card>
        <Card img={recursionImg} name="Recursion Algorithms"></Card>
      </section>
    </>
  );
}
