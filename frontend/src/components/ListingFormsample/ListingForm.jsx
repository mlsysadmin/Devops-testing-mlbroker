import styled from "styled-components";
import PropTypes from "prop-types";

const MlLogoIcon = styled.img`
  height: 57px;
  width: 217px;
  position: relative;
  object-fit: cover;
`;
const Sell = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 23px;
`;
const BuySellMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-7xs) 0px 0px;
`;
const New = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 28px;
`;
const Rent = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 30px;
`;
const RentNew = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-smi);
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
const RentNewMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-6xs) 0px 0px;
`;
const Buy = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 24px;
`;
const BuySellMenu1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
`;
const HomeLoan = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 74px;
  white-space: nowrap;
`;
const HomeInsurance = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 107px;
  white-space: nowrap;
`;
const OtherServices = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 94px;
  white-space: nowrap;
`;
const Contact = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 53px;
`;
const Services1 = styled.nav`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12.3px;
  text-align: center;
  font-size: var(--font-size-smi);
  color: var(--color-gray-100);
  font-family: var(--font-poppins);
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const ServicesMenu = styled.nav`
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const ListYourPropertyChild = styled.div`
  height: 31px;
  width: 146px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-red-200);
  display: none;
`;
const ListYourProp = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 111px;
  z-index: 1;
`;
const ListYourProperty = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-mid) var(--padding-5xs);
  white-space: nowrap;
`;
const ListPropertyButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
`;
const UsernameChild = styled.div`
  height: 33px;
  width: 100px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-red-200);
  display: none;
`;
const UserCicrleIcon = styled.img`
  height: 23px;
  width: 23px;
  position: relative;
  min-height: 23px;
  z-index: 1;
`;
const Marie = styled.a`
  text-decoration: none;
  position: relative;
  font-size: var(--font-size-smi);
  font-family: var(--font-poppins);
  color: var(--color-white);
  text-align: center;
  display: inline-block;
  min-width: 37px;
  z-index: 1;
`;
const FrameChild = styled.img`
  width: 10px;
  height: 3.9px;
  position: relative;
  object-fit: contain;
  z-index: 1;
`;
const UsernameInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) 0px 0px;
`;
const Username1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-8xs) var(--padding-2xs) var(--padding-8xs)
    var(--padding-smi);
  background-color: var(--color-red-200);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
`;
const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  color: var(--color-white);
`;
const Menu = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  max-width: 100%;
`;
const Navigation1 = styled.div`
  width: 802px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const MlLogoParent = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  text-align: center;
  font-size: var(--font-size-smi);
  color: var(--color-gray-100);
  font-family: var(--font-poppins);
`;
const ListingFormInner = styled.div`
  width: 1263px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mid);
  box-sizing: border-box;
  max-width: 100%;
`;
const ListingFormBannerChild = styled.img`
  width: 1194px;
  height: 83px;
  position: relative;
  border-radius: var(--br-11xl);
  display: none;
  max-width: 100%;
`;
const ListYourProperty1 = styled.h2`
  margin: 0;
  width: 343px;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const ChooseAProperty = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;
const ChooseProperty = styled.div`
  width: 268px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs);
  box-sizing: border-box;
  font-size: var(--font-size-smi);
`;
const ListingFormBanner = styled.div`
  width: 1194px;
  border-radius: var(--br-11xl);
  background-color: rgba(217, 0, 0, 0.94);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-xl) var(--padding-4xs) 445px;
  box-sizing: border-box;
  gap: 2px;
  max-width: 100%;
  @media screen and (max-width: 975px) {
    padding-left: 222px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const ListingFormBannerWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 41px var(--padding-4xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const ListingStepsChild = styled.img`
  width: 298px;
  height: 348px;
  position: relative;
  border-radius: var(--br-11xl);
  display: none;
`;
const StepsToComplete = styled.b`
  position: relative;
  z-index: 1;
`;
const CheckCircle1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const Check1Icon = styled.img`
  position: absolute;
  top: 7px;
  left: 8px;
  width: 8.7px;
  height: 9.3px;
  object-fit: contain;
  z-index: 2;
`;
const DetailsIcon = styled.div`
  height: 24px;
  width: 24px;
  position: relative;
`;
const PropertyDetails = styled.div`
  position: relative;
  display: inline-block;
  min-width: 118px;
  z-index: 1;
`;
const PropertyDetailsName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
`;
const PropertyDetailsStep = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
const CheckCircle = styled.input`
  cursor: pointer;
  margin: 0;
  height: 24px;
  width: 24px;
  position: relative;
  min-height: 24px;
  z-index: 1;
`;
const UnitDetails = styled.div`
  position: relative;
  display: inline-block;
  min-width: 84px;
  z-index: 1;
`;
const Location1 = styled.div`
  position: relative;
  display: inline-block;
  min-width: 64px;
  z-index: 1;
`;
const Description = styled.div`
  position: relative;
  display: inline-block;
  min-width: 85px;
  z-index: 1;
`;
const UploadPhotos = styled.div`
  position: relative;
  display: inline-block;
  min-width: 109px;
  z-index: 1;
`;
const Features = styled.div`
  position: relative;
  display: inline-block;
  min-width: 65px;
  z-index: 1;
`;
const Contact1 = styled.div`
  position: relative;
  display: inline-block;
  min-width: 61px;
  z-index: 1;
`;
const FeaturesStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const StepIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const StepsProgress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xl);
`;
const ListingSteps = styled.div`
  backdrop-filter: blur(4px);
  border-radius: var(--br-11xl);
  background-color: #fff0f0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xl) var(--padding-13xl) var(--padding-27xl);
  gap: var(--gap-mini);
`;
const Steps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  min-width: 298px;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
`;
const PropertyDetailsChild = styled.img`
  width: 857px;
  height: 568px;
  position: relative;
  border-radius: var(--br-11xl);
  display: none;
  max-width: 100%;
`;
const PropertyDetails1 = styled.b`
  position: relative;
  font-weight: 700;
  z-index: 1;
`;
const Commercial = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 75px;
  z-index: 1;
`;
const CommercialWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-red-200);
`;
const PropertyHeading = styled.div`
  width: 252px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-black);
`;
const PropertyType = styled.div`
  position: relative;
  display: inline-block;
  min-width: 105px;
  z-index: 1;
`;
const PropertyTypeName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px 0px;
`;
const PropertyTypeButtonsChild = styled.div`
  height: 48px;
  width: 448px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-red-300);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  flex-shrink: 0;
  display: none;
`;
const ServiceOffice = styled.div`
  position: relative;
  display: inline-block;
  min-width: 102px;
  z-index: 2;
`;
const Shopretail = styled.div`
  position: relative;
  display: inline-block;
  min-width: 87px;
  z-index: 2;
`;
const ShopRetailButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-smi) 0px 0px;
`;
const CommercialLandlot = styled.div`
  position: relative;
  z-index: 2;
`;
const PropertyTypeButtons = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-red-300);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-lg) var(--padding-2xs)
    var(--padding-2xl);
  gap: 21px;
  max-width: 100%;
  z-index: 1;
`;
const PropertyTypeOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 41px;
  max-width: 100%;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
    gap: var(--gap-xl);
  }
`;
const PropertyType1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mini);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-mini);
  color: var(--color-black);
`;
const Residential = styled.div`
  position: relative;
  display: inline-block;
  min-width: 66px;
  z-index: 1;
`;
const ResidentialName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-base);
`;
const CondoHouseChild = styled.div`
  align-self: stretch;
  width: 378px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-red-300);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const CondoButtonChild = styled.div`
  height: 48px;
  width: 145px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-red-200);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Condominium = styled.div`
  position: relative;
  font-size: var(--font-size-mini);
  font-family: var(--font-poppins);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  min-width: 108px;
  z-index: 4;
`;
const CondoButton = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-3xs) var(--padding-mid) var(--padding-2xs)
    var(--padding-lg);
  background-color: var(--color-red-200);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 3;
  &:hover {
    background-color: var(--color-red-100);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const HouseLot = styled.div`
  position: relative;
  display: inline-block;
  min-width: 88px;
  z-index: 3;
`;
const Townhouse = styled.div`
  position: relative;
  display: inline-block;
  min-width: 86px;
  z-index: 1;
`;
const HouseButtons = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xl);
`;
const HouseButtonsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
  min-width: 131px;
`;
const CondoHouse = styled.div`
  align-self: stretch;
  border-radius: var(--br-11xl);
  background-color: var(--color-red-300);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xl) 0px 0px;
  gap: var(--gap-7xs);
  max-width: 100%;
  z-index: 2;
  font-size: var(--font-size-mini);
  color: var(--color-black);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    padding: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const ResidentialOptions = styled.div`
  width: 378px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  max-width: 100%;
`;
const ResidentialType = styled.div`
  width: 698px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px var(--padding-5xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const Industrialetc = styled.div`
  position: relative;
  display: inline-block;
  min-width: 81px;
  z-index: 1;
`;
const IndustrialName = styled.div`
  width: 403px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const ListingType = styled.div`
  position: relative;
  display: inline-block;
  min-width: 87px;
  z-index: 1;
`;
const ListingOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 83px 0px 0px;
`;
const ListingStatusChild = styled.div`
  height: 48px;
  width: 378px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-red-300);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  flex-shrink: 0;
  display: none;
`;
const Warehouse = styled.div`
  position: relative;
  display: inline-block;
  min-width: 86px;
  z-index: 2;
`;
const FarmLot = styled.div`
  position: relative;
  display: inline-block;
  min-width: 65px;
  z-index: 2;
`;
const Hotelresort = styled.div`
  position: relative;
  display: inline-block;
  min-width: 93px;
  z-index: 2;
`;
const ListingStatus = styled.div`
  align-self: stretch;
  border-radius: var(--br-11xl);
  background-color: var(--color-red-300);
  border: 1px solid var(--color-red-200);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-3xs) var(--padding-8xl) var(--padding-2xs)
    var(--padding-7xl);
  gap: var(--gap-xl);
  z-index: 1;
`;
const ForRent = styled.div`
  position: relative;
  display: inline-block;
  min-width: 61px;
  z-index: 2;
`;
const ForRentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-lg) 0px 0px;
`;
const FrameItem = styled.div`
  height: 48px;
  width: 125px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-red-200);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const ForSale = styled.div`
  position: relative;
  font-size: var(--font-size-mini);
  font-family: var(--font-poppins);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  min-width: 59px;
  z-index: 3;
`;
const RectangleParent = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-3xs) var(--padding-11xl) var(--padding-2xs)
    var(--padding-15xl);
  background-color: var(--color-red-200);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 2;
  &:hover {
    background-color: var(--color-red-100);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const PreSelling = styled.div`
  position: relative;
  display: inline-block;
  min-width: 81px;
  z-index: 2;
`;
const PreSellingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
`;
const ListingStatus1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-11xl);
  background-color: var(--color-red-300);
  border: 1px solid var(--color-red-200);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-7xl) 0px var(--padding-8xl);
  gap: var(--gap-lgi);
  z-index: 1;
`;
const ListingButtons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  min-width: 246px;
  max-width: 100%;
`;
const ListingOptionsParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 58px;
  max-width: 100%;
  font-size: var(--font-size-mini);
  color: var(--color-black);
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
    gap: 29px;
  }
`;
const IndustrialOptions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  max-width: 100%;
`;
const IndustrialOptionsWrapper = styled.div`
  width: 553px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mini) var(--padding-mid);
  box-sizing: border-box;
  max-width: 100%;
`;
const ToHelpHome = styled.div`
  position: relative;
  z-index: 1;
`;
const HomeBuyersInfo = styled.div`
  width: 655px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px var(--padding-8xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-4xs);
  color: var(--color-gray-100);
`;
const RemindersChild = styled.div`
  width: 558px;
  height: 129px;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: var(--color-red-400);
  display: none;
  max-width: 100%;
`;
const WarningIcon = styled.img`
  width: 13px;
  height: 13px;
  position: relative;
  z-index: 1;
`;
const WarningIcon1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
`;
const RemindersTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const WeDoNot = styled.li`
  margin-bottom: 0px;
`;
const IfYouAre = styled.li``;
const WeDoNotAcceptPreSellingP = styled.ul`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-xs);
`;
const WeDoNotContainer = styled.p`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-weight: 300;
  z-index: 1;
`;
const PhotoGuide = styled.span`
  text-decoration: underline;
`;
const ForMoreAssistanceContainer = styled.div`
  position: relative;
  font-weight: 300;
  z-index: 1;
