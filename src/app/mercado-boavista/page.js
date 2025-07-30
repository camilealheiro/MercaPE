import { MarketPageTemplate } from "@/components/MarketsLayout"

const boavistaData = {
  name: "Mercado da Boa Vista",
  description:
    "Localizado bem perto do centro da cidade, o Mercado da Boa Vista tem mais de 140 anos de história. É reconhecido pelo clima boêmio: barracas de comidas típicas, artesanato, pequenos bares e o famoso café da manhã de sábado com forró ao vivo. Além de compras, é um ponto de cultura popular, onde turistas e moradores se misturam para saborear pratos regionais e ouvir música.",
  rank: "1° Lugar",
  position: "Mercado público",
  overallScore: 9.1,
  scores: {
    popularidade: 9.4,
    integridadeEstrutural: 8.0,
    seguranca: 7.2,
    turismo: 10,
    condicoesEntorno: 10,
  },
  heroImages: ["/Boa_vista_D.png", "/Boa_vista_E.png"],
  aboutText:
    "Um dos mais antigos da cidade, o Mercado da Boa Vista guarda 140 anos de histórias no Centro do Recife. É pequeno em tamanho, mas grande em cultura popular: reúne cerca de 60 boxes, que oferecem de tudo um pouco — carnes, temperos, artesanato, comidas prontas e até fantasias de carnaval. O clima boêmio é o grande diferencial: aos sábados, o café da manhã vira programa cultural, com forró ao vivo, mesas cheias de tapioca, cuscuz e bolo de rolo. É ponto de encontro de estudantes, moradores do centro e turistas curiosos. O Mercado da Boa Vista é um refúgio cultural, onde a boemia e o comércio popular se misturam.",
  tourismText:
    "Explore o Recife de um jeito único! Nossos roteiros conectam mercados públicos, museus, praças, igrejas e outros espaços que guardam a história, a cultura e os sabores da cidade. Caminhe, descubra e se conecte com as pessoas e tradições que mantém viva a tradição local.",
  spots: [
    "Mercado da Boa Vista",
    "Teatro do Parque",
    "Shopping Boa Vista",
    "Museu de Arte Moderna Aloísio Magalhães (MAMAM)",
    "Ponte Duarte Coelho",
    "Cinema São Luiz",
  ],
  services: [
    "Oficinas de carro",
    "Casas de ração",
    "Casas de grão",
    "Venda de carnes e peixes",
    "Comidas regionais nordestinas",
  ],
  mapDescription:
    "https://www.google.com/maps/d/u/0/embed?mid=1wHXUwki0kYthk-vdjpwF5TKgICcnA6k&ehbc=2E312F&noprof=1",
}

export default function MercadoCordeiroPage() {
  return <MarketPageTemplate marketData={boavistaData} />
}
