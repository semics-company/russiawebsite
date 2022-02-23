import Link from 'next/link';

function Footer2({siteInfoData,serviceData}) {
  return (
    <>
    {/* <!-- Footer --> */}
    <footer className="site-footer style-2" id="footer" style={{"backgroundImage":"url(images/background/bg4.png)"}}>
		<div className="container">
			<div className="dlab-subscribe style-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<h2 className="title text-right">در خبرنامه شرکت کنید تا از اخرین اخبار با خبر باشید!</h2>
					</div>
					<div className="col-lg-5">
						<form style={{direction:"ltr"}} className="dzSubscribe" method="post">
							<div className="dzSubscribeMsg"></div>
							<div className="form-group">
								<div className="input-group">
									<input name="dzEmail" required="required" type="email" className="form-control" placeholder="ایمیل خود را وارد کنید."/>
									<div className="input-group-addon">
										<button name="submit" value="Submit" type="submit" className="btn btn-primary gradient fa fa-paper-plane-o"></button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-top text-right">
            <div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<div className="footer-logo">
								<a href="/"><img style={{width:"200px"}} src="images/whiteLogo.svg" alt=""/></a> 
							</div>
							<div className="widget widget_getintuch">
								<ul>
									<li>
										<i className="fa fa-phone gradient"></i>
										<span>{siteInfoData.tel}</span> 
									</li>
									<li>
										<i className="fa fa-envelope gradient"></i> 
										<span>{siteInfoData.email}</span>
									</li>
									<li>
										<i className="fa fa-map-marker gradient"></i>
										<span>{siteInfoData.address}</span>
									</li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">صفحات ما</h5>
							<ul>
								<li><Link href="#"><a>خانه</a></Link></li>
								<li><Link href="#"><a>درباره ما</a></Link></li>
								<li><Link href="#"><a>خدمات</a></Link></li>
								<li><Link href="#"><a>دانشگاه ها</a></Link></li>
								<li><Link href="#"><a>کشور ها</a></Link></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
							<h5 className="footer-title">خدمات ما</h5>
							<ul>
								{serviceData.results.map((value,index)=> <li><Link href="#"><a>{value.title}</a></Link></li>)}
								
								
							</ul>
						</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom" style={{direction:"ltr"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7 text-left"> 
						<span className="copyright-text">{siteInfoData.footer}</span> 
					</div>
					<div className="col-lg-6 col-md-5 text-right"> 
						<div className="dlab-social-icon">
							<ul>
								<li><a className="fa fa-facebook" href={siteInfoData.facebook}></a></li>
								<li><a className="fa fa-instagram" href={siteInfoData.instagram}></a></li>
								<li><a className="fa fa-whatsapp" href={siteInfoData.whatsapp}></a></li>
							</ul>
						</div>
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --></footer> */}
    </>
  )
}

export default Footer2;