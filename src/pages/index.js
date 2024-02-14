import styles from "@/styles/Home.module.css";
import List from "./qcomps/artistsRemoveArr";

export default function Home() {
  return (
    <div className={styles.main}>
      <List />
    </div>
  );
}
