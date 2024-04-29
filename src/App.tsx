import { useState } from "react";

import { PdfViewer } from "./components/PDFViewer.tsx";
import { PdfList } from "./components/PDFList.tsx";
import { PdfConverter } from "./components/PDFConverter.tsx";

import "./App.css";

const App = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const loadPDFFromLocalStorage = (key: string) => {
    setPdfUrl(key);
  };

  const closeViewer = () => {
    setPdfUrl(null);
  };

  return (
    <div className="app">
      <PdfConverter setUrl={setPdfUrl} />
      {pdfUrl ? (
        <PdfViewer pdfUrl={pdfUrl} closeViewer={closeViewer} />
      ) : (
        <PdfList loadPDFFromLocalStorage={loadPDFFromLocalStorage} />
      )}
    </div>
  );
};

export default App;
