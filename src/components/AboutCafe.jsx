import styles from "./AboutCafe.module.css";

export default function AboutCafe() {
  const latitude = 32.388173;
  const longitude = 48.42802;

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  const embedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`;

  return (
    <main className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>VILANGE CAFE</span>

          <h1>درباره کافه</h1>

          <p>
            اگه دنبال یه جای دنج برای قهوه و گپ زدن هستی، خوشحال می‌شیم یه سر به
            ویلانج بزنی.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <span className={styles.label}>شماره تماس</span>

              <a href="tel:09366602389">۰۹۳۶۶۶۰۲۳۸۹</a>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.label}>اینستاگرام</span>

              <a
                href="https://www.instagram.com/vilange_cafe?igsh=YmM1OXZkeTBpc2Fl"
                target="_blank"
                rel="noreferrer"
              >
                vilange_cafe
              </a>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.label}>آدرس کافه</span>

              <p>دزفول، بلوار ولیعصر، نبش فرهنگ ۲۴ غربی</p>
            </div>

            <a
              className={styles.mapButton}
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              باز کردن در نقشه
            </a>
          </div>

          <div className={styles.mapCard}>
            <iframe
              src={embedUrl}
              title="موقعیت ویلانج کافه"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
