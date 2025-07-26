import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRight, Github, Star, Sparkles } from "lucide-react"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-la-fiore-primary/90 to-la-fiore-text/80 z-10" />
        <img
          src="/hero-jewelry.jpg"
          alt="Joias La Fiore"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-la-fiore-accent/20 border border-la-fiore-accent/30 mb-8">
            <Sparkles className="w-4 h-4 text-la-fiore-accent mr-2" />
            <span className="text-la-fiore-background text-sm font-medium">
              Coleção Exclusiva 2025
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="la-fiore-heading-1 text-la-fiore-background mb-6 text-shadow-soft">
            Joias que Contam
            <span className="block la-fiore-script text-5xl md:text-7xl">
              Sua História
            </span>
          </h1>

          {/* Subtitle */}
          <p className="la-fiore-body-large text-la-fiore-background/90 mb-8 max-w-3xl mx-auto">
            Descubra peças exclusivas em prata 925 que transformam momentos
            especiais em memórias eternas
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <LocalizedClientLink
              href="/collections/lancamentos"
              className="la-fiore-button inline-flex items-center text-lg px-8 py-4 rounded-lg group"
            >
              Explorar Coleção
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/collections/aneis"
              className="la-fiore-button-outline inline-flex items-center text-lg px-8 py-4 rounded-lg text-la-fiore-background border-la-fiore-background hover:bg-la-fiore-background hover:text-la-fiore-text"
            >
              Ver Anéis
            </LocalizedClientLink>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 text-la-fiore-background/80">
            <div className="flex items-center">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-la-fiore-accent fill-current"
                  />
                ))}
              </div>
              <span className="ml-2 text-sm">4.9/5</span>
            </div>
            <div className="h-4 w-px bg-la-fiore-background/30" />
            <span className="text-sm">Mais de 10.000 clientes satisfeitas</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-la-fiore-background/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-la-fiore-background/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
