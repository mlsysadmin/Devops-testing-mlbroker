import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Divider, Image, Row } from "antd";
import { FeaturedProperties } from "../utils/ListingMockData";
import { GetPropertiesBySaleStatus } from "../api/GetAllPublicListings";
import { GetPhotoWithUrl, GetPhotoLength } from "../utils/GetPhoto";
import "../styles/featuredProperties.css";
import sqm from "../asset/icons/sqm2.png";
import shower from "../asset/icons/hotel-shower.png";
import bed from "../asset/icons/outlined-bed.png";
import { AmountFormatterGroup } from "../utils/AmountFormatter";
import SemiRoundBtn from "./custom/buttons/SemiRoundBtn.custom";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import ShortcutOutlined from "@mui/icons-material/ShortcutOutlined";

const FeaturedPropertiesComponent = ({ featuredListing, handleFeaturedClick }) => {
  const navigate = useNavigate();
  // const [featuredListing, setFeaturedList] = useState([]);

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [cardLength, setCardLength] = useState(0);

  const handleShowFeatures = useCallback(() => {
    const screen_width = window.screen.width;
    const screen_height = window.screen.height;

    setScreenSize({
      width: screen_width,
      height: screen_height,
    });
  }, [setScreenSize])

  useEffect(() => {
    window.addEventListener("resize", handleShowFeatures);

    // return () => window.addEventListener("resize", handleShowNav);
  }, [])

  const handleCardClick = (id) => {
    // window.location.href = `/previewListing/${id}`;
    navigate(`/previewListing/${id}`, { state: id });
  };

  // const allPublicListing = async () => {
  //   const res = await GetPropertiesBySaleStatus();
  //   const dataresp = res.data;
  //   setFeaturedList(dataresp);
  // };

  // useEffect(() => {
  //   // allPublicListing();
  // }, []);


  const Features = ({ features }) => {
    return (
      <div className="featured">
        {features.map((feature, i) => {
          const { no_of_beds, no_of_bathrooms, lot } =
            feature;

          return (
            <div className="feature" key={i}>
              <div className="feature-items--featured" key={i}>
                {lot > 0 && (
                  <div className="feature-item--featured">
                    <ShortcutOutlined/>
                    {/* <img src={sqm} alt="area-icon" className="featured-item--img" /> */}
                    <p>{lot}</p>
                  </div>
                )}
                {no_of_bathrooms > 0 && (
                  <div className="feature-item--featured">
                    {/* <img src={shower} alt="bathroom-icon" className="featured-item--img" /> */}
                    <ShowerOutlinedIcon/>
                    <p>{no_of_bathrooms}</p>
                  </div>
                )}
                {no_of_beds > 0 && (
                  <div className="feature-item--featured">
                    {/* <img src={bed} alt="bed-icon" className="featured-item--img" /> */}
                    <BedOutlinedIcon/>
                    <p>{no_of_beds}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const FeaturedCards = () => {
    let cardList;

    if (screenSize.width <= 600) {
      cardList = featuredListing.slice(0, 1);
      setCardLength(cardList.length)
    } else {
      cardList = featuredListing.slice(0, 6);
      setCardLength(cardList.length)
    }

    return (
      cardList.map((featured, i) => {
        // if (!featured.isFeatured) {
        return (
          <Col className="featured-property" key={i} onClick={() => handleFeaturedClick(featured.property_no)}>
            <div className="featured-img">
              <img
                // preview={false}
                src={featured.img}
              />
            </div>
            <div className="featured-property--content">
              <Card loading={false}>
                <h4 className="featured-price">
                  PHP {featured.price} {featured.sale_type?.toLowerCase() == 'rent' ? 'month' : ''}
                </h4>
                <p className="featured-title">{featured.title}</p>
                <p className="featured-listing-type">
                  {`For ${featured.sale_type}`}
                </p>
                <div className="featured-features">
                  {<Features features={[featured]} />}
                </div>
              </Card>
            </div>
          </Col>
        );
        // }
        // return null;
      })
    )
  }


  return (
    <>
      {
        cardLength == 1 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <SemiRoundBtn
              label={'See all featured properties'}
              style={{
                borderColor: '#D90000',
                color: '#D90000',
                height: '38px',
                fontWeight: '600',
                border: 'none',
                background: 'transparent',
                textDecorationLine: 'underline'
              }}
              handleClick={() => navigate({
                pathname: '/featured'
              })}
            />
          </div>
        )
      }
      <br />
      <Row
        id="featured-properties"
      // gutter={[16, { xs: 8, sm: 16, md: 32, lg: 150 }]}
      >
        {
          featuredListing.every((featured) => featured.isFeatured == "no") ? (
            <div
              className="no-featured-item"
              style={{ fontSize: "18px", color: "var(--red)" }}
            >
              No Featured Properties Available
            </div>
          ) : <FeaturedCards />
        }
      </Row>
      <br />

    </>
  );
};

export default FeaturedPropertiesComponent;
