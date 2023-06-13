import { Link } from "react-router-dom";
import styles from "./CategoryNavBar.module.css";

const navLinks = [
  { href: "/category/collectibles", label: "Collectibles" },
  { href: "/category/games", label: "Games" },
  { href: "/category/cards", label: "Cards" },
  { href: "/category/homeware", label: "Homeware" },
  { href: "/category/books", label: "Books" },
  { href: "/category/clothing", label: "Clothing" },
];

export const CategoryNavBar = () => {
  return (
    <div className={styles["main-navbar-container"]}>
      {navLinks.map((category) => {
        return (
          <Link
            key={category.label}
            to={category.href}
            className={`${styles["category"]} nes-pointer`}
          >
            {category.label}
          </Link>
        );
      })}
    </div>
  );
};
