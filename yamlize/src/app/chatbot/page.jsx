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
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded-lg max-w-xs ${
              msg.sender === "user" ? "bg-blue-100 self-end" : "bg-gray-100"
            }`}
          >
            <strong className="block text-xs text-gray-500">
              {msg.sender === "user" ? "You" : "Bot"}
            </strong>
            <p className="text-sm text-gray-800">{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
