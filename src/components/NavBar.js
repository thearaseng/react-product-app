import { NavLink } from "react-router-dom";

export default function NavBar() {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Product App</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" aria-current="page" to="/">List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/new">Add</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}