import Link from "next/link";
import styles from "./LabButton.module.css";

export default function LabButton() {
  return (
    <div className={styles.container}>
      <Link href="/Lab" className={styles.text}>
        LAB
      </Link>
    </div>
  );
}
