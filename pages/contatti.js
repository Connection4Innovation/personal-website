import * as React from "react"

import Header from "../src/components/header";
import Footer from "../src/components/footer";
import WrapperContacts from "../src/components/contacts/WrapperContacts";

import "../src/utility/i18n.js"
import SEO from "../src/utility/SEO";

function Contacts() {

    return (
        /**
         <React.Suspense fallback={<div>Loading...</div>} maxDuration={5000}>**/
        <>
            <SEO title={"Contattaci"} description={"Contattaci per organizzare progetti insieme"}/>
            <Header/>
            <WrapperContacts/>
            <Footer/>
        </>
        /**</React.Suspense>**/
    )
}

export default Contacts;