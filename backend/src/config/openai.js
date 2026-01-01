import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log("OPENAI KEY:", process.env.OPENAI_API_KEY);

export default openai;
