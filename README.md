# Resume Analyzer

Live Demo:
https://your-frontend-url.onrender.com

Backend API:
https://your-backend-url.onrender.com

---

## Overview

Resume Analyzer is a full-stack web application that compares a resume against a job description and generates a match score based on identified skills.

The application extracts skills from uploaded PDF resumes, analyzes job requirements, and highlights both matched and missing skills to help users identify potential gaps.

---

## Features

- Upload PDF resumes
- Paste job descriptions
- Automatic skill extraction
- Match score calculation
- Matched skills breakdown
- Missing skills breakdown
- Responsive web interface
- Deployed frontend and backend

---

## Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS

### Backend

- Python
- FastAPI
- PyPDF
- Regex

### Deployment

- Render

---

## Screenshots

### Home Page

[Insert Screenshot]

### Results Page

[Insert Screenshot]

---

## How It Works

1. User uploads a PDF resume.
2. User pastes a job description.
3. Resume text is extracted from the PDF.
4. Skills are identified using a predefined skills database.
5. Resume skills are compared against job requirements.
6. A match score is calculated.
7. Results are displayed in the UI.

---

## Project Structure

Backend

resume-analyzer/
├── app.py
├── main.py
├── skills.json
└── requirements.txt

Frontend

resume-analyzer-ui/
├── src
├── public
├── package.json
└── vite.config.js

---

## Future Improvements

- DOCX support
- Enhanced skill database
- Skill categories
- ATS-style scoring
- Resume recommendations

---

## Author

Jeancarlos Guerrero
