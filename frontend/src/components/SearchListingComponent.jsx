import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/All.css";
import Card from "./custom/cards/Card";
import property from "../images/Guest/property.png";
import { CardSkeleton } from "./Skeleton";
import Pagination from "./custom/pagination/Pagination";
import {
    FooterComponent,
    CustomMlFooter,
    ListingSearch,
    MainLayout,
    SearchPropertiesSoration,
} from "../components";
import {
    GetPropertiesBySaleStatus,
    GetUnitPhotos,
} from "../api/GetAllPublicListings";
import { GetAllFeaturesByPropertyNo } from "../api/GetAllAmenities";
import { GetPhotoWithUrl, GetPhotoLength } from "../utils/GetPhoto";
import {
    CapitalizeString,
    FillLocationFilter,
    GetPropertyTitle,
    isPastAMonth,
    SortListings,
} from "../utils/StringFunctions.utils";
import NoListingAvailable from "./custom/custom.NoListingAvailable";

import DefaultPropertyImage from "../asset/fallbackImage.png";
import { GetAllListing } from "../api/GetAllPublicListings";
import { AmountFormatterGroup } from "../utils/AmountFormatter";
import NoDataAvailable from "./NoDataFoundComponent";
import { capitalize } from "@mui/material";
import { Breadcrumb } from "antd";

const SearchListingComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [saleType, setSaleType] = useState("sale");

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 9;

    const [publiclisting, setPublicListing] = useState([
        {
            id: 0,
            title: "",
            price: 0,
            status: "",
            pics: 0,
            img: DefaultPropertyImage,
            bathrooms: 0,
            lot: 0,
            property_no: "",
            isFeatured: "",
            sale_type: "",
            bedrooms: "",
            property_type: "",
            city: "",
            parking: 0,
            location: ""
        },
    ]);
    const [filterLocation, setFilterLocation] = useState([]);
    const [headerText, setHeaderText] = useState('Search Properties');
    const [breadCrumbItems, setBreadCrumbItems] = useState([
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Search Properties',
        },
    ]);
    const [searchParams, setSearchParams] = useState({
        location: null,
        price_min: 1000,
        price_max: 100000000,
        keyword: null,
        property_type: null,
        bedrooms: null,
        bathrooms: null,
        parking: null,
        sale_type: null,
        lot_area: null,
    })

    const handleCardClick = (id) => {
        navigate(`/previewListing/?id=${id}`, { state: id });
    };

    useEffect(() => {
        const search = location.search;

        const queryParams = new URLSearchParams(search);
        const isSearchParams = queryParams.get("search");

        let searchQueryParams = {};

        const searchKeys = [
            'sale_type', 'keyword', 'property_type',
            'location', 'indoor', 'outdoor', 'price_min',
            'price_max', 'bathrooms', 'bedrooms', 'parking'
        ];
        const filtersearchKeys = searchKeys.filter((key, i) => ![undefined, null, "null"].includes(queryParams.get(key)))

        console.log(filtersearchKeys);

        filtersearchKeys.forEach((fsKey, i) => {
            setSearchParams((prevState) => ({
                ...prevState,
                [fsKey]: queryParams.get(fsKey)
            }))

            searchQueryParams[fsKey] = queryParams.get(fsKey);
        });

        console.log("Search Query Params: ", searchQueryParams);
        console.log("Search Params: ", searchParams);

        if (searchParams.length !== 0) {
            getlistings(searchQueryParams);
            setHeaderText('Search Properties');
        } else {
            getlistings(searchParams);
            setHeaderText('Search Properties');
        }
    }, [location]);
    
    const getlistings = async (renderParams) => {
        try {

            console.log('renderParams', renderParams);


            const res = await GetPropertiesBySaleStatus();
            const dataresp = res;

            if (dataresp.length !== 0) {
                const formattedListings = dataresp.filter(f => ![null, undefined, ""].includes(f.ProvinceState)).map((listing) => {
                    return {
                        id: listing.id,
                        title: CapitalizeString(listing.UnitName),
                        price: listing.Price,
                        status: `For ${CapitalizeString(listing.SaleType)}`,
                        pics: 0,
                        img: listing.Photo,
                        bathrooms: listing.BathRooms,
                        lot: listing.LotArea,
                        property_no: listing.PropertyNo,
                        isFeatured: listing.IsFeatured,
                        sale_type: CapitalizeString(listing.SaleType),
                        bedrooms: listing.BedRooms,
                        property_type: listing.PropertyType,
                        city: listing.City,
                        parking: listing.Parking,
                        location: listing.ProvinceState
                    }
                });
                FillLocationFilter(dataresp);

                // CHECK LOCATION AND KEYWORD
                const hasLocation = Object.hasOwn(renderParams, 'location');
                const hasKeyword = Object.hasOwn(renderParams, 'keyword');

                console.log("has", hasLocation);


                let listingByLocation = [];

                const keywordMatched = (v) => Object.values(v).some((e, i) => 
                    e.toString()
                        .toLowerCase()
                        .replace(/[\/_-]/g, '')
                    .includes(renderParams['keyword']
                        .toLowerCase()
                        .replace(/[\/_-]/g, ''))
                    );

                if (hasLocation && hasKeyword) {
                    const main = ['location', 'keyword'];

                    formattedListings.forEach((fl) => {

                        let byLoc = []
                        if ((fl.location.toLowerCase() === renderParams['location'].toLowerCase())) {
                            byLoc.push(fl);
                        }

                        const bl = byLoc.filter(f => keywordMatched(f))

                        listingByLocation.push(...bl);
                    });

                    Object.values(main).forEach((fi, i) => {

                        delete renderParams[fi];
                    });

                } else if (!hasLocation && hasKeyword) {
                    
                    formattedListings.forEach((fl) => {
                        console.log("keywordMatched", keywordMatched(fl));
                        // const keywordMatched = Object.values(fl).every(e => e.includes('condominium'.toLowerCase()));

                        if (keywordMatched(fl)) {
                            listingByLocation.push(fl);
                        }

                    });
                    delete renderParams['keyword'];
                } else if (hasLocation && !hasKeyword) {
                    formattedListings.forEach((fl) => {

                        if ((fl.location.toLowerCase() === renderParams['location'].toLowerCase())) {
                            listingByLocation.push(fl);
                        }

                    });

                    delete renderParams['location'];
                } else {
                    listingByLocation = formattedListings;
                }

                console.log("listingByLocation", listingByLocation);


                // // Get listing that matches by params - excluding location || keyword
                // const listings = listingByLocation.map((item, i, arr) => {

                //     // Get all keys from params
                //     const paramsKeys = Object.keys(renderParams);
                //     // Get all keys from listings
                //     const listingKeys = Object.keys(item);

                //     if (paramsKeys.length !== 0) {

                //         // Matched keys from params and listing
                //         const matchedKeys = listingKeys.filter(key => paramsKeys.includes(key));

                //         const findParams = matchedKeys.map(key => {
                //             // console.log(key, renderParams[key].toLowerCase() === item[key].toLowerCase());

                //             // console.log(key,renderParams[key].toLowerCase().replace(/[-_]/g, " "));

                //             if (renderParams[key].toLowerCase().replace(/[-_]/g, " ") === item[key].toLowerCase()) {
                //                 return item;
                //             }

                //         }).filter(v => v !== undefined);

                //         console.log("findParams", findParams);

                //         return { ...findParams }
                //     } 
                //     else {
                //         console.log("dsdsfdfdg");

                //         return item
                //     }

                // }).filter(v => Object.keys(v).length !== 0);

                // console.log("lis", listings);

                // let filteredListings;
                // // Filter listing from undefined and distinct
                // // const filteredListings = listings

                // if (Object.keys(renderParams).length !== 0) {
                //     filteredListings = listings
                //         .map((l, k) => {

                //             const f = Object.keys(l);

                //             for (let index = 0; index < f.length; index++) {
                //                 const element = f[index];

                //                 if (l[element] !== undefined) {

                //                     return l[element]
                //                 }
                //             }
                //         }).filter(fl => fl !== undefined)
                // }else{
                //     filteredListings = listings.filter(fl => fl !== undefined).filter(
                //         (value, index, self) =>
                //             index === self.findIndex((t) => t.property_no === value.property_no)
                //     );
                // }

                // console.log("filteredListings", filteredListings);

                // const finalFilteredListing = await Promise.all(
                //     filteredListings.map(async ffl => {
                //         const getPhotoGallery = await GetUnitPhotos(ffl.id);

                //         const gallery = getPhotoGallery.data;

                //         const image = GetPhotoWithUrl(ffl.img);

                //         ffl['img'] = image;
                //         ffl['price'] = AmountFormatterGroup(ffl.price);
                //         ffl['pics'] = image ? gallery.length + 1 : 0;

                //         return ffl;
                //     })
                // )
                let filteredListings = listingByLocation;
                

                const paramsKeys = Object.keys(renderParams);
                if (paramsKeys.length > 0) {
                    if ((renderParams['price_max'] && renderParams['price_min'])) {
                        filteredListings = filteredListings.filter((pr) => {

                            const max = parseInt(renderParams['price_max'], 10);
                            const min = parseInt(renderParams['price_min'], 10);
                            const price = parseInt(pr['price'], 10);

                            return price >= min && price <= max
                        })
                        delete renderParams['price_max']
                        delete renderParams['price_min']
                    }
                }
                
                // Get keys from the remaining render params
                const remainingParams = Object.keys(renderParams);

                // Filter listing from the rest search params
                if (remainingParams.length > 0) {
                    
                    filteredListings = filteredListings.filter(listing =>
                        remainingParams.every(key =>renderParams[key].toLowerCase().replace(/[-_]/g, " ") == listing[key]?.toLowerCase().replace(/[-_]/g, " "))
                    )
                }

                // Get photo gallery and finalize listings
                const finalFilteredListing = await Promise.all(
                    filteredListings.map(async ffl => {
                        const getPhotoGallery = await GetUnitPhotos(ffl.id);
                        const gallery = getPhotoGallery.data;
                        const image = GetPhotoWithUrl(ffl.img);

                        ffl['img'] = image;
                        ffl['price'] = AmountFormatterGroup(ffl.price);
                        ffl['pics'] = image ? gallery.length + 1 : 0;

                        return ffl;
                    })
                );

                setPublicListing(finalFilteredListing)
                setLoading(false);

            } else {
                setPublicListing([])
                setLoading(false)
            }
        } catch (error) {
            console.error("Error fetching public listings:", error);
            setPublicListing([]);
            setLoading(false);
        }
    };

    const [selectedSort, setSelectedSort] = useState("Most relevant");

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    let currentCards = publiclisting.slice(indexOfFirstCard, indexOfLastCard);

	const totalPages = Math.ceil(publiclisting?.length / cardsPerPage);

	const HandleSort = (e) => {

		setSelectedSort(e.domEvent.target.innerText);
		const sortKey = e.key;
		let sortListing;

		sortListing = SortListings(sortKey, sortListing, publiclisting);

		currentCards = sortListing;
	}

    const FillLocationFilter = (listings) => {
        try {
            const falsy = [null, undefined, ""];

            const distinctProvince = listings.filter(p => !falsy.includes(p.ProvinceState))
                .filter(
                    (value, index, self) =>
                        index === self.findIndex((t) => t.ProvinceState.toLowerCase() === value.ProvinceState.toLowerCase())
                )
                .map((item, i) => {
                    return {
                        key: i,
                        label: CapitalizeString(item.ProvinceState.toLowerCase()),
                        value: item.ProvinceState.toLowerCase(),
                    };
                })
                .sort((a, b) => a.value.localeCompare(b.value));


            setFilterLocation(distinctProvince);
        } catch (error) {
            console.log("location", error);
            return;
        }
    };
    return (
        <div className="all-container">
            <div className="all-searchcomponent">
                <ListingSearch location={filterLocation} searchParams={searchParams} setSearchFilters={setSearchParams} />
            </div>
            <div className="all-page-container">
                <Breadcrumb
                    separator=">"
                    items={breadCrumbItems}
                    className="all-h1 breadcrumb--search" />
                <span className="all-h1">
                    {headerText}
                </span>
                {currentCards.length !== 0 ? (
                    <>
                        <SearchPropertiesSoration
                            properties_count={publiclisting.length}
                            current_properties_count={currentCards.length}
                            selectedSort={selectedSort}
                            setSelectedSort={setSelectedSort}
                            HandleSort={HandleSort}
                        />
                        {!loading ? (
                            currentCards.length !== 0 ? (
                                <div className="card-container">
                                    {currentCards.map((data, index) => (
                                        <Card
                                            key={index}
                                            id={data.id}
                                            title={data.title}
                                            price={`PHP ${data.price}`}
                                            imgSrc={data.img}
                                            beds={data.bedrooms}
                                            baths={data.bathrooms}
                                            size={data.lot}
                                            likes={data.pics}
                                            forsale={data.status}
                                            isFeatured={data.isFeatured}
                                            subtitle={`${CapitalizeString(
                                                data.property_type
                                            )} For ${CapitalizeString(data.sale_type)}`}
                                            handleClick={() => handleCardClick(data.property_no)}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <NoDataAvailable
                                    message={`No Results Found`}
                                />
                            )
                        ) : (
                            <div
                                className="card-skeleton-loading"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "20px",
                                }}
                            >
                                {Array(3)
                                    .fill(null)
                                    .map((_, i) => (
                                        <CardSkeleton key={i} />
                                    ))}
                            </div>
                        )}
                    </>
                ) : (
                    <NoDataAvailable message={`No Results Found`} />
                )}

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

export default SearchListingComponent;
