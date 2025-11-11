import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { loadOrders, saveOrders } from "@/lib/storage";
import { Order } from "@/lib/types";

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setOrders(loadOrders());
  }, []);

  // 🔍 Filter orders by ID or customer name
  const filteredOrders = orders.filter(
    (o) =>
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      (o.customerName && o.customerName.toLowerCase().includes(search.toLowerCase()))
  );

  // 🔄 Update order status
  const handleStatusChange = (id: string, newStatus: string) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status: newStatus } : o
    );
    // setOrders(updated);
    // saveOrders(updated);
  };

  // 🗑 Delete order
  const handleDelete = (id: string) => {
    const updated = orders.filter((o) => o.id !== id);
    setOrders(updated);
    saveOrders(updated);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">🛒 Manage Orders</h1>
          <input
            type="text"
            placeholder="Search by Order ID or Name..."
            className="border rounded-md px-3 py-2 w-64 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-lg shadow-md">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Items</th>
                <th className="p-3 text-left">Total (₨)</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="border-t border-slate-200 dark:border-slate-700">
                    <td className="p-3 font-mono">{order.id}</td>
                    <td className="p-3">{order.customerName || "Guest"}</td>
                    <td className="p-3">{new Date(order.date).toLocaleDateString()}</td>
                    <td className="p-3">{order.items.length}</td>
                    <td className="p-3 font-semibold">{order.total.toLocaleString()}</td>
                    <td className="p-3">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        className="border rounded-md px-2 py-1 text-sm"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="text-red-600 hover:text-red-800 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-6 text-center text-gray-500" colSpan={7}>
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Orders;
