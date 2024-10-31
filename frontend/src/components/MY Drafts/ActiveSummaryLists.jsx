import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/ActiveSummaryLists.css";

// Components
import Sidebar from "./Components/DraftSidebarComponent";
import Footer from "./Components/FooterComponent";

const ActiveInactive = () => {
  const [listings] = useState([
    {
      date: "2024-06-18",
      propertyId: "P001",
      propertyType: "Apartment",
      type: "Residential",
      floorArea: "1200 sq ft",
      price: "$300,000",
      location: "New York",
      status: "Active",
     
    },
    {
      date: "2024-06-17",
      propertyId: "P002",
      propertyType: "Villa",
      type: "Luxury",
      floorArea: "3000 sq ft",
      price: "$900,000",
      location: "Los Angeles",
      status: "Inactive",
     
    },
    // Add more listings as needed
  ]);

  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowDetailsClick = (status) => {
    if (status === 'Active') {
      navigate('/active-listing-details');
    } else if (status === 'Denied') {
      navigate('/show-details-denied');
    } else {
      navigate('/active-listing-details'); // Fallback route
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const filteredListings = listings.filter((listing) =>
    listing.propertyType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    listing.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    listing.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredListings.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const paginatedListings = filteredListings.slice(startIndex, endIndex);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

  const openModal = (listing) => {
    setSelectedListing(listing);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedListing(null);
  };

  const handleTagSold = () => {
    // Logic to tag the property as sold
    closeModal();
    setSuccessModalIsOpen(true);
  };

  const closeSuccessModal = () => {
    setSuccessModalIsOpen(false);
  };

  return (
    <div>
      <div
        className="active-contentContainer"
        style={{ display: "flex", width: "100%", gap: "1rem" }}
      >
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="active-summary-container">
          <div className="active-header-section">
            <div className="active-tabs">
              <Link to="/listing-summary-lists">
                <div className="new-button">Listings</div>
              </Link>
              <Link to="/clientmanagement">
                <div className="new-button">Client Management</div>
              </Link>
            </div>
            <div className="active-search-section">
              <label htmlFor="">Show
                <select className="dropdown" value={entriesPerPage} onChange={handleEntriesChange}>
                  <option value="10">entries</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
           
              </label>
              <div className="searchInputCont">
                <div className="srchwrapp">
                  <FontAwesomeIcon className="searchico" icon={faSearch} />
                  <input
                    type="text"
                    className="searchinT"
                    placeholder="Search Property"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <table className="active-summary-table">
            <thead>
              <tr>
                <th>Select</th>
                <th>Date</th>
                <th>Property ID</th>
                <th>Property Type</th>
                <th>Type</th>
                <th>Floor Area</th>
                <th>Price</th>
                <th>Location</th>
                <th>Status</th>
               
              </tr>
            </thead>
            <tbody>
              {paginatedListings.map((listing, index) => (
                <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
                  <td>
                    <button 
                      className="listings-summary-show-details-button" 
                      onClick={() => handleShowDetailsClick(listing.status)}>
                      Show Details
                    </button>
                  </td>
                  <td>{listing.date}</td>
                  <td>{listing.propertyId}</td>
                  <td>{listing.propertyType}</td>
                  <td>{listing.type}</td>
                  <td>{listing.floorArea}</td>
                  <td>{listing.price}</td>
                  <td>{listing.location}</td>
                  <td>{listing.status}</td>
                  <td>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
      <div className="pagination-parent">
        <nav
          className="pagination-container"
          aria-label="Page navigation example"
        >
          <ul className="pagination-list">
            <li className="page-item">
              <a className="page-link active" href="/drafts">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/listing-summary-lists">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/active-summary-lists">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/sold-properties">
                <FontAwesomeIcon icon={faPlay} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="active-entries-count">
            {filteredListings.length > 0 ? (
              <>Showing {startIndex + 1} to {Math.min(endIndex, filteredListings.length)} of {filteredListings.length} entries</>
            ) : (
              <>Showing 0 to 0 of 0 entries</>
            )}
          </div>
      <Footer />
      <div>
        
       
      </div>
    </div>
  );
};

export default ActiveInactive;
