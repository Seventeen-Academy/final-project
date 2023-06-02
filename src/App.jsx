import { BrowserRouter } from "react-router-dom";
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/bootstrap/js/bootstrap.js";
import "./assets/css/style-footer.css";
import "./assets/css/core.css";
import "./assets/css/responsive.css";
import Router from "./config/router";
import Payment from "./pages/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
