import { MarketPageTemplate } from "@/components/MarketsLayout"

const cordeiroData = {
  name: "Mercado de Afogados",
  description:
    "Situado em um bairro movimentado da Zona Sul, o Mercado de Afogados é um dos maiores polos de comércio popular da cidade. É famoso pela diversidade de produtos a preços acessíveis, desde frutas frescas e verduras até roupas, utensílios e comidas típicas.",
  rank: "8° Lugar",
  position: "Mercado público",
  overallScore: 3.6,
  scores: {
    popularidade: 0,
    integridadeEstrutural: 2.0,
    seguranca: 8,
    turismo: 1,
    condicoesEntorno: 5.0,
  },
  heroImages: ["/Afogados_D.png", "/Afogados_E.png"],
  aboutText:
    "O Mercado de Afogados é um dos mais movimentados da Zona Sul, construído para abastecer uma das regiões mais populosas do Recife. É famoso por sua diversidade de produtos: desde frutas, verduras, carnes e peixes até artigos de feira livre, roupas, utensílios domésticos e comidas prontas. É comum ver o mercado fervilhando logo cedo, com compradores negociando preços, cheiros de comida típica, caldo de mocotó sendo servido logo pela manhã. O clima é de feira nordestina: barulhento, animado e cheio de histórias. Para muitos, é mais do que comprar barato — é manter viva uma tradição de encontros e trocas.",
  tourismText:
    "Explore o Recife de um jeito único! Nossos roteiros conectam mercados públicos, museus, praças, igrejas e outros espaços que guardam a história, a cultura e os sabores da cidade. Caminhe, descubra e se conecte com as pessoas e tradições que mantém viva a tradição local.",
  spots: [
    "Mercado de Afogados",
    "Largo da Paz",
    "Igreja Nossa Senhora da Paz",
  ],
  services: [
    "Oficinas de carro",
    "Casas de ração",
    "Casas de grão",
    "Venda de carnes e peixes",
    "Comidas regionais nordestinas",
  ],
  mapDescription:
    "https://www.google.com/maps/d/u/0/embed?mid=1VUUpKCiJ-pZUCYh-9I8h86QyjkTl4S8&ehbc=2E312F",
}

export default function MercadoCordeiroPage() {
  return <MarketPageTemplate marketData={cordeiroData} />
}
