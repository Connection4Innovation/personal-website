import * as React from "react"
import SEO from "../src/utility/SEO";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import PageNotFound from "../src/components/page-not-found";

const NotFoundPage = () => {
    return (
        <>
            <SEO title={"Errore 404"} description={"Pagina non trovata"} />
            <Header banner={true} />
            <PageNotFound />
            <Footer />
        </>
    )
}

export default NotFoundPage;