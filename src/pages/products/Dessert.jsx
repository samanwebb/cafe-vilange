import styles from "../../components/GlobalProduct.module.css";
import desserts from "../../data/dessert";
import ProductCard from "../../components/ProductCard";

export default function Dessert() {
  return (
    <main className={styles.hotCoffee}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>VILANGE CAFE</span>

          <h1>دسر و کیک</h1>

          <p>دسرها و کیک‌های تازه ویلانج برای یه انتخاب شیرین و خوشمزه.</p>
        </div>

        <div className={styles.grid}>
          {desserts.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />

              <ProductCard item={item} category="dessert" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
