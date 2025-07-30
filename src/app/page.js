"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react";
import Image from "next/image"
import Head from 'next/head'
import MarketCarousel from "../components/market-carousel"
import { MarketRankingSection } from "../components/MarketRankingSection";
import { AllMarketsSection } from "../components/AllMarketsSection";
import { Header } from  "../components/Header";
import { Footer } from "../components/Footer";
import { MapSection } from "../components/MapSection";
import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-unbounded',
});

export default function HomePage() {
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
                {/* Ícones espalhados */}
                {/* {icons.map((icon) => (
                    <img
                    key={icon.id}
                    src="/icone_marcape.svg" // substitua com seu caminho real
                    alt=""
                    style={{
                        position: "absolute",
                        top: icon.top,
                        left: icon.left,
                        width: `200px`,
                        opacity: "50%",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                    />
                ))} */}

                {/* Header */}
                <Header />

                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <Image
                                src="/Image_home.png"
                                alt="Mercados Públicos"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-[#02AC4B] mb-6">
                                Mercados
                                <br />
                                Públicos
                            </h1>
                            <p className="text-[#02AC4B] mb-4">
                                Nossa Solução visa um novo olhar sobre os Mercados Públicos do Recife. São locais que carregam consigo
                                histórias e muita cultura da nossa região em seus produtos e pessoas presentes lá.
                            </p>
                            <p className="text-[#02AC4B]">
                                Além de movimentarem o comércio são atrações turísticas vivas que merecem destaque no seu roteiro de
                                viagem!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quem nós somos Section */}
                <section id="QuemSomos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-3xl font-bold text-[#3154A5] mb-8">Quem nós somos?</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-3">
                            <p className="text-[#3154A5] leading-relaxed">
                                O MercaPE é uma iniciativa colaborativa que nasceu do desejo de valorizar os mercados públicos do Recife, conectando tradição, cultura e tecnologia. Somos um projeto que acredita no poder da memória coletiva e no potencial transformador dos mercados como espaços de encontro, comércio justo e turismo cultural.
                                Nosso propósito é revitalizar digitalmente esses espaços centenários, oferecendo soluções práticas e acessíveis para feirantes, moradores e turistas. Queremos que mais pessoas redescubram as histórias, sabores e personagens que dão vida aos mercados espalhados por toda a cidade.
                                Acreditamos que inovação também é olhar para o que é tradicional, respeitando as raízes e usando a tecnologia para fortalecer quem faz a economia local girar.
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <div className="text-center">
                                <Image
                                    src="/logo_rural.png"
                                    alt="Logomarca UFRPE"
                                    width={300}
                                    height={300}
                                    className="mx-auto mb-2"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ranking Section */}
                <section id="RankingSection">
                    <MarketRankingSection />
                </section>

                {/* Todos os mercados Section */}
                <section id="AllMarkets" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-3xl font-bold text-[#C44443] mb-4">Todos os mercados</h2>
                    <p className="text-[#C44443] mb-12">
                        Os mercados públicos da região metropolitana do Recife. Você encontra todos aqui!
                    </p>

                    <MarketCarousel />
                    {/* <AllMarketsSection /> */}
                </section>

                {/* Map Section */}
                <section id="MapSection">
                    <MapSection />
                </section>
                
                {/* Footer */}
                <Footer />

            </div>
        </div>
    )
}