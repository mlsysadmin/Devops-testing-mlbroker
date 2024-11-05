import React, { useState } from 'react';
import '../../styles/listing-steps.css';

const ListingStepsProcess = () => {
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };

    const handlePreviewClick = () => {
        window.location.href = '/previewlisting'; // Redirect to the preview listing page
    };

    return (
        <div>
            <div className="listing-steps-process">
                <div className="process-listing-info">
                    <p>Listing ID: <strong>BRSABCDEFGHI</strong></p>
                    <p>Status: <strong>PROCESSING</strong></p>
                </div>
                <div className="process-listing-status">
                    <label className="custom-radio">
                        <input 
                            type="radio" 
                            name="status" 
                            value="review" 
                            checked={selectedStatus === 'review'} 
                            onChange={() => handleStatusChange('review')}
                        />
                        <span className="custom-radio-checkmark">
                            {selectedStatus === 'review' && '✓'}
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
                            {selectedStatus === 'sold' && '✓'}
                        </span>
                        Property Sold
                    </label>
                </div>
            </div>
            <button className="process-preview-button" onClick={handlePreviewClick}>Preview Listing</button>
        </div>
    );
};

export default ListingStepsProcess;
