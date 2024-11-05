import { Button } from 'antd'
import React from 'react'

const TextBtn = ({ style, label}) => {
  return (
    <Button style={style} type='text'>{label}</Button>
  )
}

export default TextBtn