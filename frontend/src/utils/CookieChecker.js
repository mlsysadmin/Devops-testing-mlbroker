const isCookiePresent = (cookieName) => {
	const cookies = document.cookie.split(";");

	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].trim();
		if (cookie.startsWith(cookieName + "=")) {
			return true;
		}
	}
	return false;
};

const getCookieData = () => {
	const cookieString = document.cookie;
	if (cookieString === "") {
		return null;
	}

	const cookieList = cookieString.split(";");

	let accountDetails = null;

	cookieList.forEach((cookie) => {
		const [name, value] = cookie.split("=");
		const decodedValue = decodeURIComponent(value.trim());

		if (name.trim() === "account_details") {
			accountDetails = JSON.parse(decodedValue);
		}
	});

	return accountDetails;
};


export { isCookiePresent, getCookieData };