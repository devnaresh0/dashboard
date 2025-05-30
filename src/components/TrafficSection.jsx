import React from 'react';
import { Settings } from 'lucide-react';

const TrafficSection = ({ selectedPeriod, setSelectedPeriod }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    
    {/* Header with title and buttons */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Traffic</h2>
      <div className="flex space-x-2">
        {['Day', 'Month'].map(period => (
          <button
            key={period}
            className={`px-4 py-2 rounded text-sm ${selectedPeriod === period ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setSelectedPeriod(period)}
          >
            {period}
          </button>
        ))}
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <Settings size={16} />
        </button>
      </div>
    </div>

    {/* Placeholder for chart */}
    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Traffic chart would be rendered here</p>
    </div>
  </div>
);

export default TrafficSection;
