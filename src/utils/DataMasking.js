const maskData = (data) => {
	return {
		mobileNumber: data.mobileNumber.replace(/\d(?=\d{2})/g, "*"),
		email: data.email.replace(/(.{2}).*(?=@)/, "$1****"),
		lastName: data.lastName.replace(/.(?=.{2})/g, "*"),
		firstName: data.firstName.replace(/.(?=.{2})/g, "*"),
		middleName: data.middleName.replace(/.(?=.{2})/g, "*"),
		suffix: data.suffix,
		country: data.country,
		province: data.province,
		city: data.city,
		address: data.address.replace(/.(?=.{4})/g, "*"),
		brokerQuestion: data.brokerQuestion,
		brokerYears: data.brokerYears,
	};
};


export default maskData