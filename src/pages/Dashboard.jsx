import React from "react";
import ChartCard from "../components/ChartCard";
import DataTable from "../components/DataTable";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ChartCard />
      <DataTable />
    </div>
  );
}
