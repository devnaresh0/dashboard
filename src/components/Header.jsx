import React from 'react';
import { Menu, Bell, Settings } from 'lucide-react';

const Header = () => (
  <header className="bg-white border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-between">
      
      {/* Left: menu button and breadcrumb */}
      <div className="flex items-center space-x-4">
        <button className="lg:hidden">
          <Menu size={24} />
        </button>
        <nav className="text-sm text-gray-500">
          <span className="text-blue-600">Home</span> / Dashboard
        </nav>
      </div>

      {/* Right: icons and avatar */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-500">0</span>
        <Bell size={20} className="text-gray-500" />
        <Settings size={20} className="text-gray-500" />
        <div className="w-8 h-8 bg-red-500 rounded-full"></div>
      </div>
    </div>
  </header>
);

export default Header;
