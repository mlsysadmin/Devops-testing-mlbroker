import { Tag } from 'antd'
import React from 'react'

const Tags = ({ tagLabel, color, className, checkable, checked, style, handleChange, listingId }) => {
  return (
    checkable ?
      <Tag.CheckableTag color={color} className={className} checked={checked} style={style} onChange={(checked) => handleChange(checked, tagLabel, listingId)}>
        {tagLabel}
      </Tag.CheckableTag>
      :
      <Tag color={color} className={className} style={style}>
        {tagLabel}
      </Tag>
  )
}

export default Tags