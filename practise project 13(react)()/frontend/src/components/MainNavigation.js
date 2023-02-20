import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <p>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink
                to="events"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                EventPage
              </NavLink>
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
