import styles from "@/styles/Home.module.css";
import FeedbackForm from "./qcomps/thankYouCrash";

export default function Home() {
  return (
    <div className={styles.main}>
      <FeedbackForm />
    </div>
  );
}
