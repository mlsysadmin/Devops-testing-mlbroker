import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Circle, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/listing-form.css";
import { GetCities, GetProvince, GetCountry } from "../api/Public/Location.api";
import "../styles/ViewListing.module.css";

const MapUpdater = ({ position }) => {
	const map = useMap();
	map.setView(position, 13);
	return null;
};

const LocationDetailsComponent = ({ onComplete, setPropertyFields }) => {
	const [getCountry, setGetCountry] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState("Philippines");
	const [getProvince, setGetProvince] = useState([]);
	const [selectedProvince, setSelectedProvince] = useState("");
	const [getCities, setGetCities] = useState([]);
	const [selectedCity, setSelectedCity] = useState("");
	const [subdivision, setSubdivision] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [address, setAddress] = useState("");
	const [radius, setRadius] = useState(500);
	const [filteredCities, setFilteredCities] = useState([]);
	const [position, setPosition] = useState([10.3414, 123.9125]);

	// const allCountries = async () => {
	// 	const datares = await GetCountry();
	// 	setGetCountry(datares);
	// 	// console.log("These are countries:", datares);
	// };

	const allCities = async () => {
		const datarescities = await GetCities();
		setGetCities(datarescities);
		// console.log("These are cities:", datarescities);
	};

	const allProvince = async () => {
		const dataresprovince = await GetProvince();
		console.log("dataresprovince: ", dataresprovince);

		setGetProvince(dataresprovince);
		// console.log("These are provinces:", dataresprovince);
	};

	const handleProvinceChange = (province) => {
		setSelectedProvince(province);
		console.log("Selected Province:", province);

		const provinceData = getProvince.find(
			(p) =>
				p.name.charAt(0).toUpperCase() + p.name.slice(1).toLowerCase() ===
				province
		);
		if (provinceData) {
			const provinceId = provinceData.addressL1Id;
			const filtered = getCities.filter((city) => {
				// console.log("Checking city:", city.name);
				return city.addressL1Id === provinceId;
			});
			// console.log("Filtered cities:", filtered);
			setFilteredCities(filtered);
		} else {
			setFilteredCities([]);
		}
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				await Promise.all([allCities(), allProvince()]);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const handleAddressChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "country":
				setSelectedCountry(value);
				break;
			case "province":
				setSelectedProvince(value);
				break;
			case "city":
				setSelectedCity(value);
				handleMapLocationChange(value, selectedProvince);
				break;
			case "zipcode":
				setZipcode(value);
				break;
			case "address":
				setAddress(value);
				break;
			default:
				break;
		}
	};

	const handleMapLocationChange = async (city, province) => {
		try {
			const maploc = `${city}, ${province}`;

			const response = await fetch(
				`https://nominatim.openstreetmap.org/search?format=json&q=${maploc}`
			);
			const data = await response.json();

			if (data && data.length > 0) {
				const { lat, lon } = data[0];
				setPosition([parseFloat(lat), parseFloat(lon)]);
				console.log("position:", position);
			} else {
				console.log("No results found for this location");
			}
		} catch (error) {
			console.error("Error fetching geocode data: ", error);
		}
	};

	useEffect(() => {
		const isComplete =
			selectedCountry && selectedProvince && selectedCity && zipcode && address;
		onComplete(isComplete);

		if (isComplete) {
			setPropertyFields({
				City: selectedCity,
				ProvinceState: selectedProvince,
				Country: selectedCountry,
				Zipcode: zipcode,
				MapLocation: `${selectedCity}, ${selectedProvince}`,
				Location: address,
			});
		}
	}, [
		selectedCountry,
		selectedProvince,
		selectedCity,
		zipcode,
		address,
		onComplete,
	]);

	const pascalTextFormatter = (text) => {
		return text
			.split(" ")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(" ");
	};

	return (
		<div className="location-details">
			<div className="location-label">Location</div>
			<div className="form-group-details">
				<div className="location-form-groups">
					<label htmlFor="country" className="form-label">
						Country
					</label>
					<select
						name="country"
						id="country"
						disabled
						placeholder="Select Country"
						className="location-form-inputs"
						value={selectedCountry}
						onChange={handleAddressChange}
						style={{ backgroundColor: "rgb(164,161,161, 27%)" }}
					>
						{/* <option value="" disabled selected hidden>
							Select Country
						</option> */}
						<option value="Philippines" disabled>
							Philippines
						</option>
						{/* {getCountry.map((country, index) => (
							<option
								key={index}
								value={
									country.name.charAt(0).toUpperCase() +
									country.name.slice(1).toLowerCase()
								}
							>
								{country.name.charAt(0).toUpperCase() +
									country.name.slice(1).toLowerCase()}
							</option>
						))} */}
					</select>
				</div>
				<div className="location-form-groups">
					<label htmlFor="province" className="form-label">
						Province/State
					</label>
					<select
						name="province"
						id="province"
						className="location-form-inputs"
						value={selectedProvince}
						onChange={(e) => handleProvinceChange(e.target.value)}
					// onChange={handleAddressChange}
					>
						<option value="" disabled selected hidden>
							Select Province
						</option>
						{getProvince.map((province, index) => (
							<option key={index} value={pascalTextFormatter(province.name)}>
								{pascalTextFormatter(province.name)}
							</option>
						))}
					</select>
				</div>
				<div className="location-form-groups">
					<label htmlFor="city" className="form-label">
						City/Town
					</label>
					<select
						name="city"
						id="city"
						className="location-form-inputs"
						value={selectedCity}
						onChange={handleAddressChange}
					>
						<option value="" disabled selected hidden>
							Select City
						</option>
						{filteredCities.map((city, index) => (
							<option key={index} value={pascalTextFormatter(city.name)}>
								{pascalTextFormatter(city.name)}
							</option>
						))}
					</select>
				</div>
				<div className="location-form-groups">
					<label htmlFor="zipcode" className="form-label">
						Zipcode
					</label>
					<input
						type="text"
						name="zipcode"
						id="zipcode"
						className="location-form-inputs"
						value={zipcode}
						onChange={handleAddressChange}
					/>
				</div>
			</div>
			<div className="below-div">
				<div className="end-form-group">
					<label htmlFor="address" className="second-form-label">
						Building Name/Street
					</label>
					<input
						type="text"
						id="address"
						name="address"
						className="form-input"
						placeholder="Enter Building Name/Street"
						value={address}
						onChange={handleAddressChange}
					/>
				</div>
				<div className="end-form-group">
					<label htmlFor="map-location" className="second-form-labels">
						Map Location
					</label>
				</div>
				<div className="embedd-map">
					<MapContainer center={position} zoom={13}>
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						/>
						<Circle center={position} radius={radius} color="#d90000"
							fillColor="#d90000"
							fillOpacity={0.3} />
						<MapUpdater position={position} />
					</MapContainer>
				</div>
			</div>
		</div>
	);
};

export default LocationDetailsComponent;
