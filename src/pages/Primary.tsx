// import { ABOUT, BANNER, BRAND1, BRAND2, BRAND3, BRAND4, BRAND5, BRAND6, BRAND7, BRAND8, BRAND9, LOGO, P1, P2, P3, P4, P5, P6, P7, P8, P9, SERVICE1, SERVICE2, SERVICE3, SERVICE4, T1, T2 } from "./Imgs"
import {Link} from 'react-router-dom'
// import LOGO from '../assets/img/logo.png';
import BANNER from '../assets/img/banner/home-right.png';
import ABOUT from '../assets/img/about-us.png';

import BRAND1 from '../assets/img/brands/logo1.png'
import BRAND2 from '../assets/img/brands/logo2.png'
import BRAND3 from '../assets/img/brands/logo3.png'
import BRAND4 from '../assets/img/brands/logo4.png'
import BRAND5 from '../assets/img/brands/logo5.png'
import BRAND6 from '../assets/img/brands/logo6.png'
import BRAND7 from '../assets/img/brands/logo7.png'
import BRAND8 from '../assets/img/brands/logo8.png'
import BRAND9 from '../assets/img/brands/logo9.png'

import SERVICE1 from '../assets/img/services/s1.png'
import SERVICE2 from '../assets/img/services/s2.png'
import SERVICE3 from '../assets/img/services/s3.png'
import SERVICE4 from '../assets/img/services/s4.png'

// import P1 from '../assets/img/portfolio/p1.jpg'
// import P2 from '../assets/img/portfolio/p2.jpg'
// import P3 from '../assets/img/portfolio/p3.jpg'
// import P4 from '../assets/img/portfolio/p4.jpg'
// import P5 from '../assets/img/portfolio/p5.jpg'
// import P6 from '../assets/img/portfolio/p6.jpg'
// import P7 from '../assets/img/portfolio/p7.jpg'
// import P8 from '../assets/img/portfolio/p8.jpg'
// import P9 from '../assets/img/portfolio/p9.jpg'

import T1 from '../assets/img/testimonials/t1.jpg'
import T2 from '../assets/img/testimonials/t2.jpg'


