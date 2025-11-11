import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import DashboardCards from "@/components/admin/DashboardCards";
import OrdersManager from "@/components/admin/OrdersManager";
import ChartsPanel from "@/components/admin/ChartsPanel";
import { loadOrders } from "@/lib/storage";
import { Order } from "@/lib/types";

const AdminPage: React.FC = () => {
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

export default AdminPage;
