import React, { FormEvent, useState } from "react";
import * as Form from "@radix-ui/react-form";

import { PdfViewer } from "./components/PDFViewer.tsx";
import { PdfListItem } from "./components/PDFListItem.tsx";

import "./App.css";
import { getPDFItemsFromLocalStorage } from "./shared/helpers.ts";

const url = `${import.meta.env.VITE_API_URL}?apiKey=${import.meta.env.VITE_API_KEY}`;

const App = () => {
  const [text, setText] = useState<string>("");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const pdfItems = getPDFItemsFromLocalStorage();

  const fetchPDF = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          text: text,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("Error fetching PDF:", error);
      return null;
    }
  };

  const submitText = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fetchedUrl = await fetchPDF();
    setPdfUrl(fetchedUrl);

    localStorage.setItem(`PDF-${crypto.randomUUID()}`, fetchedUrl as string);
  };

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const loadPDFFromLocalStorage = (key: string) => {
    setPdfUrl(key);
  };

  return (
    <div className="app">
      <Form.Root onSubmit={submitText} className="main w-1/2">
        <Form.Field className="w-full mb-[10px]" name="text">
          <Form.Control asChild>
            <textarea
              value={text}
              onChange={handleText}
              className="h-[500px] box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white text-amber-950 px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
            Конвертувати в PDF
          </button>
        </Form.Submit>
      </Form.Root>
      {pdfUrl ? (
        <PdfViewer pdfUrl={pdfUrl} />
      ) : (
        <>
          {pdfItems.length ? (
            <div className="flex flex-col items-start justify-center gap-3.5">
              {pdfItems.map((pdf) => (
                <div
                  onClick={() => loadPDFFromLocalStorage(pdf.value as string)}
                  className="flex items-center gap-4 cursor-pointer"
                  key={pdf.id}
                >
                  <PdfListItem id={pdf.id} title={pdf.key} />
                </div>
              ))}
            </div>
          ) : (
            <p className="flex items-center justify-center w-1/2">No PDF...</p>
          )}
        </>
      )}
    </div>
  );
};

export default App;
