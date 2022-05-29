import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.loader_square}></div>
      <div className={styles.loader_square}></div>
      <div className={styles.loader_square}></div>
      <div className={styles.loader_square}></div>
      <div className={styles.loader_square}></div>
      <div className={styles.loader_square}></div>
      <div className={styles.loader_square}></div>
    </div>
  );
}
