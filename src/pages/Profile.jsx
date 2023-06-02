import ProfileContent from "../components/Profile/ProfileContent";

const Profile = () => {
  return (
    <>
      <section className="profile">
        <div className="container">
          <h1 className="title">Profile Saya</h1>
          <div className="row">
            <div className="col-sm-12 col-md-7 col-xl-7">
              <ProfileContent />
            </div>
            <div className="col-sm-12 col-md-5 col-xl-5"></div>
          </div>
        </div>
        <footer className="poppins footer-profile mt-5 d-flex justify-content-center">
          Copyright © 2022 SEVA ALL RIGHT RESERVED
        </footer>
      </section>
    </>
  );
};

export default Profile;
