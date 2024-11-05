import React from "react";
import CustomSupportOverviewCard from "./custom.SupportOverviewCard";
import "../../../styles/support/SupportDashboard.css";

const CustomSupportDashboardCard = ({ summary }) => {

  const OverviewCard = () => {
    return summary.map((sum, i) => {
      return (
        <CustomSupportOverviewCard
          imgSrc={sum.pic}
          totalHead={sum.total}
          valueTitle={sum.name}
          key={i}
        />
      )
    })
  }

  return (
    <div className="dashboardCard">
      <div className="dashboard--card">
        <OverviewCard/>
      </div>
    </div>
  );
};
export default CustomSupportDashboardCard;
