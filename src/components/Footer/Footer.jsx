import styles from "./style.module.css";
const openTime = 12;
const closeTime = 22;
export default function Footer() {
  const currentTime = new Date().getHours();
  const isOpen = currentTime >= openTime && currentTime <= closeTime;
  return (
    <div className={styles.footer}>
      <div className={styles.order}>
        <p>
          {`We're open from ${openTime}:00 to ${closeTime}:00. Come visit us or order online.`}
        </p>
        {isOpen && (
          <button type="button" className={styles.btn}>
            Order
          </button>
        )}
      </div>
    </div>
  );
}
