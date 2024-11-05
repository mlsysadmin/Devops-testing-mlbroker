import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import SidebarComponent from "./Components/DraftSidebarComponent";
import Footer from "./Components/FooterComponent";
import "../../styles/Soldproperties.css";

const SoldProperties = () => {
  const [listings] = useState([
    {
      date: "03-11-2024",
      propertyId: "11X8NBSADAFO",
      propertyType: "Condominium",
      type: "For Sale",
      floorArea: "30 sqm",
      price: "5,000,000",
      location: "Mandaue City, Cebu",
      status: "Draft",
      datesold: "03/14/2024",
    },
    {
      date: "03-11-2024",
      propertyId: "ODFASHUENOPS",
      propertyType: "Condominium",
      type: "For Sale",
      floorArea: "30 sqm",
      price: "5,000,000",
      location: "Mandaue City, Cebu",
      status: "Draft",
      datesold: "03/14/2024",
    },
  ]);

  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowDetailsClick = (status) => {
    navigate('/sold-property-details');
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

  return (
    <div>
      <div>
        <div className="contentContainer" style={{ display: "flex", width: "100%", gap: "1rem" }}>
          <div className="sidebar" style={{ width: "15%", padding: "none" }}>
            <SidebarComponent />
          </div>
          <div className="list" style={{ display: "flex", flexDirection: "column", width: "100%", gap: "0.5rem" }}>
            <div className="sold-properties-container">
              <div className="sold-properties-headerSection">
                <div className="sold-properties-tabs">
                  <Link to="/listing-summary-lists">
                    <div className="newButton">Listings</div>
                  </Link>
                  <Link to="/clientmanagement">
                    <div className="newButton">Client Management</div>
                  </Link>
                </div>
                <div className="sold-properties-searchSection">
                  <label className="show-entry">
                    Show
                    <select className="dropdown" value={entriesPerPage} onChange={handleEntriesChange}>
                      <option value="10">entries</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
             
                  </label>
                  <div className="sold-properties-srchInputContainer">
                    <div className="wrappsearch">
                      <FontAwesomeIcon icon={faSearch} className="sold-properties-searchIcons" />
                      <input
                        type="text"
                        placeholder="Search Property"
                        className="searchInpt"
                        value={searchQuery}
                        onChange={handleSearchChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <table className="sold-properties-table">
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
                    <th>Date Sold</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedListings.map((listing, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'even' : ''}>
                      <td>
                        <button
                          className="sold-properties-showDetailsButton"
                          onClick={() => handleShowDetailsClick(listing.status)}
                        >
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
                      <td>{listing.datesold}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
             
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end" style={{ marginLeft: '85%', marginTop: '10%' }}>
        <nav className="paginationContainer" aria-label="Page navigation example">
          <ul className="paginationList">
            <li className="pageItem"><a className="page-link active" href="/drafts">1</a></li>
            <li className="pageItem"><a className="page-link" href="/listing-summary-lists">2</a></li>
            <li className="pageItem"><a className="page-link" href="active-summary-lists">3</a></li>
            <li className="pageItem">
              <a className="page-link" href="sold-properties">
                <FontAwesomeIcon icon={faPlay} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sold-entries-count">
                {filteredListings.length > 0 ? (
                  <>Showing {startIndex + 1} to {Math.min(endIndex, filteredListings.length)} of {filteredListings.length} entries</>
                ) : (
                  <>Showing 0 to 0 of 0 entries</>
                )}
              </div>
      <Footer />
    </div>
  );
};

export default SoldProperties;
