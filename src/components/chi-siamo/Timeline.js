import * as React from "react"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Link from "next/link"

function Timeline() {

    const timelineEvents = [{
        title: "Partecipazione a Bando Fermenti",
        subtitle: "Progetto - Italian Cracks",
        description: "Come gruppo informale CO.MA.IN. abbiamo partecipato ad il bando istituzionale promosso dalla presidenza del consiglio dei ministri, classificandoci 103esimi su migliaia di progetti.",
        date: "Marzo 2019",
    }, {
        title: "Fondazione dell'associazione",
        subtitle: "",
        description: "Con l'iscrizione presso l'agenzia delle entrate di Pesaro, siamo stati riconosciuti formalmente come associazione.",
        date: "Giugno 2020",
        contentStyle: { background: '#7F96EA', color: 'black' }
    }, {
        title: "Ingresso nella rete AUSER",
        subtitle: "",
        description: "Per incrementare le nostre possibilità di connessione, ci siamo affiliati con AUSER, di cui diventiamo partner per creare progetti ancora più di impatto.",
        date: "Giugno 2020",
        contentStyle: { background: '#7F96EA', color: 'black', }
    }, {
        title: "Riconoscimento come Associazione di Promozione Sociale",
        subtitle: "Iscrizione nel registro regionale",
        description: "Il centro antiviolenza di Pesaro ha riconosciuto Connection4Innovation APS come una Associazione di Promozione Sociale, iscrivendola nel registro regionale dedicato.",
        date: "Agosto 2021",
    }, {
        title: "Progetto - Open The Data",
        subtitle: "Parte del percorso Meet And Code 2021",
        date: "Ottobre 2021",
        description: "Il primo progetto portato alla realizzazione dall'associazione; si compone di un mini-corso online riguardo l'analisi di dati da bacnhe dati europee con Python.",
        buttons: [
            {
                link: '/progetti/open-the-data',
                text: "Iscriviti"
            }
        ]
    }, {
        title: "Iscrizione nel Registro Unico Nazionale del Terzo Settore",
        subtitle: "",
        date: "Ottobre 2022",
        description: "Il Ministero del Lavoro e delle Politiche Sociali ha riconosciuto Connection4Innovation APS come Associazione di Promozione Sociale, iscrivendola nel registro nazionale dedicato.",
        contentStyle: { background: '#7F96EA', color: 'black', }
    }, {
        title: "Riconoscimento come Associazione Giovanile Regione Marche",
        subtitle: "",
        date: "Marzo 2023",
        description: "La regione Marche ha riconosciuto Connection4Innovation APS come Associazione Giovanile, iscrivendola nel registro regionale dedicato.",
    }, {
        title: "Progetto - Open The Data",
        subtitle: "Parte del percorso Meet And Code 2023",
        date: "Ottobre 2023",
        description: "Meet and Code ha riconosciuto il progetto Open The Data come parte del percorso 2023, finanziandolo e permettendoci di portarlo avanti.",
    }];

    return (
        <VerticalTimeline className="mx-6">
            {timelineEvents.reverse().map((item, idx) => {

                const alpha = 1 - (1 / (timelineEvents).length * (idx + 1));

                return (
                    <VerticalTimelineElement
                        key={idx}
                        contentStyle={item.contentStyle ?? { border: '2px solid #7F96EA' }}
                        contentArrowStyle={{ borderRight: '7px solid #7F96EA' }}
                        date={item.date}
                        iconStyle={{
                            background: `rgba(127, 150, 134, ${alpha})`,
                            color: '#fff'
                        }}
                    >
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <h4 className="italic">{item.subtitle}</h4>
                        <p className="font-light">{item.description}</p>
                        <div className="pt-4">
                            {(item.buttons ?? []).map((bt, btIdx) => {
                                return (
                                    <Link href={bt.link} key={btIdx}>
                                        <button
                                            className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-hidden hover:bg-indigo-600 rounded-sm text-md'
                                        >
                                            {bt.text}
                                        </button>
                                    </Link>
                                )
                            })}
                        </div>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    );
}

export default Timeline;


