import { Input } from 'antd';
import React from 'react'

const RoundInput = ({ placeholder, style, classname, 
  onInputChange, value, onInputBlur }) => {
  return (
    <Input placeholder={placeholder} 
    style={style} className={classname} 
    onChange={onInputChange} value={value} 
    onBlur={onInputBlur} />
  )
}

export default RoundInput;