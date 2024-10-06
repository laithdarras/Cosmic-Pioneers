import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const currentPage = useLocation().pathname;
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link
                to="/"
                className={currentPage === "/" ? "nav-link active" : "nav-link"}
                style={{
                  color: "black",

                  fontFamily: "Tenor Sans, sans-serif",
                }}
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/timer"
                className={
                  currentPage === "/timer" ? "nav-link active" : "nav-link"
                }
                style={{
                  color: "black",

                  fontFamily: "Tenor Sans, sans-serif",
                }}
              >
                Timer
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/music"
                className={
                  currentPage === "/music" ? "nav-link active" : "nav-link"
                }
                style={{
                  color: "black",

                  fontFamily: "Tenor Sans, sans-serif",
                }}
              >
                Music
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/journal"
                className={
                  currentPage === "/journal" ? "nav-link active" : "nav-link"
                }
                style={{
                  color: "black",

                  fontFamily: "Tenor Sans, sans-serif",
                }}
              >
                Journal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
