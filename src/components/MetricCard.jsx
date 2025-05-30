import React from 'react';
import { MoreVertical } from 'lucide-react';

// Bar chart shown only on "Sessions" card
const BarChart = () => {
  const barHeights = [0.6, 0.8, 0.4, 1, 0.7, 0.9, 0.5, 0.8, 0.3, 0.6, 0.9, 0.7];
  return (
    <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end h-8">
      {barHeights.map((height, i) => (
        <div
          key={i}
          className="bg-white/30 rounded-sm"
          style={{ height: `${height * 100}%`, width: 6 }}
        />
      ))}
    </div>
  );
};

// Simple SVG line chart shown when chart prop is true
const ChartSVG = () => (
  <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30">
    <svg width="100%" height="100%" viewBox="0 0 300 60" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="0,40 50,35 100,25 150,20 200,30 250,25 300,35" />
    </svg>
  </div>
);

const MetricCard = ({ title, value, change, color, chart = false, gradient = false }) => {
  // Choose background: gradient or solid color
  const bgClass = gradient
    ? `bg-gradient-to-br ${color}`
    : `bg-${color}-500`;

  return (
    <div className={`${bgClass} rounded-lg p-6 text-white relative overflow-hidden`}>
      {/* Title, value, and options button */}
      <header className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-sm opacity-90">{change}</p>
          <p className="text-xs opacity-75 mt-1">{title}</p>
        </div>
        <button className="text-white/60 hover:text-white">
          <MoreVertical size={20} />
        </button>
      </header>

      {/* Show line chart if requested */}
      {chart && <ChartSVG />}
      {/* Show bars only for Sessions card */}
      {title === 'Sessions' && <BarChart />}
    </div>
  );
};

export default MetricCard;
