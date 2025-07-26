"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"

type CartItem = {
  id: string
  quantity: number
  title?: string
  price?: number
  thumbnail?: string
}

type CartContextType = {
  items: CartItem[]
  itemCount: number
  isLoading: boolean
  addItem: (item: CartItem) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    // Simular carregamento inicial do carrinho
    // Aqui você integraria com o Medusa.js para buscar dados reais
    const loadCart = async () => {
      try {
        // await fetchCartFromMedusa()
        setItems([])
      } catch (error) {
        console.error("Erro ao carregar carrinho:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCart()
  }, [])

  const addItem = (item: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      }
      return [...prevItems, item]
    })
  }

  const removeItem = (itemId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId)
      return
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const value: CartContextType = {
    items,
    itemCount,
    isLoading,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart deve ser usado dentro de um CartProvider")
  }
  return context
}
