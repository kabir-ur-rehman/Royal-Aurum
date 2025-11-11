import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, ShoppingCart, Package, Users } from "lucide-react";

const Sidebar: React.FC = () => {
  const nav = [
    { to: "/admin", label: "Dashboard", icon: <LayoutDashboard /> },
    { to: "/admin/orders", label: "Orders", icon: <ShoppingCart /> },
    { to: "/admin/products", label: "Products", icon: <Package /> },
    { to: "/admin/customers", label: "Customers", icon: <Users /> },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r">
      <div className="p-4 text-lg font-bold">Royal Aurum Admin</div>
      <nav className="p-2 space-y-1">
        {nav.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 ${
                isActive ? "bg-slate-100 dark:bg-slate-800 font-semibold" : ""
              }`
            }
          >
            <span className="w-5 h-5">{n.icon}</span>
            <span>{n.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
