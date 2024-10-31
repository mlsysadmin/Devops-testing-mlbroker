import React, { useState } from "react";
// import styled from "styled-components";
// import Navigation from "../layout/NavigationComponent";
import SidebarComponent from "./Components/DraftSidebarComponent";
import ListingsTableComponent from "./Components/ListingsTableComponent";
// import FooterComponent from "./Components/FooterComponent";
import CustomMlFooter from "../custom/Custom.Mlfooter";
import FooterComponent from "../layout/FooterComponent";
// import MainLayout from "../layout/layout.component";
import "../../styles/drafts.css";

const Drafts = () => {
  return (
    <div>
      {/* <Navigation /> */}
      {/* <MainLayout/> */}
      <div
        className="contentContainer"
        style={{ display: "flex", width: "100%", gap: "1rem" }}
      >
        <SidebarComponent />
        <div className="table" style={{ width: "100%" }}>
          <ListingsTableComponent />
        </div>
      </div>
      <CustomMlFooter />
			<FooterComponent />
    </div>
  );
};

export default Drafts;
