import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar" aria-label="Primary sidebar">
      <div className="logo" role="banner">
        <div className="logo-badge">NA</div>
        <div>
          <div className="brand-name">
            News<span className="brand-highlight">AI</span>
          </div>
          <div className="brand-sub">Personalized insights</div>
        </div>
      </div>

      <nav className="sidebar-nav" role="navigation" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          title="Today’s Digest"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          <span className="nav-icon" aria-hidden>📌</span>
          <span className="nav-label">Today’s Digest</span>
        </NavLink>

        <NavLink
          to="/preferences"
          title="Preferences"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          <span className="nav-icon" aria-hidden>⚙️</span>
          <span className="nav-label">Preferences</span>
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <small className="muted">Version 1.0 • Built for you</small>
      </div>
    </aside>
  );
};

export default Sidebar;
