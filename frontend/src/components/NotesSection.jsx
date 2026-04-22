import { useEffect, useState } from "react";

export default function NotesSection({ subject }) {

    const [notes, setNotes] = useState([]);
    const [draft, setDraft] = useState("");

    // 🔥 Fetch notes
    useEffect(() => {
        if (!subject) return;

        fetch(`http://localhost:8080/notes/${subject.label.toLowerCase()}`)
            .then(res => res.json())
            .then(data => setNotes(data))
            .catch(err => console.error("Fetch error:", err));

    }, [subject]);

    // 🔥 Add note
    const handleSubmit = async () => {
        const trimmed = draft.trim();
        if (!trimmed) return;

        try {
            await fetch("http://localhost:8080/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    subject: subject.label.toLowerCase(),
                    content: trimmed
                })
            });

            // 🔁 Refresh notes
            const res = await fetch(`http://localhost:8080/notes/${subject.label.toLowerCase()}`);
            const data = await res.json();
            setNotes(data);

            setDraft("");

        } catch (err) {
            console.error("Add note error:", err);
        }
    };

    // Ctrl + Enter
    const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <>
            <div className="panel-header">
                <span className="panel-icon">✏️</span>
                <h2 className="panel-title">Notes</h2>
                {notes.length > 0 && (
                    <span className="note-count">{notes.length}</span>
                )}
            </div>

            {/* Input */}
            <div className="note-composer">
        <textarea
            className="note-input"
            rows={3}
            placeholder="Write a note… (Ctrl+Enter to save)"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
        />

                <button
                    className="add-note-btn"
                    onClick={handleSubmit}
                    disabled={!draft.trim()}
                >
                    + Add Note
                </button>
            </div>

            {/* List */}
            <div className="notes-list">
                {notes.length === 0 ? (
                    <div className="state-message muted">
                        No notes yet. Add one above!
                    </div>
                ) : (
                    notes.map((note, index) => (
                        <div key={index} className="note-card">
                            <p className="note-content">{note.content}</p>
                            <span className="note-time">{note.subject}</span>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}