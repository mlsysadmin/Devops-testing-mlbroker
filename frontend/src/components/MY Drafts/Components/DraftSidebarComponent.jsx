import React, { useState } from "react";
import { useEffect } from "react";
import "../../../styles/DraftSidebarComponent.css";
import { getCookieData } from "../../../utils/CookieChecker";
import { searchKyc } from "../../../api/Public/User.api";


const Container = (props) => {
  return <div className="drafts-container">{props.children}</div>;
};

const SidebarContainer = (props) => {
  return (
    <div
      className={`sidebar-container ${props.isOpen ? "open" : ""}`}
      onClick={props.onClose}
    >
      {props.children}
    </div>
  );
};

const SidebarHeader = (props) => {
  return <div className="sidebar-header">{props.children}</div>;
};

const SidebarMenu = (props) => {
  return <div className="sidebar-menu">{props.children}</div>;
};

const SidebarMenuItem = (props) => {
  return <div className="sidebar-menu-item">{props.children}</div>;
};

const CreateListingButton = (props) => {
  return <a href="/listing-form"><button className="create-listing-button">{props.children}</button></a>;
};
function openSidebar() {
  document.querySelector('.sidebar-container').classList.add('open');
  document.getElementById('overlay').style.display = 'block';
}

function closeSidebar() {
  document.querySelector('.sidebar-container').classList.remove('open');
  document.getElementById('overlay').style.display = 'none';
}


const HamburgerButton = ({ isOpen, onClick }) => {
  return (    
    <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={onClick}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="close"></div>
    </div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const [userDetails, setUserDetails] = useState(null);

	const accountDetails = getCookieData();
	console.log("details:", accountDetails);
	console.log("mobile number", accountDetails.mobileNumber);

	const fetchUserDetails = async () => {
		try {
			const response = await searchKyc(accountDetails.mobileNumber);
			const respData = response.data.data;
			console.log("API Response:", respData);
			setUserDetails(respData);
		} catch (error) {
			console.error("Error fetching user details:", error);
		}
	};

	useEffect(() => {
		fetchUserDetails();
		console.log("user", userDetails);
	}, []);


  return (
		<div className="whole-sidebar">
			<Container>
				<HamburgerButton isOpen={isOpen} onClick={toggleSidebar} />
				<SidebarContainer isOpen={isOpen} onClose={toggleSidebar}>
					<SidebarHeader>
						{accountDetails.firstName} &nbsp;
						{accountDetails.lastName}
					</SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<a href="/drafts" style={{ color: "Black" }}>
								My Drafts
							</a>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<a href="/listing-summary-lists" style={{ color: "Black" }}>
								Listings
							</a>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<a href="/active-summary-lists" style={{ color: "Black" }}>
								Active/Inactive
							</a>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<a href="/sold-properties" style={{ color: "Black" }}>
								Sold Properties
							</a>
						</SidebarMenuItem>
						<CreateListingButton>Create Listing</CreateListingButton>
					</SidebarMenu>
				</SidebarContainer>
			</Container>
		</div>
	);
};

export default Sidebar;
