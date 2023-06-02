import { HTMLPayment } from "../../assets/images";
import "../../assets/css/style-payment.css";

const CardCourse = () => {
  return (
    <>
      <div className="card-wrapper p-3 shadow-sm rounded bgr-light">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-xl-3">
            <img src={HTMLPayment} className="img-fluid align-items-center" />
          </div>
          <div className="col-sm-12 col-md-8 col-xl-8">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button poppins-medium collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    HTML Dasar
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body poppins-light">
                    Di kelas ini, kita akan belajar bagaimana membuat halaman
                    sebuah website dengan menggunakan HTML. HTML adalah Bahasa
                    pemrograman web yang cocok dipelajari untuk pemula, kita
                    bisa membuat struktur dan kerangka website dari beberapa
                    element. Fungsi HTML adalah membangun tampilan website
                    khususnya untuk bagian front end. Setiap halaman website
                    pastinya dibangun dari HTML.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCourse;
