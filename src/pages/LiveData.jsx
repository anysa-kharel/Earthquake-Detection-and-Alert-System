// LiveDataPage.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LiveData = () => {
  const [liveData, setLiveData] = useState({ x: 0, y: 0, z: 0 });
  const [historicalData, setHistoricalData] = useState([]); // Placeholder for historical data

  // Dummy function to simulate live data updates
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Simulate live data updates
      setLiveData({
        x: Math.random() * 10,
        y: Math.random() * 10,
        z: Math.random() * 10,
      });

      // Simulate historical data updates
      setHistoricalData(prevData => [...prevData, Math.random() * 10]);

    }, 5000); // Update every 5 seconds

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const liveDataChart = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
      {
        label: 'Live Data',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [liveData.x, liveData.y, liveData.z],
      },
    ],
  };

  const historicalDataChart = {
    labels: Array.from({ length: historicalData.length }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Historical Data',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,0,0,0.4)',
        borderColor: 'rgba(255,0,0,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255,0,0,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255,0,0,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: historicalData,
      },
    ],
  };

  return (
    <div>
      <h2>Live Seismic Data</h2>

      {/* Live Data Cards */}
      <div className="flex justify-around mb-8">
        <div className="bg-gray-200 p-4 rounded">
          <h3>X-Axis</h3>
          <p>{liveData.x}</p>
        </div>
        <div className="bg-gray-200 p-4 rounded">
          <h3>Y-Axis</h3>
          <p>{liveData.y}</p>
        </div>
        <div className="bg-gray-200 p-4 rounded">
          <h3>Z-Axis</h3>
          <p>{liveData.z}</p>
        </div>
      </div>

      {/* Live Data Chart */}
      <div>
        <h3>Live Data Chart</h3>
        <Line data={liveDataChart} />
      </div>

      {/* Historical Data Chart */}
      <div className="mt-8">
        <h3>Historical Data Chart</h3>
        <Line data={historicalDataChart} />
      </div>
    </div>
  );
};

export default LiveData;
