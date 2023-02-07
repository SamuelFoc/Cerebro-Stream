import styles from "./TitleTag.module.css";

export default function TitleTag(props) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1 className={styles.title}>{props.title}</h1>
      </div>
      <div className={styles.row}>
        <img
          className={styles.image}
          src={`/images/${props.src}`}
          alt="image"
        />
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  );
}
