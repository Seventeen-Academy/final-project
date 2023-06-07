import Navbar from "../../components/GlobalComponent/Navbar";
import SideBar from "../../components/GlobalComponent/SideBar";
import CompleteCourse from "../../components/MyCourse/CompleteCourse";
import MainLayout from "../../layout/MainLayout";

const MyCourse = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
              <CompleteCourse />
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <SideBar />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default MyCourse;
