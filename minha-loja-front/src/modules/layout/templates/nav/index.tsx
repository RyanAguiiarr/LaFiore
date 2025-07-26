"use client"

import { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButtonClient from "@modules/layout/components/cart-button/client-wrapper"
import { Search, User, Heart, Menu, X, Sparkles } from "lucide-react"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const categories = [
    { name: "Anéis", href: "/collections/aneis" },
    { name: "Colares", href: "/collections/colares" },
    { name: "Brincos", href: "/collections/brincos" },
    { name: "Pulseiras", href: "/collections/pulseiras" },
    { name: "Conjuntos", href: "/collections/conjuntos" },
    { name: "Lançamentos", href: "/collections/lancamentos" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-la-fiore-primary shadow-sm">
      {/* Top Bar */}
      <div className="bg-la-fiore-text text-la-fiore-background py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs">
            <p className="hidden sm:block">
              Frete grátis para compras acima de R$ 299
            </p>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Sparkles className="w-3 h-3 mr-1 text-la-fiore-highlight" />
                Stories VIP
              </span>
              <span>|</span>
              <span>Atendimento: (11) 99999-9999</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-la-fiore-background hover:text-la-fiore-accent transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo */}
          <LocalizedClientLink href="/" className="flex items-center">
            <div className="text-center">
              <div className="la-fiore-heading-3 text-la-fiore-background tracking-wide">
                La<span className="la-fiore-script text-2xl ml-1">Fiore</span>
              </div>
              <p className="la-fiore-caption text-la-fiore-accent font-light tracking-[0.2em] uppercase">
                Joias de Prata
              </p>
            </div>
          </LocalizedClientLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <LocalizedClientLink
                key={category.name}
                href={category.href}
                className="text-la-fiore-background hover:text-la-fiore-accent transition-colors duration-200 font-medium relative group"
              >
                {category.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-la-fiore-accent transition-all duration-300 group-hover:w-full"></span>
              </LocalizedClientLink>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-la-fiore-background hover:text-la-fiore-accent transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <LocalizedClientLink
              href="/account"
              className="p-2 text-la-fiore-background hover:text-la-fiore-accent transition-colors"
            >
              <User className="w-5 h-5" />
            </LocalizedClientLink>

            {/* Wishlist */}
            <button className="p-2 text-la-fiore-background hover:text-la-fiore-accent transition-colors">
              <Heart className="w-5 h-5" />
            </button>

            {/* Cart */}
            <CartButtonClient />
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-la-fiore-muted/20">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar joias..."
                className="la-fiore-input w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-la-fiore-primary border-t border-la-fiore-muted/20">
          <div className="px-4 py-6 space-y-4">
            {categories.map((category) => (
              <LocalizedClientLink
                key={category.name}
                href={category.href}
                className="block text-la-fiore-background hover:text-la-fiore-accent transition-colors py-2 border-b border-la-fiore-muted/10 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </LocalizedClientLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
