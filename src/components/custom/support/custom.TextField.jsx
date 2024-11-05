import React, { useState, useEffect } from "react";
import "../../../styles/support/CustomTextField.css";
import { Input, Te } from "antd";

const { TextArea } = Input;

const CustomTextField = (props) => {
  const { labelName, inputStyle, inputType, disabled , value, name, handleFieldChange, handleKeyDown, handleOnBlur} = props;
  return (
    <div className="text-field">
      <label htmlFor={labelName} className="textLabel">
        {labelName}
      </label>
      {inputType === "input" ? (
        <Input
          type="text"
          name={name}
          placeholder={`Enter ${labelName}`}
          className="textField"
          disabled={disabled}
          size="large"
          value={value}
          onChange={(value) => handleFieldChange(value, name, 'input')}
          onKeyDown={handleKeyDown}
          onBlur={handleOnBlur}
        />
      ) : (
        <TextArea
          disabled={disabled}
          name={name}
          placeholder={
            labelName === "Address"
              ? "Enter Complete Address"
              : `Enter ${labelName}`
          }
          className="textField"
          value={value}
          onChange={(value) => handleFieldChange(value, name, 'input')}
        />
      )}
    </div>
  );
};
export default CustomTextField;
