import styles from "../../components/GlobalProduct.module.css";
import shakes from "../../data/shake";
import ProductCard from "../../components/ProductCard";

export default function Shake() {
  return (
    <main className={styles.hotCoffee}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>VILANGE CAFE</span>

          <h1>شیک و فراپه</h1>

          <p>شیک‌های خامه‌ای و خوش‌طعم ویلانج، برای یه انتخاب شیرین و خنک.</p>
        </div>

        <div className={styles.grid}>
          {shakes.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />

              <ProductCard item={item} category="shake" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
