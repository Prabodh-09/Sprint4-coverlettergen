import { useState } from "react";
import Form from "./components/Form";
import Output from "./components/Output";
import { generateCoverLetterAI } from "./services/gemini";
import ResumeUpload from "./components/ResumeUpload";
function App() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    skills: "",
  });

  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);
  const [resumeData, setResumeData] = useState(null);


  const generateTemplate = async () => {
    if (
      !formData.name ||
      !formData.role ||
      !formData.company ||
      !formData.skills
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const generatedLetter = await generateCoverLetterAI(
        formData,
        resumeData ?.text || ""
      );

      setCoverLetter(generatedLetter);
    } 
    catch (error) {
      console.error("Gemini Error:", error);
    alert(error.message);
    }
    finally {
      setLoading(false);
    }
  };

  console.log(resumeData);

return (
  <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-6 px-4 sm:py-8">

    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          ✨ AI Cover Letter Generator
        </h1>

        <p className="mt-3 text-gray-600">
          Create ATS-friendly cover letters powered by Gemini AI.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-5">

          <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm">
            🤖 Gemini AI
          </span>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
            📄 Resume Parsing
          </span>

          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
            🎯 ATS Friendly
          </span>

        </div>
      </div>

      {/* Form */}
      <Form
        formData={formData}
        setFormData={setFormData}
      />

      {/* Resume Upload */}
      <div className="mt-6">
        <ResumeUpload
          onFileUpload={setResumeData}
          uploadedFile={resumeData}
        />
        <div className="mt-6">
  <button
    onClick={generateTemplate}
    disabled={loading}
    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold shadow-md transition duration-300"
  >
    {loading ? "Generating..." : "✨ Generate Cover Letter"}
  </button>
</div>
      </div>

      {/* Output */}
      <div className="mt-8">

    {/* Loading State */}
{loading && (
  <div className="mt-8 flex items-center justify-center gap-3">

    <div className="w-5 h-5 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

    <p className="text-gray-700 font-medium">
      Generating your cover letter...
    </p>

  </div>
)}

{/* Output */}
{coverLetter && !loading && (
  <div className="mt-8">
    <Output coverLetter={coverLetter} />
  </div>
)}

      </div>

    </div>

  </div>
);


}


export default App;