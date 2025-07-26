import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ArrowRight, Heart, Eye } from "lucide-react"

type FeaturedProductsProps = {
  products: HttpTypes.StoreProduct[]
  region: HttpTypes.StoreRegion
}

export default function FeaturedProducts({
  products,
  region,
}: FeaturedProductsProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-la-fiore-feminine/30 border border-la-fiore-feminine mb-6">
            <span className="la-fiore-caption font-medium">
              Produtos em Destaque
            </span>
          </div>

          <h2 className="la-fiore-heading-2 mb-4">
            Peças Mais{" "}
            <span className="la-fiore-script text-4xl md:text-5xl">
              Desejadas
            </span>
          </h2>

          <p className="la-fiore-body-large max-w-2xl mx-auto">
            Uma seleção especial das joias mais admiradas pelas nossas clientes,
            criadas com prata 925 e acabamento impecável
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="group">
              <div className="la-fiore-card overflow-hidden group-hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  {/* Product Image */}
                  <div className="aspect-square bg-la-fiore-background/50">
                    {product.thumbnail && (
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-la-fiore-text" />
                    </button>
                    <LocalizedClientLink
                      href={`/products/${product.handle}`}
                      className="p-3 bg-la-fiore-accent rounded-full hover:bg-la-fiore-accent/90 transition-colors"
                    >
                      <Eye className="w-5 h-5 text-la-fiore-text" />
                    </LocalizedClientLink>
                  </div>

                  {/* Badge */}
                  {product.tags?.some((tag) => tag.value === "new") && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-la-fiore-accent text-la-fiore-text text-xs font-semibold rounded-full">
                      Novo
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="la-fiore-heading-4 mb-2 group-hover:text-la-fiore-accent transition-colors">
                    {product.title}
                  </h3>

                  <p className="la-fiore-body mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="la-fiore-heading-4 text-la-fiore-accent">
                      {product.variants?.[0]?.calculated_price
                        ? new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: region.currency_code.toUpperCase(),
                          }).format(
                            product.variants[0].calculated_price
                              .calculated_amount ?? 0
                          )
                        : "Consulte"}
                    </div>

                    <LocalizedClientLink
                      href={`/products/${product.handle}`}
                      className="la-fiore-caption text-la-fiore-accent hover:text-la-fiore-text transition-colors font-medium"
                    >
                      Ver detalhes
                    </LocalizedClientLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to View All */}
        <div className="text-center">
          <LocalizedClientLink
            href="/collections/all"
            className="la-fiore-button-outline inline-flex items-center text-lg px-8 py-4 rounded-lg group"
          >
            Ver Todos os Produtos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}
