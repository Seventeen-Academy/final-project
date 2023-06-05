import Footer from "../components/GlobalComponent/Footer";
import Navbar from "../components/GlobalComponent/Navbar";
import CardCourse from "../components/Payment/CardCourse";
import Checkout from "../components/Payment/Checkout";
import PaymentMethod from "../components/Payment/PaymentMethod";
import MainLayout from "../layout/MainLayout";

const Payment = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <section className="payment mt-3 px-3">
            <div className="row">
              <div className="col-sm-12 col-md-8 col-xl-8">
                <h1 className="title poppins-medium">Pembayaran</h1>
                <CardCourse />
                <PaymentMethod />
              </div>
              <div className="col-sm-12 col-md-4 col-xl-4 mt-5">
                <Checkout />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </MainLayout>
    </>
  );
};

export default Payment;
