# PDF Viewer

The application consists of input where user can type text and the PDF viewer.
After button being clicked the text is sent via request and the response is placed in PDF viewer.

All PDF viewer logic is placed in a separate component. It is written using `react-pdf` library.

After the response from the server the blobbed data is placed to the LocalStorage. Each key consists of `PDF-` prefix and `crypto.randomUUID()` method.
