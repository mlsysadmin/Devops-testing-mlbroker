import { Outlet } from "react-router-dom";
import { SupportHeaderContainer } from "../../components";
import { Layout, message } from "antd";
import { Content } from "antd/es/layout/layout";
import FooterComponent from "../../components/layout/support/FooterComponent";
import LoadingContext, { LoadingProvider } from "../../components/LoadingContext";
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";

const SupportOutlet = () => {
  const { isAuthenticated, userDetails, logout } = useAuth();
  const [isMessageLoadingOpen, setIsMessageLoadingOpen] = useState(false);
  const [zIndex, setIndex] = useState(100);

  const [messageApi, contextHolder] = message.useMessage();

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
    console.log("Outlet Index", zIndex);
    
  },[])

  return (
    <>
      {contextHolder}
      <Layout className={`${isMessageLoadingOpen ?
        'loading--message-background' : 'layout--background'
        }`}>
        <SupportHeaderContainer zIndex={zIndex} />
        <br /><br /><br />
        {/* <Content> */}
        <Content style={{ zIndex: `${zIndex}`, position: 'relative' }}>
          {/* <Outlet/> */}
          <Outlet context={{ setIsMessageLoadingOpen, setIndex, openMessage }} />
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
};
export default SupportOutlet;
