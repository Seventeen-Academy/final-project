import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/GlobalComponent/Footer";
import Navbar from "../components/GlobalComponent/Navbar";
import Benefit from "../components/LandingPage/Benefit";
import CourseSection from "../components/LandingPage/CourseSection";
import Highlight from "../components/LandingPage/Highlight";
import Learning from "../components/LandingPage/Learning";
import ReportSection from "../components/LandingPage/ReportSection";
import MainLayout from "../layout/MainLayout";
import { GetCourse } from "../redux/actions/CourseAction";
import { useEffect } from "react";

const LandingPage = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <Highlight />
          <Learning />
          <Benefit />
          <ReportSection />
          <CourseSection />
        </div>
        <Footer />
      </MainLayout>
    </>
  );
};

export default LandingPage;
