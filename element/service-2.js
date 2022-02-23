import {useState} from 'react';
import Link from 'next/link';

function Service2({serviceData}) {
    const [open, setOpen] = useState("p2")
    return (
      <>
        {/* <!-- Service --> */}
		<section className="content-inner-2 text-right" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row icon-wraper-1">
					<div className="col-lg-4 col-md-6">
						<div className="section-head style-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
							<h6 className="sub-title text-primary bgl-primary m-b15">خدمات ما</h6>
							<h2 className="title m-t10">مسیر مهاجرت را برای شما آسان می‌کنیم…</h2>
						</div>
					</div>
					{serviceData.results.map((value,index)=>{
						return <div className="col-lg-4 col-md-6">
						<div className={`${open === `p${index}` ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen(`p${index}`)}>
								<div className="icon-bx-sm radius bgl-primary"> 
									<Link href="#"><a className="icon-cell">
											<i className={value.icon}></i>
										</a>
									</Link>		
								</div>
								<div className="wraper-effect"></div>
								<div className="icon-content">
									<h4 className="dlab-title m-b15">{value.title}</h4>
									<p>{value.description}</p>
								</div>
							</div>
						</div>
					})}
					
					
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Service2;