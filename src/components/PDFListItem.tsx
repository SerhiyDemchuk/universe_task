import { PDFItemI } from "../shared/types.ts";

interface PDFListItemProps {
  pdf: PDFItemI;
}

export const PdfListItem = ({ pdf }: PDFListItemProps) => {
  const { key, id } = pdf;
  const removePDFFromLocalStorage = () => {
    localStorage.removeItem(key);
  };

  return (
    <div className="flex">
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-16 h-16 bg-white flex justify-center items-center p-2 rounded-[4px]">
          {id}
        </div>
        {key}
      </div>
      <button className="z-10" onClick={removePDFFromLocalStorage}>
        X
      </button>
    </div>
  );
};
