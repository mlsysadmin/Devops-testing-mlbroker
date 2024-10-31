import React, { useEffect, useState } from "react";
import SupportDashboardCard from "../custom/support/custom.SupportDashboardCard";
import "../../styles/support/SupportDashboard.css";
import SupportSubMenu from "./SupportSubMenu";

import Approval from '../../asset/icons/approval.png';
import Bookmark from '../../asset/icons/bookmark.png';
import Heart from '../../asset/icons/heart.png';
import House from '../../asset/icons/house.png';
import Star from '../../asset/icons/star.png';
import { GetSummary } from "../../api/Support/Listing.api";
import { useAuth } from "../../Context/AuthContext";
import { message } from "antd";
import { useOutletContext } from "react-router-dom";

const SupportDashboardComponent = ({userDetails}) => {

  const [messageApi, contextHolder] = message.useMessage();

  const { setIsMessageLoadingOpen, setIndex } = useOutletContext();


  const [totalSales, setTotalSales] = useState("10,000");
  const [totalCommission, setTotalCommission] = useState("20,000");
  const [summary, setSummary] = useState([
    {
      total: 0,
      name: "Property Sold",
      pic: House
    },
    {
      total: 0,
      name: "Highlighted",
      pic: Star
    },
    {
      total: 0,
      name: "Active Listing",
      pic: Bookmark
    },
    {
      total: 0,
      name: "Listing Saves",
      pic: Heart
    },
    {
      total: 0,
      name: "For Approval",
      pic: Approval
    },
    {
      total: 0,
      name: "New Listing",
      pic: "https://c.animaapp.com/eS0o2HKP/img/new-bookmark-1.svg"
    }]);

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
  useEffect(() => {
    const fetchTotalSummary = async () => {
      try {
        
        const email = userDetails.email;
        const payload = {
          approver_email: email,
          listing_status: "PENDING"
        }
        setIsMessageLoadingOpen(true);
        setIndex(-1);
        openMessage('loading', 'Retrieving data...', 2);

        const response = await GetSummary(payload);
        const data = response.data;

        setSummary((prev) => {
          return [
            {
              total: data.sold,
              name: "Property Sold",
              pic: House
            },
            {
              total: 0,
              name: "Highlighted",
              pic: Star
            },
            {
              total: data.active,
              name: "Active Listing",
              pic: Bookmark
            },
            {
              total: data.save,
              name: "Listing Saves",
              pic: Heart
            },
            {
              total: data.for_approval,
              name: "For Approval",
              pic: Approval
            },
            {
              total: data.new,
              name: "New Listing",
              pic: "https://c.animaapp.com/eS0o2HKP/img/new-bookmark-1.svg"
            }
          ]
        })

        setIsMessageLoadingOpen(false);
        setIndex(100);
        openMessage('success', response.message, 2);

      } catch (error) {
        console.error(error);
        const data = error.data;
        openMessage('error', 'Dashboard is not updated', 3);
        setIsMessageLoadingOpen(false);
        setIndex(100);
      }
    }

    fetchTotalSummary();
  }, []);

  return (
    <>
      {contextHolder}
      <div className="SupportDashboard">
        <SupportSubMenu title={'Dashboard'} isShowDetails={false} />
        <div className="SupportDashboard__container"></div>
        <div className="supportingDashboard">
          <div className="overview">OVERVIEW</div>
          <div className="listing-count">Listing Count &amp; Highlight</div>
        </div>
        <SupportDashboardCard
          summary={summary}
        />
        <div className="performanceDiv">
          <div className="performance-title">PERFORMANCE</div>
          <div className="totalDiv">
            <div className="totalCard">
              <div className="totalSales">Total Sales</div>
              <div className="amountOfTotalSales"><span>₱ </span>{totalSales}</div>
              <p className="salesParagraph">
                Potential Sales Opportunities is derived from the sum of the
                prices of the properties your clients are interested at.
              </p>
            </div>
            <div className="totalCard">
              <div className="totalSales">Total Commission</div>
              <div className="amountOfTotalSales"><span>₱ </span>{totalCommission}</div>
              <p className="salesParagraph">
                Potential Commission is the potential profit you{"'"}ll make
                when you close the deals with your clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportDashboardComponent;
