import "../../assets/css/style-article.css";

const ArticleFilter = () => {
  return (
    <>
      <section id="kategori" className="kategori">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="kategori-filters">
                <li className="filter-active">
                  <button className="btn btn-text">Semua</button>
                </li>
                <li>
                  <button className="btn btn-text">Pendidikan</button>
                </li>
                <li>
                  <button className="btn btn-text">Perlindungan</button>
                </li>
                <li>
                  <button className="btn btn-text">Keterampilan</button>
                </li>
                <li>
                  <button className="btn btn-text">Minat Bakat</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleFilter;
