import styles from "./Hero.module.css";
import heroCoffee from "../assets/images/hot-caffee-caf/americano.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
      <div className={styles.blurThree}></div>

      <div className={styles.gridPattern}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.category}>
            انواع قهوه • نوشیدنی‌های گرم • نوشیدنی‌های سرد • دسر
          </span>

          <h1>
            ویلانج
            <br />
            کافه
          </h1>

          <div className={styles.glassCard}>
            <span>پیشنهاد امروز</span>

            <h4>امروز دوست داری چی سفارش بدی؟</h4>

            <p>
              قهوه، نوشیدنی خنک یا یه دسر تازه...
              <br />
              انتخاب با خودته.
            </p>
          </div>

          <small>برای دیدن منوی کامل روی دکمه زیر کلیک کن</small>

          <div className={styles.buttons}>
            <button
              className={styles.primary}
              onClick={() => navigate("/menu")}
            >
              مشاهده منو
            </button>

            <button className={styles.secondary}>درباره کافه</button>
          </div>
        </div>

        <div className={styles.image}>
          <div className={styles.glass}></div>

          <div className={styles.ring}></div>

          <div className={styles.floatingCard1}>
            <span>اسپرسو</span>
          </div>

          <div className={styles.floatingCard2}>
            <span>آیس لاته</span>
          </div>

          <div className={styles.floatingCard3}>
            <span>چیزکیک</span>
          </div>

          <div className={styles.floatingCard4}>
            <span>موکا</span>
          </div>

          <div className={styles.floatingCircle}></div>

          <div className={styles.floatingCircle2}></div>

          <div className={styles.line}></div>

          <div className={styles.line2}></div>

          <div className={styles.dots}></div>

          <img src={heroCoffee} alt="Coffee" />
        </div>
      </div>

      <div className={styles.scroll}>
        <span></span>
      </div>
    </section>
  );
}
