"use client";

import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  type ReactNode,
} from "react";
import type { CartItem, MenuItem } from "@/types";

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { item: MenuItem; quantity: number; instructions: string } }
  | { type: "REMOVE_ITEM"; payload: string } // menu_item id
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "UPDATE_INSTRUCTIONS"; payload: { id: string; instructions: string } }
  | { type: "CLEAR_CART" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { item, quantity, instructions } = action.payload;
      const existing = state.items.findIndex((i) => i.menu_item.id === item.id);
      if (existing >= 0) {
        const updated = [...state.items];
        updated[existing] = {
          ...updated[existing],
          quantity: updated[existing].quantity + quantity,
        };
        return { items: updated };
      }
      return { items: [...state.items, { menu_item: item, quantity, special_instructions: instructions }] };
    }
    case "REMOVE_ITEM":
      return { items: state.items.filter((i) => i.menu_item.id !== action.payload) };
    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return { items: state.items.filter((i) => i.menu_item.id !== id) };
      }
      return {
        items: state.items.map((i) =>
          i.menu_item.id === id ? { ...i, quantity } : i
        ),
      };
    }
    case "UPDATE_INSTRUCTIONS":
      return {
        items: state.items.map((i) =>
          i.menu_item.id === action.payload.id
            ? { ...i, special_instructions: action.payload.instructions }
            : i
        ),
      };
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: MenuItem, quantity?: number, instructions?: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateInstructions: (id: string, instructions: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce(
    (sum, i) => sum + i.menu_item.price * i.quantity,
    0
  );

  const addItem = useCallback(
    (item: MenuItem, quantity = 1, instructions = "") => {
      dispatch({ type: "ADD_ITEM", payload: { item, quantity, instructions } });
    },
    []
  );

  const removeItem = useCallback((id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  }, []);

  const updateInstructions = useCallback((id: string, instructions: string) => {
    dispatch({ type: "UPDATE_INSTRUCTIONS", payload: { id, instructions } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  return (
    <CartContext.Provider
      value={{ items: state.items, itemCount, subtotal, addItem, removeItem, updateQuantity, updateInstructions, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
