import { useState } from "react";
import Navbar from "./components/Navbar";
import SubjectPage from "./components/SubjectPage";
import "./App.css";

const SUBJECTS = [
  { id: "maths", label: "Maths", endpoint: "/home/maths" },
  { id: "physics", label: "Physics", endpoint: "/home/physics" },
  { id: "cs", label: "Computer Science", endpoint: "/home/cs" },
];

export default function App() {
  const [activeSubject, setActiveSubject] = useState(null);
  const [coursework, setCoursework] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSelectSubject = async (subject) => {
    setActiveSubject(subject);
    setLoading(true);
    setError("");
    setCoursework("");

    try {
      const res = await fetch(subject.endpoint)
      if (!res.ok) throw new Error(`Server returned ${res.status}`);

      const contentType = res.headers.get("content-type") || "";

      // Support both plain text (current) and JSON (future)
      if (contentType.includes("application/json")) {
        const data = await res.json();
        setCoursework(data.coursework ?? "No coursework content.");
      } else {
        const text = await res.text();
        setCoursework(text);
      }
    } catch (err) {
      setError(`Failed to load coursework: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar
        subjects={SUBJECTS}
        activeSubject={activeSubject}
        onSelect={handleSelectSubject}
      />

      <main className="main-content">
        {!activeSubject ? (
          <div className="welcome">
            <div className="welcome-icon">📚</div>
            <h2>Welcome to LMS Dashboard</h2>
            <p>Select a subject above to view coursework and take notes.</p>
          </div>
        ) : (
          <SubjectPage
            subject={activeSubject}
            coursework={coursework}
            loading={loading}
            error={error}
          />
        )}
      </main>
    </div>
  );
}
