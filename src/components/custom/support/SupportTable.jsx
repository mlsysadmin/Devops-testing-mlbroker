import { Table } from "antd";
import React, { useState } from "react";
import '../../../styles/support/supportCustomTable.css';

const SupportTable = (props) => {
    const { columns, dataSource, rowSelection } = props;

    return (
        <div className="support--custom-table">
            <Table
                className="support-table"
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource} 
                pagination={false}
                />
        </div>
    )
}

export default SupportTable;