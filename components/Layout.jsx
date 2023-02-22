import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import styles from "./Layout.module.css";
import LabButton from "./LabButton";
import ThemeButton from "./ThemeButton";

export default function Layout({ children }) {
  return (
    <div>
      <ThemeButton />
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
