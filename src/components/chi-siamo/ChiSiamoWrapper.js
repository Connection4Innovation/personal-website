import * as React from "react";
import { useTranslation } from "react-i18next";
import Link from 'next/link';

function ChiSiamoWrapper() {

    const { t } = useTranslation();

    return (
        <section className="text-gray-600 body-font pt-12">
            <div className="text-center mb-10 mx-4 md:mx-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{t('chisiamo:title')}</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">{t('chisiamo:description')}</p>
            </div>
            <div className="flex justify-center">
                <Link href={"/la-nostra-squadra"}>
                    <button
                        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{t("chisiamo:scopri_team")}
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default ChiSiamoWrapper;