`;
const Assistance = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-sm);
  box-sizing: border-box;
  max-width: 100%;
`;
const WeDoNotAcceptPreSellingPParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
`;
const Preselling = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-4xs);
`;
const Reminders = styled.div`
  width: 558px;
  border-radius: var(--br-3xs);
  background-color: var(--color-red-400);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-5xs) var(--padding-base)
    var(--padding-sm);
  box-sizing: border-box;
  gap: var(--gap-mini);
  max-width: 100%;
  z-index: 1;
`;
const RemindersWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-17xl);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-3xs);
`;
const PropertyDetails2 = styled.div`
  align-self: stretch;
  backdrop-filter: blur(4px);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 0px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xl) var(--padding-31xl) 35px;
  gap: var(--gap-8xs);
  max-width: 100%;
  color: var(--color-red-200);
  @media screen and (max-width: 975px) {
    padding-left: var(--padding-6xl);
    padding-right: var(--padding-6xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 725px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-4xl);
    box-sizing: border-box;
  }
`;
const UnitDetailsChild = styled.img`
  width: 857px;
  height: 725px;
  position: relative;
  border-radius: var(--br-11xl);
  display: none;
  max-width: 100%;
`;
const UnitDetails1 = styled.b`
  position: relative;
  font-weight: 700;
  display: inline-block;
  min-width: 106px;
  z-index: 1;
`;
const WhatIsThe = styled.div`
  width: 222px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const SellingPriceLabel = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-4xl) 0px var(--padding-xl);
`;
const SellingPrice = styled.div`
  position: relative;
  display: inline-block;
  min-width: 90px;
  z-index: 1;
`;
const FurnishingNames = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-12xs);
`;
const Furnishing = styled.div`
  align-self: stretch;
  position: relative;
  z-index: 1;
`;
const FurnishingLabels = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 65px;
`;
const FurnishingFields = styled.div`
  width: 91px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-6xs);
  box-sizing: border-box;
`;
const PesoSymbolChild = styled.div`
  height: 43px;
  width: 247px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-100);
  box-sizing: border-box;
  display: none;
`;
const PHPChild = styled.img`
  height: 43px;
  width: 81px;
  position: relative;
  border-radius: var(--br-11xl);
  display: none;
`;
const Php = styled.b`
  flex: 1;
  position: relative;
  font-size: var(--font-size-smi);
  font-weight: 700;
  font-family: var(--font-inter);
  color: var(--color-gray-100);
  text-align: left;
  z-index: 3;
`;
const PHP = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-sm) var(--padding-lgi) var(--padding-smi)
    var(--padding-4xl);
  background-color: var(--color-gray-300);
  width: 81px;
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  z-index: 2;
  &:hover {
    background-color: var(--color-gray-200);
  }
`;
const FrameInner = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  z-index: 2;
`;
const PesoSymbolInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-xs);
`;
const PesoSymbol = styled.div`
  flex: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  gap: var(--gap-7xs);
  z-index: 1;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const PriceCurrency = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-12xs);
`;
const FurnishingChoice = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-smi) 0px var(--padding-xs);
`;
const FurnishingSelectionChild = styled.div`
  height: 43px;
  width: 247px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-100);
  box-sizing: border-box;
  flex-shrink: 0;
  display: none;
`;
const Yes = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--font-size-smi);
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: left;
  z-index: 3;
`;
const FurnishedOption = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-sm) var(--padding-mid) var(--padding-smi)
    var(--padding-6xl);
  background-color: var(--color-red-200);
  width: 81px;
  border-radius: var(--br-11xl);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  z-index: 2;
  &:hover {
    background-color: var(--color-red-100);
  }
`;
const No = styled.div`
  align-self: stretch;
  position: relative;
  z-index: 2;
`;
const SemifurnishedOptions = styled.div`
  width: 45px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-lgi) 0px 0px;
  box-sizing: border-box;
`;
const SemifurnishedOptions1 = styled.div`
  width: 39px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) 0px 0px;
  box-sizing: border-box;
`;
const FurnishingSelection = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-100);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs);
  gap: var(--gap-11xl);
  z-index: 1;
  font-size: var(--font-size-smi);
  font-family: var(--font-inter);
`;
const FurnishingButtons = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const SellingPriceValue = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  min-width: 161px;
`;
const Discounted = styled.p`
  margin: 0;
`;
const DiscountedPriceFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 48px;
`;
const DiscountedPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
  min-width: 105px;
  font-size: var(--font-size-mini);
  color: var(--color-black);
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const SellingPriceInput = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  min-width: 239px;
  max-width: 100%;
  font-size: var(--font-size-3xs);
  color: var(--color-gray-100);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FurnishingOptions = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: var(--gap-7xl);
  max-width: 100%;
  font-size: var(--font-size-mini);
  color: var(--color-black);
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const SellingPrice1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
  min-width: 315px;
  max-width: 100%;
`;
const DiscountedInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-2xs);
`;
const DiscountedCurrencyChild = styled.div`
  height: 43px;
  width: 244px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  display: none;
`;
const DiscountedPeso = styled.input`
  width: 80px;
  border: none;
  outline: none;
  background-color: var(--color-gray-300);
  height: 43px;
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-4xl) var(--padding-sm);
  box-sizing: border-box;
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: var(--font-size-smi);
  color: var(--color-gray-100);
  z-index: 2;
`;
const DiscountedCurrencyInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-3xs);
`;
const DiscountedCurrency = styled.div`
  width: 244px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-lg) 0px 0px;
  gap: var(--gap-7xs);
  z-index: 1;
`;
const DiscountedPriceValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const BrandNewOptionChild = styled.img`
  height: 43px;
  width: 137px;
  position: relative;
  border-radius: var(--br-11xl);
  display: none;
`;
const BrandNew = styled.div`
  position: relative;
  font-size: var(--font-size-smi);
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  min-width: 70px;
  z-index: 3;
`;
const BrandNewOption = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-sm) var(--padding-11xl) var(--padding-smi) 37px;
  background-color: var(--color-red-200);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 2;
  &:hover {
    background-color: var(--color-red-100);
  }
`;
const ResaleOption = styled.div`
  width: 47px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) 0px 0px;
  box-sizing: border-box;
`;
const ClassificationButtons = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs);
  gap: var(--gap-11xl);
  z-index: 1;
  font-size: var(--font-size-smi);
  font-family: var(--font-inter);
`;
const ClassificationInput = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const ClassificationOptions = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs) 0px var(--padding-12xs);
`;
const DiscountedPriceInput = styled.div`
  width: 252px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  min-width: 252px;
  @media screen and (max-width: 725px) {
    flex: 1;
  }
`;
const UnitDetailsFields = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-3xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--color-gray-100);
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const UnitDetailsTitleContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
`;
const Beds = styled.div`
  width: 59px;
  position: relative;
  display: inline-block;
  z-index: 1;
`;
const Parking = styled.div`
  width: 82px;
  position: relative;
  display: inline-block;
  z-index: 1;
`;
const FloorAreaPrice = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 80px;
`;
const ParkingFloor = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 91px;
`;
const FeatureLabels = styled.div`
  width: 91px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 99px;
  font-size: var(--font-size-mini);
  color: var(--color-black);
`;
const BedInput = styled.input`
  width: 172px;
  border: none;
  outline: none;
  background-color: transparent;
  height: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-2xs);
  box-sizing: border-box;
  font-family: var(--font-poppins);
  font-size: var(--font-size-3xs);
  color: var(--color-gray-100);
`;
const BedCounterChild = styled.div`
  height: 71px;
  width: 246px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  display: none;
  z-index: 0;
`;
const HotelBed2BedDoubleBedrooIcon = styled.img`
  height: 20.5px;
  width: 20px;
  position: relative;
  z-index: 2;
`;
const BedCounterItem = styled.div`
  height: 12px;
  width: 12px;
  position: absolute;
  margin: 0 !important;
  bottom: 18px;
  left: 49px;
  border-radius: 50%;
  background-color: var(--color-red-200);
  z-index: 3;
`;
const BedCount = styled.div`
  width: 17px;
  position: relative;
  display: inline-block;
  z-index: 2;
`;
const FrameChild1 = styled.div`
  height: 2px;
  flex: 1;
  position: relative;
  border-top: 2px solid var(--color-red-500);
  box-sizing: border-box;
  z-index: 2;
`;
const BedNumberInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-10xs);
`;
const BedNumber = styled.div`
  width: 164px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
const BedCounter = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mini) var(--padding-mini) var(--padding-lg);
  position: relative;
  gap: var(--gap-xs);
  z-index: 1;
`;
const BedImage = styled.div`
  width: 246px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  font-size: var(--font-size-xs);
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const ParkingIcon = styled.div`
  width: 176px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-smi);
  box-sizing: border-box;
`;
const ParkingSignDiscountCouponIcon = styled.img`
  width: 19px;
  height: 19px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
`;
const ParkingCounterItem = styled.div`
  height: 12px;
  width: 12px;
  position: absolute;
  margin: 0 !important;
  bottom: 16px;
  left: 49px;
  border-radius: 50%;
  background-color: var(--color-red-200);
  z-index: 3;
`;
const ParkingNumber = styled.div`
  width: 162px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
`;
const ParkingCounter = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-xl) var(--padding-lg);
  position: relative;
  gap: var(--gap-3xs);
  z-index: 1;
  font-size: var(--font-size-xs);
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const ParkingValue = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
`;
const ParkingInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-11xs) var(--padding-9xs) var(--padding-5xs);
`;
const AreaIcon = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px var(--padding-lgi);
`;
const AreaCounterChild = styled.div`
  height: 43px;
  width: 246px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-100);
  box-sizing: border-box;
  display: none;
`;
const LineOutAltLightIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 16px;
  height: 17px;
  z-index: 2;
`;
const ExpandBigBiggerDesignExpaIcon = styled.img`
  position: absolute;
  top: 6px;
  left: 8px;
  width: 8px;
  height: 11.4px;
  z-index: 3;
`;
const AreaImage = styled.div`
  width: 16px;
  height: 17.4px;
  position: relative;
`;
const AreaImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 16.6px;
`;
const AreaCounterInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-6xs);
`;
const SqmLabelChild = styled.img`
  height: 43px;
  width: 75px;
  position: relative;
  border-radius: var(--br-11xl);
  display: none;
`;
const Sqm = styled.b`
  position: relative;
  font-size: var(--font-size-smi);
  font-weight: 700;
  font-family: var(--font-inter);
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  min-width: 31px;
  z-index: 3;
`;
const SqmLabel = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-sm) var(--padding-lgi) var(--padding-smi)
    var(--padding-6xl);
  background-color: var(--color-gray-300);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  &:hover {
    background-color: var(--color-gray-200);
  }
`;
const AreaCounter = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-lgi);
  gap: 7.5px;
  z-index: 1;
`;
const AreaInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-11xs) var(--padding-mini) var(--padding-5xs);
`;
const PricePerSqmInputContainer = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  gap: var(--gap-7xs);
  z-index: 1;
`;
const PricePerSqmContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-4xs) 0px 0px;
`;
const BedIcon = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-8xl);
`;
const BedsValue = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-8xs);
  box-sizing: border-box;
  min-width: 166px;
`;
const LotArea = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-6xs);
`;
const PropertyIdNo = styled.div`
  width: 90px;
  position: relative;
  display: inline-block;
  z-index: 1;
`;
const LotAreaPropertyID = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 75px;
`;
const FloorsLotArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 104px;
`;
const DetailsRight = styled.div`
  width: 98px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 93px;
  min-width: 98px;
  font-size: var(--font-size-mini);
  color: var(--color-black);
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const BedsInput = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-7xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-mini);
  min-width: 244px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const BathroomsInput = styled.input`
  width: 164px;
  border: none;
  outline: none;
  background-color: transparent;
  height: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs);
  box-sizing: border-box;
  font-family: var(--font-poppins);
  font-size: var(--font-size-3xs);
  color: var(--color-gray-100);
`;
const HotelShowerHeadBatheBathIcon = styled.img`
  width: 15.1px;
  height: 20.8px;
  position: relative;
  z-index: 2;
`;
const FloorInputChild = styled.div`
  align-self: stretch;
  height: 2px;
  position: relative;
  border-top: 2px solid var(--color-red-500);
  box-sizing: border-box;
  z-index: 2;
`;
const FloorInput = styled.div`
  width: 161px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
`;
const BathroomIconFloorInputItem = styled.div`
  height: 12px;
  width: 12px;
  position: absolute;
  margin: 0 !important;
  bottom: 17px;
  left: 50px;
  border-radius: 50%;
  background-color: var(--color-red-200);
  z-index: 3;
`;
const BathroomIconFloorInput = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-4xl) var(--padding-lg);
  position: relative;
  gap: 11.9px;
  z-index: 1;
`;
const BathroomsFloors = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
  font-size: var(--font-size-xs);
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const HowManyNumberOfFloorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs);
`;
const DescendingNumberOrderIcon = styled.img`
  width: 13px;
  height: 14.7px;
  position: relative;
  z-index: 2;
`;
const DescendingNumberOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs) 0px 0px;
`;
const FloorValue = styled.div`
  flex: 1;
  position: relative;
  z-index: 2;
`;
const FloorValueWrapper = styled.div`
  width: 21px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs);
  box-sizing: border-box;
