import React, { useEffect, useState, useMemo } from "react";
import "../../../styles/wrapupdetails.css";
import InputLock from "../../../assets/inputlock.png";
import { Dropdown, Menu } from "antd";
import {
  GetCities,
  GetProvince,
  GetCountry,
} from "../../../api/Public/Location.api";
import { DownOutlined } from "@ant-design/icons";
// import {
//   GetCountry,
//   GetProvince,
//   GetCities,
// } from "../../../api/Public/Location.api";

const WrapUpDetails = ({ setWrapUpComplete, setCustomerInfo, customerInfo }) => {
  const [email, setEmail] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [incomeType, setIncomeType] = useState("");
  const [targetValue, setTargetvalue] = useState("");
  const [getProvince, setGetProvince] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [zipcode, setZipCode] = useState(null);
  const [otherAddress, setOtherAddress] = useState(null);

  // Handlers
  // const handleIncomeType = (value) => {
  //   setIncomeType(value);
  //   setWrapUpValues('source_of_income', value);
  // };
  // const handleTargetvalue = (value) => setTargetvalue(value);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([allCities(), allProvince()]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const setWrapUpValues = (name, value) => {
    console.log("setWrapUpValues", name, value);

    setCustomerInfo((prevSearchParams) => ({

      ...prevSearchParams,
      [name]: value
    }));
  }

  const handleSelect = (value, fieldName) => {
    if (fieldName == 'province') {
      handleProvinceChange(value);
    }
    setWrapUpValues(fieldName, value)
  }

  const handleInput = (value, setField) => {
    setField(value)
  }

  const handleBlurInput = (value, fieldName) => {
    if (!["", null, undefined].includes(value)) {
      setWrapUpValues(fieldName, value);
    }
  }

  const allProvince = async () => {
    const dataresprovince = await GetProvince();
    setGetProvince(dataresprovince);
    // console.log("These are provinces:", dataresprovince);
  };
  const allCities = async () => {
    const datarescities = await GetCities();
    setGetCities(datarescities);
    // console.log("These are cities:", datarescities);
  };

  const handleProvinceChange = (province) => {
    const provinceData = getProvince.find(
      (p) =>
        p.name.charAt(0).toUpperCase() + p.name.slice(1).toLowerCase() ===
        province
    );
    if (provinceData) {
      const provinceId = provinceData.addressL1Id;
      const filtered = getCities.filter((city) => {
        // console.log("Checking city:", city.name);
        return city.addressL1Id === provinceId;
      });
      // console.log("Filtered cities:", filtered);
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  const incomeTypeOptions = [
    "Salary/Pay/Wage/Commission",
    "Business Income/Self Employment(valid Id & IRT)",
    "Pension for Retiree(valid Id & IRT)",
    "Regular Remittance Abroad(valid Id & IRT)",
  ];

  // Check if the form is complete
  // useEffect(() => {
  //   const isFormComplete =
  //     email &&
  //     firstname &&
  //     lastname &&
  //     selectedCountry &&
  //     selectedState &&
  //     selectedCity &&
  //     incomeType &&
  //     targetValue;

  //   setWrapUpComplete(isFormComplete);
  // }, [
  //   email,
  //   firstname,
  //   lastname,
  //   selectedCountry,
  //   selectedState,
  //   selectedCity,
  //   incomeType,
  //   targetValue,
  //   setWrapUpComplete,
  // ]);

  // Styling for completed and incomplete state
  // const wrapUpClassName = `wrap-up-inf 
  // ${email &&
  //   firstname &&
  //   lastname &&
  //   selectedCountry &&
  //   selectedState &&
  //   selectedCity &&
  //   incomeType &&
  //   targetValue
  //   ? "completed"
  //   : "incomplete"
  //   }
  //   `;

  const wrapUpClassName = `wrap-up-inf`;

  return (
    <div
      className={wrapUpClassName}
    >
      <h3>Wrap Up</h3>
      <span className="protect-tagline">
        <div className="SSl-Encryption">
          Your information is protected by SSL encryption.
        </div>
      </span>
      <div className="prop-content2-wrap-up">
        <div className="mobile-address-group">
          <span className="label">Mobile Address</span>
          <input
            type="text"
            className="wrap-up-input"
            placeholder="09"
            value={mobile_number}
            onChange={(e) => handleInput(e.target.value, setMobileNumber)}
            // Add handler if needed
            onBlur={(e) => handleBlurInput(e.target.value, "mobile_number")}
          />
        </div>
        <div className="email-address-group">
          <span className="label">Email Address</span>
          <input
            type="text"
            className="wrap-up-input"
            placeholder="Email Address"
            value={email}
            onChange={(e) => handleInput(e.target.value, setEmail)}
            onBlur={(e) => handleBlurInput(e.target.value, "email")}
          />
        </div>
        <div className="lastname-group">
          <span className="label">Last Name</span>
          <input
            type="text"
            className="wrap-up-input"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => handleInput(e.target.value, setLastname)}
            onBlur={(e) => handleBlurInput(e.target.value, "last_name")}
          />
        </div>
        <div className="firstname-group">
          <span className="label">First Name</span>
          <input
            type="text"
            className="wrap-up-input"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => handleInput(e.target.value, setFirstname)}
            onBlur={(e) => handleBlurInput(e.target.value, "first_name")}
          />
        </div>
        <div className="country-group">
          <span className="label">Country</span>
            <select
              name="country"
              id="country"
              placeholder="Select Country"
              className="wrap-up-dropdown-button"
              value={customerInfo.country}
              onChange={(e) => handleSelect(e.target.value, 'country')}
              style={{ backgroundColor: "rgb(164,161,161, 27%)" }}
              disabled
            >
              {/* <option value="" disabled selected hidden>
							Select Country
						</option> */}
              <option value="Philippines" disabled>
                Philippines
              </option>
              {/* {getCountry.map((country, index) => (
							<option
								key={index}
								value={
									country.name.charAt(0).toUpperCase() +
									country.name.slice(1).toLowerCase()
								}
							>
								{country.name.charAt(0).toUpperCase() +
									country.name.slice(1).toLowerCase()}
							</option>
						))} */}
            </select>
        </div>
        <div className="province-group">
          <span className="label">Province/State</span>
          <div className="wrap-up--select">
            <select
              name="province"
              id="province"
              className="wrap-up-dropdown-button"
              value={customerInfo.province}
              onChange={(e) => handleSelect(e.target.value, 'province')}
            // onChange={handleAddressChange}
            >
              <option
                value=""
                disabled
                selected
                hidden
              >
                Select Province
              </option>
              {getProvince.map((province, index) => (
                <option
                  key={index}
                  style={{ maxHeight: "20px", overflowY: "auto" }}
                  value={
                    province.name.charAt(0).toUpperCase() +
                    province.name.slice(1).toLowerCase()
                  }
                >
                  {province.name.charAt(0).toUpperCase() +
                    province.name.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="city-town-group">
          <span className="label">City/Town</span>
          <div className="wrap-up--select">
          <select
            name="city"
            id="city"
            className="wrap-up-dropdown-button"
            value={customerInfo.city}
            onChange={(e) => handleSelect(e.target.value, 'city')}
          >
            <option value="" disabled selected hidden>
              Select City
            </option>
            {filteredCities.map((city, index) => (
              <option
                key={index}
                value={
                  city.name.charAt(0).toUpperCase() +
                  city.name.slice(1).toLowerCase()
                }
              >
                {city.name.charAt(0).toUpperCase() +
                  city.name.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
          </div>
        </div>
        <div className="zipcode-group">
          <span className="label">Zipcode</span>
          <input
            type="text"
            className="wrap-up-input"
            placeholder="Enter Zipcode"
            // Add handler if needed
            value={zipcode}
            onChange={(e) => handleInput(e.target.value, setZipCode)}
            onBlur={(e) => handleBlurInput(e.target.value, "zipcode")}
          />
        </div>
        <div className="housenumber-group">
          <span className="label">House No/Unit/Building Name/Street</span>
          <input
            type="text"
            className="wrap-up-input"
            placeholder="Enter Street"
            // Add handler if needed
            value={otherAddress}
            onChange={(e) => handleInput(e.target.value, setOtherAddress)}
            onBlur={(e) => handleBlurInput(e.target.value, "others")}
          />
        </div>
        <div className="source-income-group">
          <span className="label">Source of Income</span>
          <div className="wrap-up--select">
          <select
            name="source_of_income"
            id=""
            value={customerInfo.source_of_income}
            className="wrap-up-dropdown-button"
            style={{ margin: "0px" }}
            onChange={(e) => handleSelect(e.target.value, 'source_of_income')}
          >
            <option value="" disabled selected hidden>
              Select Source of Income
            </option>
            {incomeTypeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          </div>
          {/* <button className="wrap-up-dropdown-button" style={{ margin: "0px" }}>
            <Dropdown
              menu={
                <Menu onClick={(e) => handleIncomeType(e.key)}>
                  {incomeTypeOptions.map((option) => (
                    <Menu.Item key={option}>{option}</Menu.Item>
                  ))}
                </Menu>
              }
            >
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {incomeType || "Select Source"}
                <DownOutlined />
              </a>
            </Dropdown> */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default WrapUpDetails;
