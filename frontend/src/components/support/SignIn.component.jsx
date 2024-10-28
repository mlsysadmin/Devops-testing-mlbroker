import React, { useContext, useEffect, useState } from "react";
import logo from "../../asset/SigninLogo.png";
import "../../styles/support/Signin.css";

import SemiRoundBtn from "../custom/buttons/SemiRoundBtn.custom";
import { GoogleSignIn } from "../../api/Public/User.api";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import SignInContext from "./SupportContext";
import zIndex from "@mui/material/styles/zIndex";
import { useAuth } from "../../Context/AuthContext";

const SignIncomponent = () => {
  const { isAuthenticated } = useAuth();

  const Location = useLocation();
  const Navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const [isMessageLoadingOpen, setIsMessageLoadingOpen] = useState(false);
  const [zIndex, setZIndex] = useState(100);

  useEffect(() => {
    const prevPath = sessionStorage.getItem('previous_path') ? sessionStorage.getItem('previous_path') : null;
    if (isAuthenticated && prevPath) {
      console.log("dsfsdfd");
      Navigate({
        pathname: prevPath
      })
    }
  }, [isAuthenticated])

  const handleSignInClick = async () => {
    try {

      const response = await GoogleSignIn();

      const url = response.data.data.url;

      if (url) {
        window.location.replace(url);
      }else{
        throw new Error({
          data: {
            data:{
              error:{
                message: 'Something went wrong.'
              }
            }
          }
        })
      }

    } catch (error) {
      let errResponse = error.data.data
      openMessage('error', errResponse.error.message, 3);
      setIsMessageLoadingOpen(false);
      setZIndex(100);
    }
  };

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

  return (
    <div className={`${isMessageLoadingOpen ?
      'signin loading--message-background' : 'layout--background'
      }`}>
      {contextHolder}
      <div className="SigninContainer">
        <div className="cardContainer">
          <div className="loginInterface" style={{ zIndex: `${zIndex}` }}>
            <div className="logo">
              <img src={logo} alt="" width={80} />
            </div>
            <p>M Lhuillier Philippines</p>
            <h1>Brokerage System</h1>
            {/* <button>Google Sign-In</button> */}
            <SemiRoundBtn
              label={"Google Sign-In"}
              type="primary"
              className="sign-in--btn"
              size="large"
              handleClick={handleSignInClick}
              style={{ zIndex: `${zIndex}` }}
            />
          </div>
          <div className="version">
            <div></div>
            <p>version {process.env.REACT_APP_VERSION}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIncomponent;
