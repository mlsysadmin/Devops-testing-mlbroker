import React from 'react'
import DashboardComponent from '../components/DashboardComponent';
import FooterComponent from '../components/layout/FooterComponent';
import CustomMlFooter from '../components/custom/Custom.Mlfooter';

const Dashboard = () => {
  return (
    <>
      <DashboardComponent />
      {/* <div id='dashboard-footer'>
        <CustomMlFooter />
        <FooterComponent />
      </div> */}
    </>
  )
}

export default Dashboard;