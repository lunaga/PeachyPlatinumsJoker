"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"

interface Product {
    id: string
    name: string
    description: string
    price: number
    category: string
    image: string
    }

    interface CartItem extends Product {
    quantity: number
    }

    interface CartState {
    items: CartItem[]
    total: number
    itemCount: number
    }

    type CartAction =
    | { type: "ADD_ITEM"; payload: Product }
    | { type: "REMOVE_ITEM"; payload: string }
    | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
    | { type: "CLEAR_CART" }

    const initialState: CartState = {
    items: [],
    total: 0,
    itemCount: 0,
    }

    function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "ADD_ITEM": {
        const existingItem = state.items.find((item) => item.id === action.payload.id)

        if (existingItem) {
            const updatedItems = state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
            )
            return {
            ...state,
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
            itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
            }
        }

        const newItems = [...state.items, { ...action.payload, quantity: 1 }]
        return {
            ...state,
            items: newItems,
            total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
            itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        }
        }

        case "REMOVE_ITEM": {
        const newItems = state.items.filter((item) => item.id !== action.payload)
        return {
            ...state,
            items: newItems,
            total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
            itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        }
        }

        case "UPDATE_QUANTITY": {
        const updatedItems = state.items
            .map((item) =>
            item.id === action.payload.id ? { ...item, quantity: Math.max(0, action.payload.quantity) } : item,
            )
            .filter((item) => item.quantity > 0)

        return {
            ...state,
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
            itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        }
        }

        case "CLEAR_CART":
        return initialState

        default:
        return state
    }
    }

    interface CartContextType {
    state: CartState
    addItem: (product: Product) => void
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    clearCart: () => void
    generateWhatsAppMessage: () => string
    sendOrderToWhatsApp: () => void
    }

    const CartContext = createContext<CartContextType | undefined>(undefined)

    export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addItem = (product: Product) => {
        dispatch({ type: "ADD_ITEM", payload: product })
    }

    const removeItem = (id: string) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    const updateQuantity = (id: string, quantity: number) => {
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    const generateWhatsAppMessage = () => {
        const gamesList = state.items
        .map(
            (item) =>
            `• ${item.name} ${item.quantity > 1 ? `(x${item.quantity})` : ""} - £${(item.price * item.quantity).toFixed(2)}`,
        )
        .join("\n")

        return `🎮 Thank you for requesting our platinum trophy services! 🎮

    📋 Your requests are:
    ${gamesList}

    💰 Total: £${state.total.toFixed(2)}

    ✨ We will now send you the payment link. Thank you for trusting PeachyPlatinums to get your platinum trophies!

    🏆 PeachyPlatinums - Platinum Trophy Experts`
    }

    const sendOrderToWhatsApp = () => {
        const message = generateWhatsAppMessage()
        const phoneNumber = "5491164716955" // +54 9 11 6471-6955
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

        // Abrir WhatsApp en una nueva ventana/pestaña
        window.open(whatsappUrl, "_blank")
    }

    return (
        <CartContext.Provider
        value={{
            state,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            generateWhatsAppMessage,
            sendOrderToWhatsApp,
        }}
        >
        {children}
        </CartContext.Provider>
    )
    }

    export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}
