import styles from "../../components/GlobalProduct.module.css";
import icedCoffee from "../../data/icedCoffee";
import ProductCard from "../../components/ProductCard";

export default function IcedCoffee() {
  return (
    <main className={styles.hotCoffee}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>VILANGE CAFE</span>

          <h1>نوشیدنی‌های سرد (کافئین‌دار)</h1>

          <p>
            قهوه‌های سرد و نوشیدنی‌های خنک بر پایه اسپرسو، مناسب روزهای گرم.
          </p>
        </div>

        <div className={styles.grid}>
          {icedCoffee.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />

              <ProductCard item={item} category="iced-coffee" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
