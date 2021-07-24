import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="nav">
      <NavLink className="navbar-brand" to="/">
        Teyyari{" "}
      </NavLink>
      <div className="navbar-collapse">
        <ul className="navbar-nav-list">
          <li>
            <NavLink to="/videos">Videos</NavLink>
          </li>
          <li>
            <NavLink to="/playlists">Playlist</NavLink>
          </li>
        </ul>
        <form>
          <input className="nav-input" />
          <button className="btn btn-light">Search </button>
        </form>
      </div>
      Top nav bar here{" "}
    </nav>
  );
}
