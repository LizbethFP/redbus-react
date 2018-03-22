import React from 'react'
import Slider from 'react-slick'

const SimpleSlider = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (      
        <div className="container color">
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                <div className="col-4 text-center"><h3>1</h3></div>
                <div className="col-4 text-center"><h3>2</h3></div>
                <div className="col-4 text-center"><h3>3</h3></div>
                <div className="col-4 text-center"><h3>4</h3></div>
                <div className="col-4 text-center"><h3>5</h3></div>
                <div className="col-4 text-center"><h3>6</h3></div>
                </Slider>
            </div>
          </div>
        </div>
    );
  }


export default SimpleSlider;

// import ControlledCarousel from './components/carousel'
// <ControlledCarousel />