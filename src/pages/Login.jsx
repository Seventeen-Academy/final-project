import { Link } from "react-router-dom";
import "../assets/css/style-login.css";
import { LockIcon, MailIcon } from "../assets/icons";
import { BGLoginRegister } from "../assets/images";

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="row">
          <div className="col-sm-12 col-md-6 bg-login">
            <img
              src={BGLoginRegister}
              draggable="false"
              className="img-fluid bg-login-register"
            />
          </div>
          <div className="col-sm-12 col-md-6 form-login d-flex justify-content-center">
            <div className="form-header mt-5">
              <div id="message" className="color-dark"></div>
              <h1 className="welcome color-dark">Selamat Datang, Pahlawan!</h1>
              <h4 className="paragraph color-subdark mt-3">
                Petualangan baru telah menunggu untuk kamu jelajahi
              </h4>
              <form className="form-content mt-5" id="formLogin">
                <label for="email">Email</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={MailIcon} alt="" />
                  </span>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Masukkan Email"
                    id="email"
                    required
                  />
                  <div className="invalid-feedback">
                    Mohon masukkan email anda
                  </div>
                </div>
                <label for="email">Kata Sandi</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={LockIcon} alt="" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Masukkan Password"
                    id="password"
                    required
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text p-3"
                      onclick="password_show_hide();"
                      id="basic-addon1"
                    >
                      <i className="fa fa-eye" id="show_eye"></i>
                      <i className="fa fa-eye-slash d-none" id="hide_eye"></i>
                    </span>
                  </div>
                  <div className="invalid-feedback">
                    Mohon masukkan password anda
                  </div>
                </div>
                <a
                  href="#"
                  className="forgot-password d-flex justify-content-end color-alternative"
                >
                  Lupa kata sandi?
                </a>
                <Link
                  to="/account/profile"
                  type="submit"
                  className="btn btn-login bgr-alternative color-light mt-3"
                >
                  Masuk
                </Link>
              </form>
              <div className="row">
                <div className="col mt-3 register d-flex justify-content-center">
                  <span className="register-label">Belum punya akun?</span>
                  <Link to="/sign-up" className="register-link ms-2">
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
