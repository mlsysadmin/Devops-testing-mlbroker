import { CaretDownFilled } from "@ant-design/icons";
import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { GetCountry } from "../../../api/Public/Location.api";

const CustomSelectTypeField = (props) => {
  const labelName = props.labelName;
  const disabled = props.disabled;
  const readOnly = props.readOnly;
  const value = props.value;
  const handleFieldChange = props.handleFieldChange;
  const name = props.name;

  const [options, setOptions] = useState([]);
  const [listingInformation, setListingInformation] = useState([]);

  const [errors, setErrors] = useState([]);
  useEffect(() => {
    if (labelName === "Property Type") {
      setOptions([
        { value: "Service Office", label: "Service Office" },
        { value: "Shop/Retail", label: "Shop/Retail" },
        { value: "Commercial Land/Lot", label: "Commercial Land/Lot" },
        { value: "Condominium", label: "Condominium" },
        { value: "House & Lot", label: "House & Lot" },
        { value: "Townhouse", label: "Townhouse" },
        { value: "Warehouse", label: "Warehouse" },
        { value: "Farm Lot", label: "Farm Lot" },
        { value: "Hotel/Resort", label: "Hotel/Resort" },
      ]);
    } else if (labelName === "Listing Type") {
      setOptions([
        { value: "For Rent", label: "For Rent" },
        { value: "For Sale", label: "For Sale" },
        { value: "Pre-selling", label: "Pre-selling" },
      ]);
    } else if (labelName === "Furnishing") {
      setOptions([
        { value: "YES", label: "Yes" },
        { value: "NO", label: "No" },
        { value: "SEMI", label: "Semi" },
      ]);
    } 
    else if (labelName === "Classification") {
      setOptions([
        { value: "New", label: "Brand New" },
        { value: "Resale", label: "Resale" },
      ]);
    } 
    else if (labelName === "Country") {
      const countriesData = props.countries;

      const countries = countriesData.map((country) => {
        return {
          value: country.name,
          label: country.name
        }
      });
      setOptions(countries);

    }
    else if (labelName === "Province/State") {
      const provincesData = props.provinces;

      const provinces = provincesData.map((province) => {
        return {
          value: province.name,
          label: province.name
        }
      });
      setOptions(provinces);
    } 
    else if (labelName === "City/Town") {
      const citiesData = props.cities;

      const cities = citiesData.map((city) => {
        return {
          value: city.name,
          label: city.name,
          key: city.addressL2Id
        }
      });
      setOptions(cities);
    }
    else if (
      labelName === "Beds" ||
      labelName === "Bathrooms" ||
      labelName === "Parking" ||
      labelName === "No of Floors"
    ) {

      let num = new Array(20);
      let arrayValue = [];

      for (let index = 1; index <= num.length; index++) {
        arrayValue.push({
          value: index,
          label: index,
        })
      }
      setOptions(arrayValue);
    }
  }, [labelName, props.cities ,props.provinces, props.countries]);

  return (
    <div className="custom-select-type">
      <label htmlFor={labelName} className="labelClassName">
        {labelName}
      </label>
      <br />
      <Select
        name={name}
        className="fieldClassName"
        onChange={(value) => handleFieldChange(value, name, 'select')}
        placeholder={`Select ${labelName}`}
        options={options}
        suffixIcon={<CaretDownFilled/>}
        value={value}
        aria-readonly={readOnly}
        disabled={disabled}
      >
      </Select>
    </div>
  );
};
export default CustomSelectTypeField;
