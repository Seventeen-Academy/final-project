import "../assets/css/style-laporan.css";
import Navbar from "../components/GlobalComponent/Navbar";
import Footer from "../components/GlobalComponent/Footer";

const Form = () => {
    return (
        <>
        <Navbar />
        <section className="lapor">
            <div class="container report-content bgr-light rounded shadow-sm p-3 mt-5 w-50">
                <h4 class="text-center my-4 bgr-primary p-3 rounded text-white poppins-medium">
                    Sampaikan Laporanmu
                </h4>
                <form class="form-content" id="formReport">
                    <div class="mb-3">
                        <label for="judul">Judul Laporan Anda</label>
                        <input type="text" class="form-control" name="judul" id="judul" placeholder="Masukkan Judul Laporan Anda" autoComplete="off" required/>
                    </div>
                    <div class="mb-3">
                        <label for="judul">Lokasi Kejadian Anda</label>
                        <input type="text" class="form-control" name="lokasi" id="lokasi" placeholder="Masukkan Lokasi Kejadian Anda" autoComplete="off" required/>
                    </div>
                    <div class="mb-3">
                        <label for="judul">Tanggal Kejadian Anda</label>
                        <input type="date" class="form-control" name="tanggal" id="tanggal" placeholder="Masukkan Tanggal Kejadian Anda" autoComplete="off" required/>
                    </div>
                    <div class="mb-3">
                        <label for="judul">Tuliskan Isi Laporan Anda</label>
                        <input name="isi" class="form-control" id="isi" cols="30" rows="10" autoComplete="off" required/>
                    </div>
                    <button class="btn btn-report bgr-alternative text-white poppins-medium" type="submit">
                        Lapor
                    </button>
                </form>
            </div>
        </section>
        <Footer />
        </>
    );
};

export default form;