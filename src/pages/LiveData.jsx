// LiveData.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const DataCard = ({ label, value }) => {
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    // Set the previous value whenever the value changes
    setPrevValue(value);
  }, [value]);

  const iconStyle = {
    fontSize: '3rem',
    transition: 'transform 0.5s ease',
    transform: value > prevValue ? 'rotate(0deg)' : 'rotate(180deg)',
  };

  return (
    <div className="max-w-xs mx-auto mt-4 bg-white border p-4 rounded-md shadow-md transition-transform transform scale-100 hover:scale-105">
      <div className="flex items-center justify-center mb-4">
        <FontAwesomeIcon icon={faTachometerAlt} style={{ ...iconStyle, color: 'black' }} />
      </div>
      <h3 className="text-lg font-semibold">{label} Value:</h3>
      <div className="flex items-center mt-2">
        <p className={`text-xl ${value > prevValue ? 'text-green-500' : 'text-red-500'}`}>
          {value}
        </p>
      </div>
    </div>
  );
};

const LiveData = () => {
  const [xdata, setXData] = useState(0);
  const [ydata, setYData] = useState(0);
  const [zdata, setZData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://harlequin-gharial-slip.cyclic.app');
        setXData(response.data.data[0].x);
        setYData(response.data.data[0].y);
        setZData(response.data.data[0].z);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Simulating live data updates every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto p-8 flex flex-col items-center md:flex-row md:justify-center">
      <DataCard label="X" value={xdata} />
      <DataCard label="Y" value={ydata} />
      <DataCard label="Z" value={zdata} />
    </div>
  );
};

export default LiveData;
