'use strict'

const CapitalizeString = (word) => {

  let capitalize = word.charAt(0).toUpperCase();


  let sliceConcat = capitalize + word.slice(1);

  return sliceConcat;
}
const CapitalizeStringwithSymbol = (str) => {
	if (!str) return "";

	return str
		.split(/[\s/]+/)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join("/");
};

const NotAvailableReturn = (detail) => {

  let isAvailable = detail ? detail : <span style={{ fontStyle: 'italic' }}>N/A</span>;

  return isAvailable;
}

function isPastAMonth(date) {
  if (!date) {
    return false
  }

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  const today = new Date();
  const creationDate = new Date(date);
  // const creationDate = new Date(date);

  const timeDifference = today - creationDate; // difference in milliseconds

  const daysDifference = timeDifference / (1000 * 3600 * 24);

  return daysDifference > getDaysInMonth(today.getFullYear(), today.getMonth()); // Property is past 30 days created - true

}

const GetPropertyTitle = (projectName, unitName) => {

  const project_name = projectName.includes("NA".toLocaleLowerCase()) || projectName ? "" : projectName;

  return `${project_name} ${unitName}`.trim()

}

const FillLocationFilter = (listings) => {

  try {
    const falsy = [null, undefined, ""];

    const distinctProvince = listings.filter(p => !falsy.includes(p.ProvinceState))
      .filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.ProvinceState.toLowerCase() === value.ProvinceState.toLowerCase())
      )
      .map((item, i) => {
        return {
          key: i,
          label: CapitalizeString(item.ProvinceState.toLowerCase()),
          value: item.ProvinceState.toLowerCase(),
        };
      })
      .sort((a, b) => a.value.localeCompare(b.value));

    // const distinctCity = listings.filter((value, index, self) =>
    //   index === self.findIndex((t) => t.city === value.city)).map((item, i) => {
    //     return {
    //       label: item.city.toLowerCase().includes("city") ? `${CapitalizeString(item.city.toLowerCase().replace('city', ""))}City` : `${CapitalizeString(item.city.toLowerCase())} City`,
    //       value: item.city.toLocaleLowerCase().replace('city', "").trim()
    //     }
    //   }).sort((a, b) => a.value.localeCompare(b.value))

    // // setFilterLocation(distinctCity);
    return distinctProvince;

  } catch (error) {
    console.log("location", error);
    return [];
  }
}

const SortPrice = (a, b) => {

  const parse = (num) => parseFloat(num.replace(/,/g, ''))
  return parse(a.price) - parse(b.price);
}

const SortByText = (a, b) => {
  return a > b ? 1 : -1;
}

const SortListings = (sortKey, sortListing, listings) => {
  if (sortKey == "price-asc") {
    sortListing = listings.sort((a, b) => SortPrice(b, a));
  } else if (sortKey == "price-desc") {
    sortListing = listings.sort((a, b) => SortPrice(a, b));
  } else if (sortKey == "new" || sortKey == "relevant") {
    sortListing = listings.sort((a, b) => SortByText(b.date, a.date));
  } else if (sortKey == "old") {
    sortListing = listings.sort((a, b) => SortByText(a.date, b.date))
  } else if (sortKey == "title-asc") {
    sortListing = listings.sort((a, b) => SortByText(a.title, b.title))
  } else if (sortKey == "title-desc") {
    sortListing = listings.sort((a, b) => SortByText(b.title, a.title))
  } else {
    sortListing = listings;
  }

  return sortListing
}

const CapitalizeEachWord = (word) => {
  let capitalizeEachWord = "";

  if (word === undefined) {
    capitalizeEachWord = "";
  }else{
    let w = ""
    word.trim().replace(/[\_-]/g, " ").split(' ').forEach((st) => {
      w += CapitalizeString(st) + " ";
    })

    capitalizeEachWord = w
  }
  console.log(capitalizeEachWord);

  capitalizeEachWord.trim();
  
  return capitalizeEachWord;

}

export {
  CapitalizeString,
  NotAvailableReturn,
  isPastAMonth,
  GetPropertyTitle,
  FillLocationFilter,
  SortPrice,
  SortByText,
  SortListings,
  CapitalizeStringwithSymbol,
  CapitalizeEachWord
}