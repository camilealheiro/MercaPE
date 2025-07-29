import { MarketPageTemplate } from "@/components/MarketsLayout"

const cordeiroData = {
  name: "Mercado do Cordeiro",
  description:
    "Mercado do Cordeiro é um dos principais da Zona Oeste do Recife, construído nos anos 1940 para atender moradores do bairro e regiões vizinhas. É conhecido por sua variedade de produtos frescos, carnes, além de barracas de flores, cereais e temperos.",
  rank: "7° Lugar",
  position: "Mercado público",
  overallScore: 4.1,
  scores: {
    popularidade: 2.3,
    integridadeEstrutural: 2.0,
    seguranca: 9.1,
    turismo: 1.0,
    condicoesEntorno: 5.0,
  },
  heroImages: ["/Cordeiro_D.png", "/Cordeiro_E.png"],
  aboutText:
    "Construído nos anos 1940, o Mercado do Cordeiro é um dos maiores da Zona Oeste e ponto de referência para quem mora nos arredores. É frequentado por turistas, moradores da cidade, jovens universitários e comerciantes que buscam produtos frescos e de qualidade. Nos fins de semana, o movimento cresce e dá vida às feiras compostas, com famílias abastecendo a despensa e frequentadores assíduos para oferecer produtos frequentes. Muitos aproveitam para visitar não só pequenos restaurantes e saborear pratos típicos, como carne de sol com macaxeira e feijão de corda grande, o Mercado do Cordeiro mantém viva a tradição do comércio do bairro, sendo essencial para a economia local.",
  tourismText:
    "Explore o Recife de um jeito único! Nossos roteiros conectam mercados públicos, museus, praças, igrejas e outros espaços que guardam a história, a cultura e os sabores da cidade. Caminhe, descubra e se conecte com as pessoas e tradições que mantém viva a tradição local.",
  spots: [
    "Mercado do Cordeiro",
    "Feira do Cordeiro",
    "Parque de Exposições do Cordeiro",
    "Compaz Ariano Suassuna",
    "Matriz do Cordeiro",
  ],
  services: [
    "Oficinas de carro",
    "Casas de ração",
    "Casas de grão",
    "Venda de carnes e peixes",
    "Comidas regionais nordestinas",
  ],
  mapDescription:
    "https://www.google.com/maps/d/u/0/embed?mid=1mBaaJ1w4vYNksO22mt62O-x160KKBiU&ehbc=2E312F",
  // locationDescription:
  //   ,
}

export default function MercadoCordeiroPage() {
  return <MarketPageTemplate marketData={cordeiroData} />
}
