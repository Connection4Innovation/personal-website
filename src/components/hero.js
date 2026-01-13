import * as React from "react"
import Link from 'next/link';

function Hero() {

    return (
        <section
            className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center text-gray-600 body-font h-full">
            <div
                className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Connection4Innovation
                    APS
                </h1>
                <p className="mb-8 leading-relaxed mx-3 md:mx-0">Connection4Innovation è una Associazione di Promozione Sociale con sede a Pesaro.

Disegniamo progetti formativi innovativi per i giovani, e siamo un incubatore di sinergie.

Creiamo connessioni per portare innovazione. Connettiamo visioni, esperienze e più di tutto: PERSONE. 

Lavoriamo nei circuiti della progettazione SOCIALE ed europea implementando sinergie attuali ad alto impatto.</p>
                <div className="flex justify-center">
                    <Link href={"/chi-siamo"}>
                        <button
                            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-hidden hover:bg-indigo-600 rounded-sm text-lg">Chi siamo
                        </button>
                    </Link>
                    <Link href={"/contatti"}>
                        <button
                            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-hidden hover:bg-gray-200 rounded-sm text-lg">Contattaci
                        </button>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img src={"/assets/img/undraw_Traveling_re_weve.svg"}
                     alt={"Immagine che mostra due persone intorno ad un mondo"}/>
            </div>
        </section>
    )
}

export default Hero;