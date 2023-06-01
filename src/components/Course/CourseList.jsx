import {
  CSSThumbnail,
  GithubThumbnail,
  HTMLThumbnail,
  JSThumbnail,
  PHPThumbnail,
} from "../../assets/images";
import { BadgeJunior, BadgeSenior, BookIcon } from "../../assets/icons";
import { useState } from "react";

const CourseList = () => {
  const [course, useCourse] = useState([
    {
      thumbnail: CSSThumbnail,
      title: "CSS Dasar",
      badgeIcon: BadgeJunior,
      badgeStatus: "Junior",
      description: `CSS, bahasa yang digunakan untuk mengatur tampilan yang tertulis dalam bahasa markup.`,
      lessonIcon: BookIcon,
      lesson: "7 Pembelajaran",
      price: "Gratis",
    },
    {
      thumbnail: HTMLThumbnail,
      title: "HTML Dasar",
      badgeIcon: BadgeJunior,
      badgeStatus: "Junior",
      description: `HTML adalah bahasa pemrograman web yang diperuntukan untuk membuat kerangka website.`,
      lessonIcon: BookIcon,
      lesson: "5 Pembelajaran",
      price: "Gratis",
    },
    {
      thumbnail: JSThumbnail,
      title: "Javascript Dasar",
      badgeIcon: BadgeJunior,
      badgeStatus: "Junior",
      description: `JavaScript, bahasa pemrograman yang digunakan untuk membuat
        halaman yang interaktif`,
      lessonIcon: BookIcon,
      lesson: "14 Pembelajaran",
      price: "Gratis",
    },
    {
      thumbnail: PHPThumbnail,
      title: "PHP Intermediate",
      badgeIcon: BadgeSenior,
      badgeStatus: "Senior",
      description: `PHP adalah sebuah bahasa pemrograman server side scripting yang bersifat open source.`,
      lessonIcon: BookIcon,
      lesson: "8 Pembelajaran",
      price: "Rp500.000,-",
    },
    {
      thumbnail: GithubThumbnail,
      title: "Github Dasar",
      badgeIcon: BadgeJunior,
      badgeStatus: "Junior",
      description: `GitHub adalah website yang digunakan untuk menyimpan dan mengelola kode suatu project.`,
      lessonIcon: BookIcon,
      lesson: "4 Pembelajaran",
      price: "Gratis",
    },
    {
      thumbnail: PHPThumbnail,
      title: "PHP Dasar",
      badgeIcon: BadgeJunior,
      badgeStatus: "Junior",
      description: `PHP adalah sebuah bahasa pemrograman server side scripting yang bersifat open source.`,
      lessonIcon: BookIcon,
      lesson: "8 Pembelajaran",
      price: "Gratis",
    },
  ]);
  return (
    <>
      <section className="course-list">
        <div className="row">
          {course.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card-wrapper" id={"kotak-" + index}>
                <div className="card card-thumbnail js-card border-card shadow-sm d-flex justify-content-center align-items-center">
                  <img src={item.thumbnail} alt="" />
                </div>
                <div className="card-body p-2 shadow-sm bgr-light px-2">
                  <h4 className="title-1 mx-2 color-dark">{item.title}</h4>
                  <div className="badge d-flex align-items-center">
                    <img src={item.badgeIcon} alt="" />
                    <h4 className="badge-text color-dark ms-1 my-auto">
                      {item.badgeStatus}
                    </h4>
                  </div>
                  <h4 className="paragraph mx-2 color-dark my-3">
                    {item.description}
                  </h4>
                  <div className="row">
                    <div className="col-6">
                      <div className="container bgr-secondary lesson-wrapper d-flex ms-1">
                        <img src={item.lessonIcon} />
                        <h4 className="lesson p-2 my-auto">{item.lesson}</h4>
                      </div>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <h4 className="price-class-card color-alternative me-2 my-auto">
                        {item.price}
                      </h4>
                    </div>
                  </div>
                  <div className="card-footer px-2 bgr-light mb-2">
                    <hr />
                    <button className="btn bgr-alternative btn-class color-light">
                      Selengkapnya
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CourseList;
