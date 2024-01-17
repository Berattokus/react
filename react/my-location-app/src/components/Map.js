import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const userLocations = useSelector((state) => state.locations.userLocations);

  // Set the initial position of the map
  const center = [0, 0];

  // Render the map and display userLocations using Leaflet
  return (
    <MapContainer center={center} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {userLocations.map((location) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
        >
          <Popup>{`${location.username}: ${location.lat}, ${location.lng}`}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;