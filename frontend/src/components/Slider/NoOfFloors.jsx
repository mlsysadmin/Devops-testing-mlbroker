import React, { useState } from "react";


const NoOfFloorsInputSlider = ({value, onChange}) => {

  return (
		<div className="no-floor-group">
			<div className="no-of-floors-value">
				<input
					id="no-of-floors-input"
					className="no-of-floors-input"
					type="text"
					value={value}
					readOnly
				/>
			</div>

			<div className="no-of-floors-slider-container">
				<input
					id="no-of-floors-slider"
					className="no-of-floors-slider"
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

export default NoOfFloorsInputSlider;
