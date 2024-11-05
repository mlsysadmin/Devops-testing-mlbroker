import React, { useState } from 'react';
import { Button, Layout, Menu, Row } from 'antd';

import "../../../../styles/support/supportHeader.css"
import SupportHeaderMenu from './SupportHeaderMenu';
import SupportHeaderUserComponent from './SupportHeaderUserComponent';

const { Header } = Layout;
// const items = new Array(5).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));


const SupportHeaderContainer = ({ zIndex }) => {

    return (
        <Header
            style={{ background: "#D90000", zIndex: zIndex }}
            className='support-header'
        >
            <div style={{ display: "flex", gap: '10px', alignItems: 'center' }}>
                <div className="ml-logo" style={{ display: "flex", margin: "0px 0px 0px 10px" }}>
                    <a href="/support/dashboard">
                        <img
                            src="https://c.animaapp.com/1RDRTvCv/img/image-87-1@2x.png"
                            alt="ml-logo"
                            style={{ width: "230px", display: 'flex' }}
                        />
                    </a>
                </div>
                <SupportHeaderMenu />
            </div>
            <div className="user-profile">
                <SupportHeaderUserComponent />
            </div>
        </Header>
    )
}

export default SupportHeaderContainer;