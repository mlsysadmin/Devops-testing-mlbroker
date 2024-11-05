import React from "react";
import { SupportDashboard, SupportComponent } from "../../components/index";
import { useAuth } from "../../Context/AuthContext";

const SupportDashboardPage = () => {
  const { userDetails } = useAuth();

  return (
    <div>
      <SupportComponent userDetails={userDetails}/>
    </div>
  );
};

export default SupportDashboardPage;