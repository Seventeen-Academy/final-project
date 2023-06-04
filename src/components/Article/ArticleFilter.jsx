import "../../assets/css/style-article.css";

const ArticleFilter = () => {
  return (
    <>
      <section id="kategori" className="kategori">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="kategori-filters">
                <li className="filter-active">Semua</li>
                <li>Pendidikan</li>
                <li>Perlindungan</li>
                <li>Keterampilan</li>
                <li>Minat Bakat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleFilter;
