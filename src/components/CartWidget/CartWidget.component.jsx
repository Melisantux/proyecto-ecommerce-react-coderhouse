import styles from "./CartWidget.module.css";

export const CartWidget = () => {
  return (
    <div className={styles["container"]}>
      <span className="material-symbols-outlined icon nes-pointer">
        shopping_cart
      </span>
      <span className={styles["notification"]}>69</span>
    </div>
  );
};
