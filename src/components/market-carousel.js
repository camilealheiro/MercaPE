'use client'
import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const markets = [
  {
    id: 1,
    rank: "1° Lugar",
    name: "Mercado da Boa Vista",
    address: "R. da Santa Cruz, S/N",
    image: "/Boa_vista.png",
  },
  {
    id: 2,
    rank: "2° Lugar",
    name: "Mercado de São José",
    address: "Rua Almirante Tamandaré 2436",
    image: "/Sao_jose.png",
  },
  {
    id: 3,
    rank: "3° Lugar",
    name: "Mercado da Encruzilhada",
    address: "R. Dr. José Maria, 2-200",
    image: "/Encruzilhada.png",
  },
  {
    id: 4,
    rank: "4° Lugar",
    name: "Mercado de Santo Amaro",
    address: "Av. Cruz Cabugá, 1933",
    image: "/Santo_amaro.png",
  },
  {
    id: 5,
    rank: "5° Lugar",
    name: "Mercado de Casa Amarela",
    address: "R. Padre Lemos, 94",
    image: "/Casa_amarela.png",
  },
  {
    id: 6,
    rank: "6° Lugar",
    name: "Mercado da Madalena",
    address: "R. Real da Torre, 521",
    image: "/Madalena.png",
  },
  {
    id: 7,
    rank: "7° Lugar",
    name: "Mercado do Cordeiro",
    address: "Av. Gen. San Martin, S/n",
    image: "/Cordeiro.png",
  },
  {
    id: 8,
    rank: "8° Lugar",
    name: "Mercado de Afogados",
    address: "Rua Nicolau Pereira",
    image: "/Afogados.png",
  },
]

export default function MarketCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1.2, spacing: 10 },
      },
      '(max-width: 1024px)': {
        slides: { perView: 2.2, spacing: 15 },
      },
    },
  })

  return (
    <section className="bg-gradient-to-r from-[#0C8BFD] to-[#3154A5] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative">
          {/* Botão anterior */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white px-3 py-2 rounded-full"
          >
            &#8592;
          </button>

          {/* Carrossel */}
          <div ref={sliderRef} className="keen-slider">
            {markets.map((market) => (
              <div key={market.id} className="keen-slider__slide">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden text-gray-800">
                  <img
                    src={market.image}
                    alt={market.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-sm font-bold text-[#3154A5]">{market.rank}</span>
                    <h3 className="text-[#3154A5] font-semibold">{market.name}</h3>
                    <p className="text-sm text-[#3154A5]">{market.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botão próximo */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white px-3 py-2 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  )
}
