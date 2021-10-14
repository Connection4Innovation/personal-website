import * as React from "react";
import {useTranslation} from "react-i18next";

function ProgettiWrapper() {

    const {t} = useTranslation();

    return (
        <section className="text-gray-600 body-font text-center mb-20 pt-12 mx-4 md:mx-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{t('progetti:title')}</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">{t('progetti:description')}</p>
        </section>
    );
}

export default ProgettiWrapper;