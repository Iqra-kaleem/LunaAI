import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAU0BHa6wuCAHIxBJReaXiQLaFwd4gYw4k"); // ⚠️ unsafe for production

export const generateGeminiResponse = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  return result.response.text();
};