`;
const EllipseDiv = styled.div`
  height: 12px;
  width: 12px;
  position: absolute;
  margin: 0 !important;
  bottom: 16px;
  left: 50px;
  border-radius: 50%;
  background-color: var(--color-red-200);
  z-index: 3;
`;
const RectangleGroup = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-4xl) var(--padding-lg);
  position: relative;
  gap: var(--gap-sm);
  z-index: 1;
  font-size: var(--font-size-xs);
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const WhatIsTheLotAreaOfTheUnWrapper = styled.div`
  width: 221px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs);
  box-sizing: border-box;
`;
const ExpandBigBiggerDesignExpaIcon1 = styled.img`
  position: absolute;
  top: 6px;
  left: 9px;
  width: 8px;
  height: 11.4px;
  z-index: 3;
`;
const LotAreaResizeIcon = styled.div`
  width: 17px;
  height: 17.4px;
  position: relative;
`;
const LotAreaResizeIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 10.6px;
`;
const LotAreaInputBoxChild = styled.div`
  height: 1px;
  flex: 1;
  position: relative;
  border-top: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  z-index: 2;
`;
const LotAreaInputBox = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const LotAreaInputContainer = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-lg);
  gap: var(--gap-3xs);
  z-index: 1;
`;
const LotAreaInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-sm);
  gap: var(--gap-3xs);
`;
const WhatIsThePropertyIdNoWrapper = styled.div`
  width: 230px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs);
  box-sizing: border-box;
`;
const PropertyIdIconBackground = styled.div`
  position: absolute;
  height: 62.5%;
  width: 62.5%;
  top: 18.75%;
  right: 18.75%;
  bottom: 18.75%;
  left: 18.75%;
  border-radius: 3px;
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
`;
const PropertyIdIcon = styled.img`
  position: absolute;
  height: 4.17%;
  width: 58.33%;
  top: 41.67%;
  right: 20.83%;
  bottom: 54.17%;
  left: 20.83%;
  border-radius: 2px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 1;
`;
const NewsLight = styled.div`
  height: 24px;
  width: 24px;
  position: relative;
  z-index: 2;
`;
const PropertyIdInputBoxInner = styled.div`
  width: 169px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-11xs);
  box-sizing: border-box;
`;
const PropertyIdInputBox = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-6xs) var(--padding-sm) var(--padding-5xs);
  gap: var(--gap-9xs);
  z-index: 1;
`;
const PropertyIdInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-6xs) 0px 0px;
`;
const BathroomsFloorsLotAreaInpu = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 28px;
`;
const BathroomsFloorsLotAreaCont = styled.div`
  width: 251px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-8xs);
  box-sizing: border-box;
`;
const PropertyFeatures = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-lg);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--color-gray-100);
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const UnitDetails2 = styled.div`
  flex: 1;
  backdrop-filter: blur(4px);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 0px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 29px 45px var(--padding-27xl) 53px;
  gap: 32px;
  max-width: 100%;
  @media screen and (max-width: 975px) {
    padding-left: var(--padding-7xl);
    padding-right: var(--padding-3xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 725px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-11xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;
const UnitDetailsWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-3xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-lg);
`;
const DescendingNumberOrderIcon1 = styled.img`
  width: 13px;
  height: 18.4px;
  position: relative;
  display: none;
`;
const LocationChild = styled.img`
  width: 857px;
  height: 347px;
  position: relative;
  border-radius: var(--br-11xl);
  display: none;
  max-width: 100%;
`;
const Location2 = styled.b`
  position: relative;
  font-weight: 700;
  text-align: center;
  display: inline-block;
  min-width: 80px;
  z-index: 2;
`;
const WhatIsThe1 = styled.div`
  width: 207px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  z-index: 2;
`;
const SubdivisionInput = styled.div`
  width: 465px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  font-size: var(--font-size-xs);
  color: var(--color-gray-100);
`;
const Subdivision = styled.div`
  position: relative;
  display: inline-block;
  min-width: 90px;
  z-index: 2;
`;
const Address = styled.div`
  width: 90px;
  position: relative;
  display: inline-block;
  z-index: 2;
`;
const MapLocationInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-10xs);
`;
const AddressMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 73px;
`;
const SubdivisionAddressInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 62px;
`;
const SubdivisionAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-6xs);
`;
const AddressInputInnerContainerChild = styled.div`
  height: 43px;
  width: 634px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const LocationPin3NavigationMapIcon = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 3;
`;
const AddressInputInnerContainerItem = styled.img`
  width: 552px;
  position: relative;
  max-height: 100%;
  object-fit: contain;
  max-width: calc(100% - 25px);
  z-index: 3;
`;
const AddressInputInnerContainer = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-xl) var(--padding-6xs);
  gap: var(--gap-2xs);
  max-width: 100%;
  z-index: 2;
`;
const WhatIsTheAddressOfTheUniWrapper = styled.div`
  width: 223px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xs);
  box-sizing: border-box;
`;
const MapInputItem = styled.img`
  width: 552px;
  position: relative;
  max-height: 100%;
  object-fit: contain;
  max-width: calc(100% - 22px);
  z-index: 3;
`;
const MapInput = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-xl) var(--padding-6xs);
  gap: var(--gap-5xs);
  max-width: 100%;
  z-index: 2;
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
  max-width: 100%;
`;
const SearchInputChild = styled.div`
  align-self: stretch;
  width: 634px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const SearchInputInnerContainerChild = styled.div`
  height: 43px;
  width: 51px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-red-200);
  display: none;
`;
const SearchIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  z-index: 4;
`;
const SearchInputInnerContainer = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-smi) var(--padding-4xs);
  z-index: 3;
`;
const FrameChild2 = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--color-gray-500);
  box-sizing: border-box;
  z-index: 3;
`;
const SearchInputInner = styled.div`
  width: 529px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const SearchInput = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs);
  gap: var(--gap-mini);
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const FrameDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
`;
const AddressInputInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const AddressInput = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  min-width: 413px;
  max-width: 100%;
  font-size: var(--font-size-xs);
  color: var(--color-gray-100);
  @media screen and (max-width: 725px) {
    min-width: 100%;
  }
`;
const SubdivisionAddressMap = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: var(--gap-base);
  max-width: 100%;
  font-size: var(--font-size-mini);
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const Location3 = styled.div`
  flex: 1;
  backdrop-filter: blur(4px);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 0px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-15xl) var(--padding-31xl) var(--padding-17xl) 51px;
  gap: var(--gap-9xs);
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 975px) {
    padding-left: var(--padding-6xl);
    padding-right: var(--padding-6xl);
    box-sizing: border-box;
  }
`;
const LocationContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-lg);
`;
const DescriptionChild = styled.img`
  width: 857px;
  height: 509px;
  position: relative;
  border-radius: var(--br-11xl);
  display: none;
  max-width: 100%;
`;
const Description1 = styled.b`
  position: relative;
  font-weight: 700;
  display: inline-block;
  min-width: 107px;
  z-index: 1;
`;
const TitleInput = styled.div`
  width: 73px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-lg);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-mini);
`;
const TitleInputChild = styled.div`
  width: 749px;
  height: 43px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const Placeholder1 = styled.input`
  width: 471px;
  border: none;
  outline: none;
  background-color: transparent;
  height: 23px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs);
  box-sizing: border-box;
  font-family: var(--font-poppins);
  font-size: var(--font-size-mini);
  color: var(--color-gray-100);
  max-width: 100%;
`;
const TitleInputItem = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--color-gray-500);
  box-sizing: border-box;
  z-index: 2;
`;
const TitleInput1 = styled.div`
  flex: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-lg) var(--padding-4xs)
    var(--padding-3xl);
  max-width: 100%;
  z-index: 1;
`;
const TitleInputWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const DescriptionTitle = styled.div`
  width: 761px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-black);
`;
const IfThereAre = styled.span`
  display: block;
`;
const IfThereAreContainer = styled.p`
  margin: 0;
  position: relative;
  z-index: 1;
`;
const DescriptionPlaceholder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const DescriptionField = styled.textarea`
  border: 1px solid var(--color-darkgray-200);
  background-color: var(--color-white);
  height: 132px;
  width: auto;
  outline: none;
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-11xl);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-6xl);
  font-family: var(--font-poppins);
  font-size: var(--font-size-xs);
  color: var(--color-gray-100);
  z-index: 1;
`;
const DescriptionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
  max-width: 100%;
`;
const DescriptionInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mini) 0px var(--padding-2xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const HeresANiceContainer = styled.p`
  margin: 0;
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
`;
const DescriptionExample = styled.div`
  width: 767px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-lg);
  box-sizing: border-box;
  max-width: 100%;
`;
const Description2 = styled.div`
  flex: 1;
  backdrop-filter: blur(4px);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 0px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-15xl) 38px var(--padding-11xl);
  gap: 28.5px;
  max-width: 100%;
  @media screen and (max-width: 725px) {
    padding-top: var(--padding-3xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const DescriptionContainer1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xs);
  box-sizing: border-box;
  max-width: 100%;
  color: var(--color-gray-100);
`;
const UploadPhotosChild = styled.img`
  width: 857px;
  height: 356px;
  position: relative;
  border-radius: var(--br-11xl);
  display: none;
  max-width: 100%;
`;
const PhotosThatHaveWatermarksP = styled.ul`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-smi);
`;
const PhotosThatHaveContainer = styled.p`
  margin: 0;
  width: 729px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  max-height: 112px;
  word-break: break-word;
  z-index: 1;
`;
const PhotosThatHaveWatermarksPWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px var(--padding-base);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--color-gray-100);
`;
const DragDropChild = styled.div`
  height: 120px;
  width: 737px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-steelblue);
  border: 2px dashed var(--color-gray-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const DropOrDrag = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  z-index: 2;
`;
const DragDrop = styled.div`
  flex: 1;
  border-radius: var(--br-11xl);
  background-color: var(--color-steelblue);
  border: 2px dashed var(--color-gray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 43px var(--padding-xl) 44px;
  max-width: 100%;
  z-index: 1;
`;
const UploadArea = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px var(--padding-6xl);
  box-sizing: border-box;
  max-width: 100%;
  color: #1e1e1e;
`;
const UploadPhotos1 = styled.div`
  flex: 1;
  backdrop-filter: blur(4px);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 0px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) var(--padding-27xl) 48px;
  gap: 8.5px;
  max-width: 100%;
  @media screen and (max-width: 975px) {
    padding-left: var(--padding-4xl);
    padding-right: var(--padding-4xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-2xl);
    padding-bottom: 31px;
    box-sizing: border-box;
  }
`;
const UploadPhotosWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-smi);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-lg);
`;
const FeaturesDivIcon = styled.img`
  width: 857px;
  height: 943px;
  position: relative;
  border-radius: var(--br-11xl);
  display: none;
  max-width: 100%;
`;
const Features1 = styled.b`
  position: relative;
  font-weight: 700;
  display: inline-block;
  min-width: 82px;
  z-index: 1;
`;
const WhyIsYour = styled.p`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xs);
  color: var(--color-gray-100);
  text-align: left;
  z-index: 1;
`;
const FeaturesTitle = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  text-align: center;
  font-size: var(--font-size-lg);
`;
const IndoorFeatures = styled.b`
  position: relative;
  font-weight: 700;
  display: inline-block;
  min-width: 98px;
  z-index: 1;
`;
const IndoorLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs);
`;
const FeatureBasementChild = styled.div`
  height: 28px;
  width: 117px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const AlarmSystem = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 84px;
  z-index: 1;
`;
const FeatureBasement = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-base) var(--padding-10xs)
    var(--padding-mid);
  background-color: var(--color-white);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeaturesAirconChild = styled.div`
  height: 28px;
  width: 124px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const AirConditioning = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 96px;
  z-index: 1;
`;
const FeaturesAircon = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-sm);
  background-color: transparent;
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: var(--color-red-600);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeaturesAtticChild = styled.div`
  height: 28px;
  width: 53px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Attic = styled.div`
  position: relative;
  display: inline-block;
  min-width: 28px;
  z-index: 1;
`;
const FeaturesAttic = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-xs);
  z-index: 1;
`;
const FeaturesBalconyChild = styled.div`
  height: 28px;
  width: 76px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Balcony = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 48px;
  z-index: 1;
`;
const FeaturesBalcony = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-sm);
  background-color: transparent;
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-red-600);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeatureBarChild = styled.div`
  height: 28px;
  width: 57px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Bar = styled.div`
  position: relative;
  display: inline-block;
  min-width: 20px;
  z-index: 1;
`;
const FeatureBar = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-lg) var(--padding-10xs)
    var(--padding-lgi);
  z-index: 1;
`;
const FeatureBasementItem = styled.div`
  height: 28px;
  width: 94px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Basement = styled.div`
  position: relative;
  display: inline-block;
  min-width: 62px;
  z-index: 1;
`;
const FeatureBasement1 = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-base);
  z-index: 1;
