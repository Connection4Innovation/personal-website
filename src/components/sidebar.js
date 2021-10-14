import * as React from "react"
import {useTranslation} from "react-i18next";
import Link from 'next/link'

function Sidebar(props) {

    const {t} = useTranslation();

    if (!props.visible) {
        return (<></>)
    } else {
        return (
            <div className="md:hidden">
                <div className="fixed inset-0 flex z-40">

                    <div className="fixed inset-0">
                        <div className="absolute inset-0 bg-gray-600 opacity-75"/>
                    </div>

                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                        <div className="absolute top-0 right-0 -mr-14 p-1">
                            <button
                                className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                                aria-label="Close sidebar" onClick={() => props.changeVisibility(false)}>
                                <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto text-left leading-8">
                            <p className="px-5 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ml-3 text-xl">
                                Connection4Innovation
                            </p>
                            <Link href={"/"}>
                                <a className="px-10 hover:text-gray-900"
                                   onClick={() => props.changeVisibility(false)}>{t('header:home')}</a>
                            </Link>
                            <Link href={"/la-nostra-squadra"}>
                                <p className="px-10 hover:text-gray-900"
                                   onClick={() => props.changeVisibility(false)}>{t('header:chisiamo')}</p>
                            </Link>
                            <Link href={"/progetti"}>
                                <p className="px-10 hover:text-gray-900"
                                   onClick={() => props.changeVisibility(false)}>{t('header:progetti')}</p>
                            </Link>
                            <Link href={"/contatti"}>
                                <p className="px-10 hover:text-gray-900"
                                   onClick={() => props.changeVisibility(false)}>{t('header:contattaci')}</p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-14"/>
                </div>
            </div>
        )
    }
}

export default Sidebar;