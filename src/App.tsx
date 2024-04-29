import { useState } from "react";

import { PdfConverter, PdfList, PdfViewer } from "@/components";

import "./App.css";

const App = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const closeViewer = () => {
    setPdfUrl(null);
  };

  return (
    <div className="app">
      <PdfConverter setUrl={setPdfUrl} />
      <div className="w-[initial] relative flex items-center my-0 mx-auto">
        {pdfUrl ? (
          <PdfViewer pdfUrl={pdfUrl} closeViewer={closeViewer} />
        ) : (
          <PdfList setUrl={setPdfUrl} />
        )}
      </div>
    </div>
  );
};

export default App;
