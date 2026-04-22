import NotesSection from "./NotesSection";

export default function SubjectPage({ subject, coursework, loading, error }) {

  return (
      <div className="subject-page">

        {/* ── Coursework Panel ── */}
        <section className="panel coursework-panel">
          <div className="panel-header">
            <span className="panel-icon">📖</span>
            <h2 className="panel-title">Coursework</h2>
            <span className="subject-badge">{subject.label}</span>
          </div>

          <div className="panel-body">
            {loading && (
                <div className="state-message loading">
                  <span className="spinner" />
                  Loading coursework…
                </div>
            )}

            {error && !loading && (
                <div className="state-message error">⚠️ {error}</div>
            )}

            {!loading && !error && coursework && (
                <p className="coursework-text">{coursework}</p>
            )}

            {!loading && !error && !coursework && (
                <div className="state-message muted">
                  No content available.
                </div>
            )}
          </div>
        </section>

        {/* ── Notes Panel ── */}
        <section className="panel notes-panel">
          <NotesSection subject={subject} />
        </section>

      </div>
  );
}