import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import SupportTable from "../custom/support/SupportTable";
import SupportSubMenu from "./SupportSubMenu";
import SemiRoundBtn from "../custom/buttons/SemiRoundBtn.custom";

import '../../styles/support/supportMaster.css';
import { Input, Select, message, Table, Tag } from "antd";
import TablePagination from "../custom/pagination/TablePagination";

import { useNavigate, useOutletContext } from "react-router-dom";
import { CaretDownFilled, CarFilled } from "@ant-design/icons";

import DayJS from "dayjs";

// API
import { GetAllPendingMasterList } from '../../api/Support/Listing.api';

const { Search } = Input;

const SupportPreApprovalListComponent = forwardRef((props, ref) => {
    useEffect(() => {
        GetAllForApproval()
    }, []);
    const { setIsMessageLoadingOpen, setIndex } = useOutletContext();

    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(2);
    const [originalData, setOriginalData] = useState([]);

    const [filteredListings, setFilteredListings] = useState([]);
    const [total, setTotal] = useState(0);
    const [showButtons, setShowButtons] = useState(null);

    const [messageApi, contextHolder] = message.useMessage();

    const columns = [
        {
            title: 'Select',
            dataIndex: 'select',
        },
        {
            title: 'Date Applied',
            dataIndex: 'date',
        },
        {
            title: 'Pre-approval ID',
            dataIndex: 'preapproval_id',
        },
        {
            title: 'Applicant',
            dataIndex: 'applicant',
        },
        {
            title: 'Mortgage Type',
            dataIndex: 'mortgage_type',
        },
        {
            title: 'Property ID',
            dataIndex: 'property_id',
        },
        {
            title: 'Floor Area',
            dataIndex: 'floor_area',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Location',
            dataIndex: 'location',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
    ];

    const Format_Date = (date) => {
        return DayJS(date).format('DD-MM-YYYY').toString();
    }

    const GetAllForApproval = async () => {
        try {

            const payload = {
                approver_email: 'jonalyn.mobilla@gmail.com',
                listing_status: 'PENDING'
            }

            setIsMessageLoadingOpen(true);
            setIndex(-1);
            openMessage('loading', 'Retrieving data...', 1);

            const getForApproval = await GetAllPendingMasterList(payload);

            const data = getForApproval.data;

            if (data.length !== 0) {

                const listings = data.map((list, i) => {
                    const listing = list.listing;
                    const location = listing.location
                    return {
                        key: i,
                        select: <SemiRoundBtn label={'Show Details'} className={'support--show-details-btn'} />,
                        date: Format_Date(listing.createdAt),
                        preapproval_id: listing.listing_id,
                        applicant: 'Wang Yibo',
                        mortgage_type: "Buy a Home",
                        property_id: 123456,
                        floor_area: `${listing.unit_details.floor_area} sqm`,
                        price: listing.unit_details.price,
                        location: `${location.city} CITY, ${location.province}`,
                        status: <Tag bordered={true} color="cyan" style={{ fontWeight: 500, fontSize: '14px' }}>CLOSED</Tag>
                    }
                });

                setTotal(listings.length);
                setOriginalData(listings);

                openMessage('success', getForApproval.message, 2);
                setTimeout(() => {
                    setIsMessageLoadingOpen(false);
                    setIndex(100);
                    setShowButtons(true);
                }, 2500);

            } else {
                openMessage('success', getForApproval.message, 1.5);
                setTimeout(() => {
                    setIsMessageLoadingOpen(false);
                    setIndex(100);
                    setShowButtons(false);
                }, 1500);
            }
            fetchData(1, pageSize);

        } catch (error) {
            const data = error.data;
            openMessage('error', data.error.message, 3);
            setIsMessageLoadingOpen(false);
            setIndex(100);
            setShowButtons(false);
        }
    }

    useEffect(() => {
        if (originalData.length > 0) {
            fetchData(current, pageSize);
        }
    }, [originalData, current, pageSize]);

    const fetchData = (page, size) => {
        const start = (page - 1) * size;
        const end = page * size;
        const data = originalData.slice(start, end);

        setFilteredListings(data);
    };

    const onNext = () => {
        const nextPage = Math.min(current + 1, Math.ceil(total / pageSize));
        setCurrent(nextPage);
        fetchData(nextPage, pageSize);
    };

    const onPrev = () => {
        const prevPage = Math.max(current - 1, 1);
        setCurrent(prevPage);
        fetchData(prevPage, pageSize);
    };

    const onPageChange = (page, pageSize) => {
        setCurrent(page);
        setPageSize(pageSize);
        fetchData(page, pageSize);
    };

    const showEntries = () => {
        let arr = new Array(5);
        let options = [];
        let counter = 10;

        for (let index = 0; index < arr.length; index++) {
            options.push({
                label: counter,
                value: counter
            })
            counter += 10
        }

        options.push({
            label: 'All',
            value: 'All'
        })

        return options;
    }
    const key = 'updatable';
    const openMessage = (type, content, duration) => {

        messageApi.open({
            key,
            type: type,
            content: content,
            duration: duration,
            style: {
                marginTop: '10vh',
                fontSize: '17px'
            },
            className: 'support--alert-message',
        });
    };
    const ApprovalBtns = () => {
        return showButtons ? (
            <>
                <SemiRoundBtn
                    type={'primary'}
                    label={'Approve'}
                    className={'approve-btn'} />
                <SemiRoundBtn
                    type={'primary'}
                    label={'Denied'}
                    className={'denied-btn'} />
            </>
        ) : <></>
    }

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    return (
        <div>
            {contextHolder}
            <div className={`support--pending-master-listing`}
                style={{ width: "85%", margin: 'auto' }}>
                <SupportSubMenu title={'Manage Pre-Approval Requests'}
                    isShowDetails={false} />
                <div className="support--top-controls">
                    <div className="support--show-entries">
                        <p style={{ fontWeight: 500 }}>Show entries</p>
                        {' '}
                        <Select
                            options={showEntries()}
                            size="large"
                            defaultValue={10}
                            suffixIcon={<CaretDownFilled />}
                            className="support--select-entries" />
                    </div>
                    <div className="support--search-wrapper">
                        <Input
                            placeholder="Search"
                            // onSearch={onSearch}
                            style={{
                                width: 300,
                            }}
                            size="large"
                        />
                    </div>
                </div>
                <SupportTable
                    columns={columns}
                    dataSource={filteredListings}
                    rowSelection={rowSelection}
                // dataSource={listings}
                />
                <div className="support--table-footer">
                    <div className="support--approval-btns">
                        <ApprovalBtns />
                    </div>
                    <TablePagination
                        className={'support--table-pagination'}
                        total={total}
                        onPageChange={onPageChange}
                        currentPage={current}
                        pageSize={pageSize}
                        onPrevClick={onPrev}
                        onNextClick={onNext}
                    />
                </div>
            </div>
        </div>
    )
});

export default SupportPreApprovalListComponent;