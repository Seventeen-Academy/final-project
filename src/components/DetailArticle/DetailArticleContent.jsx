import { CoverPendidikan1, RightTwig, LeftTwig } from "../../assets/images";

import { useState } from "react";
import { Link } from "react-router-dom";

const DetailArticleContent = () => {
  const [DetailArticle, useDetailArticle] = useState([
    {
      cover: CoverPendidikan1,
      title: "Resensi Buku: Sistem Pendidikan Finlandia Catatan dan Pengalaman Seorang Ibu",
    },
  ]);

  return (
    <>
      <div className="container detail-content w-50">
        {DetailArticle.map((item, index) => (
          <div className="content px-3 my-4" key={index}>
            <img src={RightTwig} id="daun" />
            {/* <div className="breadcrumb mt-4" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="./article" style="text-decoration: none; color: #3e37a9">
                    Artikel
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pendidikan
                </li>
              </ol>
            </div> */}
            <img src={item.CoverPendidikan1} className="img-fluid my-4" />
            <h2 className="title my-4">{item.title}</h2>
            <p>
              Bagaimana caranya penduduk mereka memiliki tingkat literasi yang sangat tinggi? Apa benar sekolah di Finlandia tidak mengadakan ujian dan tidak memberikan pekerjaan rumah? Bagaimana caranya negara kecil ini memiliki nilai luar
              biasa dalam tes PISA (Programme for International Student Assessment)? Semua pertanyaan-pertanyaan itu dijawab dengan sangat baik di buku ini berdasarkan kisah dan pengalaman yang dialami langsung oleh penulis..
            </p>
            <p>
              Ditulis oleh Ratih D. Adiputri, seorang akademisi sekaligus seorang ibu dari dua orang anak yang tinggal dan merasakan secara langsung sistem pendidikan Finlandia. Buku yang memiliki tebal 259 halaman ini menjelaskan bagaimana
              sistem pendidikan Finlandia dari mulai undang-undangnya, kurikulum, hingga bagaimana masyarakat Finlandia sendiri mengenai sistem pendidikan mereka. Elinikainen oppiminen atau pembelajaran seumur hidup merupakan moto dalam
              sistem pendidikan Finlandia. Pendidikan di Finlandia memang sangat luar biasa, dikemas secara mudah dan gratis bagi seluruh warganya. Finlandia benar-benar memastikan siapapun berhak mendapatkan pendidikan terbaik, dan itu
              didapatkan semua warga tanpa membedakan latar belakang ekonomi keluarga. Sistem pendidikan Finlandia tersusun dengan sangat baik dalam aspek apapun, dari mulai perencanaan hingga tahap lanjutan semuanya benar-benar disiapkan
              oleh Finlandia. Konsep pembelajaran dari sejak masih anak-anak hingga usia remaja sampai dewasa sudah terkonsep dengan sangat baik di Finlandia.
            </p>
            <p>
              Tingkat literasi yang tinggi hingga predikat negara yang memiliki tingkat korupsi yang sangat minim merupakan salah satu contoh keberhasilan sistem pendidikan Finlandia. Ujian dan pekerjaan rumah yang biasanya menjadi beban
              dan ketakutan bagi siswa, benar-benar tak terjadi di Finlandia. Suasana seperti itulah yang membuat siswa di Finlandia selalu bahagia, karena jika ada ujian pun, Finlandia tidak menjadikan itu sebuah tolak ukur kecerdasan
              siswa, itu didukung juga sistem pendidikan Finlandia yang tidak mengenal sistem ranking, karena itulah siswa benar-benar enjoy menikmati masa sekolahnya. Rahasia sukses Finlandia mendapatkan nilai tes PISA yang bagus juga
              karena mereka terbiasa enjoy menghadapi soal-soal ujian, sistem pendidikan disana selalu menganggap ujian bukanlah sebuah hal yang urgent dan menentukan segalanya..
            </p>
            <p>
              Masyarakat dunia selalu kagum akan capaian hasil tes PISA Finlandia, namun nyatanya pemerintah Finlandia justru menganggap itu biasa saja, karena bagi mereka keberhasilan menanamkan nilai-nilai baik dan kebiasaan lebih penting
              dibandingkan capaian yang diberi nilai oleh sebuah angka. Penanaman nilai-nilai dan kebiasaan baik inilah yang sangat menonjol dalam sistem pendidikan Finlandia. Penulis menceritakan bahwa sejak sekolah tingkat TK, anak-anak
              di Finlandia sudah diajarkan nilai-nilai dasar seperti kejujuran, budaya antri, menghargai pendapat, dll. Kebiasaan-kebiasaan tersebut benar-benar membawa dampak pada banyak hal positif di masa yang akan datang.
            </p>
            <p>
              Meskipun ditulis oleh seorang akademisi, buku ini benar-benar ringan dan mudah dipahami meskipun masih terdapat beberapa istilah yang agaknya kurang familiar bagi orang awam. Dengan menjelaskan mengenai seluk beluk pendidikan
              Finlandia yang cukup berhasil, buku ini sangat cocok dijadikan sebuah bacaan bagi guru, siswa, pengambil kebijakan, atau siapapun yang tertarik mengenai pendidikan.Penanaman nilai-nilai dan kebiasaan baik inilah yang sangat
              menonjol dalam sistem pendidikan Finlandia.Penulis menceritakan bahwa sejak sekolah tingkat TK, anak-anak di Finlandia sudah diajarkan nilai-nilai dasar seperti kejujuran, budaya antri, menghargai pendapat,
              dll.Kebiasaan-kebiasaan tersebut benar-benar membawa dampak pada banyak hal positif di masa yang akan datang.
            </p>
            <p>
              Meskipun ditulis oleh seorang akademisi, buku ini benar-benar ringan dan mudah dipahami meskipun masih terdapat beberapa istilah yang agaknya kurang familiar bagi orang awam. Dengan menjelaskan mengenai seluk beluk pendidikan
              Finlandia yang cukup berhasil, buku ini sangat cocok dijadikan sebuah bacaan bagi guru, siswa, pengambil kebijakan, atau siapapun yang tertarik mengenai pendidikan
            </p>
            <p>Judul Buku : Sistem Pendidikan Finlandia Catatan dan Pengalaman Seorang Ibu</p>
            <p>Penulis : Ratih D. Adiputri</p>
            <p>Penerbit : KPG (Kepustakaan Populer Gramedia)</p>
            <p>Tahun terbit : 2019</p>
            <p>Tebal Buku : 259 halaman</p>
            <p>ISBN : 978-602-481-307-9</p>
            <p>Fasa Muhamad Hapid, Aktivis Persma Suaka UIN Bandung.</p>
            <img src={LeftTwig} alt="" id="ranting" />
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailArticleContent;
