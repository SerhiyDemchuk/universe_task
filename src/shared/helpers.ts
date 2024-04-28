export const getPDFItemsFromLocalStorage = () => {
  const pdfItems = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("PDF-")) {
      const value = localStorage.getItem(key);
      pdfItems.push({ key, value, id: pdfItems.length + 1 });
    }
  }
  return pdfItems;
};
