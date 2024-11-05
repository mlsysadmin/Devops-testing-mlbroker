import React from "react";
import Sidebar from "./Components/DraftSidebarComponent";
import Footer from "./Components/FooterComponent";
import { Link } from "react-router-dom";
// import NavigationHeader from "../layout/NavigationComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStar, faHeart, faList, faEye, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../styles/ClientManagement.css";

const ClientManagement = () => {
  return (
    <div>
      <div>
        {/* <NavigationHeader /> */}
        <div className="client-contentContainer" style={{ display: "flex", width: "100%", gap: "1rem"}}>
          <div className="sidebar" style={{ width: "15%", padding: "none" }}>
            <Sidebar />
          </div>
          <div className="list" style={{ display: "flex", flexDirection: "column", width: "80%", gap: "0.5rem" }}>
            {/* <div className="listingsTableWrapper"> */}
              <div className="client-management-container">
                <div className="client-management-headerSection">
                  <div className="client-management-tabs">
                    <Link to="/listing-summary-lists">
                      <div className="manage-new-Button">Listings</div>
                    </Link>
                    <Link to="/clientmanagement">
                      <div className="manage-new-Button">Client Management</div>
                    </Link>
                  </div>
                  <div className="client-searchSection">
                  <label >Show
                    <select className="client-dropdown">
                     
                      <option> entries</option>
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                      <option>100</option>
                    </select>
                    </label>
                    <div className="client-srchIntContnr">
                      <div className="client-srchwrapps">
                      <FontAwesomeIcon icon={faSearch} className="client-srchIcony" />
                      <input type="text" placeholder="Search Property" className="client-searchsInput" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* </div> */}
            <section className="client-overviewSection">
              <h2 className="client-overviewTitle">OVERVIEW</h2>
              <p>Listing Count & Highlight</p>
              <div className="client-overviewStats">
                <div className="client-statBox">
                  <div className="client-statIcon">
                    <FontAwesomeIcon icon={faHome} />
                  </div>
                  <div className="client-statNumber">0</div>
                  <div className="client-statLabel">Property Sold</div>
                </div>
                <div className="client-statBox">
                  <div className="client-statIcon">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="client-statNumber">0</div>
                  <div className="client-statLabel">Highlighted</div>
                </div>
                <div className="client-statBox">
                  <div className="client-statIcon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <div className="client-statNumber">0</div>
                  <div className="client-statLabel">Listing Saves</div>
                </div>
                <div className="client-statBox">
                  <div className="client-statIcon">
                    <FontAwesomeIcon icon={faList} />
                  </div>
                  <div className="client-statNumber">0</div>
                  <div className="client-statLabel">Active Listing</div>
                </div>
                <div className="client-statBox">
                  <div className="client-statIcon">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div className="client-statNumber">0</div>
                  <div className="client-statLabel">Total Views</div>
                </div>
              </div>
            </section>
            <div className="client-performanceSection">
              <h2 className="client-performanceTitle">PERFORMANCE</h2>
              <div className="client-performanceStats">
                <div className="client-performanceBox">
                  <div className="client-performanceLabel">Potential Sales Opportunities</div>
                  <div className="client-performanceNumber">₱ 0</div>
                  <p>Potential Sales Opportunities is derived from the sum of the prices of the properties your clients are interested at.</p>
                </div>
                <div className="client-performanceBox">
                  <div className="client-performanceLabel">Potential Commission</div>
                  <div className="client-performanceNumber">₱ 0</div>
                  <p>Potential Commission is the potential profit you'll make when you close the deals with your clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientManagement;
