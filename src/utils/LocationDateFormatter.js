const DateFormatter = (dataString) =>{
    const date = new Date(dataString);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}-${day}-${year}`
}
const LocationFormatter = (location) =>{
    return `${location.city}, ${location.province}`
    
}

const FormatLocation = (city, province, country) => {
    let address = "";

    if (city && province && country) {
       address = `${city}, ${province}, ${country}`;
    }else if (city && !province && country) {
        address = `${city}, ${country}`;
    }else if (city && province && !country) {
        address = `${city}, ${province}`;
    }else if (!city && province && country) {
        address = `${province}, ${city}`;
    }else{
        address = `${city}`
    }

    return address;
}
export {DateFormatter, LocationFormatter, FormatLocation}