import React from "react";
import { SupportListingComponent } from "../../components/index";

const SupportCreateListing = () => {
  return (
    <div>
      <SupportListingComponent
        isEditListing={true}
        tabTitle={'Create Listing'}
        isShowDetails={false}
        listingDetails={null} />
    </div>
  );
};

export default SupportCreateListing;