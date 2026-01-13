import * as React from "react"

import Person from "./Person";

function WrapperTeam() {

    const team = [
        {
            name: 'Daniele Tappa',
            role: 'Presidente',
            description: "Consulente appassionato con esperienza in politiche pubbliche, programmi finanziati dall'UE e progetti internazionali. Laurea Magistrale in European and Global Studies all'Università di Padova e Diploma Galileiano. Fondatore e Presidente di Connection4Innovation, promuove l'innovazione sociale guidata dai giovani. Forte background in gestione dei conflitti e leadership, plasmato dalle esperienze con Rondine Cittadella della Pace.",
            linkedin: "https://www.linkedin.com/in/daniele-tappa-792072185/",
            instagram: "https://www.instagram.com/daniele_tappa/",
            image: "/assets/img/dani.jpg"
        },
        {
            name: 'Andrea Righi',
            role: 'Vice Presidente',
            description: "Laureato in Informatica alla Libera Università di Bolzano. Full Stack Developer (NextJS, Symfony) presso Wishraiser. Fondatore e Vice presidente di Connection4Innovation APS.",
            linkedin: "https://www.linkedin.com/in/an-righi7/",
            instagram: "https://www.instagram.com/an.righi7/",
            image: "/assets/img/me.jpeg"
        },
        {
            name: 'Giovanni Bellandi',
            role: 'Coordinatore',
            description: "Laureando in Medicina e Chirurgia a Pisa; appassionato di sport.  Da convinto sostenitore e ammiratore delle realtà operanti nel terzo settore, credo che l'impegno civico, manifestato in maniera costante e capillare, possa produrre un concreto miglioramento dello stato di benessere dell'intera società.",
            instagram: "https://www.instagram.com/giovanni_bellandi/",
            image: "/assets/img/gio.jpeg"
        }
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 lg:py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">La nostra squadra</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Ecco chi sono i responsabili ed i progettisti della nostra associazione, connettiti con loro per richiedere informazioni o suggerire progetti</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {team.map((person, idx) => Person(person, idx))}
                </div>
            </div>
        </section>
    )
}

export default WrapperTeam;