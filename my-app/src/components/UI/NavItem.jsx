import { NavLink } from "react-router-dom";

const CLASS =
  "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600";
export default function NavItem({ children, ...props }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? CLASS + " text-white bg-gray-900 dark:text-white dark:bg-gray-600"
            : CLASS
        }
        {...props}
      >
        {children}
      </NavLink>
    </li>
  );
}
