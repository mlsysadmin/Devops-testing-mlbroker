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

const WrapUpDetails = ({
  setWrapUpComplete,
  setCustomerInfo,
  customerInfo,
}) => {
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
  useEffect(() => {
    const isAnyFieldEmptyForWrapUp =
      mobile_number === "" ||
      email === "" ||
      lastname === "" ||
      firstname === "" ||
      customerInfo.province === "" ||
      customerInfo.city === "" ||
      zipcode === "" ||
      otherAddress === "" ||
      customerInfo.source_of_income === "";
    console.log("isAnyFieldEmptyForWrapUp: ", isAnyFieldEmptyForWrapUp);
    if (!isAnyFieldEmptyForWrapUp) {
      setWrapUpComplete(true);
    } else {
      setWrapUpComplete(false);
    }
  }, [
    mobile_number,
    email,
    lastname,
    firstname,
    customerInfo.province,
    customerInfo.city,
    zipcode,
    otherAddress,
    customerInfo.source_of_income,
  ]);
  const setWrapUpValues = (name, value) => {
    setCustomerInfo((prevSearchParams) => ({
      ...prevSearchParams,
      [name]: value,
    }));
  };

  const handleSelect = (value, fieldName) => {
    if (fieldName == "province") {
      handleProvinceChange(value);
    }
    setWrapUpValues(fieldName, value);
  };

  const handleInput = (value, setField) => {
    console.log("value: ",value);
    setField(value);
  };
  const [errorMessage, setErrorMessage] = useState({
    error_mobile_number: "",
    error_email_address: "",
    error_last_name: "",
    error_first_name: "",
    error_province: "",
    error_city: "",
    error_zipcode: "",
    error_house_no: "",
    error_source_of_income: "",
  });
  const [isMobileBlurred, setIsMobileBlurred] = useState(false);
  const [isProvinceBlurred, setIsProvinceBlurred] = useState(false);
  const [isCityBlurred, setIsCityBlurred] = useState(false);
  const [isSourceOfIncomeBlurred, setIsSourceOfIncomeBlurred] = useState(false);

  const handleBlurInput = (value, fieldName) => {
    // console.log("errorFieldName: ", errorFieldName);
    console.log("fieldName: ", fieldName);
    console.log("value:", value);
    console.log("`error_${fieldName}`: ", `error_${fieldName}`);

    const trimmedValue = value.trim();
    let isValid = true;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (trimmedValue === "") {
      if (fieldName === "mobile_number") {
        setErrorMessage((prevState) => ({
          ...prevState,
          error_mobile_number: "Please provide your Phone numbers.",
        }));
        isValid = false;
      } else if (fieldName === "email") {
        setErrorMessage((prevState) => ({
          ...prevState,
          error_email_address: "Email address cannot be empty.",
        }));
        isValid = false;
      } else if (fieldName === "last_name") {
        setErrorMessage((prevState) => ({
          ...prevState,
          error_last_name: "Please provide your Last name.",
        }));
        isValid = false;
      } else if (fieldName === "first_name") {
        setErrorMessage((prevState) => ({
          ...prevState,
          error_first_name: "Please provide your First name.",
        }));
        isValid = false;
      } else if (fieldName === "zipcode") {
        setErrorMessage((prevState) => ({
          ...prevState,
          error_zipcode: "Please provide your zip code.",
        }));
        isValid = false;
      } else if (fieldName === "others") {
        setErrorMessage((prevState) => ({
          ...prevState,
          error_house_no: `Please provide your House No/Unit/Building Name/Street`,
        }));
        isValid = false;
      } else {
        setErrorMessage((prevState) => ({
          ...prevState,
          [`error_${fieldName}`]: `Please provide a valid1 ${fieldName}`,
        }));
        isValid = false;
      }
    } else {
      if (fieldName === "email") {
        if (!emailPattern.test(trimmedValue)) {
          console.log(`Invalid email format for ${fieldName}: ${trimmedValue}`);
          setErrorMessage((prevState) => ({
            ...prevState,
            error_email_address: "Please provide a valid Email Address",
          }));
          isValid = false;
        } else {
          setErrorMessage((prevState) => ({
            ...prevState,
            error_email_address: "",
          }));
        }
      }
      if (fieldName === "mobile_number") {
        if (trimmedValue.startsWith("09")) {
          if (trimmedValue.length !== 11) {
            console.log(
              `Invalid mobile number length for ${fieldName}: ${trimmedValue}`
            );
            setErrorMessage((prevState) => ({
              ...prevState,
              error_mobile_number:
                "Mobile number must be 11 digits long and start with '09'.",
            }));
            isValid = false;
          } else {
            setErrorMessage((prevState) => ({
              ...prevState,
              error_mobile_number: "",
            }));
          }
        } else {
          setErrorMessage((prevState) => ({
            ...prevState,
            error_mobile_number: "Mobile number must start with '09'.",
          }));
          isValid = false;
        }
      } 
      if (fieldName === "last_name") {
        setErrorMessage((prevState) => ({
          ...prevState,
          error_last_name: "",
        }));
      }
      if (fieldName === "first_name") {
        setErrorMessage((prevState) => ({
          ...prevState,
          error_first_name: "",
        }));
      }
      if (fieldName === "zipcode") {
        setErrorMessage((prevState) => ({
          ...prevState,
          error_zipcode: "",
        }));
      }
      if (fieldName === "others") {
        setErrorMessage((prevState) => ({
          ...prevState,
          error_house_no: "",
        }));
      }
      else {
        setErrorMessage((prevState) => ({
          ...prevState,
          [fieldName]: "",
        }));
      }
    }
    setIsMobileBlurred(true);
    setWrapUpValues(fieldName, value);
  };
  const setFieldError = (fieldName, message) => {
    setErrorMessage((prevState) => ({
      ...prevState,
      [`error_${fieldName}`]: message,
    }));
  };
  const handleBlurSelect = (value, fieldName, displayName) => {
    if (value.trim() === "") {
      setFieldError(fieldName, `${displayName} is required`);
    } else {
      setFieldError(fieldName, "");
    }
    if (fieldName === "province") {
      setIsProvinceBlurred(true);
    }
    if (fieldName === "city") {
      setIsCityBlurred(true);
    }
    if (fieldName === "source_of_income") {
      setIsSourceOfIncomeBlurred(true);
    }
  };
  const pascalTextFormatter = (text) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
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
    const prov = province.toLowerCase();
    const provinceData = getProvince.find((p) => p.name.toLowerCase() === prov);
    if (provinceData) {
      const provinceId = provinceData.addressL1Id;
      const filtered = getCities.filter((city) => {
        return city.addressL1Id === provinceId;
      });
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

  const wrapUpClassName = `wrap-up-inf`;
  const handleKeyDownForLettersAndSymbolsOnly = (e) => {
    // Regular expression to allow letters and symbols only
    const validInputPattern = /^[A-Za-z\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    // Check if the key pressed is valid
    if (!validInputPattern.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
      e.preventDefault(); // Prevent the default action if the key is invalid
    }
  };
  const handleKeyDownForNumbers = (e) => {
    const validInputPatternWrapUp = /^\d*$/;
    const currentLength = mobile_number.length;
    if (e.key === "Backspace" || e.key === "Delete") {
      return;
    }
    if (!/\d/.test(e.key)) {
      e.preventDefault();
    }
    if (currentLength === 0 && e.key !== "0") {
      e.preventDefault(); 
    }
    if (currentLength === 1 && e.key !== "9") {
      e.preventDefault(); 
    }
    if (
      !validInputPatternWrapUp.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Tab"
    ) {
      e.preventDefault();
    }
  };
  return (
    <div className={wrapUpClassName}>
      <h3>Wrap Up</h3>
      <span className="protect-tagline">
        <div className="SSl-Encryption">
          Your information is protected by SSL encryption.
        </div>
      </span>
      <div className="prop-content2-wrap-up">
        <div className="mobile-address-group">
          <span className="label">Mobile Number</span>
          <input
            type="text"
            className={`wrap-up-input ${
              isMobileBlurred && errorMessage.error_mobile_number ? "error" : ""
            }`}
            placeholder="09"
            value={mobile_number}
            onKeyDown={handleKeyDownForNumbers}
            onChange={(e) => handleInput(e.target.value, setMobileNumber)}
            // Add handler if needed
            onBlur={(e) =>
              handleBlurInput(e.target.value, "mobile_number", "Mobile Number")
            }
            maxLength={11}
          />
          {errorMessage.error_mobile_number && (
            <p className="error-message">{errorMessage.error_mobile_number}</p>
          )}{" "}
        </div>
        <div className="email-address-group">
          <span className="label">Email Address</span>
          <input
            type="email"
            className={`wrap-up-input ${
              isMobileBlurred && errorMessage.error_email_address ? "error" : ""
            }`}
            placeholder="Email Address"
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={(e) => handleInput(e.target.value, setEmail)}
            onBlur={(e) =>
              handleBlurInput(e.target.value, "email", "Email address")
            }
          />
          {errorMessage.error_email_address && (
            <p className="error-message">{errorMessage.error_email_address}</p>
          )}{" "}
          {/* Show error message */}
        </div>
        <div className="lastname-group">
          <span className="label">Last Name</span>
          <input
            type="text"
            className={`wrap-up-input ${
              isMobileBlurred && errorMessage.error_last_name ? "error" : ""
            }`}
            placeholder="Last Name"
            value={lastname}
            onKeyDown={handleKeyDownForLettersAndSymbolsOnly}
            onChange={(e) => handleInput(e.target.value, setLastname)}
            onBlur={(e) => handleBlurInput(e.target.value, "last_name")}
          />
          {errorMessage.error_last_name && (
            <p className="error-message">{errorMessage.error_last_name}</p>
          )}{" "}
        </div>
        <div className="firstname-group">
          <span className="label">First Name</span>
          <input
            type="text"
            className={`wrap-up-input ${
              isMobileBlurred && errorMessage.error_first_name ? "error" : ""
            }`}
            placeholder="First Name"
            value={firstname}
            onKeyDown={handleKeyDownForLettersAndSymbolsOnly}

            onChange={(e) => handleInput(e.target.value, setFirstname)}
            onBlur={(e) => handleBlurInput(e.target.value, "first_name")}
          />
          {errorMessage.error_first_name && (
            <p className="error-message">{errorMessage.error_first_name}</p>
          )}{" "}
        </div>
        <div className="country-group">
          <span className="label">Country</span>
          <select
            name="country"
            id="country"
            placeholder="Select Country"
            className="wrap-up-dropdown-button"
            value={customerInfo.country}
            onChange={(e) => handleSelect(e.target.value, "country")}
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

              className={`wrap-up-dropdown-button ${
                isProvinceBlurred && errorMessage.error_province ? "error" : ""
              }`}
              value={customerInfo.province}
              onChange={(e) => handleSelect(e.target.value, "province")}
              // onChange={handleAddressChange}
              onBlur={(e) =>
                handleBlurSelect(e.target.value, "province", "Province")
              }
            >
              <option value="" disabled selected hidden>
                Select Province
              </option>
              {getProvince.map((province, index) => (
                <option
                  key={index}
                  style={{ maxHeight: "20px", overflowY: "auto" }}
                  value={pascalTextFormatter(province.name)}
                >
                  {pascalTextFormatter(province.name)}
                </option>
              ))}
            </select>
            {errorMessage.error_province && (
              <p className="error-message">{errorMessage.error_province}</p>
            )}
          </div>
        </div>
        <div className="city-town-group">
          <span className="label">City/Town</span>
          <div className="wrap-up--select">
            <select
              name="city"
              id="city"
              className={`wrap-up-dropdown-button ${
                isCityBlurred && errorMessage.error_city ? "error" : ""
              }`}
              value={customerInfo.city}
              onChange={(e) => handleSelect(e.target.value, "city")}
              onBlur={(e) => handleBlurSelect(e.target.value, "city", "City")}
            >
              <option value="" disabled selected hidden>
                Select City
              </option>
              {filteredCities.map((city, index) => (
                <option key={index} value={pascalTextFormatter(city.name)}>
                  {pascalTextFormatter(city.name)}
                </option>
              ))}
            </select>
            {errorMessage.error_city && (
              <p className="error-message">{errorMessage.error_city}</p>
            )}
          </div>
        </div>
        <div className="zipcode-group">
          <span className="label">Zipcode</span>
          <input
            type="text"
            className={`wrap-up-input ${
              isMobileBlurred && errorMessage.error_zipcode ? "error" : ""
            }`}
            placeholder="Enter Zipcode"
            // Add handler if needed
            value={zipcode}
            onKeyDown={handleKeyDownForNumbers}
            onChange={(e) => handleInput(e.target.value, setZipCode)}
            onBlur={(e) => handleBlurInput(e.target.value, "zipcode")}
          />
          {errorMessage.error_zipcode && (
            <p className="error-message">{errorMessage.error_zipcode}</p>
          )}{" "}
        </div>
        <div className="housenumber-group">
          <span className="label">House No/Unit/Building Name/Street</span>
          <input
            type="text"
            className={`wrap-up-input ${
              isMobileBlurred && errorMessage.error_house_no ? "error" : ""
            }`}
            placeholder="Enter Street"
            value={otherAddress}
            onChange={(e) => handleInput(e.target.value, setOtherAddress)}
            onBlur={(e) => handleBlurInput(e.target.value, "others")}
          />
          {errorMessage.error_house_no && (
            <p className="error-message">{errorMessage.error_house_no}</p>
          )}{" "}
        </div>
        <div className="source-income-group">
          <span className="label">Source of Income</span>
          <div className="wrap-up--select">
            <select
              name="source_of_income"
              value={customerInfo.source_of_income}
              className={`wrap-up-dropdown-button ${
                isSourceOfIncomeBlurred && errorMessage.error_source_of_income
                  ? "error"
                  : ""
              }`}
              style={{ margin: "0px" }}
              onChange={(e) => handleSelect(e.target.value, "source_of_income")}
              onBlur={(e) =>
                handleBlurSelect(
                  e.target.value,
                  "source_of_income",
                  "Source of Income"
                )
              }
            >
              <option value="" disabled selected hidden>
                Select Source of Income
              </option>
              {incomeTypeOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            {errorMessage.error_source_of_income && (
              <p className="error-message">
                {errorMessage.error_source_of_income}
              </p>
            )}
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
