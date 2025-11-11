import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { loadOrders } from "@/lib/storage";
import { Order } from "@/lib/types";

interface Customer {
  name: string;
  email?: string;
  totalOrders: number;
  totalSpent: number;
}

const Customers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const orders = loadOrders();
    const grouped: Record<string, Customer> = {};

    orders.forEach((order: Order) => {
      const name = order.customerName || "Guest";
      if (!grouped[name]) {
        grouped[name] = {
          name,
          email: order.customerEmail,
          totalOrders: 0,
          totalSpent: 0,
        };
      }
      grouped[name].totalOrders += 1;
      grouped[name].totalSpent += order.total;
    });

    setCustomers(Object.values(grouped));
  }, []);

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">👤 Customers</h1>

        <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-lg shadow-md">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Orders</th>
                <th className="p-3 text-left">Total Spent (₨)</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.name} className="border-t border-slate-200 dark:border-slate-700">
                  <td className="p-3 font-semibold">{c.name}</td>
                  <td className="p-3">{c.email || "N/A"}</td>
                  <td className="p-3">{c.totalOrders}</td>
                  <td className="p-3 font-semibold">{c.totalSpent.toLocaleString()}</td>
                </tr>
              ))}
              {customers.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-gray-500">
                    No customers found.
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

export default Customers;
