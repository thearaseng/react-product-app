export default function NavBar() {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Product App</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">List</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Add</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}