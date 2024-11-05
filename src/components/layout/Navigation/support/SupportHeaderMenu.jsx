import { Button, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import SellerLogInButtonDropdown from "../../../custom/buttons/SellerLogInButtonDropdown";

const SupportHeaderMenu = () => {
    const [currentMenu, setCurrent] = useState("client");
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuOnClick = (menu) => {
        console.log(menu);

        setCurrent(menu.key);
        navigate({
            pathname: menu.item.props.link
        })
    }

    const MenuItems = [
        { label: "Create Listing", key: "create", link: "/support/create-listing" },
        {
            label: "Listing Masterlist", key: "laster-list",
            children: [
                {
                    key: 'pending',
                    label: 'Pending Listings',
                    link: '/support/master-list/pending'
                },
                {
                    key: 'active',
                    label: 'Active Listings',
                    link: '/support/master-list/active'
                },
                {
                    key: 'denied',
                    label: 'Denied Listings',
                    link: '/support/master-list/denied'
                },
            ]
        },
        { label: "Application Review", key: "review",
            children: [
                {
                    key: 'pending-review',
                    label: 'Pending Applications',
                    link: '/support/applications/pending'
                },
                {
                    key: 'approved',
                    label: 'Approved Listings',
                    link: '/support/applications/approved'
                },
                {
                    key: 'denied-review',
                    label: 'Denied Applications',
                    link: '/support/applications/denied'
                },
                {
                    key: 'canceled',
                    label: 'Canceled Applications',
                    link: '/support/applications/canceled'
                },
                {
                    key: 'closed',
                    label: 'Close Applications',
                    link: '/support/applications/closed'
                },
            ]
         },
        { label: "Pre-Approval Request", key: "pre-approval", link: '/support/pre-approval-request' },
        { label: "Broker Applicants", key: "broker-applicants", link: '/support/pre-approval-request' },
        { label: "Property Inquiry", key: "property-inquiry", link: '/support/property-inquiry' },
    ];

    const items = MenuItems.map((item, index) => ({
        key: item.key,
        label: item.label,
        link: item.link,
        children: item.children
    }));

    return (
        <>
            <div
                style={{
                    display: "flex",
                    borderBottom: "none",
                    alignItems: "center",
                    alignContent: "center",
                    flexFlow: "wrap",
                    flexWrap: "wrap",
                }}
                id="menu-wrapper"
            >
                <Menu
                    mode="horizontal"
                    items={items}
                    selectedKeys={[currentMenu]}
                    onClick={handleMenuOnClick}
                    className="support-header--menu"
                ></Menu>
            </div>
        </>
    );
};
export default SupportHeaderMenu;
