import styles from "./Article.module.css";

export default function Article(props) {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>{props.title}</h2>
      <div
        className={styles.articleContainer}
        dangerouslySetInnerHTML={{ __html: props.article }}
      ></div>
      {/* Two links below are very important for styling of MD and LaTex! */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/markdown-it-texmath/css/texmath.min.css"
      ></link>
    </div>
  );
}
