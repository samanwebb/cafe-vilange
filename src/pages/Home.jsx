import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [adminClicks, setAdminClicks] = useState(0);

  const handleLogoClick = () => {
    const nextClicks = adminClicks + 1;

    setAdminClicks(nextClicks);

    if (nextClicks >= 3) {
      navigate("/admin-login");
      setAdminClicks(0);
    }
  };

  return (
    <>
      <Hero />

      <footer
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 20px",
          marginTop: "40px",
        }}
      >
        <button
          type="button"
          onClick={handleLogoClick}
          aria-label="VILANGE CAFE"
          style={{
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.15)",
            fontSize: "11px",
            cursor: "pointer",
            padding: "8px 12px",
            transition: "opacity 0.2s ease",
          }}
        >
          VILANGE CAFE
        </button>
      </footer>
    </>
  );
}
