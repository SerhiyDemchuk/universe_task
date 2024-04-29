import { PDFItemI } from "@shared/types.ts";

interface PDFListItemProps {
  pdf: PDFItemI;
  loadPDFFromLocalStorage: () => void;
  removePDFFromLocalStorage: () => void;
}

export const PdfListItem = ({
  pdf,
  removePDFFromLocalStorage,
  loadPDFFromLocalStorage,
}: PDFListItemProps) => {
  const { key, id } = pdf;

  const openPDF = () => {
    loadPDFFromLocalStorage();
  };

  const removePDF = () => {
    removePDFFromLocalStorage();
  };

  return (
    <>
      <div onClick={openPDF} className="flex items-center gap-4 cursor-pointer">
        <div className="w-16 h-16 bg-white flex justify-center items-center p-2 rounded-[4px]">
          {id}
        </div>
        {key}
      </div>
      <button className="z-10" onClick={removePDF}>
        x
      </button>
    </>
  );
};
