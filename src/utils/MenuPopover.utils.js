import { HomeOutlined, RightOutlined } from "@ant-design/icons";

const SubMenu = {
	rent: [
		{
			header: "Homes for rent",
			submenu: [
				{ sub: "House and Lot", link: "/rent/?property_type=house-and-lot" },
				{ sub: "Condominium", link: "/rent/?property_type=condominium" },
				{ sub: "Apartment", link: "/rent/?property_type=apartment" },
				{ sub: "Townhouse", link: "/rent/?property_type=townhouse" },
			],
		},
		{
			header: "Commercial for rent",
			submenu: [
				{ sub: "Office Space", link: "/rent/?property_type=office" },
				{ sub: "Retail Space", link: "/rent/?property_type=shop/retail" },
				{ sub: "Service Office", link: "/rent/?property_type=service-office" },
				{
					sub: "Commercial Land/Lot",
					link: "/rent/?property_type=commercial-land/lot",
				},
			],
		},
		{
			header: "Industrial for rent",
			submenu: [{ sub: "Warehouse", link: "/rent/?property_type=warehouse" }],
		},
		{
			header: "Rental Resources",
			submenu: [{ sub: "List my home for rent", link: "/listing" }],
		},
	],

	buy: [
		{
			header: "Homes for sale",
			submenu: [
				{ sub: "House and Lot", link: "/sale/?property_type=house-and-lot" },
				{ sub: "Condominium", link: "/sale/?property_type=condominium" },
				{ sub: "Townhouse", link: "/sale/?property_type=townhouse" },
				{ sub: "Land/Lot", link: "/sale/?property_type=lot" },
			],
		},
		{
			header: "Commercial for sale",
			submenu: [
				{ sub: "Office Space", link: "/sale/?property_type=office" },
				{ sub: "Retail Spaces", link: "/sale/?property_type=shop/retail" },
				{ sub: "Service Office", link: "/sale/?property_type=service-office" },
				{
					sub: "Commercial Land/Lot",
					link: "/sale/?property_type=commercial-land/lot",
				},
			],
		},
		{
			header: "Leisure Properties for Sale",
			submenu: [
				{ sub: "Hotel/Resort", link: "/sale/?property_type=hotel/resort" },
				{
					childSubMenu: {
						header: "Agricultural for Sale",
						submenu: [
							{ sub: "Farm Lot", link: "/sale/?property_type=farm-lot" },
						],
					},
				},
			],
		},
		{
			header: "Resources",
			submenu: [{ sub: "Buyers Guide", link: "/faqs#buyref" }],
		},
	],
	homeLoan: [
		{
			header: (
				<>
					<HomeOutlined style={{ fontSize: "18px", color: "black" }} />
					<span style={{ padding: "0 5px", color: "black", fontSize: "15px" }}>
						Apply for a home loan
					</span>
				</>
			),
			submenu: [
				{
					sub_info: (
						<div className="sub-info">
							<span>
								Apply for a home loan at <br /> any M Lhuillier Branch <br />{" "}
								nationwide. You may visit our
							</span>
							<p>
								<a
									href="https://mlhuillier.com/home-loan/"
									className="redirect"
								>
									Home Loan Dashboard <RightOutlined />
								</a>
							</p>
						</div>
					),
					link: "https://mlhuillier.com/home-loan/",
				},
			],
		},
		{
			header: "Mortgage Loan",
			submenu: [
				{ sub: "Discover Home Loan", link: "/discover-home" },
				{ sub: "Loan Calculator", link: "/discover-home#calculator" },
			],
		},
		{
			header: "Get Pre-Approved",
			submenu: [
				// { sub: "Mortgage", link: "/mortgage" },

				{ sub: "Refinance your home", link: "/refinance" },
				{ sub: "Buy A Home", link: "/buy-a-home" },
			],
		},
	],
	// homeInsurance: [
	// 	{
	// 		header: (
	// 			<>
	// 				<HomeOutlined style={{ fontSize: "18px", color: "black" }} />
	// 				<span style={{ padding: "0 5px", color: "black", fontSize: "15px" }}>
	// 					Apply for a home insurance?
	// 				</span>
	// 			</>
	// 		),
	// 		submenu: [
	// 			{
	// 				sub_info_insurance: (
	// 					<div className="sub-info">
	// 						<span>
	// 							Get insured today! Safeguard <br /> your home and property from{" "}
	// 							<br /> a wide range of risks & threats. <br /> You may visit our
	// 						</span>
	// 						<p>
	// 							<a
	// 								href="https://webinsurance.mlhuillier.com/"
	// 								className="redirect"
	// 							>
	// 								Home Insurance Dashboard <RightOutlined />
	// 							</a>
	// 						</p>
	// 					</div>
	// 				),
	// 				link: "https://webinsurance.mlhuillier.com/",
	// 			},
	// 		],
	// 	},
	// 	{
	// 		header: "Home Insurance Guide",
	// 		submenu: [{ sub: "Insurance Guide", link: "/insurance-guide" }],
	// 	},
	// 	{
	// 		header: "Other  ML Insurance Products ",
	// 		submenu: [
	// 			{
	// 				sub: "Personal Accident Insurance",
	// 				link: "https://webinsurance.mlhuillier.com/personal-accident-insurance",
	// 			},
	// 			{ sub: "Auto Insurance", link: "/mortgage-process" },
	// 			{
	// 				sub: "Dengue RX Insurance",
	// 				link: "https://webinsurance.mlhuillier.com/medical-reimbursement",
	// 			},
	// 			{ sub: "Medicare Plus Insurance", link: "/quick-cash-loan" },
	// 			{ sub: "Global Travel Protect Insurance", link: "/pension-loan" },
	// 			{ sub: "OFW Balik Manggagawa Insurance", link: "/pension-loan" },
	// 		],
	// 	},
	// ],
	otherServices: [
		{
			header: "",
			submenu: [
				{
					sub_info_insurance: (
						<>
							<span>
								<a
									// href="/?openModal=true"
									href="/propertySearch"
									style={{
										color: "var(--red)",
										textDecoration: "none",
										fontSize: "14px",
									}}
								>
									Start Your Property Search Today!
								</a>
							</span>
						</>
					),
					link: "/propertySearch",
				},
			],
		},
	],
};

export { SubMenu };
