import React, { useState } from "react";


const BathroomInputSlider = ({value, onChange}) => {

  return (
    <div className="bathroom-group">
      <div className="bathroom-value">
        <input
          id="bathroom-input"
          className="bathroom-input"
          type="text"
          value={value}
          readOnly
        />
      </div>

      <div className="bathroom-slider-container">
        <input
          id="bathroom-slider"
          className="bathroom-slider"
          type="range"
          min="0"
          max="5"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BathroomInputSlider;
