"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const markets = [
  {
    id: 1,
    rank: "1° Lugar",
    name: "Mercado da Boa Vista",
    address: "R. do Santa Cruz S/N",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 2,
    rank: "2° Lugar",
    name: "Mercado de São José",
    address: "Rua Almirante Tamandaré 2436",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 3,
    rank: "3° Lugar",
    name: "Mercado da Encruzilhada",
    address: "R. Dr. José Maria, 2-200",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 4,
    rank: "4° Lugar",
    name: "Mercado de Santo Amaro",
    address: "Av. Cruz Cabugá, 1333",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 5,
    rank: "5° Lugar",
    name: "Mercado da Torre",
    address: "R. Padre Lemos, 45",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 6,
    rank: "6° Lugar",
    name: "Mercado de Casa Amarela",
    address: "Av. Norte Miguel Arraes, 2930",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 7,
    rank: "7° Lugar",
    name: "Mercado de Afogados",
    address: "R. Dois Irmãos, 92",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 8,
    rank: "8° Lugar",
    name: "Mercado do Cordeiro",
    address: "Av. Abdias de Carvalho, 567",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 9,
    rank: "9° Lugar",
    name: "Mercado de Água Fria",
    address: "R. Real da Torre, 123",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 10,
    rank: "10° Lugar",
    name: "Mercado de Peixinhos",
    address: "Av. Cruz Cabugá, 890",
    image: "/placeholder.svg?height=120&width=200",
  },
]

export function MarketCarousel() {
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
    <div className="bg-blue-600 rounded-lg p-6">
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

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 min-h-[200px]">
        {getCurrentMarkets().map((market) => (
          <Card key={market.id} className="bg-white transition-transform hover:scale-105">
            <CardContent className="p-0">
              <Image
                src={market.image || "/placeholder.svg"}
                alt={market.name}
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
        ))}
      </div>

      <div className="text-center mt-4">
        <p className="text-blue-100 text-sm">
          Mostrando {currentSlide * marketsPerSlide + 1}-
          {Math.min((currentSlide + 1) * marketsPerSlide, markets.length)} de {markets.length} mercados
        </p>
      </div>
    </div>
  )
}
