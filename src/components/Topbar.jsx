import React from "react";

export default function Topbar() {
  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="rounded-full border"
        />
        <span className="font-medium">John Doe</span>
      </div>
    </header>
  );
}
