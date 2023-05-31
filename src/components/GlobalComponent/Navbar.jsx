import { Link, NavLink, Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Article from "../../pages/Article";
import Course from "../../pages/Course";
import LandingPage from "../../pages/LandingPage";
import "../../assets/css/style-navbar.css";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <header className="section-header">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <NavLink to="/">
                <img
                  src="https://i.ibb.co/Qn7fNyZ/Logo.png"
                  alt="Logo"
                  className="d-inline-block align-text-top"
                />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav poppins-medium">
                  <li className="nav-item mx-2 ms-5">
                    <NavLink to="/" className="navlink">
                      Beranda
                    </NavLink>
                  </li>
                  <li className="nav-item mx-2">
                    <NavLink to="/course" className="navlink">
                      Kelas
                    </NavLink>
                  </li>
                  <li className="nav-item mx-2">
                    <NavLink to="/article" className="navlink">
                      Artikel
                    </NavLink>
                  </li>
                  <li className="nav-item mx-2">
                    <NavLink to="/about" className="navlink">
                      Tentang Kami
                    </NavLink>
                  </li>
                </ul>
                <div
                  className="btn-wrapper mx-auto d-flex align-items-center poppins-medium me-2"
                  id="btnLogin"
                >
                  <div className="btn btn-signin">
                    <Link to="/sign-in" className="navlink">
                      SignIn
                    </Link>
                  </div>
                  <Link
                    to="/sign-up"
                    className="btn btn-signup bgr-alternative color-light rounded"
                  >
                    SignUp
                  </Link>
                </div>
                <div
                  className="btn-wrapper-2 btn-wrapper-none mx-auto d-flex align-items-center poppins-medium me-2"
                  id="btnUser"
                >
                  <button
                    className="btn btn-profile bgr-alternative color-light rounded"
                    id="btn-profile"
                  >
                    <img
                      src="https://loremflickr.com/640/480/people"
                      className="img-fluid me-2"
                      width="30"
                    />
                    <a href="#">asdasdsa</a>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </>
  );
};

export default Navbar;
