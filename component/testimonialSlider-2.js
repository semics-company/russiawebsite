import Slider from "react-slick";

function TestimonialSlider2({faqData}) {
  const settings = {
    dots: true,
    dotsClass: "swiper-container testimonial-thumbs d-flex",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <div className="swiper-wrapper">
          <div className="testimonial-pic">
            <img src={`images/testimonials/pic${i + 1}.jpg`} alt="" />
            <div className="shape-bx"></div>
          </div>
        </div>
      );
    },
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="testimonials-wraper-2">
            {/* <!-- Swiper --> */}
            {/* <div className="swiper-container testimonial-thumbs">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-pic">
                    <img src="images/testimonials/pic1.jpg" alt="" />
                    <div className="shape-bx"></div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-pic">
                    <img src="images/testimonials/pic2.jpg" alt="" />
                    <div className="shape-bx"></div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-pic">
                    <img src="images/testimonials/pic3.jpg" alt="" />
                    <div className="shape-bx"></div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="swiper-container testimonial-content">
              <div className="swiper-wrapper">
                <Slider {...settings}>
                  {faqData.results.map((value,index)=>{
                      return <div className="swiper-slide">
                      <div className="testimonial-4 quote-right">
                        <div className="testimonial-text">
                          <strong className="testimonial-name">{value.question}</strong>
                          <span className="testimonial-position text-primary m-b20">
                            
                          </span>
                          <p>
                          {value.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  })}
                  
                </Slider>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialSlider2;
