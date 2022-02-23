
import TestimonialSlider2 from '../component/testimonialSlider-2';

function Testimonial2({faqData}) {
  return (
    <>
      {/* <!-- Testimonials --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg17.png)","backgroundSize":"contain","backgroundPosition":"center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="section-head style-3 text-center">
					<h6 className="sub-title text-primary bgl-primary m-b15">سوالات متداول</h6>
					<h2 className="title">سوالات مشتریان ما</h2>
				</div>
				<div className="row">
					<div className="col-md-12">
						<TestimonialSlider2 faqData={faqData}/>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Testimonial2;