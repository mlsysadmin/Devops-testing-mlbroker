import React from "react";
import "../../../styles/searchsortation.css"
import { Dropdown, Menu, Space } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import {  GetPublicListingCount } from "../../../api/GetAllPublicListings";

const SearchPropertiesSoration = ({ properties_count, current_properties_count, setSelectedSort, selectedSort, HandleSort }) => {

	// const handleMenuClick = (e) => {
	// 	setSelectedSort(e.key); // Update the selected sort option based on the clicked item
	// };
	const SortItems = [
		{
			key: "relevant",
			label: "Most relevant",
		},
		{
			key: "new",
			label: "New Listings",
		},
		{
			key: "old",
			label: "Old Listings",
		},
		{
			key: "price-asc",
			label: "Highest Price",
		},
		{
			key: "price-desc",
			label: "Lowest Price",
		},
		{
			key: "title-asc",
			label: "Order Title A-Z",
		},
		{
			key: "title-desc",
			label: "Order Title Z-A",
		}
	]

	// const menu = (
	// 	<Menu onClick={HandleSort}>
	// 		<Menu.Item key="relevant">Most relevant</Menu.Item>
	// 		<Menu.Item key="new">New Listings</Menu.Item>
	// 		<Menu.Item key="old">Old Listings</Menu.Item>
	// 		<Menu.Item key="max">Highest Price</Menu.Item>
	// 		<Menu.Item key="min">Lowest Price</Menu.Item>
	// 		<Menu.Item key="ascending">Order Title A-Z</Menu.Item>
	// 		<Menu.Item key="descending">Order Title Z-A</Menu.Item>
	// 	</Menu>
	// );

	const items = SortItems.map((item, index) => ({
		key: item.key,
		label: item.label,
	}));


	return (
		<div className="search-sortation" style={{ cursor: 'pointer' }}>
			<div className="sort">
				<span>
					Showing {current_properties_count} out of {properties_count} entries{" "}
				</span>
			</div>
			<div className="sort-div-class">
				<Dropdown 
				// overlay={menu}
				menu={{items, onClick: HandleSort}}>
					<Space>
						Sort: {selectedSort}
						<CaretDownOutlined />
					</Space>
				</Dropdown>
			</div>
		</div>
	);
}

export default SearchPropertiesSoration