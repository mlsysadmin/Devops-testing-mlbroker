import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/ListingsTableComponent.css";
import {DateFormatter, LocationFormatter} from "../../../utils/LocationDateFormatter";
import {GetAllListingDrafts} from "../../../api/ListingDraftsSeller";

const ListingsTable = () => {
  
const [listingDrafts, setListingDrafts] = useState([])
const [propertyType, setPropertyType] = useState();

// const resp = await GetAllListingDrafts();
// const response = resp.data;

const sellerListingDrafts = async () => {
  try {
    const resp = await GetAllListingDrafts();
    const response = resp.data;
    // setPropertyType(response[0].property_type.type);
    setListingDrafts(response);
    // console.log("property type:", propertyType)
    // console.log("r", listingDrafts);
    console.log("resp", resp);
  } catch (error) {
    console.error("Error fetching listing drafts:", error);
  }
};
useEffect (() =>{
  sellerListingDrafts();

}, [])
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // const filteredListings = listingDrafts.filter(
  //   (listing) =>
  //     listing.propertyType.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     listing.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     listing.location.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(Number(event.target.value));
    setCurrentPage(1);
  };
  const totalPages = Math.ceil(listingDrafts.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const paginatedListings = listingDrafts.slice(startIndex, endIndex);

  return (
    <div>
      <div className="listings-table-container">
        <div className="listings-table-header-section">
          <div className="tabs-listings-table">
            <Link to="/listing-summary-lists">
              <div className="table-header-button">Listings</div>
            </Link>
            <Link to="/clientmanagement">
              <div className="table-header-button">Client Management</div>
            </Link>
          </div>
          <div className="listsum-search-section">
            <label className="entries-label">
              Show
              <select
                className="table-dropdown"
                value={entriesPerPage}
                onChange={handleEntriesChange}
                placeholder="Entries"
              >
                <option value="10">entries</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </label>
            <div className="search-input-container">
              <div className="search-input-wrapper">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search Property"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
              </div>
            </div>
          </div>
        </div>
        <div className="listings-whole-table">
          <table className="listings-table">
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
              {paginatedListings?.map((listing, index) => (
                <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
                  <td>
                    <button className="listings-show-details-button">
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
                  <td>{listing.listing_status}</td>
              
                </tr>
              ))}
            </tbody>
          </table>
      
        </div>
      
      </div>
      <div
        className="d-flex justify-content-end"
        style={{ marginLeft: "85%", marginTop: "10%" }}
      >
        <nav
          aria-label="Page navigation example"
          className="pagination-container"
        >
          <ul className="pagination-list">
            <li className="page-item">
              <a className="page-link active" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/listing-summary-lists">
                <FontAwesomeIcon icon={faPlay} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="entries-count">
        Showing{" "}
        {listingDrafts.length > 0
          ? `${startIndex + 1} to ${Math.min(
              endIndex,
              listingDrafts.length
            )} of ${listingDrafts.length}`
          : "0"}{" "}
        entries
      </div>
    </div>
  );
};

export default ListingsTable;
