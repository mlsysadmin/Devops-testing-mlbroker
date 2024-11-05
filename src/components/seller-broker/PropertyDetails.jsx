import React, { useEffect, useState } from 'react';
import { Form, Typography, Radio, Space, Alert } from 'antd';
import WarningOutlined from '@ant-design/icons';
import '../../styles/seller-broker/propertyDetails.css';


const { Title, Text } = Typography;


const PropertyDetails = ({ onComplete }) => {
  const [propertyType, setPropertyType] = useState('');
  const [listingType, setListingType] = useState('');


  useEffect(() => {
    if (propertyType && listingType) {
      onComplete(true);
    } else {
      onComplete(false);
    }
  }, [propertyType, listingType, onComplete]);

  
  const propertyTypes = {
    Commercial: ['Service Office', 'Shop/Retail', 'Commercial Land/Lot'],
    Residential: ['Condominium', 'House and Lot', 'Townhouse'],
    'Industrial/etc': ['Warehouse', 'Farm Lot', 'Hotel/Resort']
  };



  const renderPropertyTypeGroup = (title, options) => (
    <div className="property-type-group">
        <Text className='property-type-title'>{title}</Text>
        <Radio.Group
            value={propertyType}
            onChange={e => setPropertyType(e.target.value)}
            className='property-type-radio-group'
        >
            {options.map(option => (
                <Radio.Button key={option} value={option}>
                    {option}
                </Radio.Button>
            ))}
        </Radio.Group>
    </div>
  );



  return (
    <div className="property-details-container">
        <div className="property-details-content">
        <Title level={3}>Property Details</Title>
            <Form layout='vertical'>

                <div className="property-row">
                    <div className="property-label">Property Type</div>
                    <div className="property-input">
                        {Object.entries(propertyTypes).map(([category, options]) => 
                        renderPropertyTypeGroup(category, options)
                        )}
                    </div>
                </div>

                <div className="property-row">
                    <div className="property-label">Listing Type</div>
                    <div className="property-input">
                        <Radio.Group
                            value={listingType}
                            onChange={e => setListingType(e.target.value)}
                            className='listing-type-radio-group'
                        >
                            <Radio.Button value='For Rent'>For Rent</Radio.Button>
                            <Radio.Button value='For Sale'>For Sale</Radio.Button>
                            <Radio.Button value='Pre-Selling'>Pre-Selling</Radio.Button>
                        </Radio.Group>
                        <Text type='secondary' style={{display:'block', marginTop:'8px', marginLeft:'35px'}}>
                            To help some buyers better, we only accept these 3 types of listing.
                        </Text>

                        <Alert
                        style={{margin:'10px'}}
                            message='A few reminders when posting a unit:'
                            description={
                            <ul>
                                <li>We DO NOT accept pre-selling properties, ONLY ready for occupancy (RFO) ones that have either been bought from a developer or have been constructed by a person for sale or rent.</li>
                                <li>If you are posting more than one (1) unit, please create one listing per unit. DO NOT advertise all your units in one (1) post. For more assistance, you refer to our photo guide or watch our video guide.</li>
                            </ul>
                            }
                            type='error'
                            showIcon={<WarningOutlined 
                            />} 
                    // does not show icon
                        />
                    </div>
                </div>

            </Form>
        </div>
    </div>
  );
};

export default PropertyDetails;