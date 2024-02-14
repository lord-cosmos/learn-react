import styles from "@/styles/Home.module.css";

import Scoreboard from "./qcomps/updObjectsForm";

export default function Home() {
  return (
    <div className={styles.main}>
      <Scoreboard />
    </div>
  );
}
