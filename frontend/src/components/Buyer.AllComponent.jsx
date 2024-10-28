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
  CapitalizeEachWord,
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

const AllComponent = () => {
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
  const [headerText, setHeaderText] = useState('properties For Rent');
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
  });
  const [breadCrumbItems, setBreadCrumbItems] = useState([
    {
      title: 'All',
    }
  ]);

  const handleCardClick = (id) => {
    navigate(`/previewListing/?id=${id}`, { state: id });
  };

  const getlistings = async (sale_type) => {
    try {
      const res = await GetPropertiesBySaleStatus();

      const dataresp = res;

      if (dataresp.length == 0) {
        setPublicListing([])
      } else {

        const listingRes = dataresp.filter((listing) => sale_type == 'all' ?
          ["sale", "rent", "pre-selling"].includes(listing.SaleType.toLowerCase()) : [sale_type].includes(listing.SaleType.toLowerCase())
        );

        if (listingRes.length !== 0) {
          const newListing = await Promise.all(listingRes.map(async (item, i) => {

            const getPhotoGallery = await GetUnitPhotos(item.id);

            const gallery = getPhotoGallery.data;

            const image = GetPhotoWithUrl(item.Photo);

            return {
              id: item.id,
              title: CapitalizeString(item.UnitName),
              price: AmountFormatterGroup(item.Price),
              status: `For ${CapitalizeString(item.SaleType)}`,
              pics: image ? gallery.length + 1 : 0,
              img: image,
              no_of_bathrooms: item.BathRooms,
              lot: item.LotArea,
              property_no: item.PropertyNo,
              isFeatured: item.IsFeatured,
              sale_type: CapitalizeString(item.SaleType),
              no_of_beds: item.BedRooms,
              property_type: item.PropertyType,
              city: item.City
            }
          }))
          const location = FillLocationFilter(dataresp);
          setFilterLocation(location);
          setPublicListing(newListing);
          console.log("location", location);


        } else {
          setPublicListing([]);
        }

      }
    } catch (error) {
      console.error("Error fetching public listings:", error);
      setPublicListing([]);

    }

  }

  useEffect(() => {
    // allPublicListing()
    // getlistings()
    const search = location.search;
    console.log(search);

    const queryParams = new URLSearchParams(search);
    const getSaleType = queryParams.get("sale_type");

    if (queryParams.size !== 0) {
      getlistings(getSaleType);
      setSaleType(getSaleType);
      setHeaderText(`Properties For ${CapitalizeString(getSaleType)}`);
      setLoading(false);
      setBreadCrumbItems([{ title: "All", href: '/all' }, { title: `For ${CapitalizeString(getSaleType)}` }])
    } else {

      getlistings('all');
      setSaleType('Rent/Sale/Pre-Selling');
      setHeaderText('Properties for Rent/Sale/Pre-Selling');
      setLoading(false);
      const bread = [{ title: "All", href: '/all' }, { title: "For Rent/For Sale/For Pre-Selling" }].map(sale => { return { title: sale.title, href: sale.href } });
      setBreadCrumbItems(bread)
    }
  }, [])
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

    console.log("sort", sortListing);

    currentCards = sortListing;
  }

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
          {/* Properties For {capitalize(saleType)} */}
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
                      subtitle={`${CapitalizeEachWord(
                        data.property_type
                      )} For ${CapitalizeString(data.sale_type)}`}
                      handleClick={() => handleCardClick(data.property_no)}
                    />
                  ))}
                </div>
              ) : (
                <NoDataAvailable
                  message={`No available properties for Rent/Sale`}
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
          <NoDataAvailable message={`No available properties for Rent/Sale`} />
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

export default AllComponent;
