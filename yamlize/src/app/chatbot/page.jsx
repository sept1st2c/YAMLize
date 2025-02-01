// src/app/chatbot/page.jsx
"use client"; // Add this directive for client-side functionality

import { useState } from "react";
import { fetchGeminiResponse } from "../utils/fetchGeminiResponse";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]); // Stores the conversation history
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add user message to the chat history
    const userMessage = { text: input, sender: "user" };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Clear input
    setInput("");

    // Call Google Generative AI API with user input and conversation history
    const botResponse = await fetchGeminiResponse(input, updatedMessages);

    // Add bot response to the chat history
    const botMessage = { text: botResponse, sender: "bot" };
    setMessages([...updatedMessages, botMessage]);
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <strong>{msg.sender}:</strong> {msg.text}
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
