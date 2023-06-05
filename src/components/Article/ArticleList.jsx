import { ThumbnailBakat1, ThumbnailKeterampilan1, ThumbnailPendidikan1, ThumbnailPendidikan2, ThumbnailPerlindungan1, ThumbnailPerlindungan2, BadgePendidikan, BadgePerlindungan, BadgeBakat, BadgeKeterampilan } from "../../assets/images";
import { RightTwig, LeftTwig } from "../../assets/images";

import { useState } from "react";
import { Link } from "react-router-dom";

const ArticleList = () => {
  const [article, useArticle] = useState([
    {
      thumbnail: ThumbnailPendidikan1,
      badgeStatus: BadgePendidikan,
      date: "01 April 2023",
      title: "Resensi Buku: Sistem Pendidikan Finlandia Catatan dan Pengalaman Seorang Ibu",
      description: `Elinikainen oppiminen atau pembelajaran seumur hidup merupakan moto dalam sistem pendidikan Finlandia.`,
    },
    {
      thumbnail: ThumbnailPerlindungan1,
      badgeStatus: BadgePerlindungan,
      date: "25 Juli 2022",
      title: "Cara Mengatasi Bullying dan Tips untuk Mencegahnya",
      description: `Kasus bullying di Indonesia sudah sering sekali terdengar. Bahkan ada juga yang berakhir dengan kematian.`,
    },
    {
      thumbnail: ThumbnailPerlindungan2,
      badgeStatus: BadgePerlindungan,
      date: "07 September 2021",
      title: "Pencegahan Tindakan Bullying pada Anak Usia Dini",
      description: `Tindakan bullying pada anak usia dini maupun usia remaja tidak pernah dibenarkan oleh pihak manapun.`,
    },
    {
      thumbnail: ThumbnailBakat1,
      badgeStatus: BadgeBakat,
      date: "27 Juli 2022",
      title: "Pengaruh Minat terhadap Bakat pada Remaja",
      description: `Bakat merupakan potensi bawaan yang dimiliki manusia, sedangkan minat tercipta karena adanya ketertarikan kuat atas sesuatu.s`,
    },
    {
      thumbnail: ThumbnailPendidikan2,
      badgeStatus: BadgePendidikan,
      date: "02 Mei 2023",
      title: "Pembelajaran Sosial Emosional",
      description: `Pembelajaran Sosial dan Emosional dapat menciptakan lingkungan belajar yang aman dan nyaman`,
    },
    {
      thumbnail: ThumbnailKeterampilan1,
      badgeStatus: BadgeKeterampilan,
      date: "29 Maret 2023",
      title: "Mengasah Keterampilan Anak melalui Kegiatan STEM",
      description: `STEM (Science, Technology, Engineering, and Mathematics) adalah disiplin ilmu yang terkait dengan sains, teknologi, teknik, dan matematika.`,
    },
  ]);
  return (
    <>
      <img src={RightTwig} alt="" className="right-twig" />
      <section className="container artikel-list mt-5">
        <div className="row g-3">
          {article.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <Link to="/article/detailarticle">
                <div className="card card-article">
                  <img src={item.thumbnail} alt="" />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <div className="kategori-wrapper d-flex ms-1">
                          <img src={item.badgeStatus} className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-6 d-flex justify-content-end">
                        <span className="date me-1 my-auto">{item.date}</span>
                      </div>
                    </div>
                    <h5 className="card-titleArticle pt-3 mx-1 color-dark">
                      {item.title}
                      {/* <a href="/pages/detail-artikel.html" className="view color-dark"></a> */}
                    </h5>
                    <p className="card-text mx-1 color-dark my-3">{item.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <img src={LeftTwig} alt="" className="left-twig" />
    </>
  );
};

export default ArticleList;
