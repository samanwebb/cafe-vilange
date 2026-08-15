import { useState } from "react";
import styles from "./GlobalProduct.module.css";

export default function ProductCard({ item, category }) {
  const storageKey = `vilange-products-${category}`;

  const getSavedProduct = () => {
    try {
      const savedProducts = JSON.parse(
        localStorage.getItem(storageKey) || "[]",
      );

      const savedProduct = savedProducts.find(
        (savedItem) => savedItem.id === item.id,
      );

      return savedProduct || item;
    } catch {
      return item;
    }
  };

  const [product, setProduct] = useState(getSavedProduct);
  const [isEditing, setIsEditing] = useState(false);

  const isAdmin = localStorage.getItem("vilange-admin-auth") === "true";

  const [form, setForm] = useState(() => {
    const savedProduct = getSavedProduct();

    return {
      name: savedProduct?.name || "",
      englishName: savedProduct?.englishName || "",
      price: savedProduct?.price || "",
      ingredients: savedProduct?.ingredients || "",
    };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openEdit = () => {
    if (!isAdmin) {
      return;
    }

    setForm({
      name: product?.name || "",
      englishName: product?.englishName || "",
      price: product?.price || "",
      ingredients: product?.ingredients || "",
    });

    setIsEditing(true);
  };

  const saveChanges = () => {
    if (!isAdmin) {
      setIsEditing(false);
      return;
    }

    const updatedProduct = {
      ...product,
      name: form.name,
      englishName: form.englishName,
      price: form.price,
      ingredients: form.ingredients,
    };

    try {
      const savedProducts = JSON.parse(
        localStorage.getItem(storageKey) || "[]",
      );

      const productExists = savedProducts.some(
        (savedItem) => savedItem.id === product.id,
      );

      let updatedProducts;

      if (productExists) {
        updatedProducts = savedProducts.map((savedItem) =>
          savedItem.id === product.id ? updatedProduct : savedItem,
        );
      } else {
        updatedProducts = [...savedProducts, updatedProduct];
      }

      localStorage.setItem(storageKey, JSON.stringify(updatedProducts));

      setProduct(updatedProduct);
      setIsEditing(false);
    } catch (error) {
      console.error("خطا در ذخیره محصول:", error);
    }
  };

  return (
    <div className={styles.info}>
      <div className={styles.top}>
        <div>
          <h3>{product.name}</h3>
          <small>{product.englishName}</small>
        </div>
      </div>

      {product.ingredients && (
        <span className={styles.ingredients}>{product.ingredients}</span>
      )}

      <div className={styles.tags}>
        {product.caffeine && <span>{product.caffeine}</span>}
        {product.bitterness && <span>{product.bitterness}</span>}
        {product.size && <span>{product.size}</span>}
        {product.milk && <span>{product.milk}</span>}
      </div>

      <div className={styles.bottom}>
        <strong>
          {product.price ? `${product.price} تومان` : "قیمت ثبت نشده"}
        </strong>

        {isAdmin && (
          <button type="button" onClick={openEdit}>
            ویرایش
          </button>
        )}
      </div>

      {isAdmin && isEditing && (
        <div className={styles.editBox}>
          <h4>ویرایش محصول</h4>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="نام محصول"
          />

          <input
            type="text"
            name="englishName"
            value={form.englishName}
            onChange={handleChange}
            placeholder="نام انگلیسی"
          />

          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="قیمت"
          />

          <textarea
            name="ingredients"
            value={form.ingredients}
            onChange={handleChange}
            placeholder="ترکیبات"
          />

          <div className={styles.editButtons}>
            <button type="button" onClick={saveChanges}>
              ذخیره تغییرات
            </button>

            <button type="button" onClick={() => setIsEditing(false)}>
              لغو
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
