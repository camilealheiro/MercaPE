import { MarketPageTemplate } from "@/components/MarketsLayout"

const cordeiroData = {
  name: "Mercado de São José",
  description:
    "O Mercado de São José é o mercado público mais antigo do Brasil em estrutura pré-fabricada de ferro, inaugurado em 1875. Localizado no coração do Recife, próximo ao bairro do Recife Antigo, é conhecido por sua arquitetura de inspiração europeia e suas bancas de artesanato, ervas medicinais, comidas típicas e peixes frescos.",
  rank: "2° Lugar",
  position: "Mercado público",
  overallScore: 8.4,
  scores: {
    popularidade: 7,
    integridadeEstrutural: 8,
    seguranca: 7.2,
    turismo: 10,
    condicoesEntorno: 10,
  },
  heroImages: ["/Sao_jose_D.png", "/Sao_jose_E.png"],
  aboutText:
    "O Mercado de São José é um dos principais cartões-postais do Recife e orgulho da cidade: foi inaugurado em 1875, sendo o primeiro prédio pré-fabricado em ferro fundido do Brasil, importado da Europa. Localizado no coração do bairro de mesmo nome, próximo ao Recife Antigo, é famoso pelo seu traçado arquitetônico de influência francesa, com corredores que abrigam mais de 500 boxes. No dia a dia, é ponto certo para quem procura peixes frescos, especiarias, artesanato local, produtos religiosos, comidas típicas e uma boa prosa com os feirantes. Quem passa por lá sente o cheiro de ervas medicinais, escuta o barulho de vendedores chamando fregueses e encontra tudo misturado: cultura, fé e gastronomia popular. É visita obrigatória para quem quer mergulhar na alma popular recifense.",
  tourismText:
    "Explore o Recife de um jeito único! Nossos roteiros conectam mercados públicos, museus, praças, igrejas e outros espaços que guardam a história, a cultura e os sabores da cidade. Caminhe, descubra e se conecte com as pessoas e tradições que mantém viva a tradição local.",
  spots: [
    "Mercado de São José",
    "Museu de Arte Popular",
    "Praça Dom Vital & Igreja Nossa Senhora da Penha",
    "Feira da Aurora (sábados e domingos)",
    "Museu do Trem",
    "Estação Ecoturística Cais do Imperador",
  ],
  services: [
    "Oficinas de carro",
    "Casas de ração",
    "Casas de grão",
    "Venda de carnes e peixes",
    "Comidas regionais nordestinas",
  ],
  mapDescription:
    "https://www.google.com/maps/d/u/0/embed?mid=1OR_23Z13JGmtsdPWrnLrViUwmXVDU5Y&ehbc=2E312F",
}

export default function MercadoCordeiroPage() {
  return <MarketPageTemplate marketData={cordeiroData} />
}
