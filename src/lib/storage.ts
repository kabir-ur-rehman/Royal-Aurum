// src/lib/storage.ts

import { Order, Product } from "./types";

const ORDERS_KEY = "luxora_orders";
const PRODUCTS_KEY = "luxora_products";

// 🧾 Orders
export const loadOrders = (): Order[] => {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
  } catch {
    return [];
  }
};

export const saveOrders = (orders: Order[]) => {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
};

// 🛍️ Products
export const loadProducts = (): Product[] => {
  try {
    return JSON.parse(localStorage.getItem(PRODUCTS_KEY) || "[]");
  } catch {
    return [];
  }
};

export const saveProducts = (products: Product[]) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};
