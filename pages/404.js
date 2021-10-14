import * as React from "react"
import SEO from "../src/utility/SEO";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import PageNotFound from "../src/components/page-not-found";

import '../src/utility/i18n'

const NotFoundPage = () => {
    return (
        /**
         <React.Suspense fallback={<div>Loading...</div>} maxDuration={5000}>**/
        <>
            <SEO title={"Errore 404"} description={"Pagina non trovata"}/>
            <Header/>
            <PageNotFound/>
            <Footer/>
        </>
        /**</React.Suspense>**/
    )
}

export default NotFoundPage;