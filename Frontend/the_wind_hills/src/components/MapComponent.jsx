import  { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.748817, // Example latitude (New York)
  lng: -73.985428, // Example longitude (New York)
};

const MapComponent = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Handle script load
  const handleScriptLoad = () => {
    setMapLoaded(true);
  };

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your actual Google Maps API key
      onLoad={handleScriptLoad}
    >
      {mapLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          {/* You can add markers or other map features here */}
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div>Loading Map...</div>
      )}
    </LoadScript>
  );
};

export default MapComponent;
