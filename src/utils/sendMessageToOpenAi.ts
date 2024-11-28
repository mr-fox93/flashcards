import useStore from "../store";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function sendMessageToOpenAI() {
  const { category, setResponseText } = useStore.getState();

  const APIBody = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: `Podaj mi 5 fiszek do angielskiego o kategorii: ${category}, stosuj Angielski - Polski tłumaczenie tylko, poziom B2`,
      },
    ],
    max_tokens: 100,
    temperature: 0.7,
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(APIBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Błąd API:", errorData);
      return;
    }

    const data = await response.json();
    setResponseText(data.choices[0].message.content.trim());
  } catch (error) {
    console.error("Wystąpił błąd:", error);
  }
}
