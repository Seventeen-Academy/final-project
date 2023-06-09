import { Link, NavLink } from "react-router-dom";
import "../../assets/css/style-navbar.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Navbar = () => {
  const Store = useSelector((state) => state);

  useEffect(function () {
    const btnUser = document.getElementById("btnUser");
    const btnLogin = document.getElementById("btnLogin");

    let users = Store.userReducer;

    if (users.authStatus) {
      btnUser.classList.remove("btn-wrapper-none");
      btnLogin.classList.add("btn-wrapper-none");

      document.querySelector("#btnUser button a").text = users.profile.name;
      document.querySelector("#btnUser button img").src = users.profile.img;
    }

    // btnUser.addEventListener("click", function () {
    //   localStorage.removeItem("session");
    //   window.location.reload();
    // });

    // function checkLoginButton() {
    //   if (users.status) {
    //     window.location.href = "../pages/form-laporan.html"
    //   } else {
    //     Swal.fire({
    //       title: 'Anda Harus Login Terlebih Dahulu!',
    //       icon: 'error',
    //       confirmButtonText: 'OK'
    //     }).then(function(){
    //       window.location.href = "../pages/login.html"
    //     })
    //   }
    // }
  }, []);

  return (
    <>
      <header className="section-header">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
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
                  <ul className="navbar-nav">
                    <li className="nav-item mx-2 ms-5">
                      <NavLink to="/" className="navlink">
                        Beranda
                      </NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink to="/course" className="navlink">
                        Kelas
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                      <NavLink to="/article" className="navlink">
                        Artikel
                      </NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink to="/about" className="navlink">
                        Tentang Kami
                      </NavLink>
                    </li>
                  </ul>
                  <div
                    className={`btn-wrapper btn-wrapper-none mx-auto d-flex align-items-center me-2 ${
                      Store.userReducer.authStatus ? "" : "btn-wrapper-none"
                    }`}
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
                    className={`btn-wrapper-2 mx-auto d-flex align-items-center poppins-medium me-2 ${
                      Store.userReducer.authStatus ? "btn-wrapper-none" : ""
                    }`}
                    id="btnUser"
                  >
                    <Link
                      to="/account/profile"
                      className="btn btn-profile bgr-alternative color-light rounded"
                      id="btn-profile"
                    >
                      <img
                        src="https://loremflickr.com/640/480/people"
                        className="img-fluid me-2"
                        width="30"
                      />
                      <span>{Store.userReducer?.userData?.name}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
