"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  id: string;
  title: string;
  price: string;
  qty: number;
  image?: string;
};

type CartContextType = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  totalItems: number;
  totalPrice: string;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function parseNumber(price: string) {
  return Number(price.replace(/[NRs\s.,]/g, "")) || 0;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem("nse_cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("nse_cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = (item: Omit<CartItem, "qty">, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found) return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + qty } : p));
      return [...prev, { ...item, qty }];
    });
  };

  const remove = (id: string) => setItems((p) => p.filter((x) => x.id !== id));
  const updateQty = (id: string, qty: number) => setItems((p) => p.map((x) => (x.id === id ? { ...x, qty } : x)));
  const clear = () => setItems([]);

  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = (() => {
    const total = items.reduce((s, i) => s + parseNumber(i.price) * i.qty, 0);
    return `NRs. ${total.toLocaleString()}`;
  })();

  return (
    <CartContext.Provider value={{ items, add, remove, updateQty, clear, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
