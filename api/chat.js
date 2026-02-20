export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // eslint-disable-next-line no-undef
        Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "Sos Leia, asistente virtual de Junín Autismo. Respondé de manera clara, cálida y profesional sobre autismo y leonismo.",
          },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();

    const reply = data.choices[0].message.content;

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error en el servidor" }),
      { status: 500 }
    );
  }
}