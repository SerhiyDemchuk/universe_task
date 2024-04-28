import { useState } from "react";
import { Document, Page } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

type PDFViewerProps = {
  pdfUrl: string;
};

export const PdfViewer = ({ pdfUrl }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);

  // @ts-ignore
  const onDocumentLoadSuccess = ({ numPages: nextNumPages }): void => {
    setNumPages(nextNumPages);
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div className="w-[initial] relative flex items-center">
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      {numPages > 1 && (
        <div className="absolute top-0 flex flex-col items-center gap-2 p-2.5 z-20 w-full h-full">
          <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
