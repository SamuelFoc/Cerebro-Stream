import Link from "next/link";
import styles from "./ItemBox.module.css";

export default function ItemBox(props) {
  let href;

  if (props?.directUrl) {
    href = props.directUrl;
  } else {
    href = props.baseUrl ? props.baseUrl + "/" + props.title : props.title;
  }

  return (
    <Link href={href} className={styles.container}>
      <h5 className={styles.title}>{props.title}</h5>
      <img className={styles.image} src={`/images/${props.img}`} alt="image" />
    </Link>
  );
}
