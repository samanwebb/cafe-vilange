import styles from "../../components/GlobalProduct.module.css";
import frappes from "../../data/frappe";
import ProductCard from "../../components/ProductCard";

export default function Frappe() {
  return (
    <main className={styles.hotCoffee}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>VILANGE CAFE</span>

          <h1>فراپه</h1>

          <p>نوشیدنی‌های خنک و خامه‌ای با طعم‌های محبوب قهوه و شکلات</p>
        </div>

        <div className={styles.grid}>
          {frappes.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />

              <ProductCard item={item} category="frappe" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
