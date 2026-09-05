# Resume Analyzer

## Live Demo

https://resume-analyzer-ui-rg64.onrender.com

API:

https://resume-analyzer-qog1.onrender.com/docs

---

## Overview

Resume Analyzer is a full-stack web application that compares a resume against a job description and generates a compatibility score based on matching technical skills.

Users can upload a PDF resume, paste a job description, and instantly receive:

- Match score percentage
- Matched skills
- Missing skills

The application helps job seekers identify gaps between their resumes and targeted job postings.

---

## Features

- Upload PDF resumes
- Paste job descriptions
- Resume-to-job compatibility scoring
- Matched skills identification
- Missing skills identification
- Responsive user interface
- Real-time API integration
- Deployed frontend and backend

---

## Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS

### Backend

- FastAPI
- Python
- PyPDF

### Deployment

- Render

---

## How It Works

1. Upload a PDF resume.
2. Paste a job description.
3. Click **Analyze Resume**.
4. The frontend sends the resume and job description to the FastAPI backend.
5. The backend extracts skills from both sources.
6. Matching skills and missing skills are identified.
7. A compatibility score is calculated.
8. Results are displayed in the user interface.

---

## Project Structure

```text
resume-analyzer-ui/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Running Locally

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate To Project

```bash
cd resume-analyzer-ui
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Open Application

```text
http://localhost:5173
```

---

## Application Workflow

```text
PDF Resume
      +
Job Description
      ↓
React Frontend
      ↓
Axios Request
      ↓
FastAPI Backend
      ↓
Skill Extraction
      ↓
Match Scoring
      ↓
Results Returned
      ↓
Score + Skill Analysis
```

---

## Future Improvements

- Drag-and-drop file uploads
- DOCX resume support
- Enhanced UI styling
- ATS-style scoring
- Resume improvement recommendations
- Skill categories and weighting

---

## Related Repository

Backend API:

https://github.com/JeancarlosG97/resume-analyzer

---

## Author

Jeancarlos Guerrero

GitHub:

https://github.com/JeancarlosG97
