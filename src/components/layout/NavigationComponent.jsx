import React from "react";
import "../../styles/navigation.css";
import logo from '../../assets/red-ml-logo.png'
import user_icon from '../../assets/images/User_cicrle.png'
import dropdown from '../../assets/images/dropdown.png'



const NavigationHeader = () => {
    return (
      <div className="navigationheader">
        <img
          className="ml-logo-icon"
          loading="lazy"
          alt=""
          src={logo}
        />
        <div className="header">
          <div className="primary-navigation">
            <div className="secondary-navigation">
              <div className="secondary-navigation-items">
                <div className="secondary-navigation-labels">
                  <a className="sell">Sell</a>
                </div>
                <a className="new">New</a>
                <div className="secondary-navigation-labels1">
                  <a className="rent">Rent</a>
                </div>
                <a className="buy">Buy</a>
              </div>
            </div>
            <div className="primary-navigation-items">
              <a className="home-loan">Home Loan</a>
            </div>
            <div className="primary-navigation-items1">
              <a className="home-insurance">Home Insurance</a>
            </div>
            <div className="primary-navigation-items2">
              <a className="other-services">Other Services</a>
            </div>
            <div className="primary-navigation-items3">
              <a className="contact">Contact</a>
            </div>
            <div className="user-actions">
              <div className="list-property">
                <div className="list-your-property">
                  <div className="list-your-property-child" />
                  <a className="list-your-prop">List your Property</a>
                </div>
              </div>
              <div className="username">
                <div className="username-child" />
                <img className="user-cicrle-icon" alt="" src={user_icon} />
                <a className="marie">Marie</a>
                <div className="user-dropdown">
                  <img
                    className="dropdown-icon"
                    alt="dropdown"
                    src={dropdown}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NavigationHeader;





// export const Navigation = () => {
//     return (
//       <div className="navigation-header">
//         <div className="div">
//           <img
//             className="ML-logo"
//             alt="Ml logo"
//             src="https://cdn.animaapp.com/projects/64e41d552340cba66b90f01a/releases/665eb7843c2ff4e350453334/img/ml-logo@2x.png"
//           />
//           <div className="navigation">
//             <div className="navbar">
//               <div className="text-wrapper">Home Loan</div>
//               <div className="text-wrapper-2">Home Insurance</div>
//               <div className="text-wrapper-3">Other Services</div>
//               <div className="text-wrapper-4">New</div>
//               <div className="text-wrapper-5">Contact</div>
//               <div className="text-wrapper-6">Buy</div>
//               <div className="text-wrapper-7">Rent</div>
//               <div className="text-wrapper-8">Sell</div>
//             </div>
//             <div className="toprightmenu">
//               <div className="list-your-property">
//                 <div className="overlap-group">
//                   <div className="list-your-prop">List your Property</div>
//                 </div>
//               </div>
              
//               <div className="username">
//                 <div className="overlap">
//                   <UserCicrle className="user-cicrle" />
//                   <div className="text-wrapper-9">Marie</div>
//                   <img
//                     className="vector"
//                     alt="Vector"
//                     src="https://cdn.animaapp.com/projects/64e41d552340cba66b90f01a/releases/665eb7843c2ff4e350453334/img/vector-12.svg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
  
// export default Navigation;