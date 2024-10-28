import React, { useEffect, useState } from "react";
import "../../styles/jointeam.css";
import {
  GetCountry,
  GetCities,
  GetProvince,
} from "../../api/Public/Location.api";
import OTPModal from "../../components/OTPModal";
import { Select } from "antd";
import { AddAgent, GetControlLastNumber } from "../../api/Public/Agent.api";
import { notification } from "antd";

const JoinTeam = ({ toggleModal }) => {
  const { Option } = Select;
  const [getCountry, setGetCountry] = useState([]);
  const [getProvince, setGetProvince] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  const [formData, setFormData] = useState({
    mobileNumber: "",
    email: "",
    lastName: "",
    firstName: "",
    middleName: "",
    suffix: "",
    country: "Philippines",
    province: "",
    city: "",
    address: "",
    brokerQuestion: "Agent",
    brokerYears: "",
  });

  //Search user through number
  const [userDetails, setUserDetails] = useState(null);

  // useEffect(() => {
  // 	console.log("user", userDetails);
  // }, []);
  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
      placement: "top",
      duration: type == "error" ? 4 : 3,
    });
  };
  const [errors, setErrors] = useState({});
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const allCountries = async () => {
    const datares = await GetCountry();
    setGetCountry(datares);
    console.log("these are countries:", datares);
  };

  const allCities = async () => {
    const datarescities = await GetCities();
    setGetCities(datarescities);
    console.log("these are cities:", datarescities);
  };

  const allProvince = async () => {
    const dataresprovince = await GetProvince();
    setGetProvince(dataresprovince);
    console.log("these are provinces:", dataresprovince);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([allCountries(), allCities(), allProvince()]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [othersInputValue, setOthersInputValue] = useState("");
  const handleInputOthers = async (e) => {
    setOthersInputValue(e.target.value);
  };
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "country":
        // setFormData(value);
        setFormData((prevFormData) => ({
          ...prevFormData,
          country: value,
        }));
        break;
      case "province":
        // setSelectedProvince(value);
        setFormData((prevFormData) => ({
          ...prevFormData,
          province: value,
        }));
        break;
      case "city":
        // setSelectedCity(value);
        setFormData((prevFormData) => ({
          ...prevFormData,
          city: value,
        }));
        break;
      default:
        break;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log("othersInputValue: ", othersInputValue);

    // if (name === "mobileNumber" && value.length === 11) {
    //   try {
    //     const response = await searchKyc(value);
    //     const respData = response.data.data;
    //     setUserDetails(respData);
    //     console.log("datas:", respData);
    //     if (respData) {
    //       setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         firstName: respData.name?.firstName
    //           ? respData.name.firstName.replace(/.(?=.{2})/g, "*")
    //           : "",
    //         lastName: respData.name?.lastName
    //           ? respData.name.lastName.replace(/.(?=.{2})/g, "*")
    //           : "",
    //         middleName: respData.name?.middleName
    //           ? respData.name.middleName.replace(/.(?=.{2})/g, "*")
    //           : "",
    //         suffix: respData.name?.suffix || "",
    //         email: respData.email
    //           ? respData.email.replace(/(.{2}).*(?=@)/, "$1****")
    //           : "",
    //         country: respData.addresses?.current?.addressL0Name || "",
    //         province: respData.addresses?.current?.addressL1Name || "",
    //         city: respData.addresses?.current?.addressL2Name || "",
    //         address: respData.addresses?.current?.otherAddress || "",
    //       }));
    //     } else {
    //       setIsModalVisible(true);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching user details:", error);
    //   }
    // }
  };

  const handleValidation = () => {
    // let formErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (
        key !== "middleName" &&
        (!formData[key] || formData[key].trim() === "")
      ) {
        isValid = false;
      }
    });
    if (formData.mobileNumber) {
      const cleanMobileNumber = formData.mobileNumber.replace(/[^0-9]/g, "");
      if (cleanMobileNumber !== formData.mobileNumber) {
        // mobileNumber contained letters
        isValid = false;
      }
    }

    if (!formData.brokerQuestion) {
      // formErrors.brokerQuestion = "This field is required";
      isValid = false;
    }
    // setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isValid = handleValidation();
      const getControlLastNumber = await GetControlLastNumber("AgentId");
      const today = new Date();
      const yyyyMMdd =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      console.log("getControlLastNumber: ", getControlLastNumber);
      if (getControlLastNumber && isValid && getControlLastNumber.data !== "") {
        const reqBody = {
          AgentId: getControlLastNumber.data,
          AgentName: `${formData.lastName}, ${formData.firstName} ${
            formData.middleName
          } ${formData.suffix === "None" ? "" : formData.suffix}`,
          Address: `${formData.address}, ${formData.city}, ${formData.province}, ${formData.country}`,
          ContactNo: formData.mobileNumber,
          Email: formData.email,
          FacebookLink: "-",
          Designation:
            formData.brokerQuestion === "others"
              ? othersInputValue
              : formData.brokerQuestion,
          TeamId: "-",
          TeamName: "-",
          Affiliated: formData.brokerYears,
          TIN: "-",
          BirthDate: yyyyMMdd,
          Sex: "-",
          HasPanel: "-",
          IsFeatured: "-",
          Description: "-",
          RecordStatus: "pending",
          PRCID: "-",
          PRCExpiryDate: yyyyMMdd,
          ReferredById: "-",
          ReferredByName: "-",
          BankName: "-",
          BankAccountNo: "-",
        };
        const addAgent = await AddAgent(reqBody);
        console.log("addAgent: ", addAgent);

        if (addAgent) {
          openNotificationWithIcon(
            "success",
            `Successfully submitted`,
            "Thank you for joining our team! We're excited to review it and will be in touch soon with the next steps."
          );
        } else {
          openNotificationWithIcon(
            "warning",
            `Unable to proceed`,
            "Unable to Submit your Application, Please retry later!."
          );
        }
        console.log("formData: ", formData);
      } else {
        openNotificationWithIcon(
          "warning",
          `Invalid Value`,
          "Please provide the required fields!."
        );
      }

      //   const addAgent = await AddAgent();
    } catch (error) {
      console.log("error: ", error);

      openNotificationWithIcon(
        "error",
        "Message Failed",
        "We're sorry, but your application couldn't be submitted. We're already working on resolving the issue. Thank you for your patience!"
      );
    }

    // const isValid = handleValidation();

    // if (isValid) {
    //   setShowOtpModal(true);
    // } else {
    //   console.log("Form is invalid, not showing OTP modal");
    // }
  };

  const resetForm = () => {
    setFormData({
      mobileNumber: "",
      email: "",
      lastName: "",
      firstName: "",
      middleName: "",
      suffix: "",
      country: "Philippines",
      province: "",
      city: "",
      address: "",
      brokerQuestion: "",
      brokerYears: "",
    });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    resetForm();
  };
  const handleProvinceChange = (province) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      province: province,
    }));
    console.log("Selected Province:", province);

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
  const handleKeyDownPhone = (e) => {
    // const philippineNumberRegex = /^(09|\+639)\d{9}$/;
    const philippineNumberRegex =
      /^[0-9]*\.?[0-9]*$/.test(e.key) || e.key == "Backspace";
    if (philippineNumberRegex) {
      return;
    }
    e.preventDefault();
  };
  const Modal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
      <div className="modal-notice" onClick={handleCloseModal}>
        <div className="modal-notice-content">
          <h2>Important Notice</h2>
          <p>
            To join our team, you need to create an ML Wallet account. Follow
            these three easy steps:
          </p>
          <ol>
            <li>
              Download and install the ML Wallet application from Google Play or
              the App Store.
            </li>
            <li>Sign up for an ML Wallet account.</li>
            <li>
              Once successfully registered, return here and fill out this form
              to become an M Lhuillier broker/agent.
            </li>
          </ol>
        </div>
      </div>
    );
  };
  const formatCityLabel = (label) => {
    return label
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };
  return (
    <div className="join-modal-container">
      {contextHolder}
      <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
      {showOtpModal && (
        <OTPModal
          visible={showOtpModal}
          onClose={() => {
            setShowOtpModal(false);
            resetForm();
          }}
        />
      )}
      {!showOtpModal && !isModalVisible && (
        <div
          className="modal-overlay-jointeam"
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            top: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            padding: "0px 0px 0px 0px",
          }}
        >
          <div
            className="modal-content-jointeam"
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              width: "auto",
              maxHeight: "90vh",
              display: "flex",
              padding: "20px 30px",
              flexDirection: "column",
              margin: "20px 0px",
              overflowY: "auto",
            }}
          >
            <div className="modal-header">
              <h2 style={{ color: "#000000", fontSize: "24px" }}>
                Join our innovative team at M Lhuillier.
              </h2>
              <span
                className="close-modal"
                onClick={toggleModal}
                style={{ color: "#666", fontWeight: "lighter" }}
              >
                &times;
              </span>
            </div>
            <p style={{ fontSize: "16px", color: "#000000" }}>
              Your expertise and passion are exactly what we need.
            </p>
            <div className="join-team-columns">
              <div className="join-team-column-group">
                <div className="join-team-group">
                  <span>Mobile Number</span>
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="09"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    onKeyDown={(e) => handleKeyDownPhone(e)}
                    pattern="[0-9]*"
                  />
                  {errors.mobileNumber && (
                    <p className="error">{errors.mobileNumber}</p>
                  )}
                </div>
                <div className="join-team-group">
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!!userDetails}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
              <div className="join-team-column-group">
                <div className="join-team-group">
                  <span>Last Name</span>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    disabled={!!userDetails}
                  />
                  {errors.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
                </div>
                <div className="join-team-group">
                  <span>First Name</span>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    disabled={!!userDetails}
                  />
                  {errors.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}
                </div>
                <div className="join-team-group">
                  <span>Middle Name</span>
                  <input
                    type="text"
                    name="middleName"
                    placeholder="Middle Name"
                    value={formData.middleName}
                    onChange={handleInputChange}
                  />
                  {errors.middleName && (
                    <p className="error">{errors.middleName}</p>
                  )}
                </div>
                <div className="join-team-group">
                  <span>Suffix</span>

                  <select
                    id="suffix"
                    className="join-our-team-selector"
                    value={formData.suffix}
                    onChange={
                      (e) =>
                        handleInputChange({
                          target: { name: "suffix", value: e.target.value },
                        }) // Corrected here
                    }
                    name="suffix"
                    // onChange={handleAddressChange}
                  >
                    <option value="" disabled selected hidden>
                      Select option
                    </option>
                    <option value="None">None</option>
                    <option value="Jr.">Jr.</option>
                    <option value="Sr.">Sr.</option>
                  </select>

                  {/* <Select
                    name="suffix"
                    value={formData.suffix}
                    onChange={(value) =>
                      handleInputChange({ target: { name: "suffix", value } })
                    }
                  >
                    <option value="">Select option</option>
                    <option value="None">None</option>
                    <option value="Jr.">Jr.</option>
                    <option value="Sr.">Sr.</option>
                  </Select> */}
                  {errors.suffix && <p className="error">{errors.suffix}</p>}
                </div>
              </div>
              <div className="join-team-column-group">
                <div className="join-team-group">
                  <span>Country</span>
                  <input
                    type="text"
                    name="country"
                    value="Philippines"
                    onChange={(value) =>
                      handleInputChange({
                        target: { name: "country", value },
                      })
                    }
                    disabled
                  />
                  {/* <Select
                    name="country"
                    value="Philippines"
                    onChange={(value) =>
                      handleInputChange({
                        target: { name: "country", value },
                      })
                    }
                    disabled
                  >
                    <Option value="Philippines">Philippines</Option>
                  </Select> */}
                  {errors.country && <p className="error">{errors.country}</p>}
                </div>
                <div className="join-team-group">
                  <span>Province/State</span>
                  {/* <Select
                    name="province"
                    value={formData.province}
                    onChange={(value) => handleProvinceChange(value)}
                  >
                    <Option value="">Select Province</Option>
                    {getProvince?.map((province, index) => (
                      <Option
                        key={index}
                        value={
                          province.name.charAt(0).toUpperCase() +
                          province.name.slice(1).toLowerCase()
                        }
                      >
                        {province.name.charAt(0).toUpperCase() +
                          province.name.slice(1).toLowerCase()}
                      </Option>
                    ))}
                  </Select> */}
                  <select
                    id="province"
                    className="join-our-team-selector"
                    value={formData.province}
                    onChange={(e) => handleProvinceChange(e.target.value)}
                    name="province"
                    // onChange={handleAddressChange}
                  >
                    <option value="" disabled selected hidden>
                      Select Province
                    </option>
                    {getProvince?.map((province, index) => (
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
                  {errors.province && (
                    <p className="error">{errors.province}</p>
                  )}
                </div>
                <div className="join-team-group">
                  <span>City/Town</span>
                  {/* <Select
                    name="city"
                    className="join-our-team-selector"
                    value={formData.city}
                    onChange={(value) =>
                      handleInputChange({ target: { name: "city", value } })
                    }
                  >
                    <Option value="">Select City</Option>
                    {filteredCities?.map((city, index) => (
                      <Option key={index} value={formatCityLabel(city.name)}>
                        {formatCityLabel(city.name)}
                      </Option>
                    ))}
                  </Select> */}
                  <select
                    name="city"
                    id="city"
                    className="join-our-team-selector"
                    value={formData.city}
                    onChange={
                      (e) =>
                        handleInputChange({
                          target: { name: "city", value: e.target.value },
                        }) // Corrected here
                    }
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

                    {/* {filteredCities?.map((city, index) => (
                      <Option key={index} value={formatCityLabel(city.name)}>
                        {formatCityLabel(city.name)}
                      </Option>
                    ))} */}
                  </select>

                  {errors.city && <p className="error">{errors.city}</p>}
                </div>
                <div className="join-team-group">
                  <span>House No/St/Sitio/Barangay</span>
                  <input
                    type="text"
                    name="address"
                    placeholder="House No/St/Sitio/Barangay"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  {errors.address && <p className="error">{errors.address}</p>}
                </div>
              </div>
            </div>
            {/* <IdentifiableInformation /> */}
            <div className="broker-questions-jointeam">
              <div className="broker-questions-review">
                <span>Are you a Real Estate:</span>
                <div className="radio-button-broker-question">
                  <label>
                    <input
                      type="radio"
                      name="brokerQuestion"
                      value="Agent"
                      checked={formData.brokerQuestion === "Agent"}
                      onChange={handleInputChange}
                    />
                    Agent
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="brokerQuestion"
                      value="Broker"
                      checked={formData.brokerQuestion === "Broker"}
                      onChange={handleInputChange}
                    />
                    Broker
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="brokerQuestion"
                      value="others"
                      checked={formData.brokerQuestion === "others"}
                      onChange={handleInputChange}
                    />
                    Others
                    {formData.brokerQuestion === "others" && (
                      <div className="join-team-group">
                        <input
                          type="text"
                          name="otherBrokerQuestion"
                          id="othersBrokerQuestion"
                          placeholder="Please specify"
                          value={othersInputValue}
                          onChange={handleInputOthers}
                        />
                        {errors.otherBrokerQuestion && (
                          <p className="error">{errors.otherBrokerQuestion}</p>
                        )}
                      </div>
                    )}
                  </label>
                  {errors.brokerQuestion && (
                    <p className="error">{errors.brokerQuestion}</p>
                  )}
                </div>
              </div>
              <div className="broker-number-of-years">
                <span>
                  When did you start your affiliation as{" "}
                  {formData.brokerQuestion === "others"
                    ? ["a", "e", "i", "o", "u"].includes(
                        othersInputValue.charAt(0).toLowerCase()
                      )
                      ? "an"
                      : "a"
                    : ["a", "e", "i", "o", "u"].includes(
                        formData.brokerQuestion.charAt(0).toLowerCase()
                      )
                    ? "an"
                    : "a"}{" "}
                  {formData.brokerQuestion === "others"
                    ? othersInputValue
                      ? othersInputValue
                      : "_"
                    : formData.brokerQuestion}
                  ?
                </span>
                <input
                  type="date"
                  name="brokerYears"
                  placeholder="Enter Number"
                  value={formData.brokerYears}
                  onChange={handleInputChange}
                />
                {errors.brokerYears && (
                  <p className="error">{errors.brokerYears}</p>
                )}
              </div>
              <span>
                By proceeding, I agree and review that all information is
                correct.
              </span>
            </div>
            <button onClick={handleSubmit} className="join-team-submit-button">
              Submit Application
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinTeam;
