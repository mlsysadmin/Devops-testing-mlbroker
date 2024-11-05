import React, { useState, useEffect } from "react";
import "../styles/Featured.css";
import Card from "./custom/cards/Card";
import { useNavigate } from "react-router-dom";
import property from "../images/Guest/property.png";
import Pagination from "./custom/pagination/Pagination";
import ListingSearch from "./custom/customsearch/custom.listingsearch";
import SearchPropertiesSoration from "./custom/customsearch/searchSortationProperties";
import { cardData } from "../utils/ListingMockData";
import { GetPropertiesBySaleStatus, GetUnitPhotos } from "../api/GetAllPublicListings";
import { GetPhotoWithUrl, GetPhotoLength } from "../utils/GetPhoto";
import { CapitalizeString, FillLocationFilter, GetPropertyTitle } from "../utils/StringFunctions.utils";
import { AmountFormatterGroup } from "../utils/AmountFormatter";
import NoDataAvailable from "./NoDataFoundComponent";
import CustomMlFooter from "./custom/Custom.Mlfooter";
import FooterComponent from "./layout/FooterComponent";


const FeaturedComponent = () => {

	const [currentPage, setCurrentPage] = useState(1);
	const cardsPerPage = 9;
	const navigate = useNavigate();
	const [publiclisting, setPublicListing] = useState([]);
	const [filterLocation, setFilterLocation] = useState([]);
	const [searchParams, setSearchParams] = useState({
		location: "",
		price_min: 0,
		price_max: 100000000,
		keyword: "",
		property_type: "",
		bedrooms: 0,
		bathrooms: 0,
		parking: 0,
		sale_type: "",
		lot_area: ""
	})

	const handleCardClick = (id) => {
		navigate(`/previewListing/?id=${id}`, { state: id });
	};

	const allPublicListing = async () => {
		const res = await GetPropertiesBySaleStatus();

		const dataresp = res;

		if (dataresp.length == 0) {
			setPublicListing([])
		} else {

			const listingRes = dataresp.filter((listing) => listing.IsFeatured.toLowerCase() == "yes");

			if (listingRes.length !== 0) {
				const newListing = await Promise.all(listingRes.map(async (item, i) => {

					const getPhotoGallery = await GetUnitPhotos(item.id);

					const gallery = getPhotoGallery.data;

					const image = GetPhotoWithUrl(item.Photo);

					return {
						id: item.id,
						title: CapitalizeString(item.UnitName),
						price: AmountFormatterGroup(item.Price),
						status: "For Sale",
						pics: image ? gallery.length + 1 : 0,
						img: image,
						no_of_bathrooms: item.BathRooms,
						lot: item.LotArea,
						property_no: item.PropertyNo,
						isFeatured: item.IsFeatured,
						sale_type: CapitalizeString(item.SaleType),
						no_of_beds: item.BedRooms,
						property_type: item.PropertyType
					}
				}))
				const location = FillLocationFilter(newListing);
				setFilterLocation(location);
				setPublicListing(newListing);

			} else {
				setPublicListing([]);
			}

		}
	};

	useEffect(() => {
		allPublicListing();
	}, []);

	const indexOfLastCard = currentPage * cardsPerPage;
	const indexOfFirstCard = indexOfLastCard - cardsPerPage;
	const currentCards = publiclisting.slice(indexOfFirstCard, indexOfLastCard);

	const totalPages = Math.ceil(cardData.length / cardsPerPage);
	return (
		<div className="feature-container">
			<ListingSearch location={filterLocation}  searchParams={searchParams} setSearchFilters={setSearchParams}/>
			<div className="second-content">
				<h1 className="feature-h1">Featured Properties</h1>
				{
					currentCards.length !== 0 ? (
						<>
							<SearchPropertiesSoration properties_count={publiclisting.length} current_properties_count={currentCards.length} />
							<div className="card-container">
								{
									currentCards.map((data, index) => (
										<Card
											key={index}
											id={data.id}
											title={data.title}
											price={`PHP ${data.price}`}
											imgSrc={data.img}
											beds={data.no_of_beds}
											baths={data.no_of_bathrooms}
											size={data.lot}
											likes={data.pics}
											forsale={data.status}
											subtitle={`${CapitalizeString(data.property_type)} For ${CapitalizeString(data.sale_type)}`}
											handleClick={() => handleCardClick(data.property_no)}
										/>
									))

								}
							</div>
						</>
					)
						:
						<NoDataAvailable
							message={`No available featured properties`}
						/>
				}
				{currentCards.length > 0 && (
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						paginate={setCurrentPage}
					/>
				)}
			</div>
			<CustomMlFooter />
			<FooterComponent />
		</div>
	);
};

export default FeaturedComponent;
