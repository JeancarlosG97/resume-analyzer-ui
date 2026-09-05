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
                "http://127.0.0.1:8000/analyze",
                formData
            );

            setAnalysis(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1>Resume Analyzer</h1>

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