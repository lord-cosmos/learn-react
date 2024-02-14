import styles from "@/styles/Home.module.css";
import RequestTracker from "./qcomps/shoppingCart";

export default function Home() {
  return (
    <div className={styles.main}>
      <RequestTracker />
    </div>
  );
}
