import * as React from "react"

import Hero from "../src/components/hero";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import "../src/utility/i18n.js"
import SEO from "../src/utility/SEO";

function Index() {
    return (
        /**
         <React.Suspense fallback={<div>Loading...</div>} maxDuration={5000}>**/
        <>
            <SEO/>
            <div className={"min-h-screen flex flex-col"}>
                <Header banner={true}/>
                <Hero/>
                <Footer/>
            </div>
        </>
        /**</React.Suspense>**/
    )
}

export default Index;