import React from 'react';
import {
  MdDashboard,
  MdRadioButtonChecked,
  MdEdit,
  MdBarChart,
  MdStar,
  MdNotifications,
  MdWidgets,
  MdExpandMore,
} from 'react-icons/md';

const Sidebar = () => (
  <div className="w-64 bg-gray-900 text-white">
    
    {/* Logo section */}
    <div className="p-4">
      <div className="flex items-center space-x-2">
        <div className="bg-white rounded p-1">
          <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">C</span>
          </div>
        </div>
        <span className="font-bold text-lg">COREUI</span>
        <span className="text-sm text-gray-400">REACT.JS</span>
      </div>
    </div>

    {/* Menu sections */}
    <nav className="mt-8">

      {/* Section title */}
      <div className="px-4 mb-4">
        <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Components</h3>
      </div>

      {/* Navigation items */}
      <div className="space-y-1">
        {[
          { icon: <MdDashboard />, label: 'Base' },
          { icon: <MdRadioButtonChecked />, label: 'Buttons' },
          { icon: <MdEdit />, label: 'Forms' },
          { icon: <MdBarChart />, label: 'Charts' },
          { icon: <MdStar />, label: 'Icons', dropdown: true },
          { icon: <MdNotifications />, label: 'Notifications', dropdown: true },
          { icon: <MdWidgets />, label: 'Widgets', badge: 'NEW' },
        ].map(({ icon, label, dropdown, badge }) => (
          <div
            key={label}
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer relative"
          >
            <span className="mr-3 text-lg">{icon}</span>
            {label}
            {dropdown && <MdExpandMore className="ml-auto text-gray-400" />}
            {badge && (
              <span className="ml-auto bg-blue-500 text-xs px-2 py-1 rounded">{badge}</span>
            )}
          </div>
        ))}
      </div>

      {/* Extra section title */}
      <div className="px-4 mt-8 mb-4">
        <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Extras</h3>
      </div>
    </nav>
  </div>
);

export default Sidebar;
