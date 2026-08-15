import styles from "./Menu.module.css";
import { useNavigate } from "react-router-dom";

import {
  FaCoffee,
  FaGlassWhiskey,
  FaSnowflake,
  FaCocktail,
  FaArrowLeft,
} from "react-icons/fa";

import { GiCakeSlice, GiCoffeeCup, GiFruitBowl } from "react-icons/gi";

import { LuMilk } from "react-icons/lu";

const categories = [
  {
    icon: <FaCoffee />,
    title: "نوشیدنی‌های گرم (کافئین‌دار)",
    desc: "قهوه‌های کلاسیک و نوشیدنی‌های بر پایه اسپرسو.",
    count: "9 آیتم",
    link: "/hot-coffee",
  },
  {
    icon: <GiCoffeeCup />,
    title: "نوشیدنی‌های گرم (بدون کافئین)",
    desc: "نوشیدنی‌های گرم بدون کافئین برای هر سلیقه.",
    count: "7 آیتم",
    link: "/hot-drinks-decaf",
  },
  {
    icon: <FaSnowflake />,
    title: "نوشیدنی‌های سرد (کافئین‌دار)",
    desc: "انتخابی خنک با طعم‌های بر پایه قهوه.",
    count: "9 آیتم",
    link: "/iced-coffee",
  },
  {
    icon: <FaGlassWhiskey />,
    title: "نوشیدنی‌های سرد (بدون کافئین)",
    desc: "نوشیدنی‌های خنک و تازه برای هر لحظه.",
    count: "7 آیتم",
    link: "/iced-matcha",
  },

  {
    icon: <FaGlassWhiskey />,
    title: "نوشیدنی‌های ایرانی (سرد)",
    desc: "نوشیدنی‌های سنتی و خنک با طعم‌های اصیل ایرانی.",
    count: "4 آیتم",
    link: "/iranian-cold-drinks",
  },
  {
    icon: <GiCoffeeCup />,
    title: "چای و دمنوش",
    desc: "چای‌های خوش‌عطر و دمنوش‌های گرم برای یک حال خوب.",
    count: "7 آیتم",
    link: "/tea-herbal",
  },
  {
    icon: <FaCocktail />,
    title: "ماکتل ها",
    desc: "ترکیب‌های خاص و متفاوت بدون الکل.",
    count: "9 آیتم",
    link: "/mocktail",
  },
  {
    icon: <LuMilk />,
    title: "شیک ها",
    desc: "ترکیب‌های خامه‌ای، خنک و دوست‌داشتنی.",
    count: "8 آیتم",
    link: "/shake",
  },
  {
    icon: <GiFruitBowl />,
    title: "اسموتی",
    desc: "ترکیبی از میوه‌های تازه و طبیعی.",
    count: "5 آیتم",
    link: "/smoothie",
  },
  {
    icon: <FaGlassWhiskey />,
    title: "فراپه ها",
    desc: "نوشیدنی‌های خنک و خامه‌ای با طعم‌های متنوع.",
    count: "3 آیتم",
    link: "/frappe",
  },

  {
    icon: <GiCakeSlice />,
    title: "دسر و کیک",
    desc: "دسرهای تازه برای کامل کردن سفارشت.",
    count: "8 آیتم",
    link: "/dessert",
  },
];

export default function Menu() {
  const navigate = useNavigate();

  return (
    <main className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>VILANGE CAFE</span>

          <h1>
            منوی
            <span> ویلانج کافه</span>
          </h1>

          <p>دسته‌بندی مورد نظرت رو انتخاب کن تا منوی کامل اون بخش رو ببینی.</p>
        </div>

        <div className={styles.grid}>
          {categories.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => navigate(item.link)}
            >
              <div className={styles.shine}></div>

              <div className={styles.left}>
                <div className={styles.icon}>{item.icon}</div>

                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>

              <div className={styles.right}>
                <span className={styles.count}>{item.count}</span>

                <div className={styles.arrow}>
                  <FaArrowLeft />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
