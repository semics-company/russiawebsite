import Link from "next/link";
import Slider from "react-slick";
import moment from 'jalali-moment'

function BlogSlider2({blogData}) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <Slider
                {...settings}
                className="blog-carousel2 owl-carousel owl-none"
            >
				{blogData.results.map((value,index)=>{
					const tags=value.tags
					return <div className="item text-right">
					<div className="dlab-blog style-2 m-b10">
						<div className="dlab-media rounded-md">
						<img src={value.image} alt={value.title}/>
						</div>
						<div className="dlab-info">
							<div className="dlab-meta">
								<ul>
									<li className="post-date">{moment(value.modified, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</li>
									<li className="post-category">
										{tags.map((value,index)=> <a style={{margin:"5px"}} href="javascript:void(0);">{value.title}</a> )}
										
									</li>
								</ul>
							</div>
							<h4 className="dlab-title"><Link href="/blog-details-2"><a>{value.title}</a></Link></h4>
							<p className="m-b20">{value.body.length > 60 ? `${value.body.slice(0, 250)}...`: value.body}</p>
							<Link href="/blog-details-2"><a className="btn-link style-1">ادامه مطلب</a></Link>
						</div>
					</div>
				</div>
				})}
					
		
            </Slider>
        </>
    );
}

export default BlogSlider2;
