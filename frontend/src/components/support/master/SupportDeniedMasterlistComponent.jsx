import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import SupportTable from "../../custom/support/SupportTable";
import SupportSubMenu from "../SupportSubMenu";
import SemiRoundBtn from "../../custom/buttons/SemiRoundBtn.custom";

import '../../../styles/support/supportMaster.css';
import { Input, Select, Tag, message } from "antd";
import Pagination from "../../custom/pagination/Pagination";
import TablePagination from "../../custom/pagination/TablePagination";

import DummyData from '../../../utils/supportDummyData/openListingDummy.json';
import { useNavigate, useOutletContext } from "react-router-dom";
import { CaretDownFilled, CarFilled } from "@ant-design/icons";

import DayJS from "dayjs";

// API
import { GetAllActiveMasterList, GetAllDeniedList, GetAllPendingMasterList } from '../../../api/Support/Listing.api';

const { Search } = Input;

const SupportDeniedMasterlistComponent = () => {
  useEffect(() => {
    GetAllForApproval()
}, []);
const { setIsMessageLoadingOpen, setIndex } = useOutletContext();

const navigate = useNavigate();

const [current, setCurrent] = useState(1);
const [pageSize, setPageSize] = useState(2);
const [originalData, setOriginalData] = useState([]);

const [filteredListings, setFilteredListings] = useState([]);
const [total, setTotal] = useState(0);

const [messageApi, contextHolder] = message.useMessage();

const columns = [
    {
        title: 'Select',
        dataIndex: 'select',
    },
    {
        title: 'Date Created',
        dataIndex: 'date',
    },
    {
        title: 'Listing ID',
        dataIndex: 'listing_id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Property Type',
        dataIndex: 'property_type',
    },
    {
        title: 'Listing Type',
        dataIndex: 'listing_type',
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
            property_status: 'ACTIVE'
        }

        setIsMessageLoadingOpen(true);
        setIndex(-1);
        openMessage('loading', 'Retrieving data...', 1);

        const getAllDenied = await GetAllDeniedList(payload);

        const data = getAllDenied.data;
        console.log("data", data);

        if (data.length !== 0) {

            const listingData = data.map((list, i) => {
                const location = list.location
                return {
                    key: i,
                    select: <SemiRoundBtn label={'Show Details'} className={'support--show-details-btn'} handleClick={() => handleShowDetails(list.listing_id)}/>,
                    date: Format_Date(list.createdAt),
                    listing_id: list.listing_id,
                    title: list.title,
                    property_type: list.property_type.type,
                    listing_type: list.listing_type.listing_type,
                    floor_area: `${list.unit_details.floor_area} sqm`,
                    price: list.unit_details.price,
                    location: `${location.city} CITY, ${location.province}`,
                    status: <Tag bordered={false} color="red" style={{ fontWeight: 500, fontSize: '14px' }}>{list.listing_status}</Tag>
                }
            });

            setTotal(listingData.length);
            setOriginalData(listingData);

            openMessage('success', getAllDenied.message, 2);
            setTimeout(() => {
                setIsMessageLoadingOpen(false);
                setIndex(100);
            }, 2500);

        } else {
            openMessage('success', getAllDenied.message, 1.5);
            setTimeout(() => {
                setIsMessageLoadingOpen(false);
                setIndex(100);
            }, 1500);
        }
        fetchData(1, pageSize);

    } catch (error) {
        const data = error.data;
        openMessage('error', data.error.message, 3);
        setIsMessageLoadingOpen(false);
        setIndex(100);
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

const handleShowDetails = (e) => {
    console.log('Show Details', e);
    const props = {
        listing_id: e,
        isEditListing: false,
        tabTitle: 'Denied Listing',
        isShowDetails: true,
    }
    navigate(
        {
            pathname: '/support/master-list/listing-details',
        },
    );
    sessionStorage.setItem('props', JSON.stringify(props));
}

  return (
    <div>
      {contextHolder}
      <div className={`support--pending-master-listing`}
        style={{ width: "85%", margin: 'auto' }}>
        <SupportSubMenu title={'Manage Denied Listings'}
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
        // dataSource={listings}
        />
        <div className="support--table-footer active-list">
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
  );
};
export default SupportDeniedMasterlistComponent;