`;
const FeatureInternetChild = styled.div`
  height: 28px;
  width: 206px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureInternet = styled.div`
  flex: 1;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-xs) var(--padding-10xs)
    var(--padding-mid);
  min-width: 134px;
  white-space: nowrap;
  z-index: 1;
`;
const IndoorOptions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8.2px;
  max-width: 100%;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const IndoorList = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const FeatureWardrobeChild = styled.div`
  height: 28px;
  width: 141px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const BuiltInWardrobes = styled.div`
  position: relative;
  display: inline-block;
  min-width: 111px;
  z-index: 1;
`;
const FeatureWardrobe = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-smi) var(--padding-10xs)
    var(--padding-mid);
  white-space: nowrap;
  z-index: 1;
`;
const WardrobeFeature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs) 0px 0px;
`;
const FeatureCctvChild = styled.div`
  height: 28px;
  width: 70px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Cctv = styled.div`
  position: relative;
  display: inline-block;
  min-width: 35px;
  z-index: 1;
`;
const FeatureCctv = styled.div`
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-mid);
  z-index: 1;
`;
const FeatureCentralAirconChild = styled.div`
  height: 28px;
  width: 185px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureCentralAircon = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-xl) var(--padding-9xs);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureCoolingChild = styled.div`
  height: 28px;
  width: 136px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const DuctedCooling = styled.div`
  position: relative;
  display: inline-block;
  min-width: 97px;
  z-index: 1;
`;
const FeatureCooling = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-base) var(--padding-9xs)
    var(--padding-4xl);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureVaccumChild = styled.div`
  height: 28px;
  width: 201px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureVaccum = styled.div`
  flex: 1;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-8xl);
  min-width: 131px;
  white-space: nowrap;
  z-index: 1;
`;
const DuctedOptions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-4xs);
  max-width: 100%;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const DuctedFeatures = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) var(--padding-6xs) var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const FeatureRiverroomChild = styled.div`
  height: 28px;
  width: 108px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const DriverRoom = styled.div`
  position: relative;
  display: inline-block;
  min-width: 73px;
  z-index: 1;
`;
const FeatureRiverroom = styled.div`
  align-self: stretch;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-base) var(--padding-11xs);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureRiverroomWrapper = styled.div`
  width: 111px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
`;
const FeatureInsuiteChild = styled.div`
  height: 28px;
  width: 59px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Ensuite = styled.div`
  position: relative;
  display: inline-block;
  min-width: 43px;
  z-index: 1;
`;
const FeatureInsuite = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-5xs);
  z-index: 1;
`;
const FeatureInsuiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px 0px;
`;
const FeatureEntertainmentChild = styled.div`
  height: 28px;
  width: 151px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const EntertainmentRoom = styled.div`
  position: relative;
  display: inline-block;
  min-width: 124px;
  z-index: 1;
`;
const FeatureEntertainment = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-smi) var(--padding-10xs)
    var(--padding-sm);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureFirealarmChild = styled.div`
  height: 28px;
  width: 93px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureFirealarm = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-mini);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureFireplaceChild = styled.div`
  height: 28px;
  width: 79px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Fireplace = styled.div`
  position: relative;
  display: inline-block;
  min-width: 55px;
  z-index: 1;
`;
const FeatureFireplace = styled.div`
  align-self: stretch;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-2xs);
  z-index: 1;
`;
const FeatureFireplaceWrapper = styled.div`
  width: 82px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
`;
const FeatureFloorboardsChild = styled.div`
  height: 28px;
  width: 101px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Floorboards = styled.div`
  position: relative;
  display: inline-block;
  min-width: 72px;
  z-index: 1;
`;
const FeatureFloorboards = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-sm);
  z-index: 1;
`;
const FeatureGymChild = styled.div`
  height: 28px;
  width: 61px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Gym = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 29px;
  z-index: 1;
`;
const FeatureGym = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-base);
  background-color: var(--color-white);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeatureJacuzziChild = styled.div`
  height: 26px;
  width: 66px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureJacuzzi = styled.div`
  width: 66px;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-10xs) var(--padding-10xs)
    var(--padding-3xs);
  z-index: 1;
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  max-width: 100%;
  @media screen and (max-width: 975px) {
    flex-wrap: wrap;
  }
`;
const RoomFeatures = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs) var(--padding-8xs) var(--padding-8xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const FeatureLaundryChild = styled.div`
  height: 28px;
  width: 114px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureLaundry = styled.div`
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-xs) var(--padding-10xs)
    var(--padding-mini);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureLaundryWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
  min-width: 76px;
`;
const Lawn = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 31px;
  z-index: 1;
`;
const FeatureLawn = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-3xl);
  background-color: var(--color-white);
  width: 79px;
  border-radius: var(--br-11xl);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeatureLibraryChild = styled.div`
  height: 28px;
  width: 82px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Library = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 41px;
  z-index: 1;
`;
const FeatureLibrary = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-11xs) var(--padding-lg) var(--padding-9xs)
    var(--padding-4xl);
  background-color: var(--color-white);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeatureLibraryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs) 0px 0px;
`;
const Lounge = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 44px;
  z-index: 1;
`;
const FeatureLounge = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-lg);
  background-color: var(--color-white);
  align-self: stretch;
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeatureLoungeWrapper = styled.div`
  width: 95px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-smi) 0px 0px;
  box-sizing: border-box;
`;
const FeatureMaidroomChild = styled.div`
  height: 28px;
  width: 111px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const MaidRoom = styled.div`
  position: relative;
  display: inline-block;
  min-width: 68px;
  z-index: 1;
`;
const FeatureMaidroom = styled.div`
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-2xl);
  white-space: nowrap;
  z-index: 1;
`;
const FeaturePaytvChild = styled.div`
  height: 28px;
  width: 125px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const PayTvAccess = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 86px;
  z-index: 1;
`;
const FeaturePaytv = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-lgi) var(--padding-10xs)
    var(--padding-xl);
  background-color: var(--color-white);
  flex: 0.6885;
  border-radius: var(--br-11xl);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 81px;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const FeaturePowderroomChild = styled.div`
  height: 28px;
  width: 109px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeaturePowderroom = styled.div`
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-2xs) var(--padding-9xs)
    var(--padding-sm);
  white-space: nowrap;
  z-index: 1;
`;
const FrameParent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-6xs);
  max-width: 100%;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const FeaturesHeaderInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs) var(--padding-7xs) var(--padding-8xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const FeatureSaunaChild = styled.div`
  height: 28px;
  width: 78px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Sauna = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 39px;
  z-index: 1;
`;
const FeatureSauna = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-11xs) var(--padding-lg) var(--padding-9xs)
    var(--padding-2xl);
  background-color: var(--color-white);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeatureServiceareaChild = styled.div`
  height: 28px;
  width: 108px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const ServiceArea = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 75px;
  z-index: 1;
`;
const FeatureSaunaParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
`;
const FeatureStudyroom = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-2xs) var(--padding-10xs)
    var(--padding-mid);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureTerraceChild = styled.div`
  height: 28px;
  width: 89px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Terrace = styled.div`
  width: 69px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const FeatureTerrace = styled.div`
  width: 89px;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-10xs) 0px var(--padding-10xs) var(--padding-lg);
  z-index: 1;
`;
const FeatureStudyroomParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameParent2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-base);
  min-width: 131px;
`;
const FeatureServicekitchenChild = styled.div`
  height: 28px;
  width: 124px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const ServiceKitchen = styled.div`
  position: relative;
  display: inline-block;
  min-width: 92px;
  z-index: 1;
`;
const FeatureServicekitchen = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-mini) var(--padding-10xs)
    var(--padding-mid);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureWifiChild = styled.div`
  height: 28px;
  width: 67px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureWifi = styled.div`
  width: 67px;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-2xs) var(--padding-10xs)
    var(--padding-4xl);
  z-index: 1;
`;
const FrameParent3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px 0px;
  gap: var(--gap-base);
`;
const FeatureSmokedetectChild = styled.div`
  height: 28px;
  width: 123px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const SmokeDetector = styled.div`
  position: relative;
  display: inline-block;
  min-width: 96px;
  z-index: 1;
`;
const FeatureHeatingChild = styled.div`
  height: 28px;
  width: 172px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureHeating = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-4xl) var(--padding-9xs)
    var(--padding-6xl);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureStorageroomChild = styled.div`
  height: 28px;
  width: 115px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureStorageroom = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-2xs) var(--padding-10xs)
    var(--padding-lg);
  white-space: nowrap;
  z-index: 1;
`;
const FrameParent4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const FeaturesHeaderChild = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const FeaturesHeader = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
  max-width: 100%;
`;
const OutdoorFeatures = styled.b`
  position: relative;
  font-weight: 700;
  display: inline-block;
  min-width: 108px;
  z-index: 1;
`;
const FeatureBadmintonChild = styled.div`
  height: 28px;
  width: 140px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const BadmintonCourt = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 109px;
  z-index: 1;
`;
const FeatureBadminton = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-sm) var(--padding-10xs)
    var(--padding-mid);
  background-color: var(--color-white);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeatureBalconyChild = styled.div`
  height: 28px;
  width: 86px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureBalcony = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-lg) var(--padding-10xs)
    var(--padding-xl);
  background-color: var(--color-white);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FrameChild3 = styled.div`
  height: 28px;
  width: 127px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const BasketballCourt = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 100px;
  z-index: 2;
`;
const RectangleContainer = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-xs) var(--padding-10xs)
    var(--padding-mini);
  background-color: var(--color-white);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeatureCarportChild = styled.div`
  height: 28px;
  width: 85px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Carport = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  z-index: 1;
`;
const FeatureCarport = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-base) var(--padding-10xs)
    var(--padding-mid);
  background-color: var(--color-white);
  width: 85px;
  border-radius: var(--br-11xl);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeatureClubhouseChild = styled.div`
  height: 28px;
  width: 100px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Clubhouse = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 69px;
  z-index: 1;
`;
const FeatureClubhouse = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-smi) var(--padding-10xs)
    var(--padding-lg);
  background-color: var(--color-white);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const Courtyard = styled.div`
  position: relative;
  display: inline-block;
  min-width: 63px;
  z-index: 1;
`;
const FeatureCourtyard = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-2xs) var(--padding-10xs)
    var(--padding-xs);
  z-index: 1;
`;
const FeatureFencedChild = styled.div`
  height: 28px;
  width: 106px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FullyFenced = styled.div`
  position: relative;
  display: inline-block;
  min-width: 79px;
  z-index: 1;
`;
const FeatureFenced = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-2xs) var(--padding-10xs)
    var(--padding-base);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureBadmintonParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.2px;
  max-width: 100%;
  @media screen and (max-width: 975px) {
    flex-wrap: wrap;
  }
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const FeatureFunctionareaChild = styled.div`
  height: 28px;
  width: 119px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FunctionAreaFeature = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-9xs) var(--padding-12xs) 0px;
  box-sizing: border-box;
  min-width: 80px;
`;
const FeatureGarageChild = styled.div`
  height: 28px;
  width: 97px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureGarage = styled.div`
  width: 97px;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-mid) var(--padding-10xs)
    var(--padding-8xl);
  z-index: 1;
`;
const FeatureGardenChild = styled.div`
  height: 28px;
  width: 95px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Garden = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 47px;
  z-index: 1;
`;
const FeatureGarden = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-11xs) var(--padding-4xl) var(--padding-9xs);
  background-color: transparent;
  align-self: stretch;
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-red-600);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const OutdoorOptionsOne = styled.div`
  width: 98px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
`;
const FeatureGazebosChild = styled.div`
  height: 28px;
  width: 88px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Gazebos = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 56px;
  z-index: 1;
`;
const FeatureGazebos = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-sm) var(--padding-10xs)
    var(--padding-lg);
  background-color: var(--color-white);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeatureOutdoorjacuzzi = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-lg) var(--padding-10xs)
    var(--padding-4xl);
  background-color: var(--color-white);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FeatureJoggingChild = styled.div`
  height: 28px;
  width: 132px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const JoggingPath = styled.div`
  position: relative;
  display: inline-block;
  min-width: 82px;
  z-index: 1;
`;
const FeatureJogging = styled.div`
  flex: 0.6406;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-5xl);
  min-width: 86px;
  white-space: nowrap;
  z-index: 1;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const FeatureLanaiChild = styled.div`
  height: 28px;
  width: 87px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureLanai = styled.div`
  width: 87px;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) var(--padding-4xl) var(--padding-8xs)
    var(--padding-6xl);
  z-index: 1;
`;
const FunctionAreaFeatureParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-4xs);
  max-width: 100%;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const FeatureGardenItem = styled.div`
  height: 28px;
  width: 156px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const LandscapedGarden = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 124px;
  z-index: 1;
`;
const FeatureGarden1 = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-9xs) var(--padding-mini) var(--padding-11xs);
  background-color: transparent;
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: var(--color-red-600);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const OutdoorFeatureItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-7xs) 0px 0px;
  box-sizing: border-box;
  min-width: 105px;
`;
const MultiPurposeLawn = styled.div`
  position: relative;
  display: inline-block;
  min-width: 123px;
  z-index: 1;
`;
const FeatureLawn1 = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-xs) var(--padding-11xs)
    var(--padding-base);
  white-space: nowrap;
  z-index: 1;
