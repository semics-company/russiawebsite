import { useEffect } from "react";
import AboutUs2 from "../element/aboutUs-2";
import Blog2 from "../element/blog-2";
import Clients2 from "../element/clients-2";
import Counter2 from "../element/counter2";
import OurServices2 from "../element/our-services-2";
import Pricing2 from "../element/pricing-2";
import Projects2 from "../element/Projects-2";
import Service2 from "../element/service-2";
import Slider2 from "../element/slider-2";
import Testimonial2 from "../element/testimonial-2";
import Footer2 from "../layout/footer-2";
import Header2 from "./../layout/header-2";
import {BASEURL} from "./api/BASEURL"
// import "../css/skin/skin-1.css";

function Index2({headerData,siteInfoData,serviceData,abbutusData,howitworkData,faqData,blogData}) {
 
  return (
    <>
      <Header2 siteInfoData={siteInfoData} />
      <div style={{marginBottom:"80px"}} className="page-content bg-white">
        <Slider2 header={headerData} />
        <Service2 serviceData={serviceData} />
        <AboutUs2 abbutusData={abbutusData} />
        <OurServices2 howitworkData={howitworkData}/>
        <Testimonial2 faqData={faqData}/>
        <Blog2 blogData={blogData}/>
      </div>
      <Footer2 siteInfoData={siteInfoData} serviceData={serviceData}/>
    </>
  );
}

export default Index2;

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
