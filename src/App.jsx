import {useState} from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    const [analysis, setAnalysis] = useState(null);

    const analyzeResume = async () => {
        try {
            const formData = new FormData();

            formData.append("resume", resume);
            formData.append("job_description", jobDescription);

            const response = await axios.post(
                "https://resume-analyzer-qog1.onrender.com/analyze",
                formData
            );

            setAnalysis(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const handleAnalyzeDemo = async () => {
        try {
            const response = await axios.post(
                "https://resume-analyzer-qog1.onrender.com/analyze-demo"
            );

            setAnalysis(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1>Resume Analyzer</h1>
            <div className="instructions">
                <p><strong>How It Works</strong></p>
                <ol>
                    <li>Upload your resume (PDF).</li>
                    <li>Paste a job description.</li>
                    <li>Click Analyze Resume to view your match score and skill gaps.</li>
                    <li>Or click Demo to see a sample analysis instantly.</li>
                </ol>
            </div>

            <div className="input-section">
                <label>Upload Resume</label>
                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setResume(e.target.files[0])}
                />
            </div>

            <div className="input-section">
                <label>Job Description</label>

                <textarea
                    rows="14"
                    placeholder="Paste job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                />
            </div>

            <button onClick={analyzeResume}>
                Analyze Resume
            </button>

            <button onClick={handleAnalyzeDemo} >
                Demo
            </button>

            {analysis && (
                <div className="results-section">
                    <div className="score-card">
                        <p>Match Score</p>
                        <h2>{analysis.score}%</h2>
                    </div>

                    <div className="results-columns">
                        <div>
                            <h3>Matched Skills</h3>

                            <ul>
                                {analysis.matched_skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3>Missing Skills</h3>

                            <ul>
                                {analysis.missing_skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;