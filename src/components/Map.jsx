/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ filteredData }) {

  return (
    <div className="map">
      <MapContainer center={[46.78, 2.7]} zoom={6.5}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredData.map(marker => (
            <Marker position ={marker.geocode}>

            </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
