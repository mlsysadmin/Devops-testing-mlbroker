import { Select } from 'antd';
import React, { Children } from 'react'

const RoundSelect = ({
	options,
	placeholder,
	size,
	style,
	classname,
	suffixIcon,
	children,
	value,
	onSelectionChange
}) => {
	return (
		<Select
			options={options}
			placeholder={placeholder}
			size={size}
			style={style}
			className={classname}
			suffixIcon={suffixIcon}
			value={value}
			onChange={onSelectionChange}
		>
      {children}
    </Select>
	);
};

export default RoundSelect;