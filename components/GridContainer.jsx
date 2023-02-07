import styles from "./GridContainer.module.css";
import ItemBox from "./ItemBox";

export default function GridContainer(props) {
  return (
    <div className={styles.gridContainer}>
      <h2 className={styles.gridTitle}>{props.gridTitle}</h2>
      <div className={styles.grid}>
        {props?.items?.map((item) => {
          return (
            <ItemBox
              key={item.title}
              title={item.title}
              img={item.img}
              directUrl={item?.directUrl}
              baseUrl={props?.baseUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
