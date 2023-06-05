import { NavLink } from "react-router-dom";
import "../../assets/css/style-sidebar.css";

const SideBar = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="sidebar-wrapper rounded shadow-sm p-3">
            <NavLink
              to="/account/dashboard"
              className="sidebar-link d-flex my-3"
            >
              <div className="sidebar-items ms-2 ">
                <i className="fa fa-chart-line fa-fw"></i>
                <span className="ms-2">Dasboard</span>
              </div>
            </NavLink>
            <NavLink
              to="/account/mycourse"
              className="sidebar-link d-flex my-3"
            >
              <div className="sidebar-items ms-2">
                <i className="fa fa-chalkboard-user fa-fw"></i>
                <span className="ms-2">Kelas Saya</span>
              </div>
            </NavLink>
            <NavLink to="/account/profile" className="sidebar-link d-flex my-3">
              <div className="sidebar-items ms-2">
                <i className="fa fa-user fa-fw"></i>
                <span className="ms-2">Profile</span>
              </div>
            </NavLink>
            <NavLink
              to="/account/transaction"
              className="sidebar-link d-flex my-3"
            >
              <div className="sidebar-items ms-2 ">
                <i className="fa fa-cart-shopping fa-fw"></i>
                <span className="ms-2">Daftar Transaksi</span>
              </div>
            </NavLink>
            <NavLink to="/account/award" className="sidebar-link d-flex my-3">
              <div className="sidebar-items ms-2 ">
                <i className="fa fa-trophy fa-fw"></i>
                <span className="ms-2">Penghargaan</span>
              </div>
            </NavLink>
            <NavLink to="/" className="sidebar-link d-flex my-3">
              <div className="sidebar-items ms-2">
                <i className="fa fa-arrow-right-from-bracket fa-fw"></i>
                <span className="ms-2">Sign-Out</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
