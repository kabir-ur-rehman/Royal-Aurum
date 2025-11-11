import React from "react";
import { Order } from "@/lib/types";

const DashboardCards: React.FC<{ orders: Order[] }> = ({ orders }) => {
  const revenue = orders.reduce((s, o) => s + (o.total || 0), 0);
  const pending = orders.filter((o) => o.status === "Pending").length;
  const customers = new Set(orders.map((o) => o.customerName ?? "Guest")).size;

  // Handle CSV Upload
  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split("\n").map((line) => line.trim());
      const headers = lines[0].split(",");

      const products = lines.slice(1).map((line) => {
        const values = line.split(",");
        const product: Record<string, string> = {};
        headers.forEach((h, i) => {
          product[h.trim()] = values[i]?.trim() || "";
        });
        return product;
      });

      console.log("📦 Parsed Products from CSV:", products);
      alert(`${products.length} products parsed from CSV! Check console for details.`);
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-4 py-2 rounded shadow-gold transition-smooth">
          Add Product
        </button>

        <button className="bg-secondary text-secondary-foreground hover:bg-muted font-semibold px-4 py-2 rounded shadow-gold transition-smooth">
          Edit Product
        </button>

        <button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-semibold px-4 py-2 rounded shadow-gold transition-smooth">
          Delete Product
        </button>

        {/* Upload CSV Button */}
        <label className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-4 py-2 rounded shadow-gold transition-smooth cursor-pointer">
          Upload CSV
          <input
            type="file"
            accept=".csv"
            onChange={handleCSVUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Total Orders" value={orders.length} />
        <Card title="Revenue" value={`₨${revenue.toLocaleString()}`} />
        <Card title="Pending" value={pending} />
        <Card title="Customers" value={customers} />
      </div>
    </div>
  );
};

const Card: React.FC<{ title: string; value: React.ReactNode }> = ({ title, value }) => (
  <div className="p-4 bg-card text-card-foreground rounded shadow-sm">
    <div className="text-sm text-muted-foreground">{title}</div>
    <div className="text-2xl font-bold">{value}</div>
  </div>
);

export default DashboardCards;
