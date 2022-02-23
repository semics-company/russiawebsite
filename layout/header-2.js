import Link from 'next/link';
import { useState } from 'react';

function Header2({siteInfoData}) {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
        <>
            <header className="site-header mo-left header-transparent">
                <div className="container">
                    <div className="top-bar">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li style={{direction:"ltr"}}>
                                        <i className="la la-envelope"></i>{" "}
                                        {siteInfoData.email}
                                    </li>
                                    <li style={{direction:"ltr"}}>
                                        <i className="la la-phone-volume"></i> 
                                        {siteInfoData.tel}
                                    </li>
                                </ul>
                            </div>
                            <div className="dlab-topbar-right">
                                <ul className="dlab-social-icon">
                                    <li>
                                        <a
                                            className="fa fa-facebook"
                                            href={siteInfoData.facebook}
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-instagram"
                                            href={siteInfoData.instagram}
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-whatsapp"
                                            href={siteInfoData.whatsapp}
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link href="/">
                                    <a>
                                        <img className="custom-logo-white" src="images/whiteLogo.svg" alt="" />
                                        <img className="custom-logo" src="images/blackLogo.svg" alt="" />

                                    </a>
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${
                                    show ? "open" : ""
                                }`}
                                onClick={() => setShow(!show)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                <Link href="/contact-us">
                                        <a className="btn btn-primary rounded-xl gradient shadow">ارتباط با ما</a>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={`header-nav navbar-collapse collapse justify-content-end ${
                                    show ? "show" : ""
                                }`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header">
                                    <Link href="/">
                                        <a>
                                            <img src="images/blackLogo.svg" alt="" />
                                        </a>
                                    </Link>
                                </div>

                                <ul className="nav navbar-nav navbar">
                                   
									<li><Link href="/"><a>خانه</a></Link></li>
                                    <li
                                        className={`${
                                            open === "about" ? "open" : ""
                                        }`}
                                    >
                                        <a onClick={() => setOpen("about")}>
                                            <span>تحصیل</span>
                                            <i className="fa fa-chevron-down"></i>
                                        </a>
                                        <ul className="sub-menu">
                                            <li><Link href="/pricing-table-2"><a>اخذ پذیرش دانشگاه</a></Link></li>
                                            <li><Link href="/pricing-table-2"><a>اخذ پذیرش کالج یا پادفک</a></Link></li>

											<li><Link href="/about-us-2"><a>لیست دانشگاه ها</a></Link></li>
											<li><Link href="/faq-2"><a>لیست کشور ها</a></Link></li>
                                        </ul>
                                    </li>
                                    <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span> ویزا</span><i className="fa fa-chevron-down"></i></a>
										<ul className="sub-menu">
											<li><Link href="/services-2"><a>اخذ ویزا</a></Link></li>
											<li><Link href="/faq-2"><a>لیست کشور ها</a></Link></li>
										</ul>
									</li>
                                    <li><Link href="/contact-us-2"><a>مقالات</a></Link></li>
                                    <li><Link href="/contact-us-2"><a>خدمات</a></Link></li>
									<li><Link href="/contact-us-2"><a>درباره ما</a></Link></li>
									<li><Link href="/contact-us-2"><a>سوالات متداول</a></Link></li>
									
                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>


                                        <Link href={siteInfoData.facebook}>
                                            <a className="fa fa-facebook"></a>
                                        </Link>
                                        <Link href={siteInfoData.whatsapp}>
                                            <a className="fa fa-whatsapp"></a>
                                        </Link>
                                        <Link href={siteInfoData.instagram}>
                                            <a className="fa fa-instagram"></a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    );
}

export default Header2;
