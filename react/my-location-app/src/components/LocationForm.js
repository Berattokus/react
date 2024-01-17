import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLocationSharing, stopLocationSharing } from '../redux/locationSlice';

const LocationForm = () => {
  const dispatch = useDispatch();
  const [duration, setDuration] = useState('');

  const handleStartSharing = () => {
    dispatch(startLocationSharing({ duration: parseInt(duration, 10) }));
  };

  const handleStopSharing = () => {
    dispatch(stopLocationSharing());
  };

  return (
    <div>
      <label>Share Location for (minutes):</label>
      <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
      <button onClick={handleStartSharing}>Start Sharing</button>
      <button onClick={handleStopSharing}>Stop Sharing</button>
    </div>
  );
};

export default LocationForm;