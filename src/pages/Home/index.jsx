import "./styles.css";

const Home = () => {
  return (
    <main id="home" className="home-page">
      <section>
        <div className="row text-center color-gray">
          <div className="col-12 mt-5 pt-3 text-center">
            <span className="violator-frameless mt-5">Yeni</span>
            <h2>iPhone SE</h2>
            <h3 className="subhead">It's not hard to reach this power</h3>
          </div>
          <div className="iphone-se col-12 d-flex justify-content-center">
            <figure className="iphone-se-img"></figure>
          </div>
        </div>
        <div className="row text-center color-gray mt-2">
          <div className="col-12 text-center mt-5 pt-3">
            <h2>iPad</h2>
            <h3>Light. Colorful. Alone in strength.</h3>
          </div>
          <div className="ipad col-12">
            <figure className="ipad-img"></figure>
          </div>
        </div>
      </section>
      <section className=" last-part mt-2">
        <div className="row color-dark">
          <div className="col col-md-4 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <h2 className="mac">MacBook</h2>
            <h3 className="mac">As powerful as your imagination.</h3>
          </div>
          <div className="col-12 col-md-8 p-3">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/61086ec373551e86331910e3/Apple-Product-Studio-Shoot/960x0.jpg?format=jpg&width=960"
              alt=""
              className="w-100"
            />
          </div>
        </div>
        <div className="row p-2">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className="text-center w-100 dark-gray">
              <h2 className="mt-5">WATCH</h2>
              <h3>The biggest screen until the today.</h3>
            </div>
            <div className="watch dark-gray">
              <figure className="watch-img"></figure>
            </div>
          </div>
          <div className="dark-gray col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className="dark-gray text-center">
              <h2 className="mt-5">AirTag</h2>
              <h3>Your losing habit disappears.</h3>
            </div>
            <div className="airtag dark-gray d-flex flex-column justify-content-center align-items-center">
              <figure className="airtag-img"></figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
