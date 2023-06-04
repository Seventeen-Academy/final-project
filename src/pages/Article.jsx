import "../assets/css/style-article.css";
import ArticleFilter from "../components/Article/ArticleFilter";
import ArticleList from "../components/Article/ArticleList";
// import ArticlePagination from "../components/Article/ArticlePagination";
import Footer from "../components/GlobalComponent/Footer";
import Navbar from "../components/GlobalComponent/Navbar";

const Article = () => {
  return (
    <>
      <div>
        <Navbar />
        <ArticleFilter />
        <ArticleList />
        <Footer />
        {/* <ArticlePagination /> */}
      </div>
    </>
  );
};

export default Article;
