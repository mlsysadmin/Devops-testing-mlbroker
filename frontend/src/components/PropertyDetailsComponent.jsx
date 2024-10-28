import React, { useState, useEffect } from 'react';
import { WarningOutlined } from '@ant-design/icons';
import "../styles/listing-form.css";

const PropertyDetailsComponent = ({ onComplete, setPropertyFields }) => {
	const [selectedPropertyTab, setSelectedPropertyTab] = useState("");
	const [selectedListingTab, setSelectedListingTab] = useState("");



	useEffect(() => {
		const isCompleted = selectedPropertyTab !== "" && selectedListingTab !== "";
		onComplete(isCompleted);
		if (isCompleted) {
			setPropertyFields({
				SaleType: selectedListingTab,
				PropertyType: selectedPropertyTab.toLowerCase(),
			});
		}
	}, [selectedPropertyTab, selectedListingTab, onComplete, setPropertyFields]);

	const handlePropertyTabClick = (tab) => {
		setSelectedPropertyTab(tab);

	};

	const handleListingTabClick = (tab) => {
		setSelectedListingTab(tab);

	};

	return (
		<div className="listing-property-details">
			<div className="listing-property-details-info">
				<b className="b">Property Details</b>
			</div>
			<div className="listing-property-details-tabs">
				<div className="listing-property-type">
					<div className="listing-property-details-label">
						<div className="label"> Property Type </div>
					</div>
					<div className="tab-container">
						<div className="tab-category">
							<div className="tab-label">Commercial</div>
							<div className="tab-wrapper">
								<div className="tabs">
									{["Service Office", "Shop/Retail", "Commercial Land/Lot", "Office Space"].map(
										(tab) => (
											<div
												key={tab}
												className={`tab ${selectedPropertyTab === tab ? "selected" : ""
													}`}
												onClick={() => handlePropertyTabClick(tab)}
											>
												{tab}
											</div>
										)
									)}
								</div>
							</div>
						</div>
						<div className="tab-category">
							<div className="tab-label">Residential</div>
							<div className="tab-wrapper">
								<div className="tabs">
									{["Condominium", "House and Lot", "Lot", "Townhouse"].map((tab) => (
										<div
											key={tab}
											className={`tab ${selectedPropertyTab === tab ? "selected" : ""
												}`}
											onClick={() => handlePropertyTabClick(tab)}
										>
											{tab}
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="tab-category">
							<div className="tab-label">Industrial/etc</div>
							<div className="tab-wrapper">
								<div className="tabs">
									{["Warehouse", "Farm Lot", "Hotel/Resort"].map((tab) => (
										<div
											key={tab}
											className={`tab ${selectedPropertyTab === tab ? "selected" : ""
												}`}
											onClick={() => handlePropertyTabClick(tab)}
										>
											{tab}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="listing-listing-type">
					<div className="listing-listing-details-label">
						<div className="label"> Listing Type </div>
					</div>
					<div className="listing-tab-container">
						{/* <label className="text-wrapper-38" htmlFor="classification">
							What is the Listing Type?
						</label> */}
						<div className="tab-category">
						<div className="tab-label" style={{ color: '#8b8f94', fontWeight: '400' }}>What is the Listing Type?</div>
							<div className="listing-tab-wrapper">
								<div className="listing-tabs">
									{["Rent", "Sale", "Pre-Selling"].map((tab) => (
										<div
											key={tab}
											className={`tab ${selectedListingTab === tab ? "selected" : ""
												}`}
											onClick={() => handleListingTabClick(tab)}
										>
											{tab}
										</div>
									))}
								</div>
							</div>
						</div>
						{/* <div className="listing-note">
							<p>
								To help home buyers better, we only accept these 3 types of
								listing.
							</p>
						</div>
						<div className="listing-reminders">
							<div className="listing-reminders-label">
								<WarningOutlined className="warning-icon" />
								<b>A few reminders when posting a unit.</b>
							</div>
							<ul>
								<li>
									We DO NOT accept pre-selling properties, ONLY ready for
									occupancy (RFO) ones that have either been bought from a
									developer or have been constructed by a person for sale or
									rent.
								</li>
								<li>
									If you are posting more than one (1) unit, please create one
									listing per unit. DO NOT advertise all your units in one post.
								</li>
								<p className="more">
									For more assistance, you refer to our photo guide or watch our
									video guide.
								</p>
							</ul>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyDetailsComponent;
