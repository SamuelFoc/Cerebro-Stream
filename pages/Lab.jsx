import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import styles from "../styles/Lab.module.css";
import ThemeButton from "../components/ThemeButton";

export default function Lab() {
  return (
    <>
      <NavigationBar
        src="/images/Logo.png"
        hrefPrefix="/Subjects"
        items={["BackEnd", "FrontEnd"]}
      />
      <ThemeButton />
      <div className={styles.container}>
        <h1 className={styles.title}>📡 Laboratory ⚗️</h1>
        <iframe
          className={styles.sandbox}
          src="https://codesandbox.io/embed/html-1xn1s6?fontsize=14&hidenavigation=1&theme=dark"
          title="HTML"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
