import { MarketPageTemplate } from "@/components/MarketsLayout"

const EncruzilhadaData = {
  name: "Mercado da Encruzilhada",
  description:
    "Localizado na Zona Norte, o Mercado da Encruzilhada é um dos mais queridos pela população local. Funciona desde o início do século XX, sendo famoso pela feira de frutas, verduras, especiarias e quitutes regionais.",
  rank: "3° Lugar",
  position: "Mercado público",
  overallScore: 6.6,
  scores: {
    popularidade: 2.5,
    integridadeEstrutural: 8,
    seguranca: 5,
    turismo: 1.0,
    condicoesEntorno: 10,
  },
  heroImages: ["/Encruzilhada_D.png", "/Encruzilhada_E.png"],
  aboutText:
    "O Mercado da Encruzilhada é um dos mais tradicionais e vibrantes mercados de bairro do Recife. Localizado na Zona Norte, ele surgiu no início do século XX para atender a uma região que crescia em torno de importantes vias de conexão entre o centro e os bairros da cidade — daí o nome “Encruzilhada”, ponto de encontro de ruas, trilhos e histórias. Por fora, o prédio não esconde suas origens: uma estrutura simples, mas cheia de vida, onde o som de vozes, risadas e pregões ecoa logo cedo. Lá dentro, mais de 200 boxes formam um labirinto de cores, cheiros e sabores: bancas de frutas fresquinhas, verduras colhidas na madrugada, ervas medicinais, especiarias que perfumam o ar e peixes que chegam direto das praias e rios da região metropolitana.",
  tourismText:
    "Explore o Recife de um jeito único! Nossos roteiros conectam mercados públicos, museus, praças, igrejas e outros espaços que guardam a história, a cultura e os sabores da cidade. Caminhe, descubra e se conecte com as pessoas e tradições que mantém viva a tradição local.",
  spots: [
    "Mercado da Encruzilhada",
    "Escola Municipal Frevo Maestro Fernando Borges",
    "Praça Dom Miguel Valverde",
  ],
  services: [
    "Oficinas de carro",
    "Casas de ração",
    "Casas de grão",
    "Venda de carnes e peixes",
    "Comidas regionais nordestinas",
  ],
  mapDescription:
    "https://www.google.com/maps/d/u/0/embed?mid=1zIpEoLoAe4oPg_bxoEAqghEjWccFpcQ&ehbc=2E312F&noprof=1",
}

export default function MercadoCordeiroPage() {
  return <MarketPageTemplate marketData={EncruzilhadaData} />
}
