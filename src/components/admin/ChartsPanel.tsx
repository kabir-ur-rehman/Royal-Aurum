import React, { useMemo } from "react";
import { Order } from "@/lib/types";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const ChartsPanel: React.FC<{ orders: Order[] }> = ({ orders }) => {
  const monthly = useMemo(() => {
    const map: Record<string, { month: string; revenue: number; orders: number }> = {};
    for (const o of orders) {
      const d = new Date(o.date);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      if (!map[key]) map[key] = { month: key, revenue: 0, orders: 0 };
      map[key].revenue += o.total;
      map[key].orders += 1;
    }
    return Object.values(map).sort((a, b) => a.month.localeCompare(b.month));
  }, [orders]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <div className="p-4 bg-white dark:bg-slate-800 rounded">
        <h3 className="font-semibold mb-2">Monthly Revenue</h3>
        <div style={{ height: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthly}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line dataKey="revenue" stroke="#4f46e5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-4 bg-white dark:bg-slate-800 rounded">
        <h3 className="font-semibold mb-2">Orders Trend</h3>
        <div style={{ height: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthly}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartsPanel;
