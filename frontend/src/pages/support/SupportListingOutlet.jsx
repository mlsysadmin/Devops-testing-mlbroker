import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

const SupportListingOutlet = () => {
  return (
    <Outlet context={useOutletContext()}/>
  );
};
export default SupportListingOutlet;
