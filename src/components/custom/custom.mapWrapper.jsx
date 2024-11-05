const MapWrapper = ({ children, style }) => {
    return (
        <div className="map-wrapper">
            <div className="googleMapDisplay" style={style}>
                {children}
            </div>
        </div>
    );
}

export default MapWrapper;