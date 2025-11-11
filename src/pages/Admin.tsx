// // src/pages/AdminPage.tsx
// import React, { useEffect, useMemo, useState } from "react";
// import Sidebar from "@/components/admin/Sidebar";
// import Topbar from "@/components/admin/Topbar";
// import DashboardCards from "@/components/admin/DashboardCards";
// import OrdersManager from "@/components/admin/OrdersManager";
// import ProductsManager from "@/components/admin/ProductsManager";
// import ChartsPanel from "@/components/admin/ChartsPanel";
// import { loadOrders, loadProducts, saveOrders, saveProducts } from "@/lib/storage";
// import { Order, Product } from "@/lib/types";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// const AdminPage: React.FC = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     setOrders(loadOrders());
//     setProducts(loadProducts());
//   }, []);

//   useEffect(() => saveOrders(orders), [orders]);
//   useEffect(() => saveProducts(products), [products]);

//   // Quick stats
//   const totalRevenue = useMemo(() => orders.reduce((s, o) => s + (o.total || 0), 0), [orders]);
//   return (
//     <div className="min-h-screen flex bg-slate-50">
//       <Sidebar />
//       <div className="flex-1">
//         <Topbar />
//         <main className="p-6 space-y-6">
//           <DashboardCards orders={orders} products={products} revenue={totalRevenue} />
//           <ChartsPanel orders={orders} />
//           <OrdersManager orders={orders} setOrders={setOrders} />
//           <ProductsManager products={products} setProducts={setProducts} />
//         </main>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AdminPage;
