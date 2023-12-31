import NavItem from "./UI/NavItem";
import { Link } from "react-router-dom";

export default function MainNav({ nav, setNav }) {
  let navigation;
  switch (nav) {
    case "SEARCHING":
      navigation = (
        <>
          <NavItem to="/searching/binary-search">Binary Search</NavItem>
          <NavItem to="/searching/binary-search-tree">
            Binary Search Tree
          </NavItem>
        </>
      );
      break;
    case "SORTING":
      navigation = (
        <>
          <NavItem to="/sorting/insertion-sort">Insertion</NavItem>
          <NavItem to="/sorting/selection-sort">Selection</NavItem>
          <NavItem to="/sorting/quick-sort">Quick</NavItem>
        </>
      );
      break;
    case "RECURSION":
      navigation = (
        <>
          <NavItem to="/searching/binary-search">Binary Search</NavItem>
          <NavItem to="/searching/binary-search-tree">
            Binary Search Tree
          </NavItem>
          <NavItem to="/sorting/quick-sort">Quick Sort</NavItem>
        </>
      );
      break;
    case "":
    default:
      navigation = <></>;
  }

  return (
    <header>
      <nav className="px-[7.5rem] bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={() => setNav("")}
          >
            <img src="/logo.png" className="h-8" alt="Logo" />
            <span className="font-['Biryani'] tracking-wide pt-[6px] self-center text-2xl font-bold whitespace-nowrap dark:text-white">
              Algorithm Visualiser
            </span>
          </Link>

          <div className="w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navigation}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
