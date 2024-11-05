import React, { useEffect, useState } from "react";
import "../../../styles/custom.css";
import {
  GetAllAmenities,
  GetAllIndoorAmenities,
  GetAllOutdoorAmenities,
} from "../../../api/GetAllAmenities";

const CertainFeatureMenu = ({ setCheckFeatures }) => {
  const [IndoorAm, setIndoorAm] = useState([]);
  const [OutdoorAm, setOutdoorAm] = useState([]);

  const indoorF = async () => {
    const resIndoor = await GetAllIndoorAmenities();
    // const indoorDatas = resIndoor;
    setIndoorAm(resIndoor);
    // console.log("all amenities", resIndoor);
  };
  useEffect(() => {
    indoorF();
  }, []);

  const outdoorF = async () => {
    const resIndoor = await GetAllOutdoorAmenities();
    // const indoorDatas = resIndoor;
    setOutdoorAm(resIndoor);
    // console.log("all amenities", resIndoor);
  };
  useEffect(() => {
    outdoorF();
  }, []);

  // 	"Badminton Court",
  // 	"Balcony",
  // 	"Basketball Court",
  // 	"Carport",
  // 	"Clubhouse",
  // 	"Courtyard",
  // 	"Fully Fenced",
  // 	"Function Area",
  // 	"Garage",
  // 	"Garden",
  // 	"Gazebos",
  // 	"Jacuzzi",
  // 	"Jogging Path",
  // 	"Lanai",
  // 	"Landscaped Garden",
  // 	"Multi-purpose Lawn",
  // 	"Open Car Spaces",
  // 	"Parks",
  // 	"Parking Lot",
  // 	"Playground",
  // 	"Remote Garage",
  // 	"Secure Parking",
  // 	"Shower Rooms",
  // 	"Sports Facilities",
  // 	"Swimming Pool",
  // 	"Tennis Court",
  // 	"24/7 Security",
  // ];
  const [indoorCheckedState, setIndoorCheckedState] = useState(
    new Array(IndoorAm.length).fill(false)
  );
  const [outdoorCheckedState, setOutdoorCheckedState] = useState(
    new Array(OutdoorAm.length).fill(false)
  );

  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleCheckboxChange = (
    e,
    index,
    setCheckedState,
    checkedState,
    featureType
  ) => {
    const updatedCheckedState = checkedState.map((item, pos) =>
      pos === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
    setCheckFeatures((prevSearchParams) => {
      const existingParamIndex = prevSearchParams.findIndex(
        (param) => param.value == e.target.value
      );
      if (e.target.checked) {
        if (existingParamIndex !== -1) {
          prevSearchParams[existingParamIndex].value = e.target.value;
        } else {
          prevSearchParams.push({ name: featureType, value: e.target.value });
        }
      } else {
        if (existingParamIndex !== -1) {
          prevSearchParams.splice(existingParamIndex, 1);
        } else {
        }
      }
      return [...prevSearchParams];
    });
  };

  const handleShowAllChange = (IndoorAms, OutdoorAms) => {
    console.log("IndoorAms, OutdoorAms: ", IndoorAms, OutdoorAms);

    const newState = !isAllChecked;
    setIsAllChecked(newState);
    setIndoorCheckedState(new Array(IndoorAm.length).fill(newState));
    setOutdoorCheckedState(new Array(OutdoorAm.length).fill(newState));
    [...IndoorAms, ...OutdoorAms].forEach((feature) => {
      setCheckFeatures((prevSearchParams) => {
        const existingParamIndex = prevSearchParams.findIndex(
          (param) => param.value == feature.feature_name
        );
        if (true) {
          if (existingParamIndex !== -1) {
            prevSearchParams[existingParamIndex].value = feature.feature_name;
          } else {
            prevSearchParams.push({
              name: feature.feature_type,
              value: feature.feature_name,
            });
          }
        }
        return [...prevSearchParams];
      });
    });
  };

  const renderFeatures = (features, checkedState, setCheckedState) => {
    const numColumns = 3;
    // console.log("features: ",features);

    const numRows = Math.ceil(features.length / numColumns);
    const columns = Array.from({ length: numColumns }, (_, columnIndex) =>
      features
        .slice(columnIndex * numRows, (columnIndex + 1) * numRows)
        .map((feature, index) => (
          <div className="feature-item-content" key={index}>
            <input
              type="checkbox"
              checked={checkedState[columnIndex * numRows + index]}
              onChange={(e) =>
                handleCheckboxChange(
                  e,
                  columnIndex * numRows + index,
                  setCheckedState,
                  checkedState,
                  feature.feature_type
                )
              }
              value={feature.feature_name}
            />
            <span>{feature.feature_name}</span>
          </div>
        ))
    );
    return (
      <div className="features-list">
        {columns.map((column, columnIndex) => (
          <div className="features-column" key={columnIndex}>
            {column}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="certain-feature-menu-container">
      <div className="show-all-container">
        <input
          type="checkbox"
          className="styled-checkbox"
          checked={isAllChecked}
          onChange={() => handleShowAllChange(IndoorAm, OutdoorAm)}
        />
        <span>Show all</span>
      </div>

      <div className="features-section">
        <span className="features-header">INDOOR FEATURES</span>
        {renderFeatures(IndoorAm, indoorCheckedState, setIndoorCheckedState)}
      </div>

      <div className="features-section">
        <span className="features-header">OUTDOOR FEATURES</span>
        {renderFeatures(OutdoorAm, outdoorCheckedState, setOutdoorCheckedState)}
      </div>
    </div>
  );
};

export default CertainFeatureMenu;
