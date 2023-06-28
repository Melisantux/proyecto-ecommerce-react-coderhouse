import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["section-container"]}>
        <section
          className={`${styles["brand-section"]} nes-container with-title is-centered`}
        >
          <h3 className={`${styles["section-title"]} press-start-font title`}>
            Thank you for visiting PokeCollector!
          </h3>
          <p className={styles["section-text"]}>
            At Poke Collector, we take great pride in curating a wide range of
            authentic and high-quality products, ensuring that every item you
            find here is worthy of your collection.
          </p>
          <p className={styles["section-text"]}>
            Get ready to catch 'em all, relive cherished memories, and create
            new ones with our enchanting range of Pokemon merchandise.
          </p>
          <p>Your adventure begins here!</p>
        </section>
        <section
          className={`${styles["contact-section"]} nes-container with-title is-centered`}
        >
          <h3 className={`${styles["section-title"]} press-start-font title`}>
            Let's Stay in Touch
          </h3>
          <p>
            Any questions? Do not hesitate to ask us. We will always respond
            within 48 working hours.
          </p>
          <button className={styles["contact-btn"]}>Contact Us</button>
        </section>
      </div>

      <section>
        <h3 className={`${styles["section-title"]} press-start-font title`}>
          Be sure to visit our social media pages!
        </h3>
        <div className={styles["sns-container"]}>
          <i className="nes-icon facebook"></i>
          <i className="nes-icon instagram"></i>
          <i className="nes-icon twitter"></i>
          <i className="nes-icon youtube"></i>
        </div>
      </section>
    </div>
  );
};
