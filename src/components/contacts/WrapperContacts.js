import * as React from "react"

import {useTranslation} from "react-i18next";
import ContactForm from "../contactform";

function WrapperContacts() {

    const {t} = useTranslation();

    return (
        <section className="container px-5 py-5 lg:py-24 mt-12 mx-auto text-gray-600 body-font h-full">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{t("header:contattaci")}</h1>
            </div>
            <ContactForm/>
            {/**<div className="w-full content-center">
             <div>Via Santerno 44/2 - 61121 Pesaro</div>
             <div>
             <a href={"mailto:segreteria@connection4innovation.it"}>
             segreteria@connection4innovation.it
             </a>
             </div>
             </div>**/}
        </section>
    )
}

export default WrapperContacts;