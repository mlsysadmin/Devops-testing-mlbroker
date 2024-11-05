import PropertiesForRent from "./custom/Custom.PropertiesPagination";
import FooterComponent from "./layout/FooterComponent";
import CustomMlFooter from "./custom/Custom.Mlfooter";
import CustomAdvanceSearch from "./custom/customsearch/custom.advancesearch";
import ListingSearch from "./custom/customsearch/custom.listingsearch";
import SearchPropertiesSoration from "./custom/customsearch/searchSortationProperties";
import ListingSearchLoggedin from "./custom/customAdvanceSearchLoggedin/ListingSearchLoggedin";

//drafts

import Drafts from "./MY Drafts/Drafts";
import ActiveSummaryLists from "./MY Drafts/ActiveSummaryLists";
import ClientManagement from "./MY Drafts/ClientManagement";
import ListingSummaryLists from "./MY Drafts/ListingSummaryLists";
import SoldProperties from "./MY Drafts/Soldproperties";
import ListingsTable from "./MY Drafts/Components/ListingsTableComponent";
import DraftSidebar from "./MY Drafts/Components/DraftSidebarComponent";
import PreviewListing from "./PreviewListingComponent";
import ViewListingComponent from "./ViewListingComponent";
import ModalComponents from "./ModalComponents";
import RegistrationModal from "./RegistrationModal";
import LoginModal from "./modals/loginmodal";
// navigation
import HeaderContainer from "./layout/Navigation/HeaderContainer";
import SideBar from "./layout/Navigation/SideBar";
import MainLayout from "./layout/layout.component";
import AllComponent from "./Buyer.AllComponent";
import FeaturedComponent from "./Buyer.FeaturedComponent";
import WorkingOnItModal from "./ComingSoonComponent";

//buttons
import BuyerLogInProfileDropdownBtn from "./custom/buttons/BuyerLogInButtonDropdown";
import SellerLogInButtonDropdown from "./custom/buttons/SellerLogInButtonDropdown";
//application details
import WrapUpDetails from "./custom/application/wrapup.custom";
import SubmitApplicationCustom from "./custom/application/submitapplication.custom";
import CertainFeatureMenu from "./custom/customsearch/certainfeature";

// components
import DiscoverHomeComponent from "./DiscoverHomeComponent";
import BuyAHomeComponent from "./BuyAHomeComponent";
import HouseForRentComponent from "./HouseForRentComponent";
import NewPageComponent from "./NewPageComponent";
import RefinanceComponent from "./RefinanceComponent";
import InsuranceGuideComponent from "./InsuranceGuideComponent";
import ContactUsComponent from "./ContactUsComponent";
import LoanCalculatorComponent from "./LoanCalculatorComponent";
import MortgageComponent from "./MortgageComponent";
import RentComponent from "./RentComponent";
import SaleComponent from "./SaleComponent";
import SellComponent from "./SellComponent";
import FaqsComponent from "./FAQsComponent";
import CardListingComponent from "./CardListingComponent";
import AllPropertiesComponent from "./AllPropertiesComponent";
import { ShowDetailsProcessing } from "./ShowDetailsProcessing";
import { ShowDetailsDenied } from "./ShowDetailsDenied";
import { SoldPropertyDetails } from "./MY Drafts/SoldPropertyDetails";
import { ActiveListingDetails } from "./MY Drafts/ActiveListingDetails";

// modals
import JoinTeam from "./modals/JoinTeamModal";
import PropertySearch from "./PropertySearchModal";
//Application
//  SUPPORT
import ApplicationDetails from "./support/ApplicationDetails";
import CancelledApplication from "./custom/support/custom.CancelledApplication";
import DisapprovedApplication from "./custom/support/custom.DisapprovedApplicationMasterlist";
import ListingDetails from "./support/ListingDetails";
import OpenApplication from "./custom/support/custom.OpenApplicationMasterlist";
import PendingApplication from "./custom/support/custom.PendingApplicationMasterlist";
import PreApprovalRequest from "./custom/support/PreApprovalRequests";
import PreApprovalRequestListing from "./support/PreApprovalDetailsListing";
import SupportComponent from "./support/SupportDashboardComponent";
import SignIn from "./support/SignIn.component";
import CloseApplicationModal from "./custom/support/CloseApplicationModal";
import SupportListingComponent from "./support/SupportListingComponent";
import TermsandConditionComponent from "./TermsandConditionComponent";

