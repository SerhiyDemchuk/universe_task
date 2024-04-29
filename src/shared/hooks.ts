import { useEffect, useState } from "react";

import { PDFItemI } from "@shared/types.ts";

export const usePDFItemsFromLocalStorage = () => {
  const [pdfItems, setPDFItems] = useState<PDFItemI[]>([]);

  useEffect(() => {
    const fetchPDFItems = () => {
      const items: PDFItemI[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("PDF-")) {
          const value = localStorage.getItem(key);
          items.push({ key, value, id: items.length + 1 });
        }
      }
      return items;
    };

    const pdfItemsFromLocalStorage = fetchPDFItems();
    setPDFItems(pdfItemsFromLocalStorage);
  }, []);

  const removePDFItem = (keyToRemove: string) => {
    const updatedPDFItems = pdfItems.filter((item) => item.key !== keyToRemove);
    setPDFItems(updatedPDFItems);
    localStorage.removeItem(keyToRemove);
  };

  return { pdfItems, removePDFItem };
};
