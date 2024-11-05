import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dummydata from "../../support/supportDummyData/openListingDummy.json"; // Replace with actual data fetching logic
import "../../styles/SupportListingMasterlist.css";
import Pagination from "./custom.pagination";
import FooterComponent from "../../layout/support/FooterComponent";
import SupportNavigation from "./custom.NavigationComponent";

const DisapprovedListingMasterlist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredListings, setFilteredListings] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  // Fetch and filter disapproved listings
  useEffect(() => {
    const fetchDisapprovedListings = async () => {
      try {
        // Simulate fetching data from a JSON file
        const disapprovedListings = Dummydata["disapproved_listings"] || [];
        const filtered = disapprovedListings.filter((listing) =>
          listing.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredListings(filtered);
      } catch (error) {
        console.error("Error fetching disapproved listings:", error);
        setFilteredListings([]);
      }
    };

    fetchDisapprovedListings();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSelectAllChange = (event) => {
    const isChecked = event.target.checked;
    setSelectAllChecked(isChecked);
    const updatedFilteredListings = filteredListings.map((listing) => ({
      ...listing,
      selected: isChecked,
    }));
    setFilteredListings(updatedFilteredListings);
  };

  const handleCheckboxChange = (event, listingId) => {
    const isChecked = event.target.checked;
    const updatedFilteredListings = filteredListings.map((listing) =>
      listing.listing_id === listingId
        ? { ...listing, selected: isChecked }
        : listing
    );
    setFilteredListings(updatedFilteredListings);
  };

  const handleEntriesChange = (event) => {
    const value = parseInt(event.target.value);
    setEntriesPerPage(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleShowDetails = (listing) => {
    navigate(`/ML-Brokerage/Support/listing-details/${listing.listing_id}`, {
      state: { listing, activeTab: "disapproved" },
    });
  };

  const renderListings = (listings) => {
    const indexOfLastItem = currentPage * entriesPerPage;
    const indexOfFirstItem = indexOfLastItem - entriesPerPage;
    const currentListings = listings.slice(indexOfFirstItem, indexOfLastItem);

    if (currentListings.length === 0) {
      return (
        <tr>
          <td colSpan="11" className="text-center">
            <center>No results found</center>
          </td>
        </tr>
      );
    }

    return currentListings.map((listing) => (
      <tr key={listing.listing_id}>
        <td>
          <input
            type="checkbox"
            checked={listing.selected || false}
            onChange={(e) => handleCheckboxChange(e, listing.listing_id)}
          />
        </td>
        <td>
          <button
            className="showDetails"
            onClick={() => handleShowDetails(listing)}
          >
            Show Details
          </button>
        </td>
        <td>{listing.date_created}</td>
        <td>{listing.listing_id}</td>
        <td>{listing.title}</td>
        <td>{listing.property_type}</td>
        <td>{listing.listing_type}</td>
        <td>{listing.floor_area} sqm</td>
        <td>{listing.price}</td>
        <td>{listing.location}</td>
        <td>{listing.status}</td>
      </tr>
    ));
  };

  const startIndex = (currentPage - 1) * entriesPerPage + 1;
  const endIndex = Math.min(
    startIndex + entriesPerPage - 1,
    filteredListings.length
  );
  const navLinks = [
    {
      text: "Listing Masterlist",
      dropdown: true,
      options: [
        { text: "Pending Listings", to: "/ML-Brokerage/Support/pending" },
        { text: "Active Listings", to: "/ML-Brokerage/Support/active" },
        {
          text: "Denied Listings",
          to: "/ML-Brokerage/Support/disapproved",
        },
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
        {
          text: "Approved Applications",
          to: "/ML-Brokerage/Support/openApplication",
        },
        {
          text: "Denied Applications",
          to: "/ML-Brokerage/Support/disapprovedApplication",
        },
        {
          text: "Canceled Applications",
          to: "/ML-Brokerage/Support/CanceledApplications",
        },
        {
          text: "Closed Applications ",
          to: "/ML-Brokerage/Support/ClosedApplications",
        },
      ],
    },
    {
      text: "Pre-Approved Request",
      to: "/ML-Brokerage/Support/pre-approved",
    },
    { text: "Client Management", to: "/ML-Brokerage/Support/SupportDashboard" },
  ];

  return (
    <>
      <SupportNavigation navLinkProps={navLinks} />

      <div className="listings-container">
        <h1>Manage Open Listings</h1>
        <hr style={{ border: "#D90000 solid 1px", width: "100%" }} />
        <br />
        <div className="controls">
          <div className="entries">
            <h1>Show Entries</h1>
            <select value={entriesPerPage} onChange={handleEntriesChange}>
              <option value={5}>5</option>
              <option value={8}>8</option>
              <option value={10}>10</option>
            </select>
          </div>
          <div className="searchbar">
            <input
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={selectAllChecked}
                    onChange={handleSelectAllChange}
                  />
                </th>
                <th>Select</th>
                <th>Date Created</th>
                <th>Listing ID</th>
                <th>Title</th>
                <th>Property Type</th>
                <th>Listing Type</th>
                <th>Floor Area</th>
                <th>Price</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{renderListings(filteredListings)}</tbody>
          </table>
        </div>
        <div className="btns">
          <div></div>
          <Pagination
            totalItems={filteredListings.length}
            itemsPerPage={entriesPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
        <div className="entries-summary">
          Showing {startIndex} to {endIndex} of {filteredListings.length}{" "}
          entries
        </div>
        <FooterComponent />
      </div>
    </>
  );
};

export default DisapprovedListingMasterlist;
