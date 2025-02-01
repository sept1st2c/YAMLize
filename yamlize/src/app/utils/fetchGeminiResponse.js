import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

// Initialize the Generative AI client
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

// Load YAML structure data from `/data/data.json`
const dataPath = path.join(process.cwd(), "data", "data.json");
const yamlReference = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

export async function fetchGeminiResponse(userInput, conversationHistory) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Format conversation history as context
    const history = conversationHistory
      .map((msg) => `${msg.sender}: ${msg.text}`)
      .join("\n");

    // Construct the AI prompt
    const prompt = `
      You are an AI assistant helping users generate valid Spheron Infrastructure Composition Language (ICL) YAML configurations.
      Your task is to convert user requirements into valid YAML while ensuring correctness.

      - Use the YAML structure reference below:
      ${JSON.stringify(yamlReference, null, 2)}

      - Correct any mistakes and validate the YAML.
      - Make improvements if needed based on best practices.
      - If the user asks for modifications, refine the YAML accordingly.

      Conversation History:
      ${history}

      New User Input: ${userInput}

      Respond only with the YAML code. And if the input is not related to it, reply with "Please elaborate on the following instruction"
    `;

    // Generate a response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedYaml = response.text();

    // Validate YAML format
    try {
      yaml.load(generatedYaml);
    } catch (yamlError) {
      console.error("Generated YAML is invalid:", yamlError);
      return "Error: The generated YAML is invalid. Please refine your request.";
    }

    return generatedYaml;
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    return "Sorry, I encountered an error. Please try again later.";
  }
}
