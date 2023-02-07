import Layout from "../components/Layout.jsx";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <img src={"/images/homeImage.png"} className={styles.homeImage} />
      <h1 className={styles.welcome}>WELCOME</h1>
      <h1 className={styles.titleText}>Let's explore our page</h1>
      <div className={styles.circle}>
        <svg
          width="850"
          height="850"
          viewBox="0 0 850 850"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="425" cy="425" r="425" fill="#3383FF" />
        </svg>
      </div>
    </Layout>
  );
}
