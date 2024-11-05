import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "./Components/DraftSidebarComponent";
import Footer from "./Components/FooterComponent";
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../styles/ListingsSummaryLists.css';  // Import the CSS file
import { LocationFormatter, DateFormatter } from "../../utils/LocationDateFormatter";
import { GetAllDeniedandProcessing } from "../../api/ListingDraftsSeller";

const ListingsSummaryLists = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

const [deniedProcessingListings, setDeniedProcessingListings] =  useState([])


  const sellerDeniedProcessing = async () =>{
    try{
      const response = await GetAllDeniedandProcessing();
      const rs = response.data;
      setDeniedProcessingListings(rs);
      console.log("response:", response);
    }catch (error){
      console.log(error);
    }
  };

useEffect( () =>{
  sellerDeniedProcessing();
}, []);

  const handleShowDetailsClick = (status) => {
    if (status === 'PROCESSING') {
      navigate('/show-details-processing');
    } else if (status === 'DENIED') {
      navigate('/show-details-denied');
    } else {
      navigate('/show-details-default'); // Fallback route
    }
  };

  // const filteredListings = deniedProcessingListings.filter((listing) =>
  //   listing.propertyType.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   listing.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   listing.location.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(deniedProcessingListings.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const paginatedListings = deniedProcessingListings.slice(startIndex, endIndex);

  return (
    <div>
      <div className="contentContainer" style={{ display: "flex", width: "100%", gap: "1rem" }}>
        <div className="summary-sidebar" style={{ width: "15%", padding: "none" }}>
          <Sidebar />
        </div>
        <div className="list" style={{ display: "flex", flexDirection: 'column', width: "100%", gap: "0.5rem" }}>
          <div className="listings-summary-container">
            <div className="listings-summary-header-section">
              <div className="listings-summary-tabs">
                <Link to="/listing-summary-lists">
                  <div className="listings-summary-button">
                    Listings
                  </div>
                </Link>
                <Link to="/clientmanagement">
                  <div className="listings-summary-button">
                    Client Management
                  </div>
                </Link>
              </div>
              <div className="search-section">
                <label htmlFor="entries">Show
                  <select className="dropdown" value={entriesPerPage} onChange={handleEntriesChange}>
                    <option value="10">entries</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
               
                </label>
                <div className="search-inp-container">
                  <div className="searchwrapper">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input 
                      type="text" 
                      className="search-Inputss" 
                      placeholder="Search Property" 
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <table className="listing-summary-table">
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
                  <tr key={index}>
                    <td>
                      <button 
                        className="listings-summary-show-details-button" 
                        onClick={() => handleShowDetailsClick(listing.status)}>
                        Show Details
                      </button>
                    </td>
                    <td>{DateFormatter(listing.createdAt)}</td>
                    <td>{listing.property_id}</td>
                    <td>{listing.property_type.type}</td>
                    <td>{listing.listing_type.listing_type}</td>
                    <td>{listing.unit_details.floor_area}</td>
                    <td>{listing.unit_details.price}</td>
                    <td>{LocationFormatter(listing.location)}</td>
                    <td >
                    {console.log('Listing status:', listing.listing_status)}
                    {listing.listing_status === 'PENDING' ? 'PROCESSING' : listing.listing_status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
      
      <div className="d-flex justify-content-end" style={{ marginLeft: '85%', marginTop: '10%' }}>
        <nav className="pagination-container" aria-label="Page navigation example">
          <ul className="pagination-list">
            {[...Array(totalPages)].map((_, pageIndex) => (
              <li className={`page-item ${pageIndex + 1 === currentPage ? 'active' : ''}`} key={pageIndex}>
                <a className="page-link" onClick={() => setCurrentPage(pageIndex + 1)}>
                  {pageIndex + 1}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="summary-entries-count">
        Showing {deniedProcessingListings.length > 0 ? `${startIndex + 1} to ${Math.min(endIndex, deniedProcessingListings.length)} of ${deniedProcessingListings.length}` : "0"} entries
      </div>
      <Footer />
    </div>
  );
};

export default ListingsSummaryLists;
