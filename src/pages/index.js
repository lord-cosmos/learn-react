import styles from "@/styles/Home.module.css";
import Gallery from "./qcomps/state";

export default function Home() {
  return (
    <div className={styles.main}>
      <Gallery />
    </div>
  );
}
