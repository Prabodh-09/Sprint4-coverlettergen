import ReactMarkdown from "react-markdown";

function Output({ coverLetter }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetter);
    alert("Copied to clipboard!");
  };

  return (
    <>
      {coverLetter && (
        <div className="bg-white mt-8 p-6 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-xl font-bold mb-4">Generated Cover Letter</h2>

          <div className="prose max-w-none">
  <ReactMarkdown>
    {coverLetter}
  </ReactMarkdown>
</div>

          <button
            onClick={handleCopy}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Copy to Clipboard
          </button>
        </div>
      )}
    </>
  );
}

export default Output;