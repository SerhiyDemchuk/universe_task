import "./App.css";
import * as Form from "@radix-ui/react-form";
import { FormEvent, useState } from "react";

const App = () => {
  const [message, setMessage] = useState<string>("");

  const submitMessage = (event: FormEvent) => {
    event.preventDefault();
    console.log("message: ", message);
  };

  return (
    <div className="app">
      <Form.Root onSubmit={submitMessage} className="main w-1/2">
        <Form.Field className="w-full mb-[10px]" name="text">
          <Form.Control asChild>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="h-[500px] box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
            Конвертувати в PDF
          </button>
        </Form.Submit>
      </Form.Root>
      <div className="w-1/2">PDF</div>
    </div>
  );
};

export default App;
