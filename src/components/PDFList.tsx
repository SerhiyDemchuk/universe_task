import { PdfListItem } from "./PDFListItem.tsx";
import { getPDFItemsFromLocalStorage } from "../shared/helpers.ts";

type PDFListProps = {
  loadPDFFromLocalStorage: (value: string) => void;
};

export const PdfList = ({ loadPDFFromLocalStorage }: PDFListProps) => {
  const pdfItems = getPDFItemsFromLocalStorage();

  return (
    <>
      {pdfItems.length ? (
        <div className="flex flex-col items-start justify-center gap-3.5 h-[500px] overflow-y-auto">
          {pdfItems.map((pdf) => (
            <div
              onClick={() => loadPDFFromLocalStorage(pdf.value as string)}
              className="flex items-center gap-4 cursor-pointer"
              key={pdf.id}
            >
              <PdfListItem pdf={pdf} />
            </div>
          ))}
        </div>
      ) : (
        <p className="flex items-center justify-center w-1/2">No PDF...</p>
      )}
    </>
  );
};
