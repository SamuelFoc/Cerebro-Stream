import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <NavigationBar
        src="/images/Logo.png"
        title={{ firstLine: "Get Smarter", secondLine: "Together" }}
        hrefPrefix="/Subjects"
        items={["Math", "Physics", "WebDev", "Datascience"]}
      />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </div>
  );
}
