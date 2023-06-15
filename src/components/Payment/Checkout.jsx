const Checkout = ({ data }) => {
  return (
    <>
      {data && (
        <div className="card-wrapper p-3 shadow-sm rounded bgr-light">
          <div className="text-wrapper d-flex justify-content-between">
            <h3 className="checkout-detail">Harga Kelas</h3>
            <h3 className="checkout-detail">Rp {data.price},-</h3>
          </div>
          <hr />
          <div className="text-wrapper d-flex justify-content-between my-2">
            <h3 className="checkout-detail">Total Pembayaran</h3>
            <h3 className="checkout-detail" id="price-total">
              {data.price < 1 ? "Gratis" : "Rp " + data.price + ",-"}
            </h3>
          </div>
          <button className="btn btn-checkout bgr-alternative color-light poppins-medium w-100">
            Bayar
          </button>
          <button className="btn btn-link w-100 text-decoration-none color-alternative poppins-medium my-2">
            Batalkan Pembayaran
          </button>
        </div>
      )}
    </>
  );
};

export default Checkout;
