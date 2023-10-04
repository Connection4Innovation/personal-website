import * as React from "react"

import 'react-vertical-timeline-component/style.min.css';
import SEO from "../src/utility/SEO";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import ChiSiamoWrapper from "../src/components/chi-siamo/ChiSiamoWrapper";

import "../src/utility/i18n.js"
import Timeline from "../src/components/chi-siamo/Timeline";

function ChiSiamo() {
    return (
        <>
            <SEO title={"Chi siamo"} description={"Scopri la storia dell'associazione Connection4Innovation APS"} />
            <div className={"min-h-screen flex flex-col"}>
                <Header banner={true} />
                <ChiSiamoWrapper />
                <span className="h-10" />
                <Timeline />
                <Footer />
            </div>
        </>
    );
}

export default ChiSiamo;