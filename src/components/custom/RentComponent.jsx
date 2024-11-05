import React from "react";
import "../../styles/rentComponent.css";
import slider from "../../asset/icons/slider.png";
import favorite from "../../asset/icons/Favorite.png";
import bed from "../../asset/icons/bed.png";
import shower from "../../asset/icons/shower.png";
import sqm from "../../asset/icons/sqm.png";
import { Pagination } from "antd";
import { CameraFilled, HeartOutlined } from "@ant-design/icons";

const Card = ({
  imageUrl,
  label,
  numLikes,
  title,
  subTitle,
  price,
  bedrooms,
  bathrooms,
  size,
}) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={imageUrl} alt="House" className="image" />
        <p className="label topLeft">{label}</p>
        <div className="iconContainer">
          <span className="icon topRight">
            <CameraFilled />
            {numLikes}
          </span>
          <span className="icon bottomLeft">
            <img src={favorite} alt="" />
          </span>
          <span className="icon bottomRight">
            <img src={slider} alt="" />
          </span>
        </div>
      </div>
      <div className="textContainer">
        <h2 className="title">{title}</h2>
        <p className="subTitle">{subTitle}</p>
        <p className="price">
          {price}
          {/* <div className="details"> */}
          <span>
            <span className="detail">
              <img src={bed} alt="" /> {bedrooms}
            </span>
            <span className="detail">
              <img src={shower} alt="" /> {bathrooms}
            </span>
            <span className="detail">
              <img src={sqm} alt="" /> {size} SqM
            </span>
          </span>
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Card;
