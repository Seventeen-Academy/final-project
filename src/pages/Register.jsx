import { Link } from "react-router-dom";
import "../assets/css/style-register.css";
import { LockIcon, MailIcon, PersonIcon } from "../assets/icons";
import { BGLoginRegister } from "../assets/images";

const Register = () => {
  return (
    <>
      <section className="register">
        <div className="row">
          <div className="col-sm-6 bg-register">
            <img
              src={BGLoginRegister}
              draggable="false"
              className="img-fluid bg-login-register"
            />
          </div>
          <div className="col-sm-6 form-register d-flex justify-content-center">
            <div className="form-header mt-5 w-50">
              <div className="warning"></div>
              <h1 className="welcome color-dark">
                Daftar Untuk Jadi Pahlawan !
              </h1>
              <h4 className="paragraph color-subdark mt-3">
                Daftarkan dirimu untuk berpetualang dan menjadi seorang pahlawan
              </h4>
              <form className="form-content mt-3" id="formRegister">
                <label for="name">Nama</label>
                <div className="input-group mb-2">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={PersonIcon} alt="" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Masukkan Nama Lengkap"
                    id="name"
                    required
                  />
                </div>

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
                </div>

                <label for="password-1">Kata Sandi</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={LockIcon} alt="" />
                  </span>
                  <input
                    type="password"
                    name="password-1"
                    id="password"
                    className="form-control"
                    placeholder="Masukkan Password"
                    required
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text p-3"
                      onclick="password_show_hide_1();"
                      id="basic-addon1"
                    >
                      <i className="fa fa-eye" id="show_eye"></i>
                      <i className="fa fa-eye-slash d-none" id="hide_eye"></i>
                    </span>
                  </div>
                </div>

                <label for="password-2">Konfirmasi Kata Sandi</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={LockIcon} alt="" />
                  </span>
                  <input
                    type="password"
                    name="password-2"
                    id="password-2"
                    className="form-control"
                    placeholder="Masukkan Password"
                    required
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text p-3"
                      onclick="password_show_hide_2();"
                      id="basic-addon1"
                    >
                      <i className="fa fa-eye" id="show_eye_2"></i>
                      <i className="fa fa-eye-slash d-none" id="hide_eye_2"></i>
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-register bgr-alternative color-light mt-2"
                >
                  Daftar
                </button>
              </form>
              <div className="row">
                <div className="col mt-3 register d-flex justify-content-center">
                  <span className="register-label">Sudah punya akun?</span>
                  <Link to="/sign-in" className="register-link ms-2">
                    Masuk Sekarang
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

export default Register;
