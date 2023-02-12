import styles from "./Error.module.css";
import Layout from "./Layout";

export default function Error() {
  return (
    <Layout>
      <div className={styles.errorContainer}>
        <h1>Oops... Some kind of error occured during last operation...</h1>
        <h2>We are so sorry for that 🙏</h2>
      </div>
    </Layout>
  );
}
