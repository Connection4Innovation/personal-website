import * as React from "react"
import {useTranslation} from "react-i18next";
import Sidebar from "./sidebar";
import Logo from "./header/Logo";
import Link from 'next/link'
import {useMediaQuery} from "react-responsive";

function Header(props) {
    const {t} = useTranslation();
    const [sidebarVisible, setSidebarVisible] = React.useState(false);

    const isBreakpoint = useMediaQuery({query: '(min-width: 768px)'});

    return (
        <header className="text-gray-600 body-font">
            <Sidebar visible={sidebarVisible} changeVisibility={setSidebarVisible}/>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                {isBreakpoint && <Link href={"/"}><Logo/></Link>}
                {!isBreakpoint && <Logo onClick={() => !isBreakpoint && setSidebarVisible(!sidebarVisible)}/>}
                <nav className="hidden lg:flex md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/chi-siamo"} className="mr-5 hover:text-gray-900">
                        {t('header:chisiamo')}
                    </Link>
                    <Link href={"/progetti"} className="mr-5 hover:text-gray-900">
                        {t('header:progetti')}
                    </Link>
                </nav>
                <Link href={"/contatti"}>
                    <button
                        className="hidden lg:flex inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-hidden hover:bg-gray-200 rounded-sm text-base mt-4 md:mt-0">{t('header:contattaci')}
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2"
                             className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                </Link>
            </div>
            {/* banner */}
            {props.banner &&
                <div
                    className="bg-indigo-600 mx-auto py-3 px-3 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap">
                    <div className="flex-1 flex items-center">
                    <span className="flex p-2 rounded-lg bg-indigo-800">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                      </svg>
                    </span>
                        <p className="ml-3 font-medium text-white">{t('progetti:siamo_in_finale')}</p>
                    </div>
                    <div className="order-3 mt-2 shrink-0 w-full sm:mt-0 sm:w-auto">
                        <a
                            href="https://www.meet-and-code.org/it/it/news-show/458"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-xs text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
                            {t('progetti:guarda_la_news')}
                        </a>
                    </div>
                </div>
            }
        </header>
    )
}

export default Header;