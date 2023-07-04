import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["pokemon"]}></div>
    </div>
  );
};
