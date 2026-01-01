import openai from "../config/openai.js";

export const summarizeArticle = async (
  article,
  userInterests,
  userKeywords
) => {
  if (process.env.AI_MODE === "mock") {
    return `
- ${article.title}
- Relevant to interests: ${userInterests.join(", ")}
- Source: ${article.source}
`;
  }

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.4,
  });

  return response.choices[0].message.content;
};
