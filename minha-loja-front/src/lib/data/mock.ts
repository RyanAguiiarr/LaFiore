// Mock data para desenvolvimento enquanto configuramos o Medusa
export const mockProducts = [
  {
    id: "prod_01",
    title: "Anel Solitário Elegance",
    description: "Anel solitário em prata 925 com zircônia cúbica",
    handle: "anel-solitario-elegance",
    thumbnail: "/products/anel-solitario.jpg",
    tags: [{ value: "new" }],
    variants: [
      {
        id: "variant_01",
        calculated_price: {
          calculated_amount: 29900, // R$ 299,00
        },
      },
    ],
  },
  {
    id: "prod_02",
    title: "Colar Coração Delicado",
    description: "Colar com pingente de coração em prata 925",
    handle: "colar-coracao-delicado",
    thumbnail: "/products/colar-coracao.jpg",
    tags: [],
    variants: [
      {
        id: "variant_02",
        calculated_price: {
          calculated_amount: 19900, // R$ 199,00
        },
      },
    ],
  },
  {
    id: "prod_03",
    title: "Brinco Argola Clássica",
    description: "Par de brincos argola em prata 925 polida",
    handle: "brinco-argola-classica",
    thumbnail: "/products/brincos-argola.jpg",
    tags: [{ value: "bestseller" }],
    variants: [
      {
        id: "variant_03",
        calculated_price: {
          calculated_amount: 15900, // R$ 159,00
        },
      },
    ],
  },
  {
    id: "prod_04",
    title: "Pulseira Veneziana Premium",
    description: "Pulseira veneziana em prata 925 com acabamento premium",
    handle: "pulseira-veneziana-premium",
    thumbnail: "/products/pulseira-veneziana.jpg",
    tags: [{ value: "new" }],
    variants: [
      {
        id: "variant_04",
        calculated_price: {
          calculated_amount: 24900, // R$ 249,00
        },
      },
    ],
  },
  {
    id: "prod_05",
    title: "Conjunto Harmonia",
    description: "Conjunto colar e brincos em prata 925 com design harmonioso",
    handle: "conjunto-harmonia",
    thumbnail: "/products/conjunto-harmonia.jpg",
    tags: [{ value: "set" }],
    variants: [
      {
        id: "variant_05",
        calculated_price: {
          calculated_amount: 34900, // R$ 349,00
        },
      },
    ],
  },
  {
    id: "prod_06",
    title: "Anel Infinito",
    description: "Anel com design infinito em prata 925",
    handle: "anel-infinito",
    thumbnail: "/products/anel-infinito.jpg",
    tags: [],
    variants: [
      {
        id: "variant_06",
        calculated_price: {
          calculated_amount: 18900, // R$ 189,00
        },
      },
    ],
  },
  {
    id: "prod_07",
    title: "Colar Gargantilha Moderna",
    description: "Gargantilha moderna em prata 925 com design contemporâneo",
    handle: "colar-gargantilha-moderna",
    thumbnail: "/products/gargantilha-moderna.jpg",
    tags: [{ value: "trending" }],
    variants: [
      {
        id: "variant_07",
        calculated_price: {
          calculated_amount: 22900, // R$ 229,00
        },
      },
    ],
  },
  {
    id: "prod_08",
    title: "Brinco Gota Cristal",
    description: "Brincos gota com cristais em prata 925",
    handle: "brinco-gota-cristal",
    thumbnail: "/products/brincos-gota.jpg",
    tags: [{ value: "elegant" }],
    variants: [
      {
        id: "variant_08",
        calculated_price: {
          calculated_amount: 27900, // R$ 279,00
        },
      },
    ],
  },
]

export const mockRegion = {
  id: "reg_mock",
  name: "Brasil",
  currency_code: "brl",
  countries: [
    {
      id: "country_br",
      name: "Brasil",
      iso_2: "br",
    },
  ],
}
