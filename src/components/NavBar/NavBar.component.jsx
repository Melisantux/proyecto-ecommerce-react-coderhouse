import { CartWidget } from "../CartWidget/CartWidget.component";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <header>
      <nav className={styles["navbar-container"]}>
        <div>
          <Link to={"/"} className={styles["navbar-link"]}>
            <h2 className={styles["brand"]}>Poké Collector</h2>
          </Link>
        </div>

        <div className={`nes-field ${styles["search-bar"]}`}>
          <label htmlFor="searchBar" className="sr-only">
            Search for products
          </label>
          <input
            type="text"
            id="searchBar"
            className="nes-input press-start-font"
            placeholder="search games, accesories, ..."
          />
          <span className="material-symbols-outlined nes-pointer icon">
            search
          </span>
        </div>
        <div className={`${styles["free-shipping-text"]} press-start-font`}>
          <span className="material-symbols-outlined">package</span>
          FREE WORLDWIDE SHIPPING when spending over U$99.99!
        </div>
        <ul>
          <li>
            <span
              className="material-symbols-outlined icon nes-pointer"
              // TODO agregar arial-label a <Link/> ex: aria-label="My Profile"
            >
              account_box
            </span>
          </li>
          <li>
            <span className="material-symbols-outlined icon nes-pointer">
              help_center
            </span>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
};
