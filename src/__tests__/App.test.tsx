import { render } from "@testing-library/react";

import { PdfListItem } from "../components/PDFListItem.tsx";
import { PdfViewer } from "../components/PDFViewer.tsx";

jest.mock("react-pdf", () => {
  const Page = () => <div>page</div>;

  return {
    Page,
    Document: () => {
      return <Page />;
    },
  };
});

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the PDFViewer", () => {
  render(<PdfViewer pdfUrl="Hello" />);
  expect(true).toBeTruthy();
});

test("Renders the PDFListItem", () => {
  render(<PdfListItem id={1} key={"PDF-1"} title={"Co"} />);
  expect(true).toBeTruthy();
});
