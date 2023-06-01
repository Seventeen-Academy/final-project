import Footer from "../components/GlobalComponent/Footer";
import Navbar from "../components/GlobalComponent/Navbar";
import Benefit from "../components/LandingPage/Benefit";
import CourseSection from "../components/LandingPage/CourseSection";
import Highlight from "../components/LandingPage/Highlight";
import Learning from "../components/LandingPage/Learning";
import ReportSection from "../components/LandingPage/ReportSection";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Highlight />
        <Learning />
        <Benefit />
        <ReportSection />
        <CourseSection />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
