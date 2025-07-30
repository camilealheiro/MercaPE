// components/MarketRankingSection.js
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function MarketRankingSection() {
  return (
    <section className="bg-gradient-to-b from-[#FEB511] to-[#A0522D] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">Ranking dos Mercados</h2>
        <p className="text-white mb-12">
          Confira quais mercados se destacam em tradição, variedade, estrutura e experiências culturais. 
          Um guia rápido para quem quer explorar o melhor dos mercados públicos do Recife!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href={'/mercado-saojose'}>
            {/* 2° Lugar */}
            <Card className="bg-white">
              <CardContent className="p-0">
                <Image
                  src="/Sao_jose.png"
                  alt="Mercado de São José"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#A0522D] mb-1">2° Lugar</h3>
                  <p className="text-[#A0522D] font-semibold">Mercado de São José</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          

          {/* 1° Lugar */}
          <Link href={"/mercado-boavista"}>
            <Card className="bg-white transform scale-105 shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="/Boa_vista.png"
                  alt="Mercado da Boa Vista"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#A0522D] mb-1">1° Lugar</h3>
                  <p className="text-[#A0522D] font-semibold">Mercado da Boa Vista</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href={"/mercado-encruzilhada"}>
            {/* 3° Lugar */}
            <Card className="bg-white">
              <CardContent className="p-0">
                <Image
                  src="/Encruzilhada.png"
                  alt="Mercado da Encruzilhada"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#A0522D] mb-1">3° Lugar</h3>
                  <p className="text-[#A0522D] font-semibold">Mercado da Encruzilhada</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          
        </div>
      </div>
    </section>
  );
}
