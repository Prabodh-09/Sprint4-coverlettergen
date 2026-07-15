function Form({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle =
    "w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200";

  return (
    <div className="w-full">

      <div className="space-y-5">

        {/* Candidate Name */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Candidate Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={inputStyle}
          />
        </div>

        {/* Job Role */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Job Role
          </label>

          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Frontend Developer"
            className={inputStyle}
          />
        </div>

        {/* Company */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Target Company
          </label>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Google"
            className={inputStyle}
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Key Skills
          </label>

          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            rows="4"
            placeholder="React, JavaScript, Node.js"
            className={`${inputStyle} resize-none`}
          />
        </div>

      </div>

    </div>
  );
}

export default Form;