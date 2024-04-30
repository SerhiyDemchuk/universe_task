import { PdfListItem } from "@components/PDFListItem.tsx";
import { usePDFItemsFromLocalStorage } from "@shared/hooks.ts";

interface PDFListProps {
  setUrl: (url: string | null) => void;
}

export const PdfList = ({ setUrl }: PDFListProps) => {
  const { pdfItems, removePDFItem } = usePDFItemsFromLocalStorage();

  const loadPDFFromLocalStorage = (key: string | null) => {
    setUrl(key);
  };

  const removePDFFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
    removePDFItem(key);
  };

  return (
    <>
      {pdfItems.length ? (
        <div className="flex flex-col gap-3.5 overflow-y-auto rounded-[4px] px-4 h-[500px]">
          {pdfItems.map((pdf) => (
            <div
              className="flex items-center justify-between gap-4 cursor-pointer"
              key={pdf.id}
            >
              <PdfListItem
                pdf={pdf}
                loadPDFFromLocalStorage={() =>
                  loadPDFFromLocalStorage(pdf.value)
                }
                removePDFFromLocalStorage={() =>
                  removePDFFromLocalStorage(pdf.key)
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="flex items-center justify-center">No PDF...</p>
      )}
    </>
  );
};
