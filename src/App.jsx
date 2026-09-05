import { useState } from "react";
import "./App.css";

function App() {
    const [jobDescription, setJobDescription] = useState("");

    return (
        <div className="container">
            <h1>Resume Analyzer</h1>

            <div className="input-section">
                <label>Upload Resume</label>
                <input type="file" accept=".pdf" />
            </div>

            <div className="input-section">
                <label>Job Description</label>

                <textarea
                    rows="10"
                    placeholder="Paste job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                />
            </div>

            <button>Analyze</button>
        </div>
    );
}

export default App;