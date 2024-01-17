import React from 'react';
import LocationForm from './components/LocationForm';
import Map from './components/Map';

const App = () => {
  return (
    <div>
      <h1>Location Sharing App</h1>
      <LocationForm />
      <Map />
    </div>
  );
};

export default App;