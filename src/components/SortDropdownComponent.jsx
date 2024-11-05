import React, { useState } from "react";
import "../styles/sortDropdown.css"; // Make sure to import your CSS file

const SortDropdown = () => {
	const [selectedOption, setSelectedOption] = useState("Most relevant");
	const [isOpen, setIsOpen] = useState(false);

	const options = [
		"Most relevant",
		"New Listings",
		"Old Listings",
		"Highest Price",
		"Lowest Price",
		"Order Title A-Z",
		"Order Title Z-A",
	];

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className="sort-dropdown">
			<button
				className="sort-dropdown-button"
				onClick={() => setIsOpen(!isOpen)}
			>
				Sort: {selectedOption} <span className="dropdown-arrow">▼</span>
			</button>
			{isOpen && (
				<ul className="sort-dropdown-menu">
					{options.map((option, index) => (
						<li
							key={index}
							className="sort-dropdown-option"
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SortDropdown;
