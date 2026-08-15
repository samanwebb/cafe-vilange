import styles from "../../components/GlobalProduct.module.css";
import hotDrinksDecaf from "../../data/hotDrinksDecaf";
import ProductCard from "../../components/ProductCard";

export default function HotDrinksDecaf() {
  return (
    <main className={styles.hotCoffee}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>VILANGE CAFE</span>

          <h1>نوشیدنی‌های گرم (بدون کافئین)</h1>

          <p>نوشیدنی‌های گرم، آرامش‌بخش و بدون کافئین برای هر سلیقه.</p>
        </div>

        <div className={styles.grid}>
          {hotDrinksDecaf.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />

              <ProductCard item={item} category="hot-drinks-decaf" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
