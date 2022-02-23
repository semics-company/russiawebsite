import Link from "next/link";

function AboutUs_2({abbutusData}) {
    return (
      <>
        {/* <!-- About us --> */}
		<section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container text-right">
				<div className="row align-items-center">
				<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">درباره ما</h6>
							<h2 className="title m-b20">{abbutusData.title}</h2>
							<p>{abbutusData.description}</p>
						</div>
						<ul className="list-check primary m-b30">
							{abbutusData.features.map((value,index)=> <li>{value.title}</li>)}
						</ul>
						<Link href="/about-us"><a className="btn btn-primary rounded-xl gradient">اطلاعات بیشتر ...</a></Link>
					</div>

					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img className="changeimageside" src="images/about/pic1.jpg" alt=""/>
						</div>
					</div>
					
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default AboutUs_2;