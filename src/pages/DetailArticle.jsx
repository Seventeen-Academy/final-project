import "../assets/css/style-detailartikel.css";

import MainLayout from "../layout/MainLayout";
import Navbar from "../components/GlobalComponent/Navbar";
import Footer from "../components/GlobalComponent/Footer";
import DetailArticleContent from "../components/DetailArticle/DetailArticleContent";

const DetailArticle = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
        </div>
        <DetailArticleContent />
        <Footer />
      </MainLayout>
    </>
  );
};

export default DetailArticle;
