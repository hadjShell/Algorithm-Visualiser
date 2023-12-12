import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <header>
      <section>
        <img src="/logo.png" alt="Logo" />
        <p>Algorithm Visualiser</p>
      </section>
      <nav>
        <ul>
          <li>
            <NavLink>Link 1</NavLink>
          </li>
          <li>
            <NavLink>Link 2</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
