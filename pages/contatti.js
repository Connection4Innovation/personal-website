import * as React from "react"

import Header from "../src/components/header";
import Footer from "../src/components/footer";
import WrapperContacts from "../src/components/contacts/WrapperContacts";
import SEO from "../src/utility/SEO";

function Contacts() {

    return (
        <>
            <SEO title={"Contattaci"} description={"Contattaci per organizzare progetti insieme"} />
            <div className={"min-h-screen flex flex-col"}>
                <Header banner={true} />
                <WrapperContacts />
                <Footer />
            </div>
        </>
    )
}

export default Contacts;