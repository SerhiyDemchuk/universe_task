const url = `${import.meta.env.VITE_API_URL}?apiKey=${import.meta.env.VITE_API_KEY}`;

export const postPDF = async (data: string) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        text: data,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const blob = await response.blob();

    const reader = new FileReader();
    reader.onload = function (event) {
      const pdfContent = event!.target!.result;

      localStorage.setItem(`PDF-${crypto.randomUUID()}`, pdfContent as string);
    };
    reader.readAsDataURL(blob);

    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error fetching PDF:", error);
    return null;
  }
};
