// src/app/utils/fetchGeminiResponse.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Generative AI client
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function fetchGeminiResponse(userInput, context) {
  try {
    // Get the generative model (e.g., "gemini-pro" or "text-bison-001")
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Combine user input and context into a single prompt
    const prompt = `${userInput}\n\nContext: ${JSON.stringify(context)}`;

    // Generate a response
    const result = await model.generateContent(prompt);
    const response = await result.response;

    // Extract and return the generated text
    const generatedText = response.text();
    return generatedText;
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    return "Sorry, I encountered an error. Please try again later.";
  }
}
