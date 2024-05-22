import styles from "./Container.module.css";

// structural component
// take container and enclose foodlist within container, so we may open detailed recipes on the right side\
export default function Container({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
