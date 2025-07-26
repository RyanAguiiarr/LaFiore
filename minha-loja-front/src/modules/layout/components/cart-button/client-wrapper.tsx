"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useCart } from "@lib/context/cart-context"
import { ShoppingBag } from "lucide-react"

export default function CartButtonClient() {
  const { itemCount, isLoading } = useCart()

  if (isLoading) {
    return (
      <LocalizedClientLink
        className="relative p-2 text-la-fiore-background hover:text-la-fiore-accent transition-colors"
        href="/cart"
      >
        <div className="w-5 h-5 bg-la-fiore-background/20 rounded animate-pulse"></div>
      </LocalizedClientLink>
    )
  }

  return (
    <LocalizedClientLink
      className="relative p-2 text-la-fiore-background hover:text-la-fiore-accent transition-colors group"
      href="/cart"
      data-testid="nav-cart-link"
    >
      <ShoppingBag className="w-5 h-5" />

      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-la-fiore-accent text-la-fiore-text text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}

      {/* Tooltip */}
      <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-la-fiore-text text-la-fiore-background px-3 py-1 rounded text-sm whitespace-nowrap">
          {itemCount === 0
            ? "Carrinho vazio"
            : `${itemCount} ${itemCount === 1 ? "item" : "itens"}`}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
