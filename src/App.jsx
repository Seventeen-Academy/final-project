import { BrowserRouter } from "react-router-dom";

import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/bootstrap/js/bootstrap.js";

import "./assets/css/core.css";
import "./assets/css/responsive.css";
// import Router from "./config/router";
// import Payment from "./pages/Payment";
// import DetailKelas from "./pages/Detailkelas";
import DetailProfile from "./pages/DetailProfile";

function App() {
  return (
    <>
      <BrowserRouter>
      <DetailProfile />
      </BrowserRouter>

      
    </>
  );
}

export default App;
