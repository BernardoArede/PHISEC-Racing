import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.1911, // Latitude do ISEC
  lng: -8.4131, // Longitude do ISEC
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="SUA_CHAVE_DE_API_AQUI"> /*
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;