import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Settings } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Users", path: "/users", icon: <Users size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="w-60 bg-white border-r shadow-sm">
      <div className="p-4 text-2xl font-bold text-indigo-600">MyDashboard</div>
      <nav className="flex flex-col space-y-1 px-3">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-indigo-50 transition ${
              location.pathname === item.path
                ? "bg-indigo-100 text-indigo-600 font-medium"
                : "text-gray-700"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
