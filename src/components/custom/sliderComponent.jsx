import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

const App = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [minValue2, setMinValue2] = useState(0);
  const [maxValue2, setMaxValue2] = useState(100);

  const handleSliderChange = (newMinValue, newMaxValue, newMinValue2, newMaxValue2) => {
    setMinValue(newMinValue);
    setMaxValue(newMaxValue);
    setMinValue2(newMinValue2);
    setMaxValue2(newMaxValue2);
  };

  return (
    <div>
      <MultiRangeSlider
        min={0}
        max={100}
        step={1}
        minValue={minValue}
        maxValue={maxValue}
        minValue2={minValue2}
        maxValue2={maxValue2}
        label={false}
        ruler={false}
        style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
        barLeftColor="rgb(217, 0, 0, 26%)"
        barInnerColor="rgb(70, 10, 10, 81%)"
        barRightColor="#D90000"
        thumbLeftColor="lime"
        thumbRightColor="lime"
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default App;
