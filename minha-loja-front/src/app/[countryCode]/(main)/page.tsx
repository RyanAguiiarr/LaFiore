import { Metadata } from "next"
import { HttpTypes } from "@medusajs/types"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import CategoriesShowcase from "@modules/home/components/categories-showcase"
import Benefits from "@modules/home/components/benefits"
import { getRegion } from "@lib/data/regions"
import { listProducts } from "@lib/data/products"

export const metadata: Metadata = {
  title: "La Fiore - Joias de Prata Exclusivas",
  description:
    "Descubra joias de prata 925 exclusivas que contam sua história. Anéis, colares, brincos e pulseiras com design único e qualidade excepcional.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  // Buscar dados necessários
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // Buscar produtos em destaque
  const {
    response: { products },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      limit: 8,
    },
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <FeaturedProducts products={products} region={region} />

      {/* Categories Showcase */}
      <CategoriesShowcase />

      {/* Benefits */}
      <Benefits />

      {/* Newsletter Section */}
      <section className="py-16 bg-la-fiore-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="la-fiore-heading-2 text-la-fiore-background mb-4">
            Fique por Dentro das{" "}
            <span className="la-fiore-script text-4xl">Novidades</span>
          </h2>
          <p className="la-fiore-body-large text-la-fiore-background/90 mb-8">
            Receba em primeira mão nossos lançamentos, promoções exclusivas e
            dicas de estilo
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="la-fiore-input flex-1 bg-white border-0 focus:ring-2 focus:ring-la-fiore-accent"
            />
            <button className="la-fiore-button px-6 py-3 whitespace-nowrap">
              Inscrever-se
            </button>
          </div>

          <p className="la-fiore-caption text-la-fiore-background/70 mt-4">
            Prometemos não enviar spam. Você pode cancelar a qualquer momento.
          </p>
        </div>
      </section>
    </div>
  )
}
