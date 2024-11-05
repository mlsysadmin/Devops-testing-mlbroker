import React, { useState } from 'react';
import '../../styles/listing-steps.css'; // Make sure to create a CSS file for styles

const ListingDenied = () => {
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };

    return (
      
        <div className="listing-steps-denied">
            <div className="denied-listing-info">
                <p>Listing ID: <strong>BRSABCDEFGHI</strong></p>
                <p>Status: <strong>DENIED</strong></p>
            </div>
            <div className="denied-listing-status">
                <label className="custom-radio">
                    <input 
                        type="radio" 
                        name="status" 
                        value="review" 
                        checked={selectedStatus === 'review'} 
                        onChange={() => handleStatusChange('review')}
                    />
                    <span className="custom-radio-checkmark">
                        {selectedStatus === 'review' && 'X'}
                    </span>
                    Review & Approval
                </label>
                <label className="custom-radio">
                    <input 
                        type="radio" 
                        name="status" 
                        value="sold" 
                        checked={selectedStatus === 'sold'} 
                        onChange={() => handleStatusChange('sold')}
                    />
                    <span className="custom-radio-checkmark">
                        {selectedStatus === 'sold' && 'X'}
                    </span>
                    Property Sold
                </label>
            </div>
           
        </div>
        
    );
};

export default ListingDenied;
