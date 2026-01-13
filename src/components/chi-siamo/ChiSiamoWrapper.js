import * as React from "react";
import Link from 'next/link';

function ChiSiamoWrapper() {

    return (
        <section className="text-gray-600 body-font pt-12">
            <div className="text-center mb-10 mx-4 md:mx-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Chi siamo</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Connection4Innovation è una Associazione di Promozione Sociale con sede a Pesaro.

Disegniamo progetti formativi innovativi per i giovani, e siamo un incubatore di sinergie.

Creiamo connessioni per portare innovazione. Connettiamo visioni, esperienze e più di tutto: PERSONE. 

Lavoriamo nei circuiti della progettazione SOCIALE ed europea implementando sinergie attuali ad alto impatto.</p>
            </div>
            <div className="flex justify-center">
                <Link href={"/la-nostra-squadra"}>
                    <button
                        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-hidden hover:bg-indigo-600 rounded-sm text-lg">Scopri la nostra squadra
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default ChiSiamoWrapper;