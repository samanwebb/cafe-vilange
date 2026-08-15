import espressoFrappuccino from "../assets/images/frappe/espresso-frappuccino.png";
import mochaFrappuccino from "../assets/images/frappe/mocha-frappuccino.png";
import caramelFrappuccino from "../assets/images/frappe/caramel-frappuccino.png";

const frappes = [
  {
    id: 1,
    name: "اسپرسو فراپاچینو",
    englishName: "Espresso Frappuccino",
    image: espressoFrappuccino,
    price: "",
    desc: "",
    ingredients: "اسپرسو، شیر، یخ، بستنی وانیلی",
    caffeine: "مقدار کافئین: زیاد",
    bitterness: "★★★☆☆",
  },

  {
    id: 2,
    name: "موکا فراپاچینو",
    englishName: "Mocha Frappuccino",
    image: mochaFrappuccino,
    price: "",
    desc: "",
    ingredients: "اسپرسو، شیر، شکلات، یخ و بستنی",
    caffeine: "مقدار کافئین: متوسط",
    bitterness: "★★☆☆☆",
  },

  {
    id: 3,
    name: "کارامل فراپاچینو",
    englishName: "Caramel Frappuccino",
    image: caramelFrappuccino,
    price: "",
    desc: "",
    ingredients: "اسپرسو، شیر، کارامل، یخ و بستنی",
    caffeine: "مقدار کافئین: کم",
    bitterness: "★☆☆☆☆",
  },
];

export default frappes;
