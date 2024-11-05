import React from "react";
import NodataAvailableImage from '../asset/noDataFound-bg.png';
import '../styles/noDataAvailable.css';

const NoDataAvailable = ({ message }) => {
    return (
        <div className="no-data--wrapper">
            <div className="no-data--container">
                <div className="no-data--img">
                    <img src={NodataAvailableImage} alt={message} width={500} />
                </div>
            </div>
            <div className="no-data--message">
                <p>{message}</p>
            </div>
        </div>
    )
}

export default NoDataAvailable;