import styles from "@/styles/Home.module.css";
import MenuBar from "./qcomps/menuBar";

export default function Home() {
  return (
    <div className={styles.main}>
      <MenuBar />
    </div>
  );
}
