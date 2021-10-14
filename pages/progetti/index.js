import * as React from "react"
import SEO from "../../src/utility/SEO";
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";
import ProgettiWrapper from "../../src/components/progetti/ProgettiWrapper";
import ProgettiShowcase from "../../src/components/progetti/ProgettiShowcase";
import "../../src/utility/i18n.js"

function Index() {

    return (
        /**
         <React.Suspense fallback={<div>Loading...</div>} maxDuration={5000}>**/
        <>
            <SEO title={"Progetti"} description={"Scopri cosa fa l'associazione Connection4Innovation APS"}/>
            <div className={"min-h-screen flex flex-col"}>
                <Header/>
                <ProgettiWrapper/>
                <ProgettiShowcase/>
                <span className="h-10"/>
                <Footer/>
            </div>
        </>
        /**</React.Suspense>**/
    )
}

export default Index;