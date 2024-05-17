/* eslint-disable react/prop-types */
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <div className="map">
      <MapContainer center={[46.78, 2.7]} zoom={6.5}>
        <TileLayer
          attribution="edd"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Map;
