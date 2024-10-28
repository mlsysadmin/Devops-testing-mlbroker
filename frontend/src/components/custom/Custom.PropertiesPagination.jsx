import React, { useState } from 'react';
import { Pagination, Card, Tag } from 'antd';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12 } from '../../asset/index';
import "../../styles/custom.pagination.css";
import { CameraOutlined } from '@ant-design/icons';


const { Meta } = Card;
const properties = [
  {
    id: 1,
    image: img1,
    description: "Furnished 5 Bedroom House for Sale in Talamban",
    type: "House and Lot for Sale",
    price: "Php250,000",
    bedrooms: 5,
    bathrooms: 3,
    area: 200,

  },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 },
  { id: 10, image: img10 },
  { id: 11, image: img11 },
  { id: 12, image: img12 }
];

const PropertiesForRent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProperty = currentPage * pageSize;
  const indexOfFirstProperty = indexOfLastProperty - pageSize;
  const pagedProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  return (
    <div className="properties-for-rent-container">
      <div className="image-grid">
        {pagedProperties.map((property) => (
          <div key={property.id} className="image-container">
            <Card
              hoverable
              cover={<img alt={`Property ${property.id}`} src={property.image} />}
            >
                <Meta
                  title={property.description}
                  description={
                    <div className="property-info">
                      <span>{property.type}</span>
                      <div className="property-details">
                        <div className="property-details-price">
                          <p>Price: {property.price}</p>
                        </div>
                        <div className="properties-desc">
                          <p>Bedrooms: {property.bedrooms}</p>
                          <p>Bathrooms: {property.bathrooms}</p>
                          <p>Area: {property.area} sq.m.</p>
                        </div>
                      </div>
                      <div className="property-info-footer">
                        {/* <Tag color="geekblue">{property.type}</Tag> */}
                        <div className="camera-icon">
                          <CameraOutlined />
                          <span>10</span>
                        </div>
                        <Tag color="green" className='new-label'>New</Tag>
                      </div>
                    </div>
                  }
                />
            </Card>
          </div>
        ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={properties.length}
        onChange={handlePageChange}
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center'
        }}
      />
    </div>
  );
};

export default PropertiesForRent;