`;
const OutdoorFeatureItems1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
  min-width: 100px;
`;
const FeatureOpencarChild = styled.div`
  height: 28px;
  width: 137px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureOpencar = styled.div`
  width: 137px;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-11xs) var(--padding-11xs)
    var(--padding-mid);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureParksChild = styled.div`
  height: 28px;
  width: 56px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Parks = styled.div`
  position: relative;
  display: inline-block;
  min-width: 36px;
  z-index: 1;
`;
const FeatureParks = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-6xs) var(--padding-10xs)
    var(--padding-smi);
  z-index: 1;
`;
const FeatureParkinglot = styled.div`
  width: 115px;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-smi) var(--padding-11xs)
    var(--padding-6xl);
  white-space: nowrap;
  z-index: 1;
`;
const Playground = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 77px;
  z-index: 1;
`;
const FeaturePlayground = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-9xs) var(--padding-smi) var(--padding-11xs)
    var(--padding-6xl);
  background-color: var(--color-white);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const OutdoorFeaturesList = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  gap: var(--gap-6xs);
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const RemoteGarage = styled.div`
  position: relative;
  display: inline-block;
  min-width: 98px;
  z-index: 1;
`;
const FeatureRemotegarden = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-xs) var(--padding-10xs)
    var(--padding-sm);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureRemotegardenWrapper = styled.div`
  flex: 0.9764;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs) 0px 0px;
  box-sizing: border-box;
  min-width: 85px;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const SecureParking = styled.div`
  position: relative;
  display: inline-block;
  min-width: 93px;
  z-index: 1;
`;
const FeatureSecureparking = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-2xs);
  white-space: nowrap;
  z-index: 1;
`;
const ShowerRooms = styled.div`
  position: relative;
  display: inline-block;
  min-width: 94px;
  z-index: 1;
`;
const FeatureShowerrooms = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-6xs) var(--padding-10xs)
    var(--padding-base);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureSportsfacilChild = styled.div`
  height: 28px;
  width: 122px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureSportsfacil = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-xs) var(--padding-10xs)
    var(--padding-sm);
  background-color: transparent;
  flex: 0.7966;
  border-radius: var(--br-11xl);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 79px;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: var(--color-red-600);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const FeatureSwimmingpoolChild = styled.div`
  height: 28px;
  width: 126px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureSwimmingpool = styled.div`
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-smi) var(--padding-10xs)
    var(--padding-base);
  white-space: nowrap;
  z-index: 1;
`;
const FeatureSwimmingpoolWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
  min-width: 85px;
`;
const FeatureTenniscourtChild = styled.div`
  height: 28px;
  width: 118px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const TennisCourt = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 78px;
  z-index: 1;
`;
const FeatureTenniscourt = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-10xs) var(--padding-xl);
  background-color: var(--color-white);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const FrameParent5 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
  max-width: 100%;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const FeatureSecurityChild = styled.div`
  height: 28px;
  width: 115px;
  position: relative;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const FeatureSecurity = styled.div`
  flex: 1;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-11xs) var(--padding-10xs)
    var(--padding-lgi);
  white-space: nowrap;
  z-index: 1;
`;
const SecurityContainer = styled.div`
  width: 117px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs);
  box-sizing: border-box;
`;
const FrameParent6 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 17.3px;
  max-width: 100%;
`;
const FrameWrapper1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-8xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const OutdoorFeaturesParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  max-width: 100%;
`;
const EnterTextThat = styled.div`
  position: relative;
  color: var(--color-gray-100);
  z-index: 1;
`;
const FeaturesAndAmenitiesParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const CustomFeaturesDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--color-black);
`;
const Placeholder2 = styled.div`
  width: 8px;
  height: 7.9px;
  position: relative;
  border-radius: 50%;
  background-color: var(--fill-icon);
  z-index: 1;
`;
const CustomFeaturePlaceholders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 11.1px;
`;
const FrameChild4 = styled.div`
  height: 28px;
  width: 317px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const RectangleParent1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-mid);
  white-space: nowrap;
  z-index: 1;
`;
const CustomFeatureInput = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-7xs) 0px 0px;
  box-sizing: border-box;
  min-width: 210px;
  max-width: 100%;
`;
const AddCustomFeatureButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-7xs);
`;
const CustomFeatureInputs = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-smi);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const CustomFeaturesRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-12xs) 0px var(--padding-10xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const CustomFeaturesRowInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 12.1px;
`;
const DuplicateCustomFeatureInputChild = styled.div`
  height: 28px;
  width: 316px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const DuplicateCustomFeatureInput = styled.div`
  align-self: stretch;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-red-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-base);
  white-space: nowrap;
  z-index: 1;
`;
const DuplicateCustomFeaturesRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
  min-width: 209px;
  max-width: 100%;
`;
const AddCircleButtonRemoveCrosIcon = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const DuplicateAddCustomFeatureB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-10xs);
`;
const CustomFeaturesRow1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-sm);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const CustomFeaturesRowChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) 0px 0px;
`;
const CustomFeaturesRow2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const CustomFeaturesContainer = styled.div`
  width: 374px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 19.3px;
  max-width: 100%;
  color: var(--color-gray-100);
`;
const Features2 = styled.div`
  flex: 1;
  backdrop-filter: blur(4px);
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 0px solid var(--color-red-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lgi) var(--padding-15xl) 56px var(--padding-23xl);
  gap: 35px;
  max-width: 100%;
  @media screen and (max-width: 975px) {
    padding-left: var(--padding-2xl);
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-17xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 725px) {
    padding-bottom: var(--padding-4xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-mid);
  }
`;
const FeaturesWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-3xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const SubmitButtonWrapper = styled.input`
  margin: 0;
  height: 23px;
  width: 20px;
`;
const ByProceedingI = styled.div`
  position: relative;
`;
const SubmitButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  max-width: 100%;
`;
const SubmitContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const SubmitApplicationChild = styled.div`
  height: 48px;
  width: 180px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-red-200);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  display: none;
`;
const Submit = styled.b`
  position: relative;
  font-size: var(--font-size-mini);
  font-weight: 700;
  font-family: var(--font-poppins);
  color: var(--color-white);
  text-align: left;
  z-index: 1;
`;
const SubmitApplication = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-red-200);
  padding: var(--padding-2xs) var(--padding-mini) var(--padding-3xs);
  background-color: var(--color-red-200);
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  &:hover {
    background-color: var(--color-red-100);
    border: 1px solid var(--color-red-100);
    box-sizing: border-box;
  }
`;
const SubmitContentParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-10xs);
  max-width: 100%;
`;
const SubmitContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-4xs) 0px var(--padding-3xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-mini);
`;
const PropertyForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-7xl);
  min-width: 557px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xs);
  @media screen and (max-width: 725px) {
    min-width: 100%;
  }
`;
const StepsParent = styled.section`
  width: 1193px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 38px;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-mini);
  color: var(--color-black);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 725px) {
    gap: var(--gap-lgi);
  }
