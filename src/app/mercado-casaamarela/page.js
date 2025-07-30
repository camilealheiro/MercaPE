import { MarketPageTemplate } from "@/components/MarketsLayout"

const cordeiroData = {
  name: "Mercado do Cordeiro",
  description:
    "Situado em um dos bairros mais populosos da Zona Norte, o Mercado de Casa Amarela é conhecido por sua diversidade de bancas: carne, peixe, hortifruti, flores, artigos religiosos e comidas regionais. É famoso pelos restaurantes simples, mas muito procurados, que servem pratos tradicionais como sarapatel, mocotó e galinha guisada",
  rank: "5° Lugar",
  position: "Mercado público",
  overallScore: 6.0,
  scores: {
    popularidade: 2.3,
    integridadeEstrutural: 8,
    seguranca: 5,
    turismo: 1,
    condicoesEntorno: 10,
  },
  heroImages: ["/Casa_amarela_D.png", "/Casa_amarela_E.png"],
  aboutText:
    "No alto da Zona Norte, o Mercado de Casa Amarela é um retrato do mercado de bairro tradicional. Surgiu como ponto de abastecimento para famílias e comerciantes da região. Lá se encontra de tudo: carnes, peixes, especiarias, hortaliças, flores, artigos religiosos, artesanato. Mas o que faz o mercado famoso são os restaurantes e boxes de comida regional, onde é comum ver filas aos domingos para provar pratos como sarapatel, buchada, galinha de cabidela e mocotó, tudo servido em ambientes simples, mas cheios de histórias. O Mercado de Casa Amarela é onde o sabor e o sotaque popular do Recife se encontram — do café da manhã ao almoço de domingo.",
  tourismText:
    "Explore o Recife de um jeito único! Nossos roteiros conectam mercados públicos, museus, praças, igrejas e outros espaços que guardam a história, a cultura e os sabores da cidade. Caminhe, descubra e se conecte com as pessoas e tradições que mantém viva a tradição local.",
  spots: [
    "Mercado de Casa Amarela",
    "Feira Casa Amarela",
    "'Casa Amarela' original (farmácia)",
    "Sítio da Trindade",
  ],
  services: [
    "Oficinas de carro",
    "Casas de ração",
    "Casas de grão",
    "Venda de carnes e peixes",
    "Comidas regionais nordestinas",
  ],
  mapDescription:
    "https://www.google.com/maps/d/u/0/embed?mid=1ieLRYoP40PwouM2XwU0lfle6N8iwHyI&ehbc=2E312F&noprof=1",
}

export default function MercadoCordeiroPage() {
  return <MarketPageTemplate marketData={cordeiroData} />
}
