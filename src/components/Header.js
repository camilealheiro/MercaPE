import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
    {/* Header */}
    return(
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
    )
    
}