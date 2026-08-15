import styles from "../../components/GlobalProduct.module.css";
import smoothies from "../../data/smoothie";
import ProductCard from "../../components/ProductCard";

export default function Smoothie() {
  return (
    <main className={styles.hotCoffee}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>VILANGE CAFE</span>

          <h1>اسموتی</h1>

          <p>
            ترکیبی از میوه‌های تازه و طعم‌های طبیعی برای یه انتخاب خنک و
            خوش‌طعم.
          </p>
        </div>

        <div className={styles.grid}>
          {smoothies.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />

              <ProductCard item={item} category="smoothie" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
