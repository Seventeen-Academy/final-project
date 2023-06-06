import "../assets/css/style-article.css";
import ArticleFilter from "../components/Article/ArticleFilter";
import ArticleList from "../components/Article/ArticleList";
// import ArticlePagination from "../components/Article/ArticlePagination";
import Footer from "../components/GlobalComponent/Footer";
import Navbar from "../components/GlobalComponent/Navbar";
import MainLayout from "../layout/MainLayout";

const Article = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <ArticleFilter />
          <ArticleList />
          {/* <ArticlePagination /> */}
        </div>
        <Footer />
      </MainLayout>
    </>
  );
};

export default Article;
