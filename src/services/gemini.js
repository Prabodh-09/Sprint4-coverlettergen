import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const generateCoverLetterAI = async (
  formData,
  resumeText
) => {
const prompt = `
You are an expert HR recruiter and professional career coach.

Write a professional, ATS-friendly cover letter based on the information below.

Candidate Name:
${formData.name}

Job Role:
${formData.role}

Target Company:
${formData.company}

Key Skills:
${formData.skills}

Resume Content:
${resumeText}

Instructions:
- Use information from the resume wherever relevant.
- Do not invent experience or qualifications.
- Keep the tone professional and confident.
- Keep the cover letter between 250–350 words.
- Address it to the hiring manager.
- Explain why the candidate is a good fit for the role.
- Return the response in Markdown format using proper paragraphs.
- Do not wrap the response in code blocks.
`;
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  return response.text;
};