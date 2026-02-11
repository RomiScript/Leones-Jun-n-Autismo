// WhatsAppButton.jsx
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "542364225469"; // tu número
  const message = "Hola! Quiero más info"; // mensaje opcional

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        textDecoration: "none",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >

      <FaWhatsapp />
    </a>
  );
}