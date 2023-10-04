import * as React from "react"

import SEO from "../../src/utility/SEO";
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";

import "../../src/utility/i18n.js"
import SingleProject from "../../src/components/progetti/SingleProject";

import openthedata from "../../public/assets/img/openthedata.png"
import meetandcode from "../../public/assets/img/RGB_Meet_and_Code_Logo.jpg"
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
                <SingleProject image={openthedata} title={'otd_title'}
                    description={'otd_description'} partners={[{
                        name: "MeetAndCode",
                        link: "https://meet-and-code.org/",
                        image: meetandcode,
                        iframe: "https://docs.google.com/forms/d/e/1FAIpQLSco1sMT1rMlwExDmVbmiyqe6_JzmT_2mxZ_ZbBfkCubPkatNw/viewform?embedded=true"
                    }]} />
                <Footer />
            </div>
        </>
    );
}

export default OpenTheData;