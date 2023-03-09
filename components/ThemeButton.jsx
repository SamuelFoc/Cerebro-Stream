import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import styles from "./ThemeButton.module.css";

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      {theme === "dark" ? (
        <button className={styles.button} onClick={() => setTheme("light")}>
          <FontAwesomeIcon icon={faLightbulb} />
        </button>
      ) : (
        <button className={styles.button} onClick={() => setTheme("dark")}>
          <FontAwesomeIcon icon={faMoon} />
        </button>
      )}
    </div>
  );
}
