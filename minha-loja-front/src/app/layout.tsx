import { getBaseURL } from "@lib/util/env"
import { CartProvider } from "@lib/context/cart-context"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "La Fiore - Joias de Prata Exclusivas",
  description:
    "Descubra joias de prata 925 exclusivas que contam sua história. Anéis, colares, brincos e pulseiras com design único e qualidade excepcional.",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-mode="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-lato bg-white text-la-fiore-text antialiased">
        <CartProvider>
          <main className="relative min-h-screen">{props.children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
