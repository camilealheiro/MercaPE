import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Head from 'next/head'
import MarketCarousel from "../components/market-carousel"
import { MarketRankingSection } from "../components/MarketRankingSection";
import { AllMarketsSection } from "../components/AllMarketsSection";
import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-unbounded',
});

export default function HomePage() {
    return (
        <div className={unbounded.className}>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center space-x-2">
                                 <div>
                                    <Image
                                        src="/Logo_mercape_completa.png"
                                        alt="Mercados Públicos"
                                        width={250}
                                        height={250}
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                            <nav className="flex space-x-4">
                                <Button variant="outline" className="text-blue-600 border-blue-600 bg-transparent">
                                    Quem somos
                                </Button>
                                <Button variant="outline" className="text-blue-600 border-blue-600 bg-transparent">
                                    Ranking
                                </Button>
                                <Button variant="outline" className="text-blue-600 border-blue-600 bg-transparent">
                                    Mercados
                                </Button>
                                <Button variant="outline" className="text-blue-600 border-blue-600 bg-transparent">
                                    Mapa
                                </Button>
                            </nav>
                        </div>
                    </div>
                </header>

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
                            <h1 className="text-4xl lg:text-5xl font-bold text-[#3154A5] mb-6">
                                Mercados
                                <br />
                                Públicos
                            </h1>
                            <p className="text-[#3154A5] mb-4">
                                Nossa Solução visa um novo olhar sobre os Mercados Públicos do Recife. São locais que carregam consigo
                                histórias e muita cultura da nossa região em seus produtos e pessoas presentes lá.
                            </p>
                            <p className="text-[#3154A5]">
                                Além de movimentarem o comércio são atrações turísticas vivas que merecem destaque no seu roteiro de
                                viagem!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quem nós somos Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                <section>
                    <MarketRankingSection />
                </section>

                {/* Todos os mercados Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-3xl font-bold text-[#3154A5] mb-4">Todos os mercados</h2>
                    <p className="text-[#3154A5] mb-12">
                        Os mercados públicos da região metropolitana do Recife. Você encontra todos aqui!
                    </p>

                    <MarketCarousel />
                    {/* <AllMarketsSection /> */}
                </section>

                {/* Map Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#3154A5] mb-6">
                                Mas onde
                                <br />
                                ficam?
                            </h2>
                            <p className="text-[#3154A5]">
                                Verifique no nosso mapa cada local que possui um Mercado Público. Assim você pode visitar o mercado
                                público mais próximo de você!
                            </p>
                        </div>
                        {/* <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                            <Image
                                src="/placeholder.svg?height=320&width=500"
                                alt="Mapa dos Mercados"
                                width={500}
                                height={320}
                                className="rounded-lg"
                            />
                        </div> */}
                        <div className="rounded-lg overflow-hidden h-80">
                            <iframe
                                title="Mapa dos Mercados"
                                src="https://www.google.com/maps/d/u/0/embed?mid=1cMKgJMMbFUzq9ZHFoT8cCQ0o5pLk-7E&ehbc=2E312F"
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

                {/* Footer */}
                <footer className="bg-blue-600 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex items-center space-x-4 mb-4 md:mb-0">
                                <div className="text-center">
                                    <div className="text-center">
                                        <Image
                                            src="/Logo_branca_ufrpe.png"
                                            alt="Logomarca UFRPE"
                                            width={200}
                                            height={200}
                                            className="mx-auto mb-2"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mb-4 md:mb-0">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-2 mx-auto">
                                    <span className="text-blue-600 text-sm">@</span>
                                </div>
                                <p className="text-blue-100 text-sm">
                                    Participe da Comunidade
                                    <br />
                                    (CGP)
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-white text-mb mb-1">Responsáveis</p>
                                <p className="text-white text-xs">
                                    thiago.dcribeiro@ufrpe.br
                                    <br />
                                    joao.vsilva10@ufrpe.br
                                    <br />
                                    camile.alheiro@ufrpe.br
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}