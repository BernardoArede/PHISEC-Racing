  import { useEffect, useState } from "react";
  import styles from "../styles/Team25.module.css";
  import Header from "./Header.js";

  const ph25 = () => {
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    useEffect(() => {
      const targetDate = new Date("2025-06-11T00:00:00").getTime();

      const updateTimer = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          setTimeLeft({ days, hours, minutes, seconds });
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      };

      const timerInterval = setInterval(updateTimer, 1000);
      return () => clearInterval(timerInterval);
    }, []);

    return (
      <div className={styles.teamPage}>
        <Header />

        {/* Título e data */}
        <section className={styles.countdownSection}>
          <h1 className={styles.title}>ROLLOUT</h1>
          <h3 className={styles.date}>June 11</h3>

          {/* Countdown */}
          <div className={styles.countdown}>
            <div className={styles.countdownItem}>
              <span className={styles.number}>{timeLeft.days}</span>
              <p className={styles.label}>Days</p>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.number}>{timeLeft.hours}</span>
              <p className={styles.label}>Hours</p>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.number}>{timeLeft.minutes}</span>
              <p className={styles.label}>Minutes</p>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.number}>{timeLeft.seconds}</span>
              <p className={styles.label}>Seconds</p>
            </div>
          </div>
        </section>

      </div>
    );
  };

  export default ph25;