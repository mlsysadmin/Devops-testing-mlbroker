import React, { useState } from "react";
import "../styles/applicationHistory.css";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import ApplicationDetails from "../components/ApplicationDetails.jsx";
import { Pagination } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";

const ApplicationHistory = () => {
  const [activeButton, setActiveButton] = useState("applicationHistory");
  const [applications, setApplications] = useState([
    {
      date: "03-11-2024",
      applicationId: "BRSABCDEF0H",
      name: "Dela Cruz, Juan",
      propertyId: "XXXXXXX",
      lotPrice: "50,000,000",
      type: "Application",
      status: "Processing",
    },
    {
      date: "03-11-2024",
      applicationId: "BRSABCDEF0K",
      name: "Dela Cruz, Juan",
      propertyId: "XXXXXXX",
      lotPrice: "50,000,000",
      type: "Application",
      status: "Canceled",
    },
    {
      date: "03-11-2024",
      applicationId: "BRSABCDEF0H",
      name: "Dela Cruz, Juan",
      propertyId: "XXXXXXX",
      lotPrice: "50,000,000",
      type: "Application",
      status: "Approved",
    },
    {
      date: "03-11-2024",
      applicationId: "BRSABCDEF0K",
      name: "Dela Cruz, Juan",
      propertyId: "XXXXXXX",
      lotPrice: "50,000,000",
      type: "Application",
      status: "Closed",
    },
    {
      date: "03-11-2024",
      applicationId: "BRSABCDEF0K",
      name: "Dela Cruz, Juan",
      propertyId: "XXXXXXX",
      lotPrice: "50,000,000",
      type: "Pre-Approval Request",
      status: "Processing",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const sidebar = document.getElementsByClassName("sidebar-container");
  const btn = document.getElementsByClassName("icon-button");
  const handleShowDetails = (applicationId) => {
    const application = applications.find(
      (app) => app.applicationId === applicationId
    );
    sidebar[0].style.display = "none";
    btn[0].style.display = "none";
    setSidebarVisible(false);

    setSelectedApplication(application);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMenuClick = () => {
    setSidebarVisible(true);
  };

  const handleCloseSidebar = () => {
    setSidebarVisible(false);
  };

  const handleGoBack = () => {
    setSelectedApplication(null);
    sidebar[0].style.display = "block";
  };

  const filteredApplications = applications.filter((app) =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
		<div className="application-history-container">
			<button className="icon-button" onClick={handleMenuClick}>
				<MenuOutlined />
			</button>
			<div className={`sidebar-container ${sidebarVisible ? "visible" : ""}`}>
				<div className="sidebar">
					<div className="user-info">
						<p id="cancel" onClick={handleCloseSidebar}>
							x
						</p>
						<p>Marie Rodriguez</p>
						<button
							className={`application-history-btn ${
								activeButton === "applicationHistory" ? "active" : ""
							}`}
							onClick={() => setActiveButton("applicationHistory")}
						>
							Application History
						</button>
						<button
							className={`application-history-btn ${
								activeButton === "savedProperties" ? "active" : ""
							}`}
							onClick={() => setActiveButton("savedProperties")}
						>
							Saved Properties
						</button>
					</div>
				</div>
			</div>

			{selectedApplication ? (
				<ApplicationDetails
					application={selectedApplication}
					onGoBack={handleGoBack}
				/>
			) : (
				<div className="history">
					<div className="history-header">
						<h2>
							{activeButton === "applicationHistory"
								? "Application History"
								: "Saved Properties"}
						</h2>
						<div className="controls">
							<label>
								Show
								<select>
									<option value="0">entries</option>
									<option value="10">10 entries</option>
									<option value="25">25 entries</option>
									<option value="50">50 entries</option>
									<option value="100">100 entries</option>
								</select>
							</label>
							<div className="search-container">
								<SearchOutlined className="search-icon" />
								<input
									type="search"
									placeholder="Search"
									value={searchTerm}
									onChange={handleSearchChange}
								/>
							</div>
						</div>
					</div>
					<table>
						<thead>
							<tr>
								<th id="select">Select</th>
								<th>Date</th>
								<th>Application ID</th>
								<th>Name</th>
								<th>Property ID</th>
								<th>Lot Price</th>
								<th>Type</th>
								<th className="status">Status</th>
							</tr>
						</thead>
						<tbody>
							{activeButton === "applicationHistory" ? (
								filteredApplications.map((app) => (
									<tr key={app.applicationId}>
										<td>
											<button
												onClick={() => handleShowDetails(app.applicationId)}
											>
												Show Details
											</button>
										</td>
										<td>{app.date}</td>
										<td>{app.applicationId}</td>
										<td>{app.name}</td>
										<td>{app.propertyId}</td>
										<td>{app.lotPrice}</td>
										<td>{app.type}</td>
										<td>{app.status}</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan="8">No saved properties available.</td>
								</tr>
							)}
						</tbody>
					</table>
					<div className="d-flex justify-content-end">
						<div>
							<p>
								Showing{" "}
								{activeButton === "applicationHistory"
									? filteredApplications.length
									: 0}{" "}
								of {applications.length} entries
							</p>
						</div>
						<div>
							<nav
								aria-label="Page navigation example"
								className="pagination-container"
							>
								<ul className="pagination-list">
									<li className="page-item">
										<a className="page-link active" href="/buyer-history-page">
											1
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="/buyer-history-page">
											<FontAwesomeIcon icon={faPlay} />
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ApplicationHistory;
