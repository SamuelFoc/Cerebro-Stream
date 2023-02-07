import styles from "./RollerTitle.module.css";
import Link from "next/link";

export default function RollerTitle(props) {
  const hrefBase = props.topic
    ? `/Subjects/${props.subject}/${props.topic}/`
    : `/Subjects/${props.subject}/`;
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={props.titleImg} alt="image" />
      </div>
      <div className={styles.rollerContainer}>
        {props?.items?.map((item) => {
          return (
            <Link
              key={item.title}
              href={hrefBase + item.title.replace(" ", "")}
              className={styles.rollerItem}
            >
              <h5 className={styles.rollerItemTitle}>{item.title}</h5>
              <img
                className={styles.rollerItemImage}
                src={"/images/" + item.img}
                alt="item"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
