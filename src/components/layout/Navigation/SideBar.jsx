import React, { useState } from 'react';
import { Drawer, Image } from 'antd';
import SidebarMenu from './Menu/SidebarMenu';
import BrokerageLogo from "../../../assets/BrokerageLogo.png";

const SideBar = ({ openDrawer, onClose, setOpenDrawer }) => {

  return (
    <>
      <Drawer
        title={
          <a href="/">
            <img
              // src="https://anima-uploads.s3.amazonaws.com/projects/64e41d552340cba66b90f01a/releases/64e41e67e1c2a81b98b3c871/img/logo@2x.png"
              src={BrokerageLogo}
              alt="logo"
              style={{
                width: "140px",
                // height: "60px" 
              }}
            // width={140}
            // height={55}
            />
          </a>}
        onClose={onClose}
        open={openDrawer}
        className='side-bar--drawer'
      >
        <SidebarMenu setOpenDrawer={setOpenDrawer} />
      </Drawer>
    </>
  );
};
export default SideBar;