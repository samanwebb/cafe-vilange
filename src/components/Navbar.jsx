import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Vilange</h2>
          <span>Cafe</span>
        </div>

        <nav>
          <ul className={styles.menu}>
            <li>
              <a href="#">خانه</a>
            </li>

            <li>
              <a href="#">منو</a>
            </li>

            <li>
              <a href="#">درباره ما</a>
            </li>

            <li>
              <a href="#">تماس</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
