import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

const SupportApplicationOutlet = () => {
  
  return (
    <Outlet context={useOutletContext()}/>
  );
};
export default SupportApplicationOutlet;
