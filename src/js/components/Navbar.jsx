








function Navbar() {
  return (
    <nav className="navbar py-2 navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>

        <ul className="navbar-nav d-flex flex-row gap-3">
          <li>
            <a className="nav-link fw-bold active text-white" href="#">Home</a>
          </li>
          <li>
            <a className="nav-link" href="#">About</a>
          </li>
          <li>
            <a className="nav-link" href="#">Services</a>
          </li>
          <li>
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>


    </nav>
  );
}

export default Navbar;