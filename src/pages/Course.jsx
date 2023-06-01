import "../assets/css/style-course.css";
import CourseList from "../components/Course/CourseList";
import Navbar from "../components/GlobalComponent/Navbar";
import Footer from "../components/GlobalComponent/Footer";

const Course = () => {
  return (
    <>
      <div>
        <Navbar />
        <section className="class-list my-2">
          <div className="course-banner">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-xl-12">
                  <div className="banner-wrapper">
                    <h1 className="title-banner color-light">
                      Ambil kelas kapan saja dan <br />
                      dimana saja!
                    </h1>
                    <h3 className="sub-title-banner color-light mt-3">
                      Ayo ambil kelasmu sekarang dan berpetualang <br />
                      bersama kami
                    </h3>
                  </div>

                  <CourseList />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Course;
