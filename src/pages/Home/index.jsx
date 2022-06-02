import "./styles.css";

const Home = () => {
  return (
    <main id="home" className="home-page">
      <section>
        <div className="row text-center color-back-g">
          <div className="mt-5 text-center p-0">
            <span className="mt-5">Yeni</span>
            <h2>iPhone SE</h2>
            <h3>It's not hard to reach this power</h3>
          </div>
          <div className="p-0">
            <img
              className="w-75"
              src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhoneSE-double-infinity-220308_Full-Bleed-Image.jpg.slideshow-xlarge.jpg"
              alt="iphone-se"
            />
          </div>
        </div>
        <div className="row color-back-g mt-1">
          <div className="text-center mt-5">
            <h2>iPad</h2>
            <h3>Light. Colorful. Alone in strength.</h3>
          </div>
          <div>
            <img
              className="ipad-img"
              src="https://www.apple.com/newsroom/images/product/ipad/standard/apple_new-ipad-air_green_09152020_carousel.jpg.large.jpg"
              alt="ipad"
            />
          </div>
        </div>
      </section>
      <section className="mt-1">
        <div className="row color-back-d">
          <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <h2 className="color-font-g text-center">MacBook</h2>
            <h3 className="color-font-g text-center">
              As powerful as your imagination.
            </h3>
          </div>
          <div className="col-md-8">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/61086ec373551e86331910e3/Apple-Product-Studio-Shoot/960x0.jpg?format=jpg&width=960"
              alt=""
              className="responsive-mac"
            />
          </div>
        </div>
        <div className="row p-1">
          <div className="col-md-6 p-1">
            <div className="device-card">
              <h2 className="text-center">WATCH</h2>
              <h3 className="text-center">
                The biggest screen until the today.
              </h3>
              <img
                src="https://www.apple.com/tr/apple-watch-se/images/overview/swim/water__cnq38qvnj9jm_large.jpg"
                alt="apple watch"
                className="text-center responsive"
              />
            </div>
          </div>
          <div className="col-md-6 p-1">
            <div className="device-card">
              <h2 className="text-center">AirTag</h2>
              <h3 className="text-center">Your losing habit disappears.</h3>
              <img
                src="https://st-troy.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/637575062252471204.jpg?q=100"
                alt=""
                className="text-center responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
