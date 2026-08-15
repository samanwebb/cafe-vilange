import styles from "../../components/GlobalProduct.module.css";
import ProductCard from "../../components/ProductCard";
import mocktails from "../../data/mocktail";

export default function Mocktail() {
  return (
    <main className={styles.hotCoffee}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>VILANGE CAFE</span>

          <h1>ماکتل</h1>

          <p>ترکیب‌های خنک و خاص ویلانج، بدون الکل و مناسب برای هر سلیقه.</p>
        </div>

        <div className={styles.grid}>
          {mocktails.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />

              <ProductCard item={item} category="mocktail" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
