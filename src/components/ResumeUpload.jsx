import { useDropzone } from "react-dropzone";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function ResumeUpload({ onFileUpload, uploadedFile }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,

    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;

      const file = acceptedFiles[0];

      try {
        const arrayBuffer = await file.arrayBuffer();

        const pdf = await pdfjsLib.getDocument({
          data: arrayBuffer,
        }).promise;

        let text = "";

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);

          const content = await page.getTextContent();

          text +=
            content.items.map((item) => item.str).join(" ") + "\n";
        }

        onFileUpload({
          file,
          text,
        });
      } catch (error) {
        console.error("PDF Parsing Error:", error);
        alert("Unable to read the PDF. Please upload another file.");
      }
    },
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className="mt-6 cursor-pointer rounded-xl border-2 border-dashed border-gray-300 p-8 text-center transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-50"
      >
        <input {...getInputProps()} />

        <p className="text-lg font-medium text-gray-700">
          📄 Upload Resume
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Drag & Drop your PDF here or click to browse
        </p>
      </div>

      {uploadedFile && (
        <div className="mt-4 rounded-xl border border-green-300 bg-green-50 p-4">
          <p className="font-semibold text-green-700">
            ✅ Resume Uploaded Successfully
          </p>

          <p className="mt-1 break-all text-gray-700">
            {uploadedFile.file.name}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {(uploadedFile.file.size / 1024).toFixed(2)} KB
          </p>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;