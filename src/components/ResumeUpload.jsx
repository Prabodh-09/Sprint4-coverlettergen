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

  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: arrayBuffer,
  }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);

    const content = await page.getTextContent();

    text +=
      content.items
        .map((item) => item.str)
        .join(" ") + "\n";
  }

  console.log("Resume Text:");
  console.log(text);

  onFileUpload({
    file,
    text,
  });
},
  });

return (
  <div className="w-full">

    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-400 rounded-lg p-6 mt-4 text-center cursor-pointer"
    >
      <input {...getInputProps()} />

      <p>📄 Drag & Drop Resume PDF here</p>

      <p className="text-sm text-gray-500">
        or click to upload
      </p>
    </div>

    {uploadedFile && (
      <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-lg">
        <p className="font-semibold text-green-700">
          ✅ Resume Uploaded Successfully
        </p>

        <p className="text-gray-700">
          {uploadedFile.file.name}
        </p>

        <p className="text-sm text-gray-500">
          {(uploadedFile.file.size / 1024).toFixed(2)} KB
        </p>
      </div>
    )}

  </div>
);
}

export default ResumeUpload;