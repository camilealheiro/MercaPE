import Image from "next/image";
import { Button } from "@/components/ui/button";

export function MapSection() {
    {/* Map Section */}
    return(
        <section id= "MapSection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            
                    <div className="rounded-lg overflow-hidden h-80">
                        <iframe
                            title="Mapa dos Mercados"
                            src="https://www.google.com/maps/d/u/0/embed?mid=1cMKgJMMbFUzq9ZHFoT8cCQ0o5pLk-7E&ehbc=2E312F&noprof=1"
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
    )
    
}