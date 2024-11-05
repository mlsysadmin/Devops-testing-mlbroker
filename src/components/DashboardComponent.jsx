import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Image,
  Menu,
  Row,
  Space,
  Tag,
  Dropdown,
  Skeleton,
} from "antd";
import {
  CaretDownOutlined,
  DotChartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/dashboard.css";
import "../styles/Skeleton.css";

import RoundBtn from "./custom/buttons/RoundBtn.custom";
import RoundInput from "./custom/inputs/RoundInput.custom";
import RoundSelect from "./custom/selects/RoundSelect.custom";
import CardListingComponent from "./CardListingComponent";
import FeaturedPropertiesComponent from "./FeaturedPropertiesComponent";
import RatingCarouselComponent from "./RatingCarouselComponent";
import SemiRoundBtn from "./custom/buttons/SemiRoundBtn.custom";
import PropertySearchModal from "./modals/PropertySearchModal";

import { MockData } from "../utils/ListingMockData";
import {
  CardCategory,
  ListingTypes,
  PropertyTypes,
} from "../utils/PropertyStaticData.utils";
import FuenteCircle from "../asset/banners/fuente-circle.png";
import AdvanceSearch from "../asset/icons/advanceSearch.png";
import Search from "../asset/icons/Search.png";
import CustomMlFooter from "./custom/Custom.Mlfooter";
import FooterComponent from "./layout/FooterComponent";

import CustomAdvanceSearch from "./custom/customsearch/custom.advancesearch";
import CertainFeatureMenu from "./custom/customsearch/certainfeature";
import {
  GetPropertiesBySaleStatus,
  GetUnitPhotos,
} from "../api/GetAllPublicListings";
import { GetPhotoLength, GetPhotoWithUrl } from "../utils/GetPhoto";
import { Link, useLocation } from "react-router-dom";
import { Select } from "antd";
import { GetProvince } from "../api/Public/Location.api";

import DefaultPropertyImage from "../asset/fallbackImage.png";
import { AmountFormatterGroup } from "../utils/AmountFormatter";
import {
  CapitalizeEachWord,
  CapitalizeString,
  CapitalizeStringwithSymbol,
  GetPropertyTitle,
  isPastAMonth,
} from "../utils/StringFunctions.utils";
import { CardSkeleton, FeaturesSkeleton } from "./Skeleton";

const { Option } = Select;

const DashboardComponent = () => {
  const [loading, setLoading] = useState(true);
  const [loadingActive, setLoadingActive] = useState(true);
  const [userLikes, setUserLikes] = useState([]);
  const [publiclisting, setPublicListing] = useState([
    {
      id: 0,
      title: "",
      price: 0,
      status: "",
      pics: 0,
      img: DefaultPropertyImage,
      no_of_bathrooms: 0,
      lot: 0,
      property_no: "",
      isFeatured: "",
      sale_type: "",
      no_of_beds: "",
      city: "",
      property_type: "",
    },
  ]);

  const [isAdvanceSearchOpen, setAdvanceSearchOpen] = useState(false);
  const [checkFeatures, setCheckFeatures] = useState([]);

  useEffect(() => {
    console.log("checkFeatures", checkFeatures);
    SetParamsAllField("features", checkFeatures);
  }, [checkFeatures]);

  const [iscertainFeatureOpen, setcertainFeatureOpen] = useState(false);
  const [filterLocation, setFilterLocation] = useState([]);

  const handleCertainFeatureClick = () => {
    setcertainFeatureOpen(!iscertainFeatureOpen);
  };

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    // window.location.hasdref = `/previewListing/${id}`;
    navigate(`/previewListing/?id=${id}`, { state: id });
  };

  const propertiesBySaleStatus = useCallback(async () => {
    try {
      const res = await GetPropertiesBySaleStatus();

      const dataresp = res;

      if (dataresp.length == 0) {
        setPublicListing([]);
      } else {
        const listingRes = dataresp.filter(
          (listing) => !isPastAMonth(listing.created_at)
          // && listing.PropertyType == "lot"
        );

        let listings = [];

        if (listingRes.length !== 0) {
          listings = listingRes.slice(0, 3);
        } else {
          listings = dataresp.slice(0, 3);
        }

        const newListing = await Promise.all(
          listings.map(async (item, i) => {
            const getPhotoGallery = await GetUnitPhotos(item.id);

            const gallery = getPhotoGallery.data;

            const image = GetPhotoWithUrl(item.Photo);

            return {
              id: item.id,
              title: CapitalizeString(item.UnitName),
              price: AmountFormatterGroup(item.Price),
              status: "New",
              pics: image ? gallery.length + 1 : 1,
              img: image,
              no_of_bathrooms: item.BathRooms,
              lot: item.LotArea,
              property_no: item.PropertyNo,
              isFeatured: "yes",
              sale_type: CapitalizeString(item.SaleType),
              no_of_beds: item.BedRooms,
              // isFeatured: item.IsFeatured
              property_type: item.PropertyType,
              city: item.City,
              province: item.ProvinceState,
            };
          })
        );
        FillLocationFilter(dataresp);
        setPublicListing(newListing);
        setLoading(false);
      }
    } catch (error) {
      console.error("ERROROR", error);
      setPublicListing([]);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    propertiesBySaleStatus();
  }, []);

  const FillLocationFilter = (listings) => {
    try {
      const falsy = [null, undefined, ""];

      const distinctProvince = listings
        .filter((p) => !falsy.includes(p.ProvinceState))
        .filter(
          (value, index, self) =>
            index ===
            self.findIndex(
              (t) =>
                t.ProvinceState.toLowerCase() ===
                value.ProvinceState.toLowerCase()
            )
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

  const url_Redirect = process.env.REACT_APP_LOGIN_URL;
  const handleUserProfileClick = () => {
    if (url_Redirect) {
      window.location.href = url_Redirect;
    }
  };
  const handleClickedGetFreeAssistance = () => {
    if (url_Redirect) {
      window.location.href = "/propertySearch";
    }
  };
  const tags = [
    {
      key: "all",
      label: "All",
      link: "/all",
    },
    {
      key: "new",
      label: "New Listing",
      link: "/new",
    },
    // {
    //   key: "featured",
    //   label: "Featured",
    //   link: "/featured",
    // },
    {
      key: "for-sale",
      label: "For Sale",
      link: "/all/?sale_type=sale",
    },
    {
      key: "for-rent",
      label: "For Rent",
      link: "/all/?sale_type=rent",
    },
    {
      key: "mortgage",
      label: "Mortgage",
      link: "/mortgage",
    },
  ];

  const Tags = () => (
    <Menu className="menu-tags" mode="horizontal" selectedKeys={["all"]}>
      {tags.map((tag) => (
        <Menu.Item key={tag.key}>
          {tag.link ? <Link to={tag.link}>{tag.label}</Link> : tag.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  const CardCategories = () => {
    return CardCategory.map((item, i) => {
      return (
        <Col key={i}>
          <Card
            style={{
              // backgroundImage: `url(${item.image})`,
              backgroundColor: "#ffffff",
            }}
          >
            <div className="overlay-content">
              {/* <div className="overlay-icon">
              </div> */}
              <div className="overlay-title">{item.category}</div>
              <div className="overlay-description">
                <p>{item.decription}</p>
              </div>
              <SemiRoundBtn
                label={item.buttonTitle}
                size={"middle"}
                className={"button-card-class"}
                handleClick={() => navigate(item.link)}
              />
            </div>
          </Card>
        </Col>
      );
    });
  };
  const location = useLocation();
  const [isPropSearchModalOpen, setIsPropSearchModalOpen] = useState(false);
  const checkQueryForPropertySearchModal = () => {
    const params = new URLSearchParams(location.search);
    const openModal = params.get("openModal");

    if (openModal === "true") {
      setIsPropSearchModalOpen(true);
    } else {
      setIsPropSearchModalOpen(false);
    }
  };

  useEffect(() => {
    checkQueryForPropertySearchModal();
  }, [location]);
  const handleModalClose = () => {
    setIsPropSearchModalOpen(false);
  };

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleShowFeatures = useCallback(() => {
    const screen_width = window.screen.width;
    const screen_height = window.screen.height;

    setScreenSize({
      width: screen_width,
      height: screen_height,
    });
  }, [setScreenSize]);

  useEffect(() => {
    window.addEventListener("resize", handleShowFeatures);

    // return () => window.addEventListener("resize", handleShowNav);
  }, []);

  const FeatureSkeleton = () => {
    let arrLength = 0;
    if (screenSize.width <= 600) {
      arrLength = 1;
    } else {
      arrLength = 3;
    }

    return Array(arrLength)
      .fill(null)
      .map((_, i) => {
        return <FeaturesSkeleton key={i} />;
      });
  };

  const [searchParams, setSearchParams] = useState([]);
  const [keywordSearch, setKeywordSearch] = useState();

  useEffect(() => {
    console.log("searchParams", searchParams);
  }, [searchParams]);
  const handleSearchClick = () => {
    let params = "";

    searchParams.forEach((item, key) => {
      if (key == 0) {
        if (item.name === "features") {
          const indoorFeatures = item.value.filter(
            (feature) => feature.name === "indoor"
          );
          const outdoorFeatures = item.value.filter(
            (feature) => feature.name === "outdoor"
          );

          if (indoorFeatures.length > 0) {
            const indoorValues = indoorFeatures
              .map((feature) => feature.value)
              .join(",");
            params += `&indoor=${indoorValues}`;
          }

          if (outdoorFeatures.length > 0) {
            const outdoorValues = outdoorFeatures
              .map((feature) => feature.value)
              .join(",");
            if (params.length > 0) {
              params += `&outdoor=${outdoorValues}`;
            } else {
              params += `&outdoor=${outdoorValues}`;
            }
          }
        } else {
          params += `${item.name}=${item.value}`;
        }
      } else {
        if (item.name === "features") {
          const indoorFeatures = item.value.filter(
            (feature) => feature.name === "indoor"
          );
          const outdoorFeatures = item.value.filter(
            (feature) => feature.name === "outdoor"
          );

          if (indoorFeatures.length > 0) {
            const indoorValues = indoorFeatures
              .map((feature) => feature.value)
              .join(",");
            params += `&indoor=${indoorValues}`;
          }

          if (outdoorFeatures.length > 0) {
            const outdoorValues = outdoorFeatures
              .map((feature) => feature.value)
              .join(",");
            if (params.length > 0) {
              params += `&outdoor=${outdoorValues}`;
            } else {
              params += `&outdoor=${outdoorValues}`;
            }
          }
        } else {
          params += `&${item.name}=${item.value}`;
        }
      }
    });
    console.log("params: ", params);

    navigate(`/search/?${params}`);
    // navigate('/all')
  };

  const onSelectionChange = (value, name) => {
    console.log(value, name);

    SetParamsAllField(name, value);
  };

  const SetParamsAllField = (name, value) => {
    setSearchParams((prevSearchParams) => {
      const existingParamIndex = prevSearchParams.findIndex(
        (param) => param.name === name
      );

      if (existingParamIndex !== -1) {
        if (
          // (name === "keyword" && value === "") ||
          (name === "keyword" && [null, undefined, ""].includes(value)) ||
          (name === "features" && checkFeatures.length === 0)
        ) {
          prevSearchParams.splice(existingParamIndex, 1);
        } else {
          prevSearchParams[existingParamIndex].value = value;
        }
      } else {
        if (
          (name === "keyword" && [null, undefined, ""].includes(value)) ||
          (name === "features" && checkFeatures.length === 0)
        ) {
          prevSearchParams.splice(existingParamIndex, 1);
        } else {
          prevSearchParams.push({ name, value });
        }
      }
      console.log("prevSearchParams: ", prevSearchParams);
      return [...prevSearchParams];
    });

    console.log("SetParamsAllField", searchParams);
  };

  const onInputChange = (e) => {
    setKeywordSearch(e.target.value);
  };

  const onInputBlur = () => {
    SetParamsAllField("keyword", keywordSearch);
  };

  return (
    <div
      className="dashboard"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div id="dashboard">
        <div className="banner">
          <div className="banner-content">
            <Col className="banner-title">
              <h1>Discover Your Dream Home</h1>
            </Col>
            <Col className="banner-tags">
              <Tags />
            </Col>
            <Col className="banner-search">
              <Card>
                <Row className="search-container">
                  <Col span={4} className="col-field">
                    <RoundInput
                      placeholder="Enter keyword"
                      size="middle"
                      classname="card-item field"
                      value={keywordSearch}
                      onInputChange={(e) => onInputChange(e, "keyword")}
                      onInputBlur={onInputBlur}
                    />
                  </Col>
                  <Col span={4} className="col-field">
                    <RoundSelect
                      options={filterLocation}
                      placeholder="Location"
                      size="middle"
                      classname="card-item field"
                      suffixIcon={<CaretDownOutlined />}
                      value={searchParams["location"]}
                      onSelectionChange={(e) =>
                        onSelectionChange(e, "location")
                      }
                    >
                      {/* {getProvince.map((province, index) => (
                        <Select.Option key={index} value={province.name}>
                          {province.name}
                        </Select.Option>
                      ))} */}
                    </RoundSelect>
                  </Col>
                  <Col span={4} className="col-field">
                    <RoundSelect
                      value={searchParams["property_type"]}
                      onSelectionChange={(e) =>
                        onSelectionChange(e, "property_type")
                      }
                      options={PropertyTypes}
                      placeholder="Property Type"
                      size="middle"
                      classname="card-item field"
                      suffixIcon={<CaretDownOutlined />}
                    />
                  </Col>
                  <Col span={4} className="col-field">
                    <RoundSelect
                      options={ListingTypes}
                      placeholder="Listing Type"
                      size="middle"
                      classname="card-item field"
                      suffixIcon={<CaretDownOutlined />}
                      value={searchParams["sale_type"]}
                      onSelectionChange={(e) =>
                        onSelectionChange(e, "sale_type")
                      }
                    />
                  </Col>
                  <Col span={4} className="col-field">
                    <Dropdown
                      classname="card-item field"
                      overlay={
                        <CertainFeatureMenu
                          setCheckFeatures={setCheckFeatures}
                        />
                      }
                      trigger={["click"]}
                      visible={iscertainFeatureOpen}
                      onVisibleChange={handleCertainFeatureClick}
                    >
                      <Button
                        className="card-item field"
                        onClick={handleCertainFeatureClick}
                        style={{ color: "#8C9094" }}
                      >
                        Features <CaretDownOutlined />
                      </Button>
                    </Dropdown>
                  </Col>
                  <Col span={2} className="col-field">
                    <Row className="">
                      <RoundBtn
                        label={"Search"}
                        className="search round-btn"
                        // icon={
                        //   <img
                        //     src={Search}
                        //     className="search-icon"
                        //     style={{ fontWeight: "900" }}
                        //     width={20}
                        //   />
                        // }
                        classname="card-item"
                        onClick={() => handleSearchClick()}
                      />
                    </Row>
                  </Col>
                </Row>
                {/* {isAdvanceSearchOpen && <CertainFeatureMenu />} */}
              </Card>
            </Col>
          </div>
        </div>
      </div>
      <div className="discover">
        <Row className="discover-content">
          <div className="discover-section--title">
            <h2>Newest Properties</h2>
          </div>
          <div className="discover-section--sub-title">
            <div className="section-2-title">
              {publiclisting.length > 0 ? (
                <>
                  <p>Discover new homes around you</p>
                  <div className="see-all-new-listing-dashboard">
                    <a href="/new" style={{ color: "#8C9094" }}>
                      See All
                    </a>
                  </div>
                </>
              ) : (
                <p>No New Listings Available</p>
              )}
            </div>
          </div>
        </Row>
        {!loading ? (
          publiclisting.length > 0 && (
            <div className="listing-carousel-dashboard">
              {publiclisting.map((item, i) => {
                return (
                  <CardListingComponent
                    title={item.title}
                    price={`PHP ${item.price}`}
                    status={item.status}
                    pics={item.pics}
                    img={item.img}
                    no_of_bathrooms={item.no_of_bathrooms}
                    no_of_beds={item.no_of_beds}
                    lot={item.lot}
                    key={i}
                    loading={loading}
                    subtitle={`${item.property_type === "hotel/resort" ? CapitalizeStringwithSymbol(item.property_type) : CapitalizeEachWord(
                      item.property_type
                    )} For ${CapitalizeString(item.sale_type)}`}
                    listingId={item.property_no}
                    handleClick={() => handleCardClick(item.property_no)}
                    sale_status={item.sale_type}
                  />
                );
              })}
              <div
                style={{
                  display: "none",
                  justifyContent: "center",
                }}
                className="carousel--see-all-btn"
              >
                <SemiRoundBtn
                  label={"See all new properties"}
                  style={{
                    borderColor: "#D90000",
                    color: "#D90000",
                    height: "38px",
                    fontWeight: "600",
                  }}
                  handleClick={() =>
                    navigate({
                      pathname: "/new",
                    })
                  }
                />
              </div>
            </div>
          )
        ) : (
          <div
            className="listing-carousel-dashboard"
            style={{
              display: "flex",
            }}
          >
            {Array(3)
              .fill(null)
              .map((_, i) => {
                return <CardSkeleton key={i} />;
              })}
          </div>
        )}
        <div className="discover--section-2">
          <h3>Helping you buy, rent and sell in Real Estate</h3>
          <Row className="card--brokerage-category">
            <CardCategories />
          </Row>
          <br />
          <br />
          <br />
        </div>
        <div
          className="section--3"
          style={{
            backgroundColor: "#F7F7F7",
          }}
        >
          <div className="discover--section-3">
            <div className="card--brokerage-inquire">
              {/* <div className="inquire-image">
								<Image src={FuenteCircle} preview={false} />
							</div> */}
              <div className="inquire-container">
                <div className="inquire--content">
                  <div className="inquire--title">
                    <h3>Thinking about selling your Home?</h3>
                  </div>
                  <div className="inquire--description">
                    <p>
                      Sell your property with ease. Join our platform today for
                      a convenient selling experience.
                    </p>
                  </div>
                  <div className="inquire--sub-desc">
                    <p>Sign in and start your successful sale!</p>
                  </div>
                  <div className="inquire--actions">
                    <SemiRoundBtn
                      label={"Sign in to your ML Wallet Account"}
                      type={"default"}
                      className="sign-in--action action-btn"
                      size={"small"}
                      handleClick={handleUserProfileClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="manualSearchingDashboardDiv">
            <div className="manual-searching-title">
              <h3>Begin Your Property Search Today with Our Help!</h3>
            </div>
            <div className="manual-searching-desc">
              <p>
                Let us help you find the perfect place to call home! Whether
                you're searching for a luxurious estate, commercial lot for your
                business, or industrial lot, our team is dedicated to matching
                you with the ideal property that suits your needs and
                preferences.
              </p>
            </div>
            <div className="manualSearch--actions">
              <SemiRoundBtn
                label={"Get Free Assistance"}
                type={"default"}
                className="manual-search-action action-btn"
                size={"small"}
                handleClick={() => {
                  window.location.href = "/propertySearch/?dashboardClicked=true";
                }}
              />
            </div>
            <p></p>
          </div>
        </div>
        {/* <div
          className="featured-list--section"
          style={{
            backgroundColor: "#F7F7F7",
          }}
        >
          <Row className="discover-content featured">
            <div className="discover-section--title featured--title">
              <h2>Featured Properties</h2>
            </div>
          </Row>
        </div>
        <div
          className="discover--section-4"
          style={{
            backgroundColor: "#F7F7F7",
          }}
        >
          <div className="featured--content">
            {!loading ? (
              publiclisting.length !== 0 ? (
                <FeaturedPropertiesComponent
                  featuredListing={publiclisting}
                  handleFeaturedClick={handleCardClick}
                />
              ) : (
                <p style={{ textAlign: "center", padding: "90px 0px 150px" }}>
                  No Featured Properties Available
                </p>
              )
            ) : (
              <div
                id="featured-properties"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {FeatureSkeleton()}
              </div>
            )}
          </div>
        </div>
        */}
        <div
          className="ratings"
          style={{
            textAlign: "center",
          }}
        >
          <div className="rating-container">
            <div className="rating--title">
              <h3>What Our Clients are Saying?</h3>
            </div>
            <div className="rating--content">
              <RatingCarouselComponent />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* <br /> */}
      <PropertySearchModal
        openModal={isPropSearchModalOpen}
        closeModal={handleModalClose}
      />
      <CustomMlFooter />
      <FooterComponent />
    </div>
  );
};

export default DashboardComponent;