import SupportHeaderContainer from "./layout/Navigation/support/SupportHeaderContainer";
import SuccessModal from "./modals/SuccessModal";

//Application
import ApplicationHistory from "./ApplicationHistory";
import ApplicationDetailModal from "./layout/ApplicationDetails/ApplicationDetailsModal";

// MASTER
import SupportPendingListingComponent from "./support/master/SupportPendingListingComponent";
import SupportListingMasterListComponent from "./support/master/SupportListingMasterlistComponent";
import SupportDeniedMasterlistComponent from "./support/master/SupportDeniedMasterlistComponent";
import SupportListingDetails from "./support/SupportListingDetails";

// APPLICATION
import SupportPendingApplicationComponent from "./support/application/SupportPendingApplicationComponent";
import SupportApprovedApplicationComponent from "./support/application/SupportApprovedApplicationComponent";
import SupportDeniedApplicationComponent from "./support/application/SupportDeniedApplicationComponent";
import SupportCancelledApplicationComponent from "./support/application/SupportCancelledApplicationComponent";
import SupportClosedApplicationComponent from "./support/application/SupportClosedApplicationComponent";

import SupportPreApprovalListComponent from "./support/SupportPreApprovalListComponent";
import ApprovalSectionComponent from "./support/ApprovalSectionComponent";

import SearchListingComponent from "./SearchListingComponent";

export {
	ActiveListingDetails,
	ShowDetailsProcessing,
	ShowDetailsDenied,
	ListingSearchLoggedin,
	LoginModal,
	RegistrationModal,
	ModalComponents,
	PreviewListing,
	DraftSidebar,
	ListingsTable,
	SoldProperties,
	ListingSummaryLists,
	ClientManagement,
	ActiveSummaryLists,
	Drafts,
	NewPageComponent,
	PropertiesForRent,
	FooterComponent,
	CustomMlFooter,
	HeaderContainer,
	SideBar,
	MainLayout,
	HouseForRentComponent,
	DiscoverHomeComponent,
	BuyAHomeComponent,
	RefinanceComponent,
	InsuranceGuideComponent,
	WrapUpDetails,
	SubmitApplicationCustom,
	CustomAdvanceSearch,
	AllComponent,
	FeaturedComponent,
	ListingSearch,
	ContactUsComponent,
	LoanCalculatorComponent,
	MortgageComponent,
	RentComponent,
	SellComponent,
	TermsandConditionComponent,
	SoldPropertyDetails,
	SearchPropertiesSoration,
	ApplicationDetails,
	CancelledApplication,
	DisapprovedApplication,
	WorkingOnItModal,
	ListingDetails,
	OpenApplication,
	PendingApplication,
	PreApprovalRequest,
	SupportComponent,
	SignIn,
	PreApprovalRequestListing,
	CloseApplicationModal,
	SupportListingComponent,
	SupportHeaderContainer,
	SupportPendingListingComponent,
	SupportListingMasterListComponent,
	SupportDeniedMasterlistComponent,
	SupportPendingApplicationComponent,
	SupportDeniedApplicationComponent,
	SupportApprovedApplicationComponent,
	SupportCancelledApplicationComponent,
	SupportClosedApplicationComponent,
	SupportPreApprovalListComponent,
	SupportListingDetails,
	ApprovalSectionComponent,
	JoinTeam,
	PropertySearch,
	ViewListingComponent,
	ApplicationHistory,
	SaleComponent,
	FaqsComponent,
	SearchListingComponent
};
