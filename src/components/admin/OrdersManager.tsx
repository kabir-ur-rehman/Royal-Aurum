import React, { useMemo, useState } from "react";
import { Order } from "@/lib/types";
import { saveOrders } from "@/lib/storage";
import { toast } from "sonner";

const PAGE_SIZE = 8;

const OrdersManager: React.FC<{ orders: Order[]; setOrders: (o: Order[]) => void }> = ({ orders, setOrders }) => {
  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let arr = orders.slice().reverse();
    if (statusFilter !== "All") arr = arr.filter((o) => o.status === statusFilter);
    if (q.trim()) {
      const s = q.toLowerCase();
      arr = arr.filter((o) => o.id.toLowerCase().includes(s) || (o.customerName || "").toLowerCase().includes(s));
    }
    return arr;
  }, [orders, q, statusFilter]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const changeStatus = (id: string, status: Order["status"]) => {
    const updated = orders.map((o) => (o.id === id ? { ...o, status } : o));
    setOrders(updated);
    saveOrders(updated);
    toast.success(`Order ${id} is now ${status}`);
  };

  const remove = (id: string) => {
    if (!confirm("Delete order?")) return;
    const updated = orders.filter((o) => o.id !== id);
    setOrders(updated);
    saveOrders(updated);
    toast.success("Order removed");
  };

  return (
    <section className="bg-white dark:bg-slate-800 p-4 rounded shadow-sm">
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-4">
        <div className="flex gap-2">
          <input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Search orders..." className="border px-2 py-1 rounded" />
          <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }} className="border px-2 py-1 rounded">
            <option>All</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>

        <div className="text-sm text-slate-500">Showing {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)} - {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}</div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-500">
            <tr>
              <th className="p-2">Order</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.length === 0 && <tr><td colSpan={7} className="p-4 text-center">No orders</td></tr>}
            {pageItems.map((o) => (
              <tr key={o.id} className="border-t">
                <td className="p-2 font-mono">{o.id}</td>
                <td>{new Date(o.date).toLocaleString()}</td>
                <td>{o.customerName || "Guest"}</td>
                <td>{o.items.length}</td>
                <td className="font-bold">₨{o.total.toLocaleString()}</td>
                <td>
                  <span className={`px-2 py-1 rounded text-xs ${
                    o.status === "Delivered" ? "bg-green-100 text-green-700" :
                    o.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                    "bg-red-100 text-red-700"
                  }`}>{o.status}</span>
                </td>
                <td className="text-right">
                  <div className="flex gap-2 justify-end">
                    <button onClick={() => changeStatus(o.id, "Processing")} className="px-2 py-1 border rounded">Process</button>
                    <button onClick={() => changeStatus(o.id, "Delivered")} className="px-2 py-1 border rounded">Deliver</button>
                    <button onClick={() => remove(o.id)} className="px-2 py-1 border rounded text-red-600">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div>
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1} className="px-3 py-1 border rounded mr-2">Prev</button>
          <button onClick={() => setPage((p) => Math.min(p + 1, pages))} disabled={page >= pages} className="px-3 py-1 border rounded">Next</button>
        </div>
        <div className="text-sm text-slate-500">Page {page} of {pages}</div>
      </div>
    </section>
  );
};

export default OrdersManager;
