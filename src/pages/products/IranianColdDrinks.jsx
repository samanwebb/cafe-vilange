import styles from "../../components/GlobalProduct.module.css";
import iranianColdDrinks from "../../data/iranianColdDrinks";
import ProductCard from "../../components/ProductCard";

export default function IranianColdDrinks() {
  return (
    <main className={styles.hotCoffee}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>VILANGE CAFE</span>

          <h1>نوشیدنی‌های ایرانی (سرد)</h1>

          <p>نوشیدنی‌های خنک با طعم‌های اصیل و ترکیب‌های اختصاصی ویلانج.</p>
        </div>

        <div className={styles.grid}>
          {iranianColdDrinks.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />

              <ProductCard item={item} category="iranian-cold-drinks" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
