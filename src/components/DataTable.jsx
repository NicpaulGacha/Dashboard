import React from "react";

const users = [
  { id: 1, name: "Alice", email: "alice@mail.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@mail.com", role: "User" },
  { id: 3, name: "Clara", email: "clara@mail.com", role: "Moderator" },
];

export default function DataTable() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm w-full overflow-x-auto">
      <h2 className="text-lg font-semibold mb-2">Recent Users</h2>
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{u.name}</td>
              <td className="px-4 py-2">{u.email}</td>
              <td className="px-4 py-2">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
