import * as React from "react"

import Header from "../src/components/header";
import Footer from "../src/components/footer";
import WrapperTeam from "../src/components/team/WrapperTeam";

import "../src/utility/i18n.js";
import SEO from "../src/utility/SEO";

function LaNostraSquadra() {

    return (
        /**
         <React.Suspense fallback={<div>Loading...</div>} maxDuration={5000}>**/
        <>
            <SEO title={"La Nostra Squadra"} description={"Conosci il nostro team"}/>
            <Header/>
            <WrapperTeam/>
            <Footer/>
        </>
        /**</React.Suspense>**/
    )
}

export default LaNostraSquadra;