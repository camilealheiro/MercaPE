"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const markets = [
  {
    id: 1,
    link: "/mercado-boavista",
    rank: "1° Lugar",
    name: "Mercado da Boa Vista",
    address: "R. da Santa Cruz, S/N",
    image: "/Boa_vista.png",
  },
  {
    id: 2,
    link: "/mercado-saojose",
    rank: "2° Lugar",
    name: "Mercado de São José",
    address: "Rua Almirante Tamandaré 2436",
    image: "/Sao_jose.png",
  },
  {
    id: 3,
    link: "/mercado-encruzilhada",
    rank: "3° Lugar",
    name: "Mercado da Encruzilhada",
    address: "R. Dr. José Maria, 2-200",
    image: "/Encruzilhada.png",
  },
  {
    id: 4,
    link: "/mercado-santoamaro",
    rank: "4° Lugar",
    name: "Mercado de Santo Amaro",
    address: "Av. Cruz Cabugá, 1933",
    image: "/Santo_amaro.png",
  },
  {
    id: 5,
    link: "/mercado-casaamarela",
    rank: "5° Lugar",
    name: "Mercado de Casa Amarela",
    address: "R. Padre Lemos, 94",
    image: "/Casa_amarela.png",
  },
  {
    id: 6,
    link: "/mercado-madalena",
    rank: "6° Lugar",
    name: "Mercado da Madalena",
    address: "R. Real da Torre, 521",
    image: "/Madalena.png",
  },
  {
    id: 7,
    link: "/mercado-cordeiro",
    rank: "7° Lugar",
    name: "Mercado do Cordeiro",
    address: "Av. Gen. San Martin, S/n",
    image: "/Cordeiro.png",
  },
  {
    id: 8,
    link: "/mercado-afogados",
    rank: "8° Lugar",
    name: "Mercado de Afogados",
    address: "Rua Nicolau Pereira",
    image: "/Afogados.png",
  },
]

export function AllMarketsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const marketsPerSlide = 5
  const totalSlides = Math.ceil(markets.length / marketsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentMarkets = () => {
    const start = currentSlide * marketsPerSlide
    const end = start + marketsPerSlide
    return markets.slice(start, end)
  }

  return (
    <div className="bg-[#3154A5] rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="text-white hover:bg-blue-700 rounded-full"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-blue-400"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="text-white hover:bg-blue-700 rounded-full"
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 min-h-[200px]">
        {getCurrentMarkets().map((market) => (
          <Link key={market.id} href={market.link} className="block">
            {/* <div> */}
              <Card className="bg-white transition-transform hover:scale-105 cursor-pointer">
                <CardContent className="p-0">
                  <Image
                    src={market.image || "/placeholder.svg"}
                    alt={`Imagem de ${market.name}`}
                    width={200}
                    height={120}
                    className="w-full h-24 object-cover rounded-t-lg"
                  />
                  <div className="p-3">
                    <h4 className="font-bold text-blue-600 text-sm">{market.rank}</h4>
                    <p className="font-semibold text-xs">{market.name}</p>
                    <p className="text-xs text-gray-600">{market.address}</p>
                  </div>
                </CardContent>
              </Card>
            {/* </div> */}
          </Link>
          
        ))}
      </div>

      <div className="text-center mt-4">
        <p className="text-blue-100 text-sm">
          Mostrando {currentSlide * marketsPerSlide + 1}–
          {Math.min((currentSlide + 1) * marketsPerSlide, markets.length)} de {markets.length} mercados
        </p>
      </div>
    </div>
  )
}
