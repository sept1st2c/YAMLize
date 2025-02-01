// src/app/chatbot/page.jsx
"use client"; // Add this directive for client-side functionality

import { useState } from "react";
import { fetchGeminiResponse } from "../utils/fetchGeminiResponse";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add user message to the chat
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear input
    setInput("");

    // Define context (customize this based on your app's needs)
    const context = {
      user: "traveler",
      destination: "Paris",
      dates: "2023-12-01 to 2023-12-10",
    };

    // Call Google Generative AI API with user input and context
    const botResponse = await fetchGeminiResponse(input, context);

    // Add bot response to the chat
    const botMessage = { text: botResponse, sender: "bot" };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
