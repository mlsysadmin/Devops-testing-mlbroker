import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "../../../styles/Pagination.css";

const Pagination = ({ currentPage, totalPages, paginate }) => {
	// Ensure currentPage and totalPages are valid numbers
	const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
	const validTotalPages = totalPages > 0 ? totalPages : 1;

	const pageNumbers = [];

	// Logic to determine which page numbers to display
	const startPage = Math.max(1, validCurrentPage);
	const endPage = Math.min(validTotalPages, startPage + 1); // Only display two pages at a time

	for (let i = startPage; i <= endPage; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="custom-pagination">
			<div
				onClick={() => paginate(validCurrentPage - 1)}
				className={`prev ${validCurrentPage > 1 ? "active" : "disabled"}`}
			>
				<ArrowLeftOutlined />
				<label>Previous</label>
			</div>

			<div className="pagination-numbers">
				{pageNumbers.map((number) => (
					<span
						key={number}
						onClick={() => paginate(number)}
						className={validCurrentPage === number ? "active" : ""}
					>
						{number}
					</span>
				))}
			</div>

			<div
				onClick={() => paginate(validCurrentPage + 1)}
				className={`next ${
					validCurrentPage < validTotalPages ? "active" : "disabled"
				}`}
			>
				<label>Next</label>
				<ArrowRightOutlined />
			</div>
		</div>
	);
};

export default Pagination;
