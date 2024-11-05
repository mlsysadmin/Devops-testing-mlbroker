import React, { useState, useRef, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import "../styles/faqs.css";
import {
	faqs,
	sellFaqs,
	buyFaqs,
	rentFaqs,
	homeloanFaqs,
	mortgageFaqs,
} from "../utils/FaqsData";

const FaqsComponent = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const generalFaqsRef = useRef(null);
	const sellFaqsRef = useRef(null);
	const rentFaqsRef = useRef(null);
	const buyFaqsRef = useRef(null);
	const homeloanFaqsRef = useRef(null);
	const mortgageFaqsRef = useRef(null);

		useEffect(() => {
			const hash = window.location.hash.substring(1); 
			if (hash) {
				const sectionMap = {
					generalref: generalFaqsRef,
					sellref: sellFaqsRef,
					rentref: rentFaqsRef,
					buyref: buyFaqsRef,
					homeloanref: homeloanFaqsRef,
					mortgageref: mortgageFaqsRef,
				};
				const sectionRef = sectionMap[hash];
				if (sectionRef && sectionRef.current) {
					sectionRef.current.scrollIntoView({ behavior: "smooth" });
				}
			}
		}, []);

	const scrollToSection = (sectionRef) => {
		sectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const toggleFaq = (index) => {
		if (activeIndex === index) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};
	const faqCategories = {
		general: { ref: generalFaqsRef, faqs: faqs, title: "General" },
		sell: { ref: sellFaqsRef, faqs: sellFaqs, title: "Sell" },
		rent: { ref: rentFaqsRef, faqs: rentFaqs, title: "Rent" },
		buy: { ref: buyFaqsRef, faqs: buyFaqs, title: "Buy" },
		homeloan: { ref: homeloanFaqsRef, faqs: homeloanFaqs, title: "Home Loan" },
		mortgage: { ref: mortgageFaqsRef, faqs: mortgageFaqs, title: "Mortgage" },
	};

	return (
		<div className="faqs-container-page">
			<div className="faqs-content-page">
				<div className="faqs-page-header">
					<h1 className="faq-title">Have questions? We are here to help.</h1>
					<span className="faq-subtitle">
						Here are the most common questions about M Lhuillier Properties
						Realty & Brokerage.
						 Whether you're buying or selling, we're here to discuss your
						options.
					</span>
				</div>
				<div className="faq-section">
					<div className="faq-category">
						<ul className="faq-links">
							<li
								className="faq-link active"
								onClick={() => scrollToSection(generalFaqsRef)}
							>
								General
							</li>
							<li
								className="faq-link"
								onClick={() => scrollToSection(sellFaqsRef)}
							>
								Sell
							</li>
							<li
								className="faq-link"
								onClick={() => scrollToSection(rentFaqsRef)}
							>
								Rent
							</li>
							<li
								className="faq-link"
								onClick={() => scrollToSection(buyFaqsRef)}
							>
								Buy
							</li>
							<li
								className="faq-link"
								onClick={() => scrollToSection(homeloanFaqsRef)}
							>
								Home Loan
							</li>
							<li
								className="faq-link"
								onClick={() => scrollToSection(mortgageFaqsRef)}
							>
								Mortgage
							</li>
						</ul>
					</div>

					<div className="faq-questions">
						{Object.keys(faqCategories).map((category, index) => {
							const { ref, faqs, title } = faqCategories[category];
							return (
								<div className="faq-page-categories" key={index} ref={ref}>
									<br />
									<h2 className="faq-section-title">{title}</h2>
									{faqs.map((faq, i) => (
										<div className="faq-item" key={i}>
											<div
												className="faq-question"
												style={{
													display: activeIndex === i ? "flex" : "flex",
													flexDirection: activeIndex === i ? "column" : "row",
												}}
												onClick={() => toggleFaq(i)}
											>
												{faq.question}
												<DownOutlined
													style={{
														color: "rgb(164, 161, 161, 27%)",
														transform:
															activeIndex === i ? "rotate(180deg)" : "none",
													}}
												/>

												{activeIndex === i && (
													<div className="faq-answer">
														<p style={{ height: "auto", fontWeight: "400" }}>
															{faq.answer}
														</p>
													</div>
												)}
												{/* <span>{activeIndex === i ? "−" : "+"}</span> */}
											</div>
										</div>
									))}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqsComponent;
