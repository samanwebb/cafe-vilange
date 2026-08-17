import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AboutCafe from "./components/AboutCafe";
import HotCoffee from "./pages/products/HotCoffee";
import HotDrinksDecaf from "./pages/products/HotDrinksDecaf";
import IcedCoffee from "./pages/products/IcedCoffee";
import IcedMatcha from "./pages/products/IcedMatcha";
import IranianColdDrinks from "./pages/products/IranianColdDrinks";
import TeaHerbal from "./pages/products/TeaHerbal";
import Mocktail from "./pages/products/Mocktail";
import Shake from "./pages/products/Shake";
import Smoothie from "./pages/products/Smoothie";
import Frappe from "./pages/products/Frappe";
import Dessert from "./pages/products/Dessert";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about-cafe" element={<AboutCafe />} />
      <Route path="/hot-coffee" element={<HotCoffee />} />
      <Route path="/hot-drinks-decaf" element={<HotDrinksDecaf />} />
      <Route path="/iced-coffee" element={<IcedCoffee />} />
      <Route path="/iced-matcha" element={<IcedMatcha />} />
      <Route path="/iranian-cold-drinks" element={<IranianColdDrinks />} />
      <Route path="/tea-herbal" element={<TeaHerbal />} />
      <Route path="/mocktail" element={<Mocktail />} />
      <Route path="/shake" element={<Shake />} />
      <Route path="/smoothie" element={<Smoothie />} />
      <Route path="/frappe" element={<Frappe />} />
      <Route path="/dessert" element={<Dessert />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
