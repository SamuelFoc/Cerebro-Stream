import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import styles from "./Layout.module.css";
import LabButton from "./LabButton";

export default function Layout({ children }) {
  return (
    <div>
      <NavigationBar
        src="/images/Logo.png"
        hrefPrefix="/Subjects"
        items={["BackEnd", "FrontEnd"]}
      />
      <main className={styles.mainContainer}>{children}</main>
      <LabButton />
      <Footer />
    </div>
  );
}
