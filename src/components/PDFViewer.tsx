import { useState } from "react";
import { Document, Page } from "react-pdf";

interface PDFViewerProps {
  pdfUrl: string;
  closeViewer: () => void;
}

export const PdfViewer = ({ pdfUrl, closeViewer }: PDFViewerProps) => {
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
    <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
      <Page className="relative" pageNumber={pageNumber}>
        <div>
          {numPages > 1 && (
            <div className="absolute top-0 flex flex-col items-center gap-2 p-2.5 z-10 w-full h-full">
              <p>
                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
              </p>
              <div className="flex gap-2">
                <button disabled={pageNumber <= 1} onClick={previousPage}>
                  Previous
                </button>
                <button disabled={pageNumber >= numPages} onClick={nextPage}>
                  Next
                </button>
              </div>
            </div>
          )}
          <button
            className="absolute top-0 right-0 m-2 z-10"
            onClick={closeViewer}
          >
            Close
          </button>
        </div>
      </Page>
    </Document>
  );
};
