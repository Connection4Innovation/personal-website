import * as React from "react"

import Header from "../src/components/header";
import Footer from "../src/components/footer";
import WrapperTeam from "../src/components/team/WrapperTeam";

import "../src/utility/i18n.js";
import SEO from "../src/utility/SEO";

function LaNostraSquadra() {

    return (
        <>
            <SEO title={"La Nostra Squadra"} description={"Conosci il nostro team"} />
            <div className={"min-h-screen flex flex-col"}>
                <Header banner={true} />
                <WrapperTeam />
                <Footer />
            </div>
        </>
    )
}

export default LaNostraSquadra;