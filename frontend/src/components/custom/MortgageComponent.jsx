
import React from 'react'
import { HomeFilled, DollarOutlined } from "@ant-design/icons";

const MortComponent = (
  mortTitle,
  mortSubTitle
) => {
  return (
    <div className="mortContent">
      <h1>{mortTitle}</h1>
      <p>{mortSubTitle}</p>
      <div>
        <div>
          <HomeFilled />
        </div>
        <div>
          <DollarOutlined />
        </div>
      </div>
    </div>
  )
}

export default MortComponent