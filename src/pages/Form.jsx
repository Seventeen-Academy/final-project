import "../assets/css/style-laporan.css";
import Navbar from "../components/GlobalComponent/Navbar";
import Footer from "../components/GlobalComponent/Footer";
import MainLayout from "../layout/MainLayout";

const Form = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <section className="lapor">
            <div className="container report-content bgr-light rounded shadow-sm p-3 mt-5 w-50">
              <h4 className="text-center my-4 bgr-primary p-3 rounded text-white poppins-medium">
                Sampaikan Laporanmu
              </h4>
              <form className="form-content" id="formReport">
                <div className="mb-3">
                  <label htmlFor="judul">Judul Laporan Anda</label>
                  <input
                    type="text"
                    className="form-control"
                    name="judul"
                    id="judul"
                    placeholder="Masukkan Judul Laporan Anda"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="judul">Lokasi Kejadian Anda</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lokasi"
                    id="lokasi"
                    placeholder="Masukkan Lokasi Kejadian Anda"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="judul">Tanggal Kejadian Anda</label>
                  <input
                    type="date"
                    className="form-control"
                    name="tanggal"
                    id="tanggal"
                    placeholder="Masukkan Tanggal Kejadian Anda"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="judul">Tuliskan Isi Laporan Anda</label>
                  <textarea
                    name="isi"
                    className="form-control"
                    id="isi"
                    cols="30"
                    rows="10"
                    autoComplete="off"
                    required
                  />
                </div>
                <button
                  className="btn btn-report bgr-alternative text-white poppins-medium"
                  type="submit"
                >
                  Lapor
                </button>
              </form>
            </div>
          </section>
        </div>

        <Footer />
      </MainLayout>
    </>
  );
};

export default Form;
