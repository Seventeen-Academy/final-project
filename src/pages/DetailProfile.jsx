import Navbar from "../components/GlobalComponent/Navbar";
import Footer from "../components/GlobalComponent/Footer";
import "../assets/css/style-detailprofile.css";
import { FaUserTag, FaUser, FaSignOutAlt } from "react-icons/fa";
function DetailProfile() {
  return (
    <main className="bg-grey pt-4">
      <Navbar />
      <div className="container">
        <div className="fw-bold fs-2 py-4">Detail Profile</div>
        <div className="d-flex gap-4 flex-lg-row flex-column-reverse">
          <div className="col col-sm-12  col-lg-8">
            <div className=" border border-white rounded bg-white p-4 my-2">
              <div className=" fw-bold fs-3">Foto Profile</div>
              <div className="d-flex gap-3 align-items-center py-4">
                <img
                  width={90}
                  height={90}
                  className="avatar"
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w\u003d2000"
                  alt=""
                />

                <div>
                  <button className="btn-img rounded py-1 px-2">
                    Pilih Foto
                  </button>
                  <div className="text-black-50 w-75 pt-1">
                    Gambar Profile Anda sebaiknya memiliki rasio 11 dan
                    berukuran tidak lebih dari 2MB.
                  </div>
                </div>
              </div>
              <div className="input-wrapper">
                <div>
                  Nama Lengkap <span style={{ color: "red" }}>*</span>
                </div>
                <input
                  type="text"
                  name="name"
                  className="w-100 rounded p-2"
                  placeholder="Nama Lengkap"
                />
              </div>
              <div className="input-wrapper">
                <div>
                  Username <span style={{ color: "red" }}>*</span>
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-100 rounded p-2"
                />
              </div>
              <div className="input-wrapper">
                <div>
                  Email <span style={{ color: "red" }}>*</span>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-100 rounded p-2"
                />
              </div>
              <button className="btn-img rounded mt-4 py-2 px-2">
                Simpan Perubahan
              </button>
            </div>
          </div>
          <div className="col col-sm-12 col-lg-4">
            <div className=" border border-white rounded bg-white p-4 my-2 d-flex flex-lg-column justify-content-center">
              <div className="fw-bold dtl active">
                <FaUser /> Detail Profile
              </div>
              <div className="fw-bold dtl">
                <FaUserTag /> Akun
              </div>
              <div className="fw-bold dtl">
                <FaSignOutAlt /> Keluar
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-4">
          Copyright © 2022 Seva All rights reserved.
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default DetailProfile;
