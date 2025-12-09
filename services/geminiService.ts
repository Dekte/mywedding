// The official Google GenAI SDK is intended for server-side use. Importing it
// at the top-level in browser-built code can cause runtime errors during
// bundling or in the browser. We perform a runtime guard and dynamic import so
// that when this module is bundled for the browser it doesn't attempt to
// initialize a Node-only client.

export const generateGuestbookResponse = async (name: string, message: string): Promise<string> => {
  // If running in the browser, avoid calling the server-side SDK.
  if (typeof window !== 'undefined') {
    return "(AI is disabled in the browser) Thank you for your message!";
  }

  try {
    const { GoogleGenAI } = await import('@google/genai');
    const apiKey = process.env.API_KEY || '';
    const ai = new GoogleGenAI({ apiKey });

    const model = 'gemini-2.5-flash';
    const prompt = `
      You are a cool, edgy, Y2K-obsessed wedding bot named "PixelHeart-9000".
      A guest named "${name}" just left this message in the wedding guestbook: "${message}".

      Write a short, fun, slightly chaotic but grateful response.
      Use internet slang from the early 2000s (like LOL, ROFL, xD), maybe some Japanese emoticons (kaomoji), and refer to the wedding as the "ultimate collab" or "system upgrade".
      Keep it under 30 words.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return (response && (response as any).text) || "SYSTEM ERROR: LOVE OVERLOAD xD";
  } catch (error) {
    console.error('AI Generation Error:', error);
    return 'Thanks for the message! (AI is rebooting...)';
  }
};