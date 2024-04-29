import React, { FormEvent, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { postPDF } from "../shared/api.ts";

type PDFConverterProps = {
  setUrl: (url: string | null) => void;
};

export const PdfConverter = ({ setUrl }: PDFConverterProps) => {
  const [text, setText] = useState<string>("");

  const submitText = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setText("");

    const fetchedUrl = await postPDF(text);
    setUrl(fetchedUrl);
  };

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
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
        <button className="w-full">Конвертувати в PDF</button>
      </Form.Submit>
    </Form.Root>
  );
};
