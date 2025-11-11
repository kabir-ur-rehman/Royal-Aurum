import React from "react";
import DashboardCards from "@/components/admin/DashboardCards";
import ChartsPanel from "@/components/admin/ChartsPanel";
import OrdersManager from "@/components/admin/OrdersManager";
import { loadOrders } from "@/lib/storage";
import { useEffect, useState } from "react";
import { Order } from "@/lib/types";
import AdminLayout from "@/components/admin/AdminLayout";

const Dashboard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(loadOrders());
  }, []);

  return (
    <AdminLayout>
      <DashboardCards orders={orders} />
      <ChartsPanel orders={orders} />
      <OrdersManager orders={orders} setOrders={setOrders} />
    </AdminLayout>
  );
};

// 👇 this line is important
export default Dashboard;
