import * as React from "react"
import {useTranslation} from "react-i18next";
import Link from 'next/link';

function Hero() {

    const {t} = useTranslation();

    return (
        <section className="text-gray-600 body-font h-full">
            <div className="bg-indigo-600">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                            <span className="flex p-2 rounded-lg bg-indigo-800">
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                              </svg>
                            </span>
                            <p className="ml-3 font-medium text-white truncate">{t('progetti:iscrizioni_aperte')}</p>
                        </div>
                        <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                            <Link href="/progetti/open-the-data">
                                <a
                                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
                                    {t('progetti:iscriviti_ora')}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Connection4Innovation
                        APS
                    </h1>
                    <p className="mb-8 leading-relaxed">{t("chisiamo:description")}</p>
                    <div className="flex justify-center">
                        <Link href={"/chi-siamo"}>
                            <button
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{t("header:chisiamo")}
                            </button>
                        </Link>
                        <Link href={"/contatti"}>
                            <button
                                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">{t("header:contattaci")}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img src={"../assets/img/undraw_Traveling_re_weve.svg"}
                         alt={"Immagine che mostra due persone intorno ad un mondo"}/>
                </div>
            </div>
        </section>
    )
}

export default Hero;