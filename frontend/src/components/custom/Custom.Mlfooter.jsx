import React from "react";
import { Row, Col } from 'antd';
import mllogo from "../../asset/icons/mllogo.png";
import applestore from "../../asset/icons/applestore.png";
import gplaystore from "../../asset/icons/gplaystore.png";
import huaweistore from "../../asset/icons/huaweistore.png";
import emailIcon from  "../../asset/icons/email.png"
import { FacebookFilled, TwitterCircleFilled, YoutubeOutlined, InstagramFilled, CustomerServiceFilled, TikTokOutlined } from '@ant-design/icons';
import "../../styles/custom.mlfooter.css";


const CustomMlFooter = () => {
	
    return (
			<div className="third-content-footer">
				<div className="third-cont">
					<div className="col-footer-container">
						<Col span={8} className="col-footer-name">
							<img src={mllogo} alt="ML Logo" className="logo-ml" />
							<div className="customer-care">
								<div className="customer-care-icon">
									<img src={emailIcon} alt="email" className="emailLogo"></img>
								</div>
								<div className="customer-care-label">
									<span>properties@mlhuillier.com</span>
								</div>
							</div>
							<div className="firstcol-icons">
								<a href="https://www.facebook.com/mlhuillier.official">
									<FacebookFilled className="social-icon" />
								</a>
								<a href="https://x.com/KaMLhuillier">
									<TwitterCircleFilled className="social-icon" />
								</a>
								<a href="https://www.instagram.com/mlhuillier_official/">
									<InstagramFilled className="social-icon" />
								</a>
								<a href="https://www.youtube.com/user/MLhuillierInc">
									<YoutubeOutlined className="social-icon" />
								</a>
								<a href="https://www.tiktok.com/@mlhuillier_official?_t=8qMqwVMOiXY&_r=1">
									<TikTokOutlined className="social-icon" />
								</a>
							</div>
						</Col>
						<Col className="col-footer-name" span={5}>
							<div className="col-title">Quick Links</div>
							<div className="col-cont">
								<div>
									<a
										href="https://mlhuillier.com/"
										style={{ textDecoration: "none", color: "#4F4F4F" }}
									>
										Online Services
									</a>
								</div>
								<div>
									<a
										href="https://mlhuillier.com/quick-cash-loans/"
										style={{ textDecoration: "none", color: "#4F4F4F" }}
									>
										Products & Services
									</a>
								</div>
								<div>
									<a
										href="https://mlhuillier.com/about-m-lhuillier-financial-services/"
										style={{ textDecoration: "none", color: "#4F4F4F" }}
									>
										About Us
									</a>
								</div>
								<div>
									<a
										href="https://webcareers.mlhuillier.com/"
										style={{ textDecoration: "none", color: "#4F4F4F" }}
									>
										Careers
									</a>
								</div>
							</div>
						</Col>
						<Col className="col-footer-name" span={5}>
							<div className="col-title">Support</div>
							<div className="col-cont">
								<div>
									<a
										href="/faqs"
										style={{ textDecoration: "none", color: "#4F4F4F" }}
									>
										FAQs
									</a>
								</div>
								<div>
									<a style={{ textDecoration: "none", color: "#4F4F4F" }}>
										Contact Us
									</a>
								</div>
								<div>
									<a
										href="https://mlhuillier.com/privacy-notice/"
										style={{ textDecoration: "none", color: "#4F4F4F" }}
									>
										Privacy Notice
									</a>
								</div>
								<div>
									<a
										href="/termsandcondition"
										// href="/documents/mlprop_TermsCondition.pdf"
										// target="_blank"
										//  rel="noopener noreferrer"
										style={{ textDecoration: "none", color: "#4F4F4F" }}
									>
										Terms and Conditions
									</a>
								</div>
							</div>
						</Col>
						<Col span={5} className="col-footer-name">
							<div className="col-title">Downloads</div>
							<div className="last-col-icons">
								<div>
									{" "}
									<a href="https://apps.apple.com/ph/app/ml-wallet/id962204987">
										<img src={applestore} alt="Apple App Store" />
									</a>
								</div>
								<div>
									{" "}
									<a href="https://play.google.com/store/apps/details?id=com.mlhuillier.mlwallet">
										<img src={gplaystore} alt="Google Play Store" />
									</a>
								</div>
								<div>
									<a href="https://appgallery.huawei.com/app/C102221791?source=qrCodeShare&referrer=PCWebAG&callType=SHARE&shareTo=qrcode&shareFrom=appmarket&reportEventLabel=appdetailpage">
										<img src={huaweistore} alt="App Gallery" />
									</a>
								</div>
							</div>
						</Col>
					</div>
				</div>
			</div>
		);
}

export default CustomMlFooter
