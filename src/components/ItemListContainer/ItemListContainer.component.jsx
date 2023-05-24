import styles from "./ItemListContainer.module.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className={`${styles["container"]} nes-container is-rounded`}>
      <h1 className="press-start-font">Welcome to Poke Collector!</h1>
      <p>{greeting}</p>
      <p>Your adventure begins here!</p>
    </div>
  );
};
