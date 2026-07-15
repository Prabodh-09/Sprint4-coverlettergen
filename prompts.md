# Prompts.md

## Project
AI Cover Letter Generator – ProDesk Sprint 4

---

# Building the Application

### Prompt 1
> Build a React application that generates a professional cover letter using Candidate Name, Job Role, Target Company, and Key Skills. Initially, use a hardcoded template before integrating an AI model.

**Outcome**
- Created the form UI.
- Managed input state using React.
- Generated a template-based cover letter.

---

### Prompt 2
> Integrate the Google Gemini API into the React application. Use environment variables to securely store the API key and generate cover letters dynamically based on user inputs.

**Outcome**
- Connected the Gemini API.
- Stored API key using `.env`.
- Added loading state while waiting for AI response.

---

### Prompt 3
> Add resume upload functionality using PDF parsing. Extract the resume text and include it in the AI prompt to generate a personalized cover letter.

**Outcome**
- Implemented PDF upload.
- Extracted text from uploaded resumes.
- Included resume content in the AI request.

---

# UI Improvements

### Prompt 4
> Improve the UI using Tailwind CSS. Make the application responsive across mobile, tablet, laptop, and desktop while keeping the design simple and professional.

**Outcome**
- Improved spacing and alignment.
- Added responsive layout.
- Enhanced buttons and upload section.

---

# Debugging & Issue Resolution

### Prompt 5
> I am getting "API key not valid" while calling the Gemini API. Help me identify and fix the issue.

**Outcome**
- Verified API key configuration.
- Updated `.env`.
- Restarted the Vite development server.

---

### Prompt 6
> The deployed application shows a blank white screen. Help me debug the deployment and identify possible causes.

**Outcome**
- Checked build logs.
- Verified environment variables.
- Investigated browser console errors.
- Reviewed PDF worker configuration.

---

### Prompt 7
> My Gemini model is returning "model not found" or "quota exceeded". Help me migrate to a supported model.

**Outcome**
- Updated to a supported Gemini model.
- Corrected API configuration.
- Verified free-tier availability.

---

# Testing

### Prompt 8
> Provide a checklist to test the application before deployment.

**Outcome**
- Verified form validation.
- Tested AI generation.
- Tested resume upload.
- Verified Copy-to-Clipboard.
- Confirmed responsive design.

---

## AI Assistance Summary

AI assistance was used for:

- React component structure
- Tailwind CSS styling
- Gemini API integration
- Prompt engineering
- PDF parsing implementation
- Responsive UI improvements
- Debugging API and deployment issues
- Deployment guidance

All code was reviewed, integrated, and tested within the application before submission.
