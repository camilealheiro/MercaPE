import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
    {/* Header */}
    return(
            <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <Link href={'/'}>
                            <div>
                                <Image
                                    src="/Logo_mercape_completa.png"
                                    alt="Mercados Públicos"
                                    width={250}
                                    height={250}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </Link>
                            
                    </div>
                    <nav className="flex space-x-4">
                        <a href="/#QuemSomos">
                            <Button variant="outline" className="text-blue-600 border-blue-600 bg-transparent">
                            Quem somos
                        </Button>
                        </a>
                        <a href="/#RankingSection">
                            <Button variant="outline" className="text-blue-600 border-blue-600 bg-transparent">
                                Ranking
                            </Button>
                        </a>
                        <a href="/#AllMarkets">
                            <Button variant="outline" className="text-blue-600 border-blue-600 bg-transparent">
                                Mercados
                            </Button>
                        </a>
                        <a href="/#MapSection">
                            <Button variant="outline" className="text-blue-600 border-blue-600 bg-transparent">
                                Mapa
                            </Button>
                        </a>
                        
                    </nav>
                </div>
            </div>
        </header>
    )
    
}