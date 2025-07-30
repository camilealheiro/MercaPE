import { MarketPageTemplate } from "@/components/MarketsLayout"

const cordeiroData = {
  name: "Mercado da Madalena",
  description:
    "O Mercado da Madalena é um dos mais tradicionais do Recife, localizado na Zona Oeste. Conhecido por seus boxes de carnes, peixes, frutas e verduras, também abriga restaurantes e bares frequentados por quem procura pratos nordestinos feitos na hora.",
  rank: "6° Lugar",
  position: "Mercado público",
  overallScore: 5.7,
  scores: {
    popularidade: 1.7,
    integridadeEstrutural: 2.0,
    seguranca: 9.5,
    turismo: 1.0,
    condicoesEntorno: 10,
  },
  heroImages: ["/Madalena_D.png", "/Madalena_E.png"],
  aboutText:
    "O Mercado da Madalena é um dos mais tradicionais e queridos pontos de comércio popular da Zona Oeste do Recife. Localizado em uma área que foi importante centro ferroviário no início do século XX, o mercado surgiu para atender o crescimento do bairro, que se expandiu ao redor da antiga Estação da Madalena — um marco de conexão entre o Recife e a Zona da Mata. Com mais de 80 anos de história, o mercado é conhecido por ser multifuncional: suas bancas oferecem de tudo um pouco — carnes frescas, peixes, frutas, verduras, grãos, ervas medicinais, cereais e produtos típicos do interior. Muitos comerciantes mantêm ali negócios de família, passando o box de geração em geração.",
  tourismText:
    "Explore o Recife de um jeito único! Nossos roteiros conectam mercados públicos, museus, praças, igrejas e outros espaços que guardam a história, a cultura e os sabores da cidade. Caminhe, descubra e se conecte com as pessoas e tradições que mantém viva a tradição local.",
  spots: [
    "Mercado da Madalena",
    "Teatro Joaquim Cardozo",
    "Rua dos Palacetes",
    "Museu da Abolição",
  ],
  services: [
    "Oficinas de carro",
    "Casas de ração",
    "Casas de grão",
    "Venda de carnes e peixes",
    "Comidas regionais nordestinas",
  ],
  mapDescription:
    "https://www.google.com/maps/d/u/0/embed?mid=1v7xJYlGOWyuXyiKwc4tgIe26mJ_F9Nk&ehbc=2E312F&noprof=1",
}

export default function MercadoCordeiroPage() {
  return <MarketPageTemplate marketData={cordeiroData} />
}
