import Dashboard from "./Dashboard.page";
import MainOutlet from "./MainOutlet";
import HouseForRentPage from "./HouseForRent.page";
import DiscoverHomePage from "./DiscoverHome.page";
import BuyAHomePage from "./BuyAHome.page";
import RefinancePage from "./Refinance.page";
import InsuranceGuidePage from "./InsuranceGuide.page";
import MortgagePage from "./Mortgage.page";
import SellPage from "./Sell.page";
import LoanCalculatorPage from "./LoanCalculator.page";
import RentPage from "./Rent.page";
import ContactUsPage from "./ContactUs.page";
import ListingPage from "./ListingPage";
import ListingFormPage from "./SellerListingForm.page";

//seller
import MyDraftsPage from "./MyDrafts.page";
import ActiveSummaryListsPage from "./ActiveSummaryLists.page";
import ClientManagementPage from "./ClientManagement.page";
import ListingSummaryListsPage from "./ListingSummaryLists.page";
import SoldPropertiesPage from "./SoldProperties.page";
import ListingsTable from "./ListingsTable.page";
import Sidebar from "./DraftSidebar.page";
import PreviewListing from "./PreviewListing.page";
import ModalComponents from "./ModalComponents.page";
import PropertySearchPage from "./PropertySearch.page";

// import RegistrationModal from "./RegistrationModal.page";
import LoginModal from "./LoginModal.page";
import { ShowDetailsProcessing } from "../components";
import { ShowDetailsDenied } from "../components";
import ActiveListingDetails from "./ActiveListingDetails.page";
import SoldPropertyDetailsPage from "./SoldPropertyDetails.page";
import ViewListingComponent from "./ViewListingComponent.page";
import FaqsPage from "./Faqs.page";


//Application Pages
import ApplicationHistoryPage from "./ApplicationHistory.page";
// import ListingSearchLoggedin from "../components/custom/customAdvanceSearchLoggedin/ListingSearchLoggedin";

// SUPPORT
import SignIn from './support/signin.page';
import SupportDashboardPage from "./support/SupportPage";
import OpenApplication from './support/OpenApplication.page';
import ListingDetails from './support/ListingDetails.page';
import ApplicationDetails from './support/ApplicationDetails.page';
import PreApprovalRequest from './support/Pre-ApprovalRequests.Page';
import PreApprovalRequestListing from './support/PreApprovalRequestsListing.Page';
import SupportCreateListing from "./support/SupportCreateListingPage";

//SUPPORT MASTER LIST
import PendingMasterList from './support/PendingMasterlist.page';
import ActiveMasterList from './support/SupportMasterlistPage'
import SupportDashboard from "./support/SupportDashboard";
import DeniedMasterList from "./support/SupportDeniedMasterList";

// APPLICATION
import ApprovedApplication from "./support/ApprovedApplication";
import CancelledApplication from './support/CancelledApplication.page';
import PendingApplication from './support/PendingApplication.page';
import DisapprovedApplication from './support/DisapprovedApplication.page';
import CloseApplication from './support/ClosedApplication.page';

//SUPPORT OUTLETS
import SupportApplicationOutlet from './support/SupportApplicationOutlet';
import SupportListingOutlet from './support/SupportListingOutlet';
import SupportOutlet from "./support/SupportOutlet.page";
import ComingSoonPage from "./WorkingOnIt.page";
import TermsandConditionPage from "./TermsCondition.page";

export {
	ViewListingComponent,
	LoginModal,
	// RegistrationModal,
	ModalComponents,
	PreviewListing,
	Sidebar,
	ListingsTable,
	SoldPropertiesPage,
	ListingSummaryListsPage,
	ClientManagementPage,
	ActiveSummaryListsPage,
	ListingPage,
	MainOutlet,
	Dashboard,
	HouseForRentPage,
	DiscoverHomePage,
	ComingSoonPage,
	BuyAHomePage,
	RefinancePage,
	InsuranceGuidePage,
	MortgagePage,
	RentPage,
	SellPage,
	LoanCalculatorPage,
	ContactUsPage,
	MyDraftsPage,
	SoldPropertyDetailsPage,
	ActiveListingDetails,
	ShowDetailsProcessing,
	ShowDetailsDenied,
	// ListingSearchLoggedin,
	ListingFormPage,
	SupportOutlet,
	SignIn,
	SupportDashboardPage,
	OpenApplication,
	PendingApplication,
	DisapprovedApplication,
	ListingDetails,
	ApplicationDetails,
	CancelledApplication,
	PreApprovalRequest,
	PreApprovalRequestListing,
	CloseApplication,
	SupportDashboard,
	SupportApplicationOutlet,
	SupportListingOutlet,
	PendingMasterList,
	ActiveMasterList,
	DeniedMasterList,
	ApprovedApplication,
	SupportCreateListing,
	FaqsPage,
	TermsandConditionPage,
	PropertySearchPage
};
