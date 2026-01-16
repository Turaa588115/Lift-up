import type { NextApiRequest, NextApiResponse } from "next";

const FALLBACK_NL = [
  "Kleine stappen zijn ook vooruitgang.",
  "Jij bent sterker dan je denkt.",
  "Elke dag is een nieuwe kans.",
  "Adem in, adem uit – je kunt dit.",
  "Vandaag is een goed moment om te beginnen."
];

const FALLBACK_EN = [
  "Small steps still move you forward.",
  "You are stronger than you think.",
  "Every day is a new chance.",
  "Breathe in, breathe out — you've got this.",
  "Today is a good time to start."
];

const BANNED = [
  // Simpele moderatiefilter (voorbeeld)
  "haat", "dom", "stom", "suicide", "zelfmoord", "racist", "geweld"
];

function moderate(text: string): boolean {
  const lc = text.toLowerCase();
  return !BANNED.some((w) => lc.includes(w));
}

async function generateWithAI(lang: string): Promise<string | null> {
  const provider = process.env.AI_PROVIDER;
  const key = process.env.OPENAI_API_KEY;
  if (provider !== "openai" || !key) return null;

  try {
    const prompt =
      lang === "nl"
        ? "Genereer één korte, veilige, positieve motiverende quote in het Nederlands (max 18 woorden)."
        : "Generate one short, safe, positive motivational quote in English (max 18 words).";

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that generates short, positive, safe motivational quotes."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 50
      })
    });

    if (!resp.ok) return null;
    const data = await resp.json();
    const text = data.choices?.[0]?.message?.content?.trim() || "";
    if (!text || !moderate(text)) return null;
    return text.replace(/^"|"$/g, "");
  } catch {
    return null;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const lang = (req.query.lang as string) || "nl";
  const pool = lang === "en" ? FALLBACK_EN : FALLBACK_NL;

  let text = await generateWithAI(lang);
  if (!text) {
    text = pool[Math.floor(Math.random() * pool.length)];
  }

  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json({ text, lang, ai: !!process.env.OPENAI_API_KEY });
}
