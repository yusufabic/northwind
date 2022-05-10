import "./styles.css";

const Home = () => {
  return (
    <section id="home" className="home-page">
      <div className="row">
        <div className="col-8 d-flex justify-content-center align-items-center colour">
          <h2 className="text-white px-3">
            Store.The best way to buy the products you love...
          </h2>
        </div>
        <div className="col-4  d-flex justify-content-center align-items-center colour ">
          <img
            src="https://www.ncminternational.com.tr/wp-content/uploads/2021/07/NCM-INTERNATIONAL-APPLE-SUNUM.jpg"
            alt=""
            className="img-apple w-50 rounded"
          />
        </div>
      </div>
      <div className="row my-5 p-3">
        <div className="col col-lg-2 col-md-6 col-sm-12 text-center">
          <div className="img-div">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645051958490"
              alt="Max-width 100%"
              className="img-icon"
            />
          </div>

          <h6 className="">Macbook</h6>
        </div>
        <div className="col col-lg-2 col-md-6 col-12 text-center">
          <div className="img-div">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202109_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1630706116000"
              alt=""
              className="img-icon"
            />
          </div>
          <h6 className="">Iphone</h6>
        </div>
        <div className="col col-lg-2 col-md-6 col-12 text-center">
          <div className="img-div">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645052537409"
              alt=""
              className="img-icon"
            />
          </div>
          <h6 className="">Watch</h6>
        </div>
        <div className="col col-lg-2 col-md-6 col-12 text-center">
          <div className="img-div">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1633718741000"
              alt=""
              className="img-icon"
            />
          </div>
          <h6 className="">Airpoods</h6>
        </div>
        <div className="col col-lg-2 col-md-6 col-12 text-center">
          <div className="img-div">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617761672000"
              alt=""
              className="img-icon"
            />
          </div>
          <h6 className="">AirTag</h6>
        </div>
        <div className="col col-lg-2 col-md-6 col-12 text-center">
          <div className="img-div">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783381000"
              alt=""
              className="img-icon"
            />
          </div>
          <h6 className="">Ipad</h6>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
};

export default Home;
