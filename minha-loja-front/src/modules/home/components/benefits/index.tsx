import { Shield, Truck, Heart, Award, Sparkles, RefreshCw } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Prata 925 Certificada",
    description: "Garantia de qualidade e pureza em todas as peças",
  },
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Para compras acima de R$ 299 em todo o Brasil",
  },
  {
    icon: RefreshCw,
    title: "Troca Garantida",
    description: "30 dias para trocas e devoluções sem complicação",
  },
  {
    icon: Award,
    title: "Garantia Vitalícia",
    description: "Manutenção e reparo gratuitos para sempre",
  },
  {
    icon: Heart,
    title: "Atendimento Especial",
    description: "Consultoria personalizada para suas necessidades",
  },
  {
    icon: Sparkles,
    title: "Stories VIP",
    description: "Acesso antecipado a lançamentos exclusivos",
  },
]

export default function Benefits() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-la-fiore-text mb-4">
            Por que Escolher a{" "}
            <span className="text-la-fiore-accent">La Fiore</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais do que joias, oferecemos uma experiência completa de elegância,
            qualidade e atendimento excepcional.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-la-fiore-accent/10 rounded-full mb-6 group-hover:bg-la-fiore-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-la-fiore-accent" />
                </div>

                <h3 className="text-xl font-serif font-semibold text-la-fiore-text mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
