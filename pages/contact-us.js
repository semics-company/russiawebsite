import Link from "next/link";
import Quote2 from "../element/quote-2";
import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";
import {BASEURL} from "./api/BASEURL"

function ContactUs2({headerData,siteInfoData,serviceData,abbutusData,howitworkData,faqData,blogData}) {
  return (
    <>
	<Header2 siteInfoData={siteInfoData}/>
	<div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>ارتباط با ما</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>خانه</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">ارتباط با ما</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Get A Quote --> */}
		<Quote2/>
			
	</div>
	<Footer2 siteInfoData={siteInfoData} serviceData={serviceData}/>
       </>
  )
}

export default ContactUs2;


export async function getStaticProps() {

	const headerFetch = await fetch(`${BASEURL}/cms/banner/1/`)
	const headerData = await headerFetch.json()
  
	const siteinfoFetch = await fetch(`${BASEURL}/cms/siteinfo/1/`)
	const siteInfoData = await siteinfoFetch.json()
  
	const serviceFetch = await fetch(`${BASEURL}/services/service?limit=5&offset=0`)
	const serviceData = await serviceFetch.json()
	
	const abbutusFetch = await fetch(`${BASEURL}/cms/aboutus/1/`)
	const abbutusData = await abbutusFetch.json()
	
	const howitworkFetch = await fetch(`${BASEURL}/cms/howitworkstep/?limit=3&offset=0`)
	const howitworkData = await howitworkFetch.json()
	
	const faqFetch = await fetch(`${BASEURL}/cms/faq/?limit=3&offset=0`)
	const faqData = await faqFetch.json()
	
	const blogFetch = await fetch(`${BASEURL}/blog/post?limit=9&offset=0`)
	const blogData = await blogFetch.json()
	
	return {
	  props: {
		headerData,siteInfoData,serviceData,abbutusData,howitworkData,faqData,blogData
	  },
	}
  }
  