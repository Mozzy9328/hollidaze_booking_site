import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/23/cf/4d/da/hotel-exterior.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hotels</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/02/7f/95/df/filename-seabreeze-web.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>B&Bs</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max500/324410794.jpg?k=42709fe6f3a188f68226f6cdc16160aa58c8e5f905e5f5a7f97d2aca69513e1b&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Guest Houses</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
