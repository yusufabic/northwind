import "./styles.css";

const Home = () => {
  return (
    <section id="home" className="home-page">
      <div className="d-flex flex-column align-items-center">
        <div className="">
          <h1>İphone SE</h1>
          <p>It's not hard to reach this power</p>
        </div>
        <div className="iphone-se"></div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="">
          <h1>İpad</h1>
          <p>It's not hard to reach this power</p>
        </div>
        <div className="ipad"></div>
      </div>
      <div className="d-flex">
        <div className="w-50">
          <img src="/Macbook.jpg" alt="" className="w-100" />
        </div>
        <div className="w-50 d-flex flex-column justify-content-center align-items-center">
          <h1>Macbook</h1>
          <p>It's not hard to reach this power</p>
        </div>
      </div>
      <div className="d-flex watch-tag">
        <div className=" w-50 d-flex flex-column justify-content-center align-items-center">
          <div className="">
            <h1>İphone SE</h1>
            <p>It's not hard to reach this power</p>
          </div>
          <div>
            <img src="/Watch.jpg" alt="" className="w-100" />
          </div>
        </div>
        <div className="Airtag w-50 d-flex flex-column justify-content-center align-items-center">
          <div className="">
            <h1>İphone SE</h1>
            <p>It's not hard to reach this power</p>
          </div>
          <div>
            <img src="/AirTag.jpg" alt="" className="airtag" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
