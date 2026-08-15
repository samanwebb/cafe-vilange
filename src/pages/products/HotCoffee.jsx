import styles from "../../components/GlobalProduct.module.css";
import hotCoffee from "../../data/hotCoffee";
import ProductCard from "../../components/ProductCard";

export default function HotCoffee() {
  return (
    <main className={styles.hotCoffee}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>VILANGE CAFE</span>

          <h1>نوشیدنی‌های گرم (کافئین‌دار)</h1>

          <p>
            قهوه‌های تازه و تخصصی ویلانج، آماده شده از بهترین دانه‌های قهوه.
          </p>
        </div>

        <div className={styles.grid}>
          {hotCoffee.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />

              <ProductCard item={item} category="hot-coffee" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
