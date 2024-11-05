import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Spin } from "antd";
import LoadingIcon from "../asset/icons/loading_bar.gif";
import { LocationFormatter } from "../utils/LocationDateFormatter";
import "../styles/map.css";
import { CapitalizeString } from "../utils/StringFunctions.utils";
const MapComponent = ({ style, oneListing }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [coordinates, setCoordinates] = useState([]);
  const [error, setError] = useState(null);

  const MapUpdater = ({ position }) => {
    const map = useMap();
    map.setView(position, 13);
    return null;
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      const formattedLocation = `${oneListing.City?.toLowerCase().includes('city') ? oneListing.City.toLowerCase().replace('city', ''): oneListing.City}, ${CapitalizeString(oneListing.ProvinceState)}`;
      // const formattedLocation = oneListing.MapLocation;
      console.log("formattedLocation", formattedLocation);
      // const formattedLocation = LocationFormatter(oneListing.City);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            formattedLocation
          )}&format=json&addressdetails=1`
        );
        console.log("response", response);
        
        const data = await response.json();
        console.log("data", data);
        
        if (data.length !== 0) {
          console.log("dsfsf");
          
          const { lat, lon } = data[0];
          setCoordinates([parseFloat(lat), parseFloat(lon)]);
        } else {
          setError("No results found");
          setCoordinates([0, 0]);
        }
      } catch (err) {
        console.log("errr", err);
        
        setError("An error occurred");
      } finally {
        setIsLoaded(false);
      }
    };

    fetchCoordinates();
  }, [oneListing.Location]);

  return (
    <>
      <Spin
        spinning={isLoaded}
        style={style}
        indicator={
          <img
            src={LoadingIcon}
            alt="loading"
            style={{ width: "50px", height: "50px" }}
          />
        }
      >
        {!isLoaded && (
          <>
            {error && <p style={{ color: 'red', fontSize: '15px', fontStyle: 'italic' }}>{error}</p>}
            <MapContainer
              center={coordinates}
              zoom={13}
              className="Brokerage-map-Container"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Circle
                center={coordinates}
                radius={1000}
                color="#d90000"
                fillColor="#d90000"
                fillOpacity={0.3}
              />
              <MapUpdater position={coordinates}/>
            </MapContainer>
          </>
        )}
      </Spin>
    </>
  );
};

export default MapComponent;
