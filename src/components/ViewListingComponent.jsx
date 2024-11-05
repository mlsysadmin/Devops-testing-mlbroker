import React from "react";
import PropertyListing from "./PropertyListing";
import VListingHouseDetails from "./VListingHouseDetails";
import PreviewListRightSideContent from "./PreviewListRightSideContent";


const ViewListingComponent =()=>{
    return(
        <div className="container">
            <PropertyListing/>
            <VListingHouseDetails/>
            <PreviewListRightSideContent/>
        </div>
    );
}
export default ViewListingComponent;