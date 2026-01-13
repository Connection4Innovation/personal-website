import * as React from "react"
import SEO from "../../src/utility/SEO";
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";
import ProgettiWrapper from "../../src/components/progetti/ProgettiWrapper";
import ProgettiShowcase from "../../src/components/progetti/ProgettiShowcase";

function Index() {

    return (
        <>
            <SEO title={"Progetti"} description={"Scopri cosa fa l'associazione Connection4Innovation APS"} />
            <div className={"min-h-screen flex flex-col"}>
                <Header banner={true} />
                <ProgettiWrapper />
                <ProgettiShowcase />
                <span className="h-10" />
                <Footer />
            </div>
        </>
    )
}

export default Index;