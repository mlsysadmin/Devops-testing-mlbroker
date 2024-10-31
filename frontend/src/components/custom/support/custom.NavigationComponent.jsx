import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import "../../../styles/support/SupportNavigation.css";

const SupportNavigation = ({ navLinkProps }) => {
  const defaultNavLinkProps = [
    { text: "Create listing", to: "/create-listing" },
    {
      text: "Listing Masterlist",
      dropdown: true,
      options: [
        { text: "Pending Listings", to: "/ML-Brokerage/Support/pending" },
        { text: "Active Listings", to: "/ML-Brokerage/Support/active" },
        { text: "Denied Listings", to: "/ML-Brokerage/Support/disapproved" },
      ],
    },
    {
      text: "Application Review",
      dropdown: true,
      options: [
        {
          text: "Pending Applications",
          to: "/ML-Brokerage/Support/pendingApplication",
        },
        { text: "Approved Applications", to: "/ML-Brokerage/Support/open" },
        {
          text: "Denied Applications",
          to: "/dashboard/Support/disapprovedApplication",
        },
        {
          text: "Canceled Applications",
          to: "/dashboard/Support/CanceledApplications",
        },
        {
          text: "Closed Applications",
          to: "/dashboard/Support/ClosedApplications",
        },
      ],
    },
    { text: "Pre-Approved Request", to: "/ML-Brokerage/Support/pre-approved" },
    { text: "Client Management", to: "/client-management" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const linksToRender = navLinkProps || defaultNavLinkProps;

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="support-navigation-bar">
      <div className="leftSideNavigationBar">
        <img
          className="image"
          alt="Image"
          src="https://c.animaapp.com/1RDRTvCv/img/image-87-1@2x.png"
        />
        <div className="menu-toggle" onClick={toggleMenu}>
          <FiMenu size={24} color="#fff" />
        </div>
        <div className={`custom-nav-link ${menuOpen ? "open" : ""}`}>
          <div className="menu-toggle" onClick={toggleMenu}>
            <FiMenu size={24} color="#fff" />
          </div>
          {linksToRender.map((link, index) => (
            <React.Fragment key={index}>
              {link.dropdown ? (
                <div className="dropdown">
                  <div className="nav-link">
                    <p className="navlnk" onClick={toggleMenu}>
                      {link.text} <IoMdArrowDropdown />
                    </p>
                  </div>
                  <div className="dropdown-options">
                    {link.options.map((option, optionIndex) => (
                      <NavLink
                        key={optionIndex}
                        to={option.to}
                        className={({ isActive }) =>
                          `nav-link ${isActive ? "nav-link-active" : ""}`
                        }
                        onClick={handleNavLinkClick}
                      >
                        {option.text}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "nav-link-active" : ""}`
                  }
                  onClick={handleNavLinkClick}
                >
                  {link.text}
                </NavLink>
              )}
            </React.Fragment>
          ))}
          <div className="user">
            <div className="div">
              Irene Joy Andales <IoMdArrowDropdown />
            </div>
          </div>
        </div>
      </div>

      <div className="rightSideNavigationBar">
        <div className="div">
          Irene Joy Andales <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
};

export default SupportNavigation;
