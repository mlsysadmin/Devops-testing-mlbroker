import React, { useEffect, useState } from "react";
import "../styles/previewListing.css";
import styles from "../styles/VListingHouseDetails.module.css";
import VLFeatureCard from "./VLFeatureCard";
import {
  FormatLocation,
  LocationFormatter,
} from "../utils/LocationDateFormatter";
import MapComponent from "./mapComponent";
import area from "../assets/icons/previewlisting/area.png";
import { useNavigate } from "react-router-dom";
import HomeHighlights from "./HomeHighlights";

import {
  CapitalizeString,
  CapitalizeStringwithSymbol,
  GetPropertyTitle,
  NotAvailableReturn,
} from "../utils/StringFunctions.utils";
import SemiRoundBtn from "./custom/buttons/SemiRoundBtn.custom";
import { AmountFormatterGroup } from "../utils/AmountFormatter";
import { PropertyTypeCategory } from "../utils/PropertyStaticData.utils";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import PhpOutlinedIcon from '@mui/icons-material/PhpOutlined';

const PreviewListLeftContent = ({
  label,
  value,
  oneListing,
  features,
  amenities,
  includes,
}) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/mortgage");
  };

  const [featuress, setFeaturess] = useState([]);

  useEffect(() => {
    if (oneListing) {
      FilterFeature(oneListing.PropertyType);
    }
  }, []);

  const FilterFeature = (property_type) => {
    const feat = [
      {
        title: "Bedrooms",
        iconSrc: <BedOutlinedIcon/>,
          // "https://cdn.builder.io/api/v1/image/assets/TEMP/ffa0b4ae5294fab32f04e2df5bccc9e215b962c4a23b87baa3b3a4f9d11a3bf0?apiKey=e5af2e14d6ff40c0b0f04c88d87330a5",
        value: oneListing.BedRooms,
      },
      {
        title: "Bathrooms",
        iconSrc: <ShowerOutlinedIcon/>,
          // "https://cdn.builder.io/api/v1/image/assets/TEMP/372723378f9151c6cced3d234ccf4d85735cb0c5bd16df4ca6bac2adaf6189fb?apiKey=e5af2e14d6ff40c0b0f04c88d87330a5",
        value: oneListing.BathRooms,
      },
      {
        title: "Garage",
        iconSrc: <DirectionsCarFilledOutlinedIcon/>,
          // "https://cdn.builder.io/api/v1/image/assets/TEMP/a17243275d0fedc1a93dbce25cd9571671d11f482871f3219644e3e5fe1afa72?apiKey=e5af2e14d6ff40c0b0f04c88d87330a5",
        value: oneListing.Parking,
      },
      { 
        title: "Area", 
        // iconSrc: area,
        iconSrc: <ShortcutOutlinedIcon/>, 
        value: oneListing.LotArea },
      {
        title: "Price per SqM",
        // iconSrc: <PhpOutlinedIcon/>,
        value: `${oneListing.PricePerSqm}`,
      },
    ];
    let feature = [];
    console.log(
      "type",
      property_type,
      property_type.toLowerCase().includes("lot") ||
      property_type.toLowerCase().includes("house")
    );

    if ((property_type.toLowerCase().includes("lot") && !property_type.toLowerCase().includes("house")) || property_type.toLowerCase().includes("office")) {
      feature = feat.filter((item, i) =>
        ["price per sqm", 'area'].includes(item.title.toLocaleLowerCase())
      );
    }
    else if (property_type.toLowerCase().includes("lot") && property_type.toLowerCase().includes("house")) {
      feature = feat;
    }
    else {
      feature = feat.filter(
        (item, i) => !["price per sqm"].includes(item.title.toLocaleLowerCase())
      );
    }

    setFeaturess(feature);
  };

  return (
		<div className="leftContent">
			<main className={styles.leftcontainer}>
				<h1 className={styles.lefttitle}>
					{CapitalizeString(oneListing.UnitName)}
				</h1>
				<p className={styles.leftlocation}>
					{FormatLocation(
						oneListing.City,
						oneListing.ProvinceState,
						oneListing.Country
					)}
				</p>
				<button className={styles.leftctaButton} onClick={handleButtonClick}>
					Get Pre-Approved
				</button>
				<br />
				{/* <SemiRoundBtn
          label={"Loan Calculator"}
		  className={"loaned-calculator-button"}
        /> */}
				<div className="first-row--about-property">
					<h2 className={styles.leftsectionTitle}>About this property</h2>
					<section className={styles.leftfeatureGrid}>
						{featuress.map((feature, index) => {
							if (feature.value && feature.value !== "0") {
								return <VLFeatureCard key={index} {...feature} />;
							}
						})}
					</section>
				</div>
				<div style={{ marginTop: "60px" }} className="second-row--description">
					<h2 className={styles.leftdescriptionTitle}>Description</h2>
					<p className={styles.leftdescriptionText}>{oneListing.Details}</p>
				</div>
			</main>
			<div className="property-on-map">
				<h3>Location</h3>
				<MapComponent oneListing={oneListing} />
			</div>
			<div className="web-view-similar-properties">
				<h3>Property Details</h3>
				<div className={styles.specificationContainer}>
					<h4 className={styles.specificationHeader}>Specifications</h4>
					<table className={styles.specificationTable}>
						<tbody>
							<tr>
								<th>Property Type</th>
								<td>{oneListing.PropertyType === "hotel/resort"? CapitalizeStringwithSymbol(oneListing.PropertyType):CapitalizeString(oneListing.PropertyType)}</td>
								<th>Floor Area</th>
								<td>{NotAvailableReturn(oneListing.FloorArea)}</td>
							</tr>
							<tr>
								<th>Listing Type</th>
								<td>{`For ${CapitalizeString(oneListing.SaleType)}`}</td>
								<th>Lot Area</th>
								<td>
									{NotAvailableReturn(AmountFormatterGroup(oneListing.LotArea))}
								</td>
							</tr>
							<tr>
								<th>Furnishing</th>
								<td>{NotAvailableReturn(oneListing.Furnishing)}</td>
								<th>Price per SqM</th>
								<td>
									{NotAvailableReturn(
										AmountFormatterGroup(oneListing.PricePerSqm)
									)}
								</td>
							</tr>
							<tr>
								<th>Bedroom</th>
								<td>{NotAvailableReturn(oneListing.BedRooms)}</td>
								<th>No of Floors</th>
								<td>{NotAvailableReturn(oneListing.NoOfFloor)}</td>
							</tr>
							<tr>
								<th>Bathroom</th>
								<td>{NotAvailableReturn(oneListing.BathRooms)}</td>
								<th>Car Parking</th>
								<td>{NotAvailableReturn(oneListing.Parking)}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="mobile-view-similar-properties">
				<h3>Property Details</h3>
				<div className={styles.specificationContainer}>
					<h4 className={styles.specificationHeader}>Specification</h4>
					<table className={styles.specificationTable}>
						<tbody>
							<tr>
								<th>Property Type</th>

								<td>{oneListing.PropertyType === "Hotel/Resort"? CapitalizeStringwithSymbol(oneListing.PropertyType):CapitalizeString(oneListing.PropertyType)}
								</td>
							</tr>
							<tr>
								<th>Floor Area</th>
								<td>{NotAvailableReturn(oneListing.FloorArea)}</td>
							</tr>
							<tr>
								<th>Listing Type</th>
								<td>{`For ${CapitalizeString(oneListing.SaleType)}`}</td>
							</tr>
							<tr>
								<th>Lot Area</th>
								<td>{NotAvailableReturn(oneListing.LotArea)}</td>
							</tr>
							<tr>
								<th>Furnishing</th>
								<td>{NotAvailableReturn(oneListing.Furnishing)}</td>
							</tr>
							<tr>
								<th>Price per SqM</th>
								<td>{NotAvailableReturn(oneListing.PricePerSqm)}</td>
							</tr>
							<tr>
								<th>Bedroom</th>
								<td>{NotAvailableReturn(oneListing.BedRooms)}</td>
							</tr>
							<tr>
								<th>No of Floors</th>
								<td>{NotAvailableReturn(oneListing.NoOfFloor)}</td>
							</tr>
							<tr>
								<th>Bathroom</th>
								<td>{NotAvailableReturn(oneListing.BathRooms)}</td>
							</tr>
							<tr>
								<th>Car Parking</th>
								<td>{NotAvailableReturn(oneListing.Parking)}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			{features.length == 0 && amenities.length == 0 && includes.length == 0 ? (
				<></>
			) : (
				<HomeHighlights
					features={features}
					amenities={amenities}
					includes={includes}
				/>
			)}
		</div>
	);
};

export default PreviewListLeftContent;
