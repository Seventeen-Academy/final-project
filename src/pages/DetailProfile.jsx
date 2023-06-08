import Navbar from "../components/GlobalComponent/Navbar";
import React from "react";
import "../assets/css/style-detailprofile.css";
import { FaUserTag, FaUser, FaSignOutAlt } from "react-icons/fa";
import ProfileName from "../components/DetailProfile/ProfileName";
import ChangePassword from "../components/DetailProfile/ChangePassword";
function DetailProfile() {
  const [TabIdx, setTabIdx] = React.useState(0);
  return (
    <main className="bgr-body pt-4">
      <Navbar />
      <div className="container">
        <div className="fw-bold fs-2 py-4">
          {TabIdx === 0 ? "Detail Profile" : "Akun"}
        </div>
        <div className="d-flex gap-4 flex-lg-row flex-column-reverse">
          <div className="col col-sm-12  col-lg-8">
            {TabIdx === 0 ? (
              <ProfileName />
            ) : TabIdx === 1 ? (
              <ChangePassword />
            ) : (
              <div />
            )}
          </div>
          <div className="col col-sm-12 col-lg-4">
            <div className=" shadow border border-white rounded bg-white p-4 my-2 d-flex flex-lg-column justify-content-center">
              <div
                className={`fw-bold dtl pointer  ${
                  TabIdx === 0 ? "active" : ""
                }`}
                onClick={() => setTabIdx(0)}
                role="button"
              >
                <FaUser /> Detail Profile
              </div>
              <div
                className={`fw-bold dtl  ${TabIdx === 1 ? "active" : ""}`}
                onClick={() => setTabIdx(1)}
                role="button"
              >
                <FaUserTag /> Akun
              </div>
              <div
                className={`fw-bold dtl  ${TabIdx === 2 ? "active" : ""}`}
                onClick={() => setTabIdx(2)}
                role="button"
              >
                <FaSignOutAlt /> Sign-Out
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-4">
          Copyright © 2022 SEVA ALL RIGHTS RESERVED
        </div>
      </div>
    </main>
  );
}

export default DetailProfile;
