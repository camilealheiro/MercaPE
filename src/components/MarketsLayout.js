"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Unbounded } from 'next/font/google';
import { useEffect, useState } from "react";
import { MapSection } from "./MapSection"

const unbounded = Unbounded({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-unbounded',
});

export function MarketPageTemplate({ marketData }) {
    const [icons, setIcons] = useState([]);
    
        useEffect(() => {
            const generatedIcons = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            top: Math.random() * 100 + "vh",
            left: Math.random() * 100 + "vw",
            size: Math.random() * 40 + 20, // entre 20 e 60px
            opacity: Math.random() * 0.3 + 0.1,
            }));
    
            setIcons(generatedIcons);
        }, []);

  return (
    <div className={unbounded.className}>
        <div className="min-h-screen bg-gradient-to-br from-white to-[#DBDEEC]">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                <div className="grid grid-cols-3 gap-4 h-[481px]">
                    
                    {/* Imagem esquerda */}
                    <div className="col-span-1">
                    <Image
                        src={marketData.heroImages[0] || "/placeholder.svg?height=481&width=340"}
                        alt={marketData.name}
                        width={340}
                        height={481}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    </div>

                    {/* Texto central com degradê */}
                    <div className="col-span-1 relative h-full">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#0C8BFD] to-[#3154A5] p-8 flex flex-col justify-center text-white">
                        <h1 className="text-[40px] font-extrabold leading-tight mb-6 [font-family:'Unbounded', sans-serif]">
                        {marketData.name}
                        </h1>
                        <p className="text-base leading-relaxed [font-family:'Unbounded', sans-serif]">
                        {marketData.description}
                        </p>
                    </div>
                    </div>

                    {/* Imagem direita */}
                    <div className="col-span-1">
                    <Image
                        src={marketData.heroImages[1] || "/placeholder.svg?height=481&width=340"}
                        alt={`${marketData.name} interior`}
                        width={340}
                        height={481}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    </div>

                </div>
                </section>

            {/* Rating Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                    
                    {/* Título principal com tipografia e cor personalizada */}
                    <h2 className="text-[40px] font-extrabold text-[#3154A5] mb-8 [font-family:'Unbounded',sans-serif]">
                    {marketData.rank} - {marketData.position}
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Bloco da pontuação geral */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-base font-medium text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                        Pontuação geral
                        </h3>
                        <div className="text-6xl font-bold text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                        {marketData.overallScore}
                        </div>
                    </div>

                    {/* Bloco dos critérios */}
                    <div className="flex flex-col gap-6">
                        <p className="text-base font-medium text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                        A pontuação se baseia nos seguintes critérios:
                        </p>

                        <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-base font-bold text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                            {marketData.scores.popularidade}
                            </span>
                            <span className="text-base font-medium text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                            Popularidade
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-base font-bold text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                            {marketData.scores.integridadeEstrutural}
                            </span>
                            <span className="text-base font-medium text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                            Integridade Estrutural
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-base font-bold text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                            {marketData.scores.seguranca}
                            </span>
                            <span className="text-base font-medium text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                            Segurança
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-base font-bold text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                            {marketData.scores.turismo}
                            </span>
                            <span className="text-base font-medium text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                            Turismo
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-base font-bold text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                            {marketData.scores.condicoesEntorno}
                            </span>
                            <span className="text-base font-medium text-[#3154A5] [font-family:'Unbounded',sans-serif]">
                            Condições do Entorno
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>


            {/* About Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <h2 className="text-3xl font-bold text-[#3154A5] mb-8">Sobre o Mercado</h2>
                <p className="text-[#3154A5] leading-relaxed text-lg">{marketData.aboutText}</p>
            </section>

            {/* Tourism Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                <div className="flex flex-col space-y-4 justify-center">
                    {marketData.spots?.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-[#3154A5]" />
                        <span className="text-[#3154A5]">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="bg-[#3154A5] rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Seu roteiro de turismo com o mercado!</h3>
                    <p className="text-white leading-relaxed">{marketData.tourismText}</p>
                </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-[#3154A5] mb-6">
                    Como ir
                    <br />
                    para cada
                    <br />
                    local?
                    </h2>
                    <p className="text-[#3154A5]">"Veja no nosso mapa cada ponto turístico da nossa recomendação de roteiro. Assim você pode visitar o mercado público e aproveitar outros locais do Recife cheios de cultura!"</p>
                </div>
                <div className="rounded-lg overflow-hidden h-80">
                    <iframe
                        title="Mapa dos Mercados"
                        src={marketData.mapDescription}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Bloco com degradê azul e texto */}
                    <div
                    className="w-full rounded-lg p-[60px_32px] bg-[linear-gradient(46deg,rgba(12,139,253,1)_0%,rgba(49,84,165,1)_100%)] flex flex-col justify-center"
                    style={{ maxWidth: "544px" }}
                    >
                    <h3
                        className="text-[40px] font-extrabold text-white mb-6 [font-family:'Unbounded',sans-serif] leading-[44px]"
                    >
                        Já conhece todos os serviços do mercado?
                    </h3>
                    <p
                        className="text-base font-bold text-white leading-relaxed [font-family:'Unbouded',sans-serif] max-h-[120px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:6] [-webkit-box-orient:vertical]"
                    >
                        Cada mercado pode oferecer serviços variados e únicos que até mesmo você não sabia! Nesse mercado você consegue encontrar inúmeros serviços de qualidade como:
                    </p>
                    </div>

                    {/* Lista de serviços com setinhas e texto */}
                    <div
                    className="flex flex-col justify-center space-y-4"
                    style={{ maxWidth: "576px" }}
                    >
                    {marketData.services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-4">
                        <div
                            className="text-[#3154a5] text-[32px] font-extrabold [font-family:'Unbounded', sans-serif] leading-[52px]"
                            aria-hidden="true"
                        >
                            →
                        </div>
                        <span
                            className="text-[#3154a5] text-base font-medium [font-family:'Unbouded', sans-serif] overflow-hidden text-ellipsis whitespace-nowrap"
                            title={service}
                        >
                            {service}
                        </span>
                        </div>
                    ))}

                    {/* Texto final */}
                    <div className="flex items-center space-x-4 mt-6">
                        <div
                        className="text-[#3154a5] text-[32px] font-extrabold [font-family:'Unbounded', sans-serif] leading-[52px]"
                        aria-hidden="true"
                        >
                        →
                        </div>
                        <p
                        className="text-[#3154a5] text-base font-normal [font-family:'Unbouded', sans-serif] leading-normal max-w-[441px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]"
                        >
                        <span className="font-medium">E muito mais! </span>
                        {/* <span className="font-bold [font-family:'Unbouded-Bold', sans-serif]">Confira aqui </span> */}
                        <a
                            href="/pdfs/mercado-cordeiro.pdf" // caminho para seu PDF
                            download
                            className="font-bold [font-family:'Unbouded-Bold', sans-serif] text-blue-700 underline"
                            >
                            Confira aqui <b/>
                        </a>
                        <span className="font-medium">
                            a cartilha completa de serviços do Mercado
                        </span>
                        </p>
                    </div>
                    </div>
                </div>
                </section>


            {/* Location Section */}
            <MapSection />

            {/* Footer */}
            <Footer />
        </div>

    </div>
  )
}
