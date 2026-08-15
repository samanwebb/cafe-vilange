import styles from "../../components/GlobalProduct.module.css";
import icedMatcha from "../../data/icedMatcha";
import ProductCard from "../../components/ProductCard";

export default function IcedMatcha() {
  return (
    <main className={styles.hotCoffee}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>VILANGE CAFE</span>

          <h1>آیس ماچا و اسپیرولینا</h1>

          <p>ترکیب‌های خنک و خاص ماچا و اسپیرولینا با طعم‌های متفاوت و تازه.</p>
        </div>

        <div className={styles.grid}>
          {icedMatcha.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />

              <ProductCard item={item} category="iced-matcha" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
