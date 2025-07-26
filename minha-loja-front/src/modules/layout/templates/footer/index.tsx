import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Clock,
  Shield,
  CreditCard,
  Truck,
  Award,
} from "lucide-react"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  const footerLinks = {
    produtos: [
      { name: "Anéis", href: "/collections/aneis" },
      { name: "Colares", href: "/collections/colares" },
      { name: "Brincos", href: "/collections/brincos" },
      { name: "Pulseiras", href: "/collections/pulseiras" },
      { name: "Conjuntos", href: "/collections/conjuntos" },
      { name: "Lançamentos", href: "/collections/lancamentos" },
    ],
    atendimento: [
      { name: "Central de Ajuda", href: "/help" },
      { name: "Política de Troca", href: "/returns" },
      { name: "Garantia Vitalícia", href: "/warranty" },
      { name: "Cuidados com suas Joias", href: "/care" },
      { name: "Tabela de Medidas", href: "/sizing" },
      { name: "Fale Conosco", href: "/contact" },
    ],
    empresa: [
      { name: "Nossa História", href: "/about" },
      { name: "Compromisso Sustentável", href: "/sustainability" },
      { name: "Certificação Prata 925", href: "/certification" },
      { name: "Trabalhe Conosco", href: "/careers" },
      { name: "Programa de Afiliados", href: "/affiliates" },
      { name: "Imprensa", href: "/press" },
    ],
  }

  return (
    <footer className="bg-la-fiore-primary text-la-fiore-background">
      {/* Newsletter Section */}
      <div className="border-b border-la-fiore-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="la-fiore-heading-3 mb-4">
              Seja uma{" "}
              <span className="la-fiore-script text-la-fiore-accent text-4xl">
                VIP
              </span>
            </h3>
            <p className="la-fiore-body text-la-fiore-background/80 mb-8 max-w-2xl mx-auto">
              Receba em primeira mão nossos lançamentos exclusivos, promoções
              especiais e dicas de cuidados para suas joias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="la-fiore-input flex-1 bg-white/10 border-la-fiore-background/20 text-la-fiore-background placeholder:text-la-fiore-background/60 focus:bg-white/20"
              />
              <button className="la-fiore-button bg-la-fiore-accent hover:bg-la-fiore-accent/90 text-la-fiore-text whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <LocalizedClientLink href="/" className="inline-block mb-6">
              <div className="text-center">
                <div className="la-fiore-heading-3 text-la-fiore-background tracking-wide">
                  La
                  <span className="la-fiore-script text-3xl ml-1 text-la-fiore-accent">
                    Fiore
                  </span>
                </div>
                <p className="la-fiore-caption text-la-fiore-accent font-light tracking-[0.2em] uppercase">
                  Joias de Prata
                </p>
              </div>
            </LocalizedClientLink>

            <p className="la-fiore-body text-la-fiore-background/80 mb-6 max-w-sm">
              Há mais de 10 anos criando joias únicas em prata 925 que contam
              histórias e eternizam momentos especiais.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-3 text-la-fiore-accent" />
                <span className="text-la-fiore-background/80">
                  Rua das Joias, 123 - Jardins, São Paulo - SP
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-la-fiore-accent" />
                <span className="text-la-fiore-background/80">
                  (11) 99999-9999
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3 text-la-fiore-accent" />
                <span className="text-la-fiore-background/80">
                  contato@lafiore.com.br
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-3 text-la-fiore-accent" />
                <span className="text-la-fiore-background/80">
                  Seg à Sex: 9h às 18h
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/la.fiore.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-la-fiore-accent/10 rounded-full flex items-center justify-center hover:bg-la-fiore-accent/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-la-fiore-accent" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-la-fiore-accent/10 rounded-full flex items-center justify-center hover:bg-la-fiore-accent/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-la-fiore-accent" />
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="la-fiore-heading-4 text-la-fiore-background mb-6">
              Produtos
            </h4>
            <ul className="space-y-3">
              {footerLinks.produtos.map((link) => (
                <li key={link.name}>
                  <LocalizedClientLink
                    href={link.href}
                    className="la-fiore-body text-la-fiore-background/70 hover:text-la-fiore-accent transition-colors"
                  >
                    {link.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service Links */}
          <div>
            <h4 className="la-fiore-heading-4 text-la-fiore-background mb-6">
              Atendimento
            </h4>
            <ul className="space-y-3">
              {footerLinks.atendimento.map((link) => (
                <li key={link.name}>
                  <LocalizedClientLink
                    href={link.href}
                    className="la-fiore-body text-la-fiore-background/70 hover:text-la-fiore-accent transition-colors"
                  >
                    {link.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="la-fiore-heading-4 text-la-fiore-background mb-6">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <LocalizedClientLink
                    href={link.href}
                    className="la-fiore-body text-la-fiore-background/70 hover:text-la-fiore-accent transition-colors"
                  >
                    {link.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-la-fiore-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-la-fiore-accent/10 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-la-fiore-accent" />
              </div>
              <p className="la-fiore-caption text-la-fiore-background/80">
                Prata 925 Certificada
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-la-fiore-accent/10 rounded-full flex items-center justify-center mb-3">
                <Truck className="w-6 h-6 text-la-fiore-accent" />
              </div>
              <p className="la-fiore-caption text-la-fiore-background/80">
                Frete Grátis Brasil
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-la-fiore-accent/10 rounded-full flex items-center justify-center mb-3">
                <CreditCard className="w-6 h-6 text-la-fiore-accent" />
              </div>
              <p className="la-fiore-caption text-la-fiore-background/80">
                Parcele em 10x
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-la-fiore-accent/10 rounded-full flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-la-fiore-accent" />
              </div>
              <p className="la-fiore-caption text-la-fiore-background/80">
                Garantia Vitalícia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-la-fiore-background/10 bg-la-fiore-text/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="la-fiore-caption text-la-fiore-background/60">
                © 2025 La Fiore. Todos os direitos reservados.
              </p>
              <div className="flex space-x-4">
                <LocalizedClientLink
                  href="/privacy"
                  className="la-fiore-caption text-la-fiore-background/60 hover:text-la-fiore-accent transition-colors"
                >
                  Privacidade
                </LocalizedClientLink>
                <LocalizedClientLink
                  href="/terms"
                  className="la-fiore-caption text-la-fiore-background/60 hover:text-la-fiore-accent transition-colors"
                >
                  Termos
                </LocalizedClientLink>
              </div>
            </div>

            <p className="la-fiore-caption text-la-fiore-background/60">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
