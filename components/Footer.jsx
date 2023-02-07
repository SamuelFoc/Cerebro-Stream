import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row80}>
        <div className={styles.column}>
          <strong className={styles.strongText}>Contact on maintainer</strong>
          <p className={styles.basicText}>sipikal.portfolio@gmail.com</p>
        </div>
        <div className={styles.column}>
          <strong className={styles.strongText}>
            LinkedIn profile of maintainer
          </strong>
          <p className={styles.basicText}>
            https://linkedin.com/samuel-sipikal/in
          </p>
        </div>
        <div className={styles.column}>
          <strong className={styles.strongText}>Used sources</strong>
          <p className={styles.basicText}>React, NextJS, Vercel</p>
        </div>
      </div>
      <div className={styles.row20}>
        <p className={styles.createdByText}>
          {" "}
          © 2023 This page was created by Ing. Samuel Šipikal
        </p>
      </div>
    </footer>
  );
}
