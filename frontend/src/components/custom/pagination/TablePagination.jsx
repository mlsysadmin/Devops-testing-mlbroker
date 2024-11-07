import React, { useEffect } from "react";
import { Pagination } from 'antd';

const TablePagination = ({
    className,
    total,
    pageSize,
    onPageChange,
    currentPage,
    onPrevClick,
    onNextClick
}) => {

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a onClick={onPrevClick} disabled={currentPage === 1}>Previous</a>;
        }
        if (type === 'next') {
            return <a onClick={onNextClick} disabled={currentPage === Math.ceil(total / pageSize)}>Next</a>;
        }
        return originalElement;
    };

    return (
        <Pagination
            total={total}
            itemRender={itemRender}
            showTitle={false}
            className={className}
            pageSize={pageSize}
            onChange={onPageChange}
        />
    )
}

export default TablePagination;