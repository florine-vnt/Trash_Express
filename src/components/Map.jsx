/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ filteredData }) {
  console.log("ceci est filteredData", filteredData);

  return (
    <div className="map">
      <MapContainer center={[46.78, 2.7]} zoom={6.2}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
        />

        {filteredData.map((marker) => (
          <NavLink className="trash-card" to={`/detail/${marker.id}`}>
            <Marker position={marker.geocode}>
              <Popup><b>{marker.commune}</b></Popup>
            </Marker>
          </NavLink>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
