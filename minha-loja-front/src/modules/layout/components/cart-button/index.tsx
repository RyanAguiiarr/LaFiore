import { retrieveCart } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ShoppingBag } from "lucide-react"

const fetchCart = async (): Promise<HttpTypes.StoreCart | null> => {
  return await retrieveCart().catch(() => null)
}

export default async function CartButton() {
  const cart = await fetchCart()

  const itemCount =
    cart?.items?.reduce((acc, item) => {
      return acc + (item.quantity || 0)
    }, 0) || 0

  return (
    <LocalizedClientLink
      className="relative p-2 text-[#F6F6F6] hover:text-[#C2A75C] transition-colors group"
      href="/cart"
      data-testid="nav-cart-link"
    >
      <ShoppingBag className="w-5 h-5" />

      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#C2A75C] text-[#1A1A1A] text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}

      {/* Tooltip */}
      <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-[#1A1A1A] text-[#F6F6F6] px-3 py-1 rounded text-sm whitespace-nowrap">
          {itemCount === 0
            ? "Carrinho vazio"
            : `${itemCount} ${itemCount === 1 ? "item" : "itens"}`}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
