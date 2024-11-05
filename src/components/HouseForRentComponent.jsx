import React from "react";
import "../styles/newpage.css";
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select} from 'antd';
import { FooterComponent, CustomMlFooter, HeaderContainer } from "../components";
import { PropertiesForRent } from "../components";
import { MainLayout } from '../components';
const HouseForRentComponent = () => {
    const { Option } = Select;
    return (
        <div className="newpage">
          <div className="newpage-container">
            <div className="newpage-contents">
              <div className="first-content">
                <div className="sub-content1">
                  <div className="subcontent-inputs">
                    <Input className="input-field" placeholder="Enter keyword" />
                    <Input className="input-field" placeholder="Location" />
                    <Select className="select-field" placeholder="Property Type">
                      <Option value="residential">Residential</Option>
                      <Option value="commercial">Commercial</Option>
                      <Option value="land">Land</Option>
                    </Select>
                    <Select className="select-field" placeholder="Listing Type">
                      <Option value="for-sale">For Sale</Option>
                      <Option value="for-rent">For Rent</Option>
                    </Select>
                  </div>
                </div>
                <div className="subcontent-buttons">
                  <Button className="left-button">
                    <span className="button-icon">
                      <PlusOutlined />
                    </span>
                    Looking for a certain features
                  </Button>
                  <div className="right-buttons">
                    <Button className="right-button-advanced">Advanced Search</Button>
                    <Button className="right-button" icon={<SearchOutlined />}>Search</Button>
                  </div>
                </div>
              </div>
              <div className="second-content">
                <h1>New Properties for Sale/Rent</h1>
                {/* <div className="salerent-container">
                  
                </div> */}
                <PropertiesForRent/>
                {/* <PropertiesForRent></PropertiesForRent> */}
              </div>
              <div className="third-content"> 
              <CustomMlFooter/>
              </div>
              <FooterComponent/>
            </div>
          </div>
        </div>
      );
}

export default HouseForRentComponent