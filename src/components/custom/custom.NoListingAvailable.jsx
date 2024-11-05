import React from "react";
import "../../../src/styles/custom.css"

const NoListingAvailable = () =>{
    return (
			<div className="unavailableListings" style={{ color: "var(--red)" }}>
				<span>No Listing Available</span>
			</div>
		);
}
export default NoListingAvailable