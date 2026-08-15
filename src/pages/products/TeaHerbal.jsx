import styles from "../../components/GlobalProduct.module.css";
import teaHerbal from "../../data/teaHerbal";
import ProductCard from "../../components/ProductCard";

export default function TeaHerbal() {
  return (
    <main className={styles.hotCoffee}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>VILANGE CAFE</span>

          <h1>چای و دمنوش</h1>

          <p>چای‌های خوش‌عطر و دمنوش‌های آرامش‌بخش ویلانج برای هر حال‌و‌هوا.</p>
        </div>

        <div className={styles.grid}>
          {teaHerbal.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />

              <ProductCard item={item} category="tea-herbal" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
