import Image from "next/image";

export function Footer() {
    return (
        
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
    )
}