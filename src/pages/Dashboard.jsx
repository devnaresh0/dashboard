import React, { useState } from 'react';
import Sidebar from '../components/Siderbar';
import Header from '../components/Header';
import MetricCard from '../components/MetricCard';
import TrafficSection from '../components/TrafficSection';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Month');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <MetricCard title="Users" value="26K" change="(-12.4% ↓)" color="from-blue-600 to-purple-600" gradient chart />
            <MetricCard title="Income" value="$6,200" change="(40.9% ↑)" color="from-blue-400 to-blue-600" gradient chart />
            <MetricCard title="Conversion Rate" value="2.49%" change="(84.7% ↑)" color="from-orange-400 to-orange-500" gradient chart />
            <MetricCard title="Sessions" value="44K" change="(-23.6% ↓)" color="from-pink-500 to-red-500" gradient />
          </div>
          <TrafficSection selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