`;
const Content1 = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-23xl) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 725px) {
    padding-left: var(--padding-2xl);
    padding-right: var(--padding-2xl);
    box-sizing: border-box;
  }
`;
const FooterIcon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const ListingFormRoot = styled.div`
  width: 100%;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-mini);
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: 20px;
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const ListingForm = ({ className = "" }) => {
  return (
    <ListingFormRoot className={className}>
      <ListingFormInner>
        <MlLogoParent>
          <MlLogoIcon loading="lazy" alt="" src="/ml-logo@2x.png" />
          <Navigation1>
            <Menu>
              <BuySellMenu>
                <Sell>Sell</Sell>
              </BuySellMenu>
              <RentNewMenu>
                <RentNew>
                  <New>New</New>
                  <Rent>Rent</Rent>
                </RentNew>
              </RentNewMenu>
              <BuySellMenu1>
                <Buy>Buy</Buy>
              </BuySellMenu1>
              <ServicesMenu>
                <Services1>
                  <HomeLoan>Home Loan</HomeLoan>
                  <HomeInsurance>Home Insurance</HomeInsurance>
                  <OtherServices>Other Services</OtherServices>
                  <Contact>Contact</Contact>
                </Services1>
              </ServicesMenu>
              <User>
                <ListPropertyButton>
                  <ListYourProperty>
                    <ListYourPropertyChild />
                    <ListYourProp>List your Property</ListYourProp>
                  </ListYourProperty>
                </ListPropertyButton>
                <Username1>
                  <UsernameChild />
                  <UserCicrleIcon alt="" src="/user-cicrle.svg" />
                  <Marie>Marie</Marie>
                  <UsernameInner>
                    <FrameChild alt="" src="/vector-12.svg" />
                  </UsernameInner>
                </Username1>
              </User>
            </Menu>
          </Navigation1>
        </MlLogoParent>
      </ListingFormInner>
      <ListingFormBannerWrapper>
        <ListingFormBanner>
          <ListingFormBannerChild alt="" src="/rectangle-2.svg" />
          <ListYourProperty1>List your property with us</ListYourProperty1>
          <ChooseProperty>
            <ChooseAProperty>
              Choose a property type for sale/lease
            </ChooseAProperty>
          </ChooseProperty>
        </ListingFormBanner>
      </ListingFormBannerWrapper>
      <Content1>
        <StepsParent>
          <Steps>
            <ListingSteps>
              <ListingStepsChild alt="" src="/rectangle-84.svg" />
              <StepsToComplete>Steps to complete your listing</StepsToComplete>
              <StepsProgress>
                <StepIcons>
                  <PropertyDetailsStep>
                    <DetailsIcon>
                      <CheckCircle1Icon alt="" src="/check-circle1.svg" />
                      <Check1Icon alt="" src="/check1.svg" />
                    </DetailsIcon>
                    <PropertyDetailsName>
                      <PropertyDetails>Property Details</PropertyDetails>
                    </PropertyDetailsName>
                  </PropertyDetailsStep>
                  <PropertyDetailsStep>
                    <CheckCircle type="radio" name="radioGroup-1" />
                    <UnitDetails>Unit Details</UnitDetails>
                  </PropertyDetailsStep>
                  <PropertyDetailsStep>
                    <CheckCircle type="radio" name="radioGroup-1" />
                    <Location1>Location</Location1>
                  </PropertyDetailsStep>
                  <PropertyDetailsStep>
                    <CheckCircle type="radio" name="radioGroup-1" />
                    <Description>Description</Description>
                  </PropertyDetailsStep>
                  <PropertyDetailsStep>
                    <CheckCircle type="radio" name="radioGroup-1" />
                    <ListPropertyButton>
                      <UploadPhotos>Upload Photos</UploadPhotos>
                    </ListPropertyButton>
                  </PropertyDetailsStep>
                  <FeaturesStep>
                    <PropertyDetailsStep>
                      <CheckCircle type="radio" name="radioGroup-1" />
                      <ListPropertyButton>
                        <Features>Features</Features>
                      </ListPropertyButton>
                    </PropertyDetailsStep>
                    <PropertyDetailsStep>
                      <CheckCircle type="radio" name="radioGroup-1" />
                      <Contact1>Contact</Contact1>
                    </PropertyDetailsStep>
                  </FeaturesStep>
                </StepIcons>
              </StepsProgress>
            </ListingSteps>
          </Steps>
          <PropertyForm>
            <PropertyDetails2>
              <PropertyDetailsChild alt="" src="/rectangle-4277.svg" />
              <PropertyHeading>
                <PropertyDetails1>Property Details</PropertyDetails1>
                <CommercialWrapper>
                  <Commercial>Commercial</Commercial>
                </CommercialWrapper>
              </PropertyHeading>
              <PropertyType1>
                <PropertyTypeOptions>
                  <PropertyTypeName>
                    <PropertyType>Property type</PropertyType>
                  </PropertyTypeName>
                  <PropertyTypeButtons>
                    <PropertyTypeButtonsChild />
                    <ServiceOffice>Service Office</ServiceOffice>
                    <ShopRetailButton>
                      <Shopretail>Shop/Retail</Shopretail>
                    </ShopRetailButton>
                    <CommercialLandlot>Commercial Land/Lot</CommercialLandlot>
                  </PropertyTypeButtons>
                </PropertyTypeOptions>
              </PropertyType1>
              <ResidentialType>
                <ResidentialOptions>
                  <ResidentialName>
                    <Residential>Residential</Residential>
                  </ResidentialName>
                  <CondoHouse>
                    <CondoHouseChild />
                    <CondoButton>
                      <CondoButtonChild />
                      <Condominium>Condominium</Condominium>
                    </CondoButton>
                    <HouseButtonsWrapper>
                      <HouseButtons>
                        <HouseLot>{`House & Lot`}</HouseLot>
                        <Townhouse>Townhouse</Townhouse>
                      </HouseButtons>
                    </HouseButtonsWrapper>
                  </CondoHouse>
                </ResidentialOptions>
              </ResidentialType>
              <IndustrialOptionsWrapper>
                <IndustrialOptions>
                  <IndustrialName>
                    <Industrialetc>Industrial/etc</Industrialetc>
                  </IndustrialName>
                  <ListingOptionsParent>
                    <ListingOptions>
                      <ListingType>Listing Type</ListingType>
                    </ListingOptions>
                    <ListingButtons>
                      <ListingStatus>
                        <ListingStatusChild />
                        <Warehouse>Warehouse</Warehouse>
                        <FarmLot>Farm Lot</FarmLot>
                        <Hotelresort>Hotel/Resort</Hotelresort>
                      </ListingStatus>
                      <ListingStatus1>
                        <ListingStatusChild />
                        <ForRentWrapper>
                          <ForRent>For Rent</ForRent>
                        </ForRentWrapper>
                        <RectangleParent>
                          <FrameItem />
                          <ForSale>For Sale</ForSale>
                        </RectangleParent>
                        <PreSellingWrapper>
                          <PreSelling>Pre-Selling</PreSelling>
                        </PreSellingWrapper>
                      </ListingStatus1>
                    </ListingButtons>
                  </ListingOptionsParent>
                </IndustrialOptions>
              </IndustrialOptionsWrapper>
              <HomeBuyersInfo>
                <ToHelpHome>
                  To help home buyers better, we only accept these 3 types of
                  listing.
                </ToHelpHome>
              </HomeBuyersInfo>
              <RemindersWrapper>
                <Reminders>
                  <RemindersChild />
                  <RemindersTitle>
                    <WarningIcon1>
                      <WarningIcon alt="" src="/warning.svg" />
                    </WarningIcon1>
                    <StepsToComplete>
                      A few reminders when posting a unit.
                    </StepsToComplete>
                  </RemindersTitle>
                  <Preselling>
                    <WeDoNotAcceptPreSellingPParent>
                      <WeDoNotContainer>
                        <WeDoNotAcceptPreSellingP>
                          <WeDoNot>
                            We DO NOT accept pre-selling properties, ONLY ready
                            for occupancy (RFO) ones that have either been
                            bought from a developer or have been constructed by
                            a person for sale or rent.
                          </WeDoNot>
                          <IfYouAre>
                            If you are posting more than one (1) unit, please
                            create one listing per unit. DO NOT advertise all
                            your units in one (1) post.
                          </IfYouAre>
                        </WeDoNotAcceptPreSellingP>
                      </WeDoNotContainer>
                      <Assistance>
                        <ForMoreAssistanceContainer>
                          {`For more assistance, you refer to our `}
                          <PhotoGuide>photo guide</PhotoGuide>
                          {` or watch our `}
                          <PhotoGuide>video guide.</PhotoGuide>
                        </ForMoreAssistanceContainer>
                      </Assistance>
                    </WeDoNotAcceptPreSellingPParent>
                  </Preselling>
                </Reminders>
              </RemindersWrapper>
            </PropertyDetails2>
            <UnitDetailsWrapper>
              <UnitDetails2>
                <UnitDetailsChild alt="" src="/rectangle-4160.svg" />
                <UnitDetailsTitleContainer>
                  <UnitDetails1>Unit Details</UnitDetails1>
                  <UnitDetailsFields>
                    <SellingPrice1>
                      <SellingPriceLabel>
                        <WhatIsThe>
                          What is the selling price of the unit?
                        </WhatIsThe>
                      </SellingPriceLabel>
                      <FurnishingOptions>
                        <FurnishingFields>
                          <FurnishingLabels>
                            <FurnishingNames>
                              <SellingPrice>Selling Price</SellingPrice>
                            </FurnishingNames>
                            <Furnishing>Furnishing</Furnishing>
                          </FurnishingLabels>
                        </FurnishingFields>
                        <SellingPriceInput>
                          <SellingPriceValue>
                            <PriceCurrency>
                              <PesoSymbol>
                                <PesoSymbolChild />
                                <PHP>
                                  <PHPChild alt="" src="/rectangle-4232.svg" />
                                  <Php>PHP</Php>
                                </PHP>
                                <PesoSymbolInner>
                                  <FrameInner />
                                </PesoSymbolInner>
                              </PesoSymbol>
                            </PriceCurrency>
                            <FurnishingButtons>
                              <FurnishingChoice>
                                <ChooseAProperty>
                                  Is the unit fully furnished?
                                </ChooseAProperty>
                              </FurnishingChoice>
                              <FurnishingSelection>
                                <FurnishingSelectionChild />
                                <FurnishedOption>
                                  <PHPChild alt="" src="/rectangle-4280.svg" />
                                  <Yes>Yes</Yes>
                                </FurnishedOption>
                                <SemifurnishedOptions>
                                  <No>No</No>
                                </SemifurnishedOptions>
                                <SemifurnishedOptions1>
                                  <No>Semi</No>
                                </SemifurnishedOptions1>
                              </FurnishingSelection>
                            </FurnishingButtons>
                          </SellingPriceValue>
                          <DiscountedPrice>
                            <DiscountedPriceFields>
                              <ToHelpHome>
                                <Discounted>Discounted</Discounted>
                                <Discounted>Selling Price</Discounted>
                              </ToHelpHome>
                              <PropertyType>Classification</PropertyType>
                            </DiscountedPriceFields>
                          </DiscountedPrice>
                        </SellingPriceInput>
                      </FurnishingOptions>
                    </SellingPrice1>
                    <DiscountedPriceInput>
                      <DiscountedPriceValue>
                        <DiscountedInput>
                          <ToHelpHome>
                            What is the discounted selling price of the unit?
                          </ToHelpHome>
                        </DiscountedInput>
                        <DiscountedCurrency>
                          <DiscountedCurrencyChild />
                          <DiscountedPeso placeholder="PHP" type="text" />
                          <DiscountedCurrencyInner>
                            <FrameInner />
                          </DiscountedCurrencyInner>
                        </DiscountedCurrency>
                      </DiscountedPriceValue>
                      <ClassificationOptions>
                        <ClassificationInput>
                          <FurnishingChoice>
                            <ChooseAProperty>
                              What is the unit classification?
                            </ChooseAProperty>
                          </FurnishingChoice>
                          <ClassificationButtons>
                            <PesoSymbolChild />
                            <BrandNewOption>
                              <BrandNewOptionChild
                                alt=""
                                src="/rectangle-4282.svg"
                              />
                              <BrandNew>Brand New</BrandNew>
                            </BrandNewOption>
                            <ResaleOption>
                              <No>Resale</No>
                            </ResaleOption>
                          </ClassificationButtons>
                        </ClassificationInput>
                      </ClassificationOptions>
                    </DiscountedPriceInput>
                  </UnitDetailsFields>
                </UnitDetailsTitleContainer>
                <PropertyFeatures>
                  <FeatureLabels>
                    <Beds>Beds</Beds>
                    <ParkingFloor>
                      <Parking>Parking</Parking>
                      <FloorAreaPrice>
                        <Furnishing>Floor Area</Furnishing>
                        <PriceCurrency>
                          <ChooseAProperty>Price per sqm</ChooseAProperty>
                        </PriceCurrency>
                      </FloorAreaPrice>
                    </ParkingFloor>
                  </FeatureLabels>
                  <BedsInput>
                    <BedsValue>
                      <BedIcon>
                        <BedImage>
                          <BedInput placeholder="How many beds?" type="text" />
                          <BedCounter>
                            <BedCounterChild />
                            <HotelBed2BedDoubleBedrooIcon
                              alt=""
                              src="/hotelbed2beddoublebedroombedroomsqueenkingfullhotelhotel.svg"
                            />
                            <BedCounterItem />
                            <BedNumber>
                              <BedCount>0</BedCount>
                              <BedNumberInner>
                                <FrameChild1 />
                              </BedNumberInner>
                            </BedNumber>
                          </BedCounter>
                        </BedImage>
                        <ParkingInput>
                          <ParkingValue>
                            <ParkingIcon>
                              <ChooseAProperty>
                                How many parking slots?
                              </ChooseAProperty>
                            </ParkingIcon>
                            <ParkingCounter>
                              <BedCounterChild />
                              <PropertyDetailsName>
                                <ParkingSignDiscountCouponIcon
                                  alt=""
                                  src="/parkingsigndiscountcouponparkingpricepriceshotel.svg"
                                />
                              </PropertyDetailsName>
                              <ParkingCounterItem />
                              <ParkingNumber>
                                <BedCount>0</BedCount>
                                <PriceCurrency>
                                  <FrameChild1 />
                                </PriceCurrency>
                              </ParkingNumber>
                            </ParkingCounter>
                          </ParkingValue>
                        </ParkingInput>
                        <AreaInput>
                          <ClassificationInput>
                            <AreaIcon>
                              <ChooseAProperty>
                                What is the floor area of the unit?
                              </ChooseAProperty>
                            </AreaIcon>
                            <AreaCounter>
                              <AreaCounterChild />
                              <AreaImageContainer>
                                <AreaImage>
                                  <LineOutAltLightIcon
                                    alt=""
                                    src="/line-out-alt-light.svg"
                                  />
                                  <ExpandBigBiggerDesignExpaIcon
                                    loading="lazy"
                                    alt=""
                                    src="/expandbigbiggerdesignexpandlargerresizesizesquare.svg"
                                  />
                                </AreaImage>
                              </AreaImageContainer>
                              <AreaCounterInner>
                                <FrameInner />
                              </AreaCounterInner>
                              <SqmLabel>
                                <SqmLabelChild
                                  alt=""
                                  src="/rectangle-4249.svg"
                                />
                                <Sqm>sqm</Sqm>
                              </SqmLabel>
                            </AreaCounter>
                          </ClassificationInput>
                        </AreaInput>
                        <PricePerSqmContainer>
                          <ClassificationInput>
                            <FurnishingChoice>
                              <ChooseAProperty>
                                What is the selling price of per sqm?
                              </ChooseAProperty>
                            </FurnishingChoice>
                            <PricePerSqmInputContainer>
                              <PesoSymbolChild />
                              <PHP>
                                <PHPChild alt="" src="/rectangle-4517.svg" />
                                <Php>PHP</Php>
                              </PHP>
                              <PesoSymbolInner>
                                <FrameInner />
                              </PesoSymbolInner>
                            </PricePerSqmInputContainer>
                          </ClassificationInput>
                        </PricePerSqmContainer>
                      </BedIcon>
                    </BedsValue>
                    <DetailsRight>
                      <SellingPrice>Bathrooms</SellingPrice>
                      <PriceCurrency>
                        <FloorsLotArea>
                          <ListingType>No of Floors</ListingType>
                          <LotAreaPropertyID>
                            <LotArea>
                              <ChooseAProperty>Lot Area</ChooseAProperty>
                            </LotArea>
                            <PropertyIdNo>Property ID No</PropertyIdNo>
                          </LotAreaPropertyID>
                        </FloorsLotArea>
                      </PriceCurrency>
                    </DetailsRight>
                  </BedsInput>
                  <BathroomsFloorsLotAreaCont>
                    <BathroomsFloorsLotAreaInpu>
                      <BathroomsFloors>
                        <BathroomsInput
                          placeholder="How many parking slots?"
                          type="text"
                        />
                        <BathroomIconFloorInput>
                          <BedCounterChild />
                          <PropertyDetailsName>
                            <HotelShowerHeadBatheBathIcon
                              alt=""
                              src="/hotelshowerheadbathebathbathroomshowerwaterheadhotel.svg"
                            />
                          </PropertyDetailsName>
                          <FloorInput>
                            <BedCount>0</BedCount>
                            <FloorInputChild />
                          </FloorInput>
                          <BathroomIconFloorInputItem />
                        </BathroomIconFloorInput>
                      </BathroomsFloors>
                      <FurnishingButtons>
                        <HowManyNumberOfFloorsWrapper>
                          <ToHelpHome>How many number of floors?</ToHelpHome>
                        </HowManyNumberOfFloorsWrapper>
                        <RectangleGroup>
                          <BedCounterChild />
                          <DescendingNumberOrderWrapper>
                            <DescendingNumberOrderIcon
                              alt=""
                              src="/descendingnumberorder.svg"
                            />
                          </DescendingNumberOrderWrapper>
                          <FloorInput>
                            <FloorValueWrapper>
                              <FloorValue>0</FloorValue>
                            </FloorValueWrapper>
                            <FloorInputChild />
                          </FloorInput>
                          <EllipseDiv />
                        </RectangleGroup>
                      </FurnishingButtons>
                      <LotAreaInput>
                        <WhatIsTheLotAreaOfTheUnWrapper>
                          <ChooseAProperty>
                            What is the lot area of the unit?
                          </ChooseAProperty>
                        </WhatIsTheLotAreaOfTheUnWrapper>
                        <LotAreaInputContainer>
                          <AreaCounterChild />
                          <AreaCounterInner>
                            <LotAreaInputBox>
                              <LotAreaResizeIconContainer>
                                <LotAreaResizeIcon>
                                  <LineOutAltLightIcon
                                    alt=""
                                    src="/line-out-alt-light-1.svg"
                                  />
                                  <ExpandBigBiggerDesignExpaIcon1
                                    alt=""
                                    src="/expandbigbiggerdesignexpandlargerresizesizesquare-1.svg"
                                  />
                                </LotAreaResizeIcon>
                              </LotAreaResizeIconContainer>
                              <LotAreaInputBoxChild />
                            </LotAreaInputBox>
                          </AreaCounterInner>
                          <SqmLabel>
                            <SqmLabelChild alt="" src="/rectangle-4244.svg" />
                            <Sqm>sqm</Sqm>
                          </SqmLabel>
                        </LotAreaInputContainer>
                      </LotAreaInput>
                      <PropertyIdInput>
                        <ClassificationInput>
                          <WhatIsThePropertyIdNoWrapper>
                            <ChooseAProperty>
                              What is the property ID no?
                            </ChooseAProperty>
                          </WhatIsThePropertyIdNoWrapper>
                          <PropertyIdInputBox>
                            <DiscountedCurrencyChild />
                            <NewsLight>
                              <PropertyIdIconBackground />
                              <PropertyIdIcon
                                alt=""
                                src="/property-id-icon.svg"
                              />
                            </NewsLight>
                            <PropertyIdInputBoxInner>
                              <FrameInner />
                            </PropertyIdInputBoxInner>
                          </PropertyIdInputBox>
                        </ClassificationInput>
                      </PropertyIdInput>
                    </BathroomsFloorsLotAreaInpu>
                  </BathroomsFloorsLotAreaCont>
                </PropertyFeatures>
              </UnitDetails2>
            </UnitDetailsWrapper>
            <LocationContainer>
              <Location3>
                <DescendingNumberOrderIcon1
                  alt=""
                  src="/descendingnumberorder.svg"
                />
                <LocationChild alt="" src="/rectangle-4250.svg" />
                <Location2>Location</Location2>
                <SubdivisionInput>
                  <WhatIsThe1>What is the subdivision name?</WhatIsThe1>
                </SubdivisionInput>
                <SubdivisionAddressMap>
                  <SubdivisionAddress>
                    <SubdivisionAddressInput>
                      <Subdivision>Subdivision</Subdivision>
                      <AddressMap>
                        <Address>Address</Address>
                        <MapLocationInput>
                          <ServiceOffice>Map Location</ServiceOffice>
                        </MapLocationInput>
                      </AddressMap>
                    </SubdivisionAddressInput>
                  </SubdivisionAddress>
                  <AddressInput>
                    <AddressInputInnerContainer>
                      <AddressInputInnerContainerChild />
                      <SubdivisionAddress>
                        <LocationPin3NavigationMapIcon
                          alt=""
                          src="/locationpin3navigationmapmapspingpslocation.svg"
                        />
                      </SubdivisionAddress>
                      <AddressInputInnerContainerItem
                        alt=""
                        src="/line-9.svg"
                      />
                    </AddressInputInnerContainer>
                    <FrameContainer>
                      <WhatIsTheAddressOfTheUniWrapper>
                        <FloorValue>
                          What is the address of the unit?
                        </FloorValue>
                      </WhatIsTheAddressOfTheUniWrapper>
                      <MapInput>
                        <AddressInputInnerContainerChild />
                        <SubdivisionAddress>
                          <LocationPin3NavigationMapIcon
                            alt=""
                            src="/locationpin3navigationmapmapspingpslocation-1.svg"
                          />
                        </SubdivisionAddress>
                        <MapInputItem alt="" src="/line-10.svg" />
                      </MapInput>
                    </FrameContainer>
                    <AddressInputInner>
                      <FrameDiv>
                        <HowManyNumberOfFloorsWrapper>
                          <CommercialLandlot>
                            Show us where the property located.
                          </CommercialLandlot>
                        </HowManyNumberOfFloorsWrapper>
                        <SearchInput>
                          <SearchInputChild />
                          <SearchInputInnerContainer>
                            <SearchInputInnerContainerChild />
                            <SearchIcon alt="" src="/search.svg" />
                          </SearchInputInnerContainer>
                          <SearchInputInner>
                            <FrameChild2 />
                          </SearchInputInner>
                        </SearchInput>
                      </FrameDiv>
                    </AddressInputInner>
                  </AddressInput>
                </SubdivisionAddressMap>
              </Location3>
            </LocationContainer>
            <DescriptionContainer1>
              <Description2>
                <DescriptionChild alt="" src="/rectangle-4256.svg" />
                <DescriptionTitle>
                  <DiscountedPriceValue>
                    <Description1>Description</Description1>
                    <TitleInput>
                      <ChooseAProperty>Title</ChooseAProperty>
                    </TitleInput>
                  </DiscountedPriceValue>
                  <TitleInputWrapper>
                    <TitleInput1>
                      <TitleInputChild />
                      <Placeholder1 placeholder="Enter Title" type="text" />
                      <TitleInputItem />
                    </TitleInput1>
                  </TitleInputWrapper>
                </DescriptionTitle>
                <DescriptionInput>
                  <DescriptionContainer>
                    <DescriptionPlaceholder>
                      <IfThereAreContainer>
                        <IfThereAre>
                          If there are important details that we weren't able to
                          ask, you can specify it here.
                        </IfThereAre>
                        <IfThereAre>
                          Please note: links and contact info entered will be
                          removed.
                        </IfThereAre>
                      </IfThereAreContainer>
                    </DescriptionPlaceholder>
                    <DescriptionField
                      placeholder="Enter Description"
                      rows={7}
                      cols={38}
                    />
                  </DescriptionContainer>
                </DescriptionInput>
                <DescriptionExample>
                  <HeresANiceContainer>
                    <IfThereAre>
                      Here's a nice, simple and concise example:
                    </IfThereAre>
                    <IfThereAre>&nbsp;</IfThereAre>
                    <IfThereAre>
                      This semi-furnished unit for sale in Quezon City is an
                      ideal space for young professionals or starting families.
                      The Project is near Araneta Center, Ali Mall Shopping
                      Complex, MRT, LRT, and EDSA. Residents will also have
                      access to condominium amenities like a swimming pool, a
                      gym, a playground, a basketball court and a function room.
                    </IfThereAre>
                  </HeresANiceContainer>
                </DescriptionExample>
              </Description2>
            </DescriptionContainer1>
            <UploadPhotosWrapper>
              <UploadPhotos1>
                <UploadPhotosChild alt="" src="/rectangle-4258.svg" />
                <PropertyDetails1>Upload Photos</PropertyDetails1>
                <PhotosThatHaveWatermarksPWrapper>
                  <PhotosThatHaveContainer>
                    <PhotosThatHaveWatermarksP>
                      <WeDoNot>
                        Photos that have watermarks, phone numbers, website
                        URLs, email addresses, or in collage format will be
                        removed.
                      </WeDoNot>
                      <WeDoNot>
                        Horizontal/landscape images display best and are
                        recommended. Vertical/portrait images and panoramic
                        images are accepted but not recommended as they do not
                        take full advantage of the space provided.
                      </WeDoNot>
                      <WeDoNot>
                        We require a minimum of two (1) distinct photos that
                        pertain to the actual property being posted. The higher
                        the quality of the photos, the better it is for yor
                        listing (maximum file size of 15 MB per photo). DO
                        NOT duplicate photos please.
                      </WeDoNot>
                      <IfYouAre>
                        Computer drawings or artist renders for the properties
                        are NOT ALLOWED. We do ALLOW floor plans of the property
                        as long as it is accompanied with actual photos of the
                        property's interiors and facade.
                      </IfYouAre>
                    </PhotosThatHaveWatermarksP>
                  </PhotosThatHaveContainer>
                </PhotosThatHaveWatermarksPWrapper>
                <UploadArea>
                  <DragDrop>
                    <DragDropChild />
                    <DropOrDrag>
                      Drop or drag your photos here or click to upload
                    </DropOrDrag>
                  </DragDrop>
                </UploadArea>
              </UploadPhotos1>
            </UploadPhotosWrapper>
            <FeaturesWrapper>
              <Features2>
                <FeaturesDivIcon alt="" src="/featuresdiv.svg" />
                <FeaturesHeader>
                  <FeaturesTitle>
                    <Features1>Features</Features1>
                    <WhyIsYour>
                      Why is your property so great? Tell us more about your
                      property so that property seekers can learn even more
                      about your offer.
                    </WhyIsYour>
                  </FeaturesTitle>
                  <IndoorLabel>
                    <IndoorFeatures>Indoor Features</IndoorFeatures>
                  </IndoorLabel>
                  <IndoorList>
                    <IndoorOptions>
                      <FeatureBasement>
                        <FeatureBasementChild />
                        <AlarmSystem>Alarm System</AlarmSystem>
                      </FeatureBasement>
                      <FeaturesAircon>
                        <FeaturesAirconChild />
                        <AirConditioning>Air Conditioning</AirConditioning>
                      </FeaturesAircon>
                      <FeaturesAttic>
                        <FeaturesAtticChild />
                        <Attic>Attic</Attic>
                      </FeaturesAttic>
                      <FeaturesBalcony>
                        <FeaturesBalconyChild />
                        <Balcony>Balcony</Balcony>
                      </FeaturesBalcony>
                      <FeatureBar>
                        <FeatureBarChild />
                        <Bar>Bar</Bar>
                      </FeatureBar>
                      <FeatureBasement1>
                        <FeatureBasementItem />
                        <Basement>Basement</Basement>
                      </FeatureBasement1>
                      <FeatureInternet>
                        <FeatureInternetChild />
                        <ToHelpHome>Broadband Internet Available</ToHelpHome>
                      </FeatureInternet>
                    </IndoorOptions>
                  </IndoorList>
                  <DuctedFeatures>
                    <DuctedOptions>
                      <WardrobeFeature>
                        <FeatureWardrobe>
                          <FeatureWardrobeChild />
                          <BuiltInWardrobes>
                            Built-in wardrobes
                          </BuiltInWardrobes>
                        </FeatureWardrobe>
                      </WardrobeFeature>
                      <FeatureCctv>
                        <FeatureCctvChild />
                        <Cctv>CCTV</Cctv>
                      </FeatureCctv>
                      <FeatureCentralAircon>
                        <FeatureCentralAirconChild />
                        <ToHelpHome>Central Air Conditioning</ToHelpHome>
                      </FeatureCentralAircon>
                      <FeatureCooling>
                        <FeatureCoolingChild />
                        <DuctedCooling>Ducted Cooling</DuctedCooling>
                      </FeatureCooling>
                      <FeatureVaccum>
                        <FeatureVaccumChild />
                        <ToHelpHome>Ducted Vaccum System</ToHelpHome>
                      </FeatureVaccum>
                    </DuctedOptions>
                  </DuctedFeatures>
                  <RoomFeatures>
                    <FrameParent>
                      <FeatureRiverroomWrapper>
                        <FeatureRiverroom>
                          <FeatureRiverroomChild />
                          <DriverRoom>Driver Room</DriverRoom>
                        </FeatureRiverroom>
                      </FeatureRiverroomWrapper>
                      <FeatureInsuiteWrapper>
                        <FeatureInsuite>
                          <FeatureInsuiteChild />
                          <Ensuite>Ensuite</Ensuite>
                        </FeatureInsuite>
                      </FeatureInsuiteWrapper>
                      <FeatureInsuiteWrapper>
                        <FeatureEntertainment>
                          <FeatureEntertainmentChild />
                          <EntertainmentRoom>
                            Entertainment Room
                          </EntertainmentRoom>
                        </FeatureEntertainment>
                      </FeatureInsuiteWrapper>
                      <FeatureInsuiteWrapper>
                        <FeatureFirealarm>
                          <FeatureFirealarmChild />
                          <Basement>Fire Alarm</Basement>
                        </FeatureFirealarm>
                      </FeatureInsuiteWrapper>
                      <FeatureFireplaceWrapper>
                        <FeatureFireplace>
                          <FeatureFireplaceChild />
                          <Fireplace>Fireplace</Fireplace>
                        </FeatureFireplace>
                      </FeatureFireplaceWrapper>
                      <FeatureInsuiteWrapper>
                        <FeatureFloorboards>
                          <FeatureFloorboardsChild />
                          <Floorboards>Floorboards</Floorboards>
                        </FeatureFloorboards>
                      </FeatureInsuiteWrapper>
                      <FeatureGym>
                        <FeatureGymChild />
                        <Gym>Gym</Gym>
                      </FeatureGym>
                      <FeatureJacuzzi>
                        <FeatureJacuzziChild />
                        <ChooseAProperty>Jacuzzi</ChooseAProperty>
                      </FeatureJacuzzi>
                    </FrameParent>
                  </RoomFeatures>
                  <FeaturesHeaderInner>
                    <FrameParent1>
                      <FeatureLaundryWrapper>
                        <FeatureLaundry>
                          <FeatureLaundryChild />
                          <ListingType>Laundry Room</ListingType>
                        </FeatureLaundry>
                      </FeatureLaundryWrapper>
                      <FeatureLawn>
                        <FeatureFireplaceChild />
                        <Lawn>Lawn</Lawn>
                      </FeatureLawn>
                      <FeatureLibraryWrapper>
                        <FeatureLibrary>
                          <FeatureLibraryChild />
                          <Library>Library</Library>
                        </FeatureLibrary>
                      </FeatureLibraryWrapper>
                      <FeatureLoungeWrapper>
                        <FeatureLounge>
                          <FeatureLibraryChild />
                          <Lounge>Lounge</Lounge>
                        </FeatureLounge>
                      </FeatureLoungeWrapper>
                      <FeatureMaidroom>
                        <FeatureMaidroomChild />
                        <MaidRoom>Maid Room</MaidRoom>
                      </FeatureMaidroom>
                      <FeaturePaytv>
                        <FeaturePaytvChild />
                        <PayTvAccess>Pay TV Access</PayTvAccess>
                      </FeaturePaytv>
                      <FeaturePowderroom>
                        <FeaturePowderroomChild />
                        <UnitDetails>Powder Room</UnitDetails>
                      </FeaturePowderroom>
                    </FrameParent1>
                  </FeaturesHeaderInner>
                  <FeaturesHeaderChild>
                    <FrameParent4>
                      <FrameParent2>
                        <FeatureSaunaParent>
                          <FeatureSauna>
                            <FeatureSaunaChild />
                            <Sauna>Sauna</Sauna>
                          </FeatureSauna>
                          <FeatureBasement>
                            <FeatureServiceareaChild />
                            <ServiceArea>Service Area</ServiceArea>
                          </FeatureBasement>
                        </FeatureSaunaParent>
                        <FeatureStudyroomParent>
                          <FeatureStudyroom>
                            <FeatureFloorboardsChild />
                            <DriverRoom>Study Room</DriverRoom>
                          </FeatureStudyroom>
                          <FeatureTerrace>
                            <FeatureTerraceChild />
                            <Terrace>Terrace</Terrace>
                          </FeatureTerrace>
                        </FeatureStudyroomParent>
                      </FrameParent2>
                      <FrameParent3>
                        <FurnishingNames>
                          <FeatureServicekitchen>
                            <FeatureServicekitchenChild />
                            <ServiceKitchen>Service Kitchen</ServiceKitchen>
                          </FeatureServicekitchen>
                        </FurnishingNames>
                        <FeatureWifi>
                          <FeatureWifiChild />
                          <ChooseAProperty>Wifi</ChooseAProperty>
                        </FeatureWifi>
                      </FrameParent3>
                      <WardrobeFeature>
                        <FeatureEntertainment>
                          <FeatureSmokedetectChild />
                          <SmokeDetector>Smoke Detector</SmokeDetector>
                        </FeatureEntertainment>
                      </WardrobeFeature>
                      <FeatureHeating>
                        <FeatureHeatingChild />
                        <EntertainmentRoom>
                          Split System Heating
                        </EntertainmentRoom>
                      </FeatureHeating>
                      <FeatureStorageroom>
                        <FeatureStorageroomChild />
                        <Townhouse>Storage Room</Townhouse>
                      </FeatureStorageroom>
                    </FrameParent4>
                  </FeaturesHeaderChild>
                </FeaturesHeader>
                <OutdoorFeaturesParent>
                  <OutdoorFeatures>Outdoor Features</OutdoorFeatures>
                  <FrameWrapper1>
                    <FrameParent6>
                      <FrameWrapper>
                        <FeatureBadmintonParent>
                          <FeatureBadminton>
                            <FeatureBadmintonChild />
                            <BadmintonCourt>Badminton Court</BadmintonCourt>
                          </FeatureBadminton>
                          <FeatureBalcony>
                            <FeatureBalconyChild />
                            <Balcony>Balcony</Balcony>
                          </FeatureBalcony>
                          <RectangleContainer>
                            <FrameChild3 />
                            <BasketballCourt>Basketball Court</BasketballCourt>
                          </RectangleContainer>
                          <FeatureCarport>
                            <FeatureCarportChild />
                            <Carport>Carport</Carport>
                          </FeatureCarport>
                          <FeatureClubhouse>
                            <FeatureClubhouseChild />
                            <Clubhouse>Clubhouse</Clubhouse>
                          </FeatureClubhouse>
                          <FeatureCourtyard>
                            <FeatureBalconyChild />
                            <Courtyard>Courtyard</Courtyard>
                          </FeatureCourtyard>
                          <FeatureFenced>
                            <FeatureFencedChild />
                            <FullyFenced>Fully Fenced</FullyFenced>
                          </FeatureFenced>
                        </FeatureBadmintonParent>
                      </FrameWrapper>
                      <FrameWrapper>
                        <FunctionAreaFeatureParent>
                          <FunctionAreaFeature>
                            <FeatureServicekitchen>
                              <FeatureFunctionareaChild />
                              <ListingType>Function Area</ListingType>
                            </FeatureServicekitchen>
                          </FunctionAreaFeature>
                          <FeatureGarage>
                            <FeatureGarageChild />
                            <ChooseAProperty>Garage</ChooseAProperty>
                          </FeatureGarage>
                          <OutdoorOptionsOne>
                            <FeatureGarden>
                              <FeatureGardenChild />
                              <Garden>Garden</Garden>
                            </FeatureGarden>
                          </OutdoorOptionsOne>
                          <WardrobeFeature>
                            <FeatureGazebos>
                              <FeatureGazebosChild />
                              <Gazebos>Gazebos</Gazebos>
                            </FeatureGazebos>
                          </WardrobeFeature>
                          <FeatureOutdoorjacuzzi>
                            <FeatureGazebosChild />
                            <Garden>Jacuzzi</Garden>
                          </FeatureOutdoorjacuzzi>
                          <FeatureJogging>
                            <FeatureJoggingChild />
                            <JoggingPath>Jogging Path</JoggingPath>
                          </FeatureJogging>
                          <FeatureLanai>
                            <FeatureLanaiChild />
                            <ChooseAProperty>Lanai</ChooseAProperty>
                          </FeatureLanai>
                        </FunctionAreaFeatureParent>
                      </FrameWrapper>
                      <OutdoorFeaturesList>
                        <OutdoorFeatureItems>
                          <FeatureGarden1>
                            <FeatureGardenItem />
                            <LandscapedGarden>
                              Landscaped Garden
                            </LandscapedGarden>
                          </FeatureGarden1>
                        </OutdoorFeatureItems>
                        <OutdoorFeatureItems1>
                          <FeatureLawn1>
                            <FeatureEntertainmentChild />
                            <MultiPurposeLawn>
                              Multi-purpose Lawn
                            </MultiPurposeLawn>
                          </FeatureLawn1>
                        </OutdoorFeatureItems1>
                        <FeatureOpencar>
                          <FeatureOpencarChild />
                          <ChooseAProperty>Open Car Spaces</ChooseAProperty>
                        </FeatureOpencar>
                        <FeatureParks>
                          <FeatureParksChild />
                          <Parks>Parks</Parks>
                        </FeatureParks>
                        <FeatureParkinglot>
                          <FeatureStorageroomChild />
                          <ChooseAProperty>Parking Lot</ChooseAProperty>
                        </FeatureParkinglot>
                        <FeaturePlayground>
                          <FeatureStorageroomChild />
                          <Playground>Playground</Playground>
                        </FeaturePlayground>
                      </OutdoorFeaturesList>
                      <FrameWrapper>
                        <FrameParent5>
                          <FeatureRemotegardenWrapper>
                            <FeatureRemotegarden>
                              <FeatureServicekitchenChild />
                              <RemoteGarage>Remote Garage</RemoteGarage>
                            </FeatureRemotegarden>
                          </FeatureRemotegardenWrapper>
                          <WardrobeFeature>
                            <FeatureSecureparking>
                              <FeatureStorageroomChild />
                              <SecureParking>Secure Parking</SecureParking>
                            </FeatureSecureparking>
                          </WardrobeFeature>
                          <FeatureShowerrooms>
                            <FeatureBasementChild />
                            <ShowerRooms>Shower Rooms</ShowerRooms>
                          </FeatureShowerrooms>
                          <FeatureSportsfacil>
                            <FeatureSportsfacilChild />
                            <AirConditioning>Sports Facilities</AirConditioning>
                          </FeatureSportsfacil>
                          <FeatureSwimmingpoolWrapper>
                            <FeatureSwimmingpool>
                              <FeatureSwimmingpoolChild />
                              <DuctedCooling>Swimming Pool</DuctedCooling>
                            </FeatureSwimmingpool>
                          </FeatureSwimmingpoolWrapper>
                          <FeatureTenniscourt>
                            <FeatureTenniscourtChild />
                            <TennisCourt>Tennis Court</TennisCourt>
                          </FeatureTenniscourt>
                        </FrameParent5>
                      </FrameWrapper>
                      <SecurityContainer>
                        <FeatureSecurity>
                          <FeatureSecurityChild />
                          <ChooseAProperty>24/7 Security</ChooseAProperty>
                        </FeatureSecurity>
                      </SecurityContainer>
                    </FrameParent6>
                  </FrameWrapper1>
                </OutdoorFeaturesParent>
                <CustomFeaturesContainer>
                  <CustomFeaturesDescription>
                    <FeaturesAndAmenitiesParent>
                      <StepsToComplete>Features and Amenities</StepsToComplete>
                      <EnterTextThat>
                        Enter text that is not found in the options above
                      </EnterTextThat>
                    </FeaturesAndAmenitiesParent>
                  </CustomFeaturesDescription>
                  <CustomFeaturesRow>
                    <CustomFeatureInputs>
                      <CustomFeaturePlaceholders>
                        <Placeholder2 />
                      </CustomFeaturePlaceholders>
                      <CustomFeatureInput>
                        <RectangleParent1>
                          <FrameChild4 />
                          <Warehouse>Enter Features</Warehouse>
                        </RectangleParent1>
                      </CustomFeatureInput>
                      <AddCustomFeatureButton>
                        <WarningIcon
                          alt=""
                          src="/addcirclebuttonremovecrossaddbuttonspluscirclemathematicsmath.svg"
                        />
                      </AddCustomFeatureButton>
                    </CustomFeatureInputs>
                  </CustomFeaturesRow>
                  <CustomFeaturesRow1>
                    <CustomFeaturesRowInner>
                      <Placeholder2 />
                    </CustomFeaturesRowInner>
                    <DuplicateCustomFeaturesRow>
                      <DuplicateCustomFeatureInput>
                        <DuplicateCustomFeatureInputChild />
                        <Warehouse>Enter Features</Warehouse>
                      </DuplicateCustomFeatureInput>
                    </DuplicateCustomFeaturesRow>
                    <DuplicateAddCustomFeatureB>
                      <AddCircleButtonRemoveCrosIcon
                        alt=""
                        src="/addcirclebuttonremovecrossaddbuttonspluscirclemathematicsmath-1.svg"
                      />
                    </DuplicateAddCustomFeatureB>
                  </CustomFeaturesRow1>
                  <CustomFeaturesRow2>
                    <CustomFeaturesRowChild>
                      <Placeholder2 />
                    </CustomFeaturesRowChild>
                    <DuplicateCustomFeaturesRow>
                      <DuplicateCustomFeatureInput>
                        <DuplicateCustomFeatureInputChild />
                        <Warehouse>Enter Features</Warehouse>
                      </DuplicateCustomFeatureInput>
                    </DuplicateCustomFeaturesRow>
                    <DescendingNumberOrderWrapper>
                      <AddCircleButtonRemoveCrosIcon
                        alt=""
                        src="/addcirclebuttonremovecrossaddbuttonspluscirclemathematicsmath-2.svg"
                      />
                    </DescendingNumberOrderWrapper>
                  </CustomFeaturesRow2>
                </CustomFeaturesContainer>
              </Features2>
            </FeaturesWrapper>
            <SubmitContainer>
              <SubmitContentParent>
                <SubmitContent>
                  <SubmitButtonContainer>
                    <SubmitButtonWrapper type="checkbox" />
                    <ByProceedingI>
                      By proceeding, I agree and review that all information are
                      correct.
                    </ByProceedingI>
                  </SubmitButtonContainer>
                </SubmitContent>
                <SubmitApplication>
                  <SubmitApplicationChild />
                  <Submit>Submit Application</Submit>
                </SubmitApplication>
              </SubmitContentParent>
            </SubmitContainer>
          </PropertyForm>
        </StepsParent>
      </Content1>
      <FooterIcon alt="" src="/footer@2x.png" />
    </ListingFormRoot>
  );
};

ListingForm.propTypes = {
  className: PropTypes.string,
};

export default ListingForm;