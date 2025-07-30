import { MarketPageTemplate } from "@/components/MarketsLayout"

const cordeiroData = {
  name: "Mercado de Santo Amaro",
  description:
    "O Mercado de Santo Amaro, fundado no início do século XX, é um dos mais antigos da capital. Localizado na área central, tem forte tradição como ponto de abastecimento para restaurantes e moradores da região. É conhecido pelas barracas de carnes, peixes, legumes, cereais e pela culinária nordestina servida em boxes simples, mas muito frequentados.",
  rank: "4° Lugar",
  position: "Mercado público",
  overallScore: 6.4,
  scores: {
    popularidade: 1.7,
    integridadeEstrutural: 5,
    seguranca: 9,
    turismo: 3,
    condicoesEntorno: 10,
  },
  heroImages: ["/Santo_amaro_D.png", "/Santo_amaro_E.png"],
  aboutText:
    "Localizado na área central, o Mercado de Santo Amaro é um dos mais antigos do Recife, inaugurado no início do século XX. É conhecido por abastecer restaurantes, moradores e pequenos comerciantes do entorno. São dezenas de boxes vendendo carnes, peixes, legumes, cereais, especiarias e produtos regionais. Além das compras, é famoso pelos almoços nordestinos, servidos em boxes improvisados, onde se come bem gastando pouco: sarapatel, feijoada, mão de vaca e galinha guisada estão entre os preferidos. Em datas festivas, é comum ter música ao vivo, forró e feiras culturais. O Mercado de Santo Amaro é tradição pura — cheiro de comida boa, conversa de vizinhança e cultura popular.",
  tourismText:
    "Explore o Recife de um jeito único! Nossos roteiros conectam mercados públicos, museus, praças, igrejas e outros espaços que guardam a história, a cultura e os sabores da cidade. Caminhe, descubra e se conecte com as pessoas e tradições que mantém viva a tradição local.",
  spots: [
    "Mercado de Santo Amaro",
    "Parque 13 de Maio",
    "Cemitério dos Ingleses",
    "Praça General Abreu e Lima",
    "Teatro Marco Camarotti",
    "Shopping Tacaruna",
  ],
  services: [
    "Oficinas de carro",
    "Casas de ração",
    "Casas de grão",
    "Venda de carnes e peixes",
    "Comidas regionais nordestinas",
  ],
  mapDescription:
    "https://www.google.com/maps/d/u/0/embed?mid=14bwrwVhCVURZ97oLOd7y1SUoiYf2iAk&ehbc=2E312F&noprof=1",

}

export default function MercadoCordeiroPage() {
  return <MarketPageTemplate marketData={cordeiroData} />
}
