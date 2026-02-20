import { useState } from "react";
import "./floatingChat.css";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
    ]);

    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.reply },
    ]);
  };

  return (
    <>
      {/* Botón flotante */}
      <div className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        
          <strong>🦁</strong>
 
  
      </div>

      {/* Ventana */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            
            <span>Hola, soy Leia 👩🏽‍💻. </span>
            <span>¡Hablemos de autismo y Leonismo cuando quieras!.</span>


            <span onClick={() => setIsOpen(false)} className="close">✖</span>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.role}`}>
                {msg.content}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribí tu consulta..."
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
}