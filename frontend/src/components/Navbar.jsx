export default function Navbar({ subjects, activeSubject, onSelect }) {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">🎓</span>
        <h1 className="navbar-title">LMS Dashboard</h1>
      </div>

      <nav className="navbar-links">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            className={`nav-btn ${activeSubject?.id === subject.id ? "nav-btn--active" : ""}`}
            onClick={() => onSelect(subject)}
          >
            {subject.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
