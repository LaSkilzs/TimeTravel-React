import React from "react";

const Carousel = props => {
  return (
    <React.Fragment>
      <div
        id="carouselExampleControls"
        className="carousel "
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="carousel-image"
              src="https://www.culture24.org.uk/asset_arena/0/86/84/348680/v0_master.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className=" carousel-image"
              src="https://images-na.ssl-images-amazon.com/images/I/51QmMlwF0CL._SX450_.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-image"
              src="https://beckytranssexual.files.wordpress.com/2010/07/women-workers-circa-19001.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-image"
              src="https://www.wycombe.gov.uk/uploads/public/Images/Wycombe20Museum/Glenisters-chair-factory-MHW01413.jpg"
              alt="fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-image"
              src="http://www.writinglives.org/wp-content/uploads/2017/04/railwayworkersrailwaytowns1.jpg"
              alt="Fifth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-image"
              src="https://8t9mb68ink-flywheel.netdna-ssl.com/wp-content/uploads/2010/07/Homes-of-the-Poor-Thulstrup.jpg"
              alt="Sixth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-image"
              src="https://tce-live2.s3.amazonaws.com/media/media/6d29ce94-952e-4576-b683-b58d2866e20c.jpg"
              alt="Seventh slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-image"
              src="http://makingofaustralia.weebly.com/uploads/4/7/4/6/47467437/7411857.png?443"
              alt="Eighth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-image"
              src="http://i.cdn.turner.com/cnn/2010/POLITICS/03/16/capitol.hill.jobs/story.barber.loc.jpg"
              alt="Ninth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-image"
              src="https://78405a.medialib.edu.glogster.com/moWs693Vh6IdI0B9K7u0/media/7b/7b0baefb89ec639fd41608b6d20d8130e74b5d04/working-woman-1920s.jpg"
              alt="Tenth slide"
            />
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
