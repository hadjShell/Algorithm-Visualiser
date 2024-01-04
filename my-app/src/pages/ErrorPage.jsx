import { useRouteError } from "react-router-dom";
import classes from "./ErrorPage.module.css";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id={classes.notfound}>
      <div className={classes.notfound}>
        <div className={classes["notfound-404"]}>
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>
          we are sorry, but the page you requested was{" "}
          {error.statusText || error.message}
        </h2>
      </div>
    </div>
  );
}
