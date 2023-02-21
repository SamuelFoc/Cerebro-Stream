import Link from "next/link";
import styles from "./NextPrev.module.css";

export default function NextPrev(props) {
  return (
    <div className={styles.container}>
      {props?.prev ? (
        <Link href={props.prev}>
          <button className={styles.button}>Previous</button>
        </Link>
      ) : (
        ""
      )}
      {props?.next ? (
        <Link href={props.next}>
          <button className={styles.button}>Next</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