export const Primary = ()=>{
    return(
        <div>
            <header className="header_area">
		<div className="main_menu">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">
					<Link className="navbar-brand logo_h" to={"/"}><h1 style={{color:'#854fee'}}>SAYFULLODEV</h1></Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul className="nav navbar-nav menu_nav justify-content-end">
							<li className="nav-item active"><Link className="nav-link" to="/">ASOSIY</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	        </header>

            <section className="home_banner_area">
		<div className="banner_inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="banner_content">
							<h3 className="text-uppercase">Salom</h3>
							<h1 className="text-uppercase">men sayfullodev</h1>
							<h5 className="text-uppercase">middle full stack dasturchiman</h5>
							<div className="d-flex align-items-center">
								<a className="primary_btn" href="https://www.instagram.com/sayfullo_dev/"><span>men haqimda batafsil</span></a>
								<a className="primary_btn tr-bg" href="https://www.youtube.com/channel/UCfFp_w-egfSUEG1ZijNy1Mg"><span>youtube</span></a>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="home_right_img">
							<img className="" src={BANNER} width={"145%"} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	        </section>

            <section className="about_area section_gap">
		<div className="container">
			<div className="row justify-content-start align-items-center">
				<div className="col-lg-5">
					<div className="about_img">
						<img className="" src={ABOUT} alt="" />
					</div>
				</div>

				<div className="offset-lg-1 col-lg-5">
					<div className="main_title text-left">
						<h2>men biladigan <br />
							texnologiyalar</h2>
						<p>
							Full stack dasturchiman backend da java frontend da react texnologiyalaridan foydalanaman 
						</p>
						<p>
							Qo'chimcha sql da postgresql, mongodb(noSql), mySql <br />
                            Frontend da react.js, vite.js, umi.js, redux.js, vue.js, angular.js, next.js <br />
                            Backend da java(spring, spring boot), node.js(express.js), python(django) <br />
                            O'zim bilgan dasturlash tillari  java, c++, c#, arduino, pascal, delphi, python, javaScript, typeScript, dart, php, go, c
						</p>
						<a className="primary_btn" href="#"><span>Batafsil youtube kanalimda</span></a>
					</div>
				</div>
			</div>
		</div>
	        </section>

            <section className="brand_area section_gap_bottom">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-brand-item d-table">
								<div className="d-table-cell text-center">
									<img src={BRAND1} alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-brand-item d-table">
								<div className="d-table-cell text-center">
									<img src={BRAND2} alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-brand-item d-table">
								<div className="d-table-cell text-center">
									<img src={BRAND3} alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-brand-item d-table">
								<div className="d-table-cell text-center">
									<img src={BRAND4} alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-brand-item d-table">
								<div className="d-table-cell text-center">
									<img src={BRAND5} alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-brand-item d-table">
								<div className="d-table-cell text-center">
									<img src={BRAND6} alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-brand-item d-table">
								<div className="d-table-cell text-center">
									<img src={BRAND7} alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-brand-item d-table">
								<div className="d-table-cell text-center">
									<img src={BRAND8} alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-brand-item d-table">
								<div className="d-table-cell text-center">
									<img src={BRAND9} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="offset-lg-2 col-lg-4 col-md-6">
					<div className="client-info">
						<div className="d-flex mb-50">
							<span className="lage">4,5</span>
							<span className="smll">Yildan beri IT olamidaman</span>
						</div>
						<div className="call-now d-flex">
							<div>
								<span className="fa fa-phone"></span>
							</div>
							<div className="ml-15">
								<p>Telefon raqamim</p>
								<h3>91-810-32-46</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	        </section>
            
            <section className="features_area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 text-center">
					<div className="main_title">
						<h2>Men ishlagan kompaniyalar </h2>
						<p>
							Men IT olamida ishlagan kompaniyalarim
                        </p>
					</div>
				</div>
			</div>
			<div className="row feature_inner">
				<div className="col-lg-3 col-md-6">
					<div className="feature_item">
						<img src={SERVICE1} alt="" />
						<h4>It city academy</h4>
						<p>Qashqadaryo viloyati Qarshi shahridagi it city academy <br /><br /></p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="feature_item">
						<img src={SERVICE2} alt="" />
						<h4>Arch design</h4>
						<p>Surxondaryo viloyati Termiz shahridagi Arch design <br /><br /></p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="feature_item">
						<img src={SERVICE3} alt="" />
						<h4>Renessans & Modern school</h4>
						<p>Qashi shahridagi Renessans & Modern school</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="feature_item">
						<img src={SERVICE4} alt="" />
						<h4>Revolution academy</h4>
						<p>Shahrisabz shahridagi Revolution academy</p>
					</div>
				</div>
			</div>
		</div>
	        </section>

            {/* <section className="portfolio_area" id="portfolio">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="main_title text-left">
						<h2>quality work <br />
							Recently done project </h2>
					</div>
				</div>
			</div>
			<div className="filters portfolio-filter">
				<ul>
					<li className="active" data-filter="*">all</li>
					<li data-filter=".popular">popular</li>
					<li data-filter=".latest"> latest</li>
					<li data-filter=".following">following</li>
					<li data-filter=".upcoming">upcoming</li>
				</ul>
			</div>
	
			<div className="filters-content">
				<div className="row portfolio-grid justify-content-center">
					<div className="col-lg-4 col-md-6 all latest">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src={P1} alt="" />
								<div className="overlay"></div>
								<a href="img/portfolio/p1.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">minimal design</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all popular">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src={P2} alt="" />
								<div className="overlay"></div>
								<a href="img/portfolio/p2.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">Paint wall</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all latest">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src={P3} alt="" />
								<div className="overlay"></div>
								<a href="img/portfolio/p3.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">female light</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all popular">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src={P4} alt="" />
								<div className="overlay"></div>
								<a href="img/portfolio/p4.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">fourth air</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all following">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src={P5} alt="" />
								<div className="overlay"></div>
								<a href="img/portfolio/p5.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">together sign</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all upcoming">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src={P6} alt="" />
								<div className="overlay"></div>
								<a href="img/portfolio/p6.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">multiply fowl</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all upcoming following">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src={P7} alt="" />
								<div className="overlay"></div>
								<a href="img/portfolio/p7.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">green heaven</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all following">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src={P8} alt="" />
								<div className="overlay"></div>
								<a href="img/portfolio/p8.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4>fly male</h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all upcoming">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src={P9} alt="" />
								<div className="overlay"></div>
								<a href="img/portfolio/p9.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">season face</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	        </section> */}

            <div className="testimonial_area section_gap_bottom">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 text-center">
					<div className="main_title">
						<h2>Men bilan birga</h2>
						<p>IT bilimizngizni tekinga pro darajaga oshirishingiz mumkin. buning uchun shunchaki Instagram, Telegram va Youtube da menga obuna bo'ling.</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="testi_slider owl-carousel">
        			<div className="testi_item">
        				<div className="row">
        					<div className="col-lg-4">
        						<img src={T1} alt="" />
        					</div>
        					<div className="col-lg-8">
        						<div className="testi_text">
        							<h4>Elite Martin</h4>
									<p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="testi_item">
        				<div className="row">
        					<div className="col-lg-4">
        						<img src={T2} alt="" />
        					</div>
        					<div className="col-lg-8">
        						<div className="testi_text">
        							<h4>Davil Saden</h4>
									<p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="testi_item">
        				<div className="row">
        					<div className="col-lg-4">
        						<img src={T1} alt="" />
        					</div>
        					<div className="col-lg-8">
        						<div className="testi_text">
        							<h4>Elite Martin</h4>
									<p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="testi_item">
        				<div className="row">
        					<div className="col-lg-4">
        						<img src={T2} alt="" />
        					</div>
        					<div className="col-lg-8">
        						<div className="testi_text">
        							<h4>Davil Saden</h4>
									<p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="testi_item">
        				<div className="row">
        					<div className="col-lg-4">
        						<img src={T1} alt="" />
        					</div>
        					<div className="col-lg-8">
        						<div className="testi_text">
        							<h4>Elite Martin</h4>
									<p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="testi_item">
        				<div className="row">
        					<div className="col-lg-4">
        						<img src={T2} alt="" />
        					</div>
        					<div className="col-lg-8">
        						<div className="testi_text">
        							<h4>Davil Saden</h4>
									<p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
        						</div>
        					</div>
        				</div>
        			</div>
        		</div>
			</div>
		</div>
	        </div>
            
            <section className="newsletter_area">
		<div className="container">
			<div className="row justify-content-center align-items-center">
				<div className="col-lg-12">
					<div className="subscription_box text-center">
						<h2 className="text-uppercase text-white">Menga xabar yuborish</h2>
						<p className="text-white">
                            O'zingizni qiziqtirgan savol yoki shikoyatlarni qoldiring 
						</p>
						<div className="subcribe-form" id="mc_embed_signup">
							<form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscription relative">
								<input name="EMAIL" placeholder="Email" required type="email" />
								<div style={{position: "absolute", left: "-5000px"}}>
									<input name="b_36c4fd991d266f23781ded980_aefe40901a" value="" type="text" />
								</div>
								<button className="primary-btn hover d-inline">Yuborish</button>
								<div className="info"></div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	        </section>

            <footer className="footer_area" style={{height:'30vh'}}>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-12">
					<div className="footer_top flex-column">
						<div className="footer_logo">
							<a href="#">
								<img src="img/logo.png" alt="" />
							</a>
							<h4>Menga obuna bo'ling</h4>
						</div>
						<div className="footer_social">
							<a href="https://www.youtube.com/channel/UCfFp_w-egfSUEG1ZijNy1Mg"><i className="fa-brands fa-youtube"></i></a>
							<a href="https://www.instagram.com/sayfullo_dev/"><i className="fa-brands fa-instagram"></i></a>
							<a href="https://www.facebook.com/profile.php?id=61550585651751&mibextid=b06tZ0"><i className="fa-brands fa-facebook"></i></a>
							<a href="https://t.me/sayfullodev"><i className="fa-brands fa-telegram"></i></a>
							<a href="https://www.linkedin.com/in/sayfullo-github-a10346251"><i className="fa-brands fa-linkedin"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div className="row footer_bottom justify-content-center">
				<p className="col-lg-8 col-sm-12 footer-text">
Ushbu platforma sayfullodev tomonidan ishlab chiqildi
</p>
			</div>
		</div>
	        </footer>
        </div>
    )
}