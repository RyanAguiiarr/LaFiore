import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Anéis",
    href: "/collections/aneis",
    image: "/categories/aneis.jpg",
    description: "Símbolos de amor e compromisso",
    highlight: "Mais de 50 modelos",
  },
  {
    name: "Colares",
    href: "/collections/colares",
    image: "/categories/colares.jpg",
    description: "Elegância que toca o coração",
    highlight: "Peças exclusivas",
  },
  {
    name: "Brincos",
    href: "/collections/brincos",
    image: "/categories/brincos.jpg",
    description: "Luz que emoldura seu rosto",
    highlight: "Para todos os estilos",
  },
  {
    name: "Pulseiras",
    href: "/collections/pulseiras",
    image: "/categories/pulseiras.jpg",
    description: "Delicadeza em cada movimento",
    highlight: "Tendência 2025",
  },
]

export default function CategoriesShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-la-fiore-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-la-fiore-text mb-4">
            Encontre Sua <span className="text-la-fiore-accent">Categoria</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada peça La Fiore é criada para momentos únicos. Descubra qual
            categoria representa melhor seu estilo e personalidade.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <LocalizedClientLink
              key={category.name}
              href={category.href}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-sm group-hover:shadow-xl transition-all duration-500">
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-la-fiore-feminine to-la-fiore-muted/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4 opacity-60">
                        {index === 0 && "💍"}
                        {index === 1 && "📿"}
                        {index === 2 && "💎"}
                        {index === 3 && "✨"}
                      </div>
                      <div className="text-la-fiore-text/60 text-sm">
                        Imagem em breve
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-serif font-bold text-la-fiore-text group-hover:text-la-fiore-accent transition-colors">
                      {category.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-la-fiore-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  <p className="text-gray-600 mb-3">{category.description}</p>

                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-la-fiore-accent/10 text-la-fiore-accent text-sm font-medium">
                    {category.highlight}
                  </div>
                </div>
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </section>
  )
}
