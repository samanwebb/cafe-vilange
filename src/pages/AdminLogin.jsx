import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminLogin.module.css";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "vilange-admin" && password === "Vilange@2026#Cafe") {
      localStorage.setItem("vilange-admin-auth", "true");
      navigate("/admin");
    } else {
      setError("نام کاربری یا رمز عبور اشتباهه");
    }
  };

  return (
    <main className={styles.adminPage}>
      <form className={styles.loginCard} onSubmit={handleLogin}>
        <div className={styles.logo}>
          <span>VILANGE CAFE</span>

          <h1>پنل مدیریت ویلانج</h1>

          <p>ورود مدیر کافه</p>
        </div>

        <div className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
          />

          <input
            className={styles.input}
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />

          {error && <p className={styles.error}>{error}</p>}

          <button className={styles.loginButton} type="submit">
            ورود به پنل
          </button>

          <button
            className={styles.backButton}
            type="button"
            onClick={() => navigate("/")}
          >
            بازگشت به سایت
          </button>
        </div>
      </form>
    </main>
  );
}
