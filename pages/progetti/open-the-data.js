import * as React from "react"

import SEO from "../../src/utility/SEO";
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";

import SingleProject from "../../src/components/progetti/SingleProject";
import Script from "next/script";

function OpenTheData() {

    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                          "@context": "https://schema.org",
                          "@type": "Event",
                          "name": "Open The Data",
                          "startDate": "2021-10-23",
                          "endDate": "2021-10-30",
                          "eventStatus": "https://schema.org/EventScheduled",
                          "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
                          "location": {
                            "@type": "VirtualLocation",
                            "url": "https://openthedata.connection4innovation.it"
                          }
                        }`
                }}
            />
            <SEO title={"Open The Data"} description={"Mini-corso online riguardante l'analisi dati con Python"} />
            <div className={"min-h-screen flex flex-col"}>
                <Header banner={false} />
                <SingleProject image={"/assets/img/openthedata.png"} title={'Open The Data'}
                    description={"Il progetto consiste di 4 videolezioni che accompagneranno l'utente nell'apprendimento del linguaggio di programmazione Python e nella realizzazione di manipolazione e visualizzazione grafiche di set di dati disponibili online. \n Alla fine di ogni video, ci sarà un breve questionario da compilare, per monitorare lo stato di apprendimento.\n\nI partecipanti elaboreranno un dataset tramite Jupiter Notebook e alcune librerie di Python (Pandas, Matplotlib, Seaborn), per realizzare delle data visualization partendo da set di dati disponibili online, nei siti governativi (World Bank Open Data, OECD Data). \n Per maggiori informazioni scrivi alla nostra mail."} partners={[{
                        name: "MeetAndCode",
                        link: "https://meet-and-code.org/",
                        image: "/assets/img/RGB_Meet_and_Code_Logo.jpg",
                        iframe: "https://docs.google.com/forms/d/e/1FAIpQLSco1sMT1rMlwExDmVbmiyqe6_JzmT_2mxZ_ZbBfkCubPkatNw/viewform?embedded=true"
                    }]} />
                <Footer />
            </div>
        </>
    );
}

export default OpenTheData;