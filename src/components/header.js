import * as React from "react"
import {useTranslation} from "react-i18next";
import Sidebar from "./sidebar";
import Logo from "./header/Logo";
import Link from 'next/link'

function Header() {
    const {t} = useTranslation();
    const [sidebarVisible, setSidebarVisible] = React.useState(false);

    return (
        <header className="text-gray-600 body-font">
            <Sidebar visible={sidebarVisible} changeVisibility={setSidebarVisible}/>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div onClick={() => setSidebarVisible(!sidebarVisible)}>
                    {typeof window !== 'undefined' ?
                        <>
                            {window.matchMedia("(min-width: 768px)").matches && <Link href={"/"}><Logo/></Link>}
                            {window.matchMedia("(max-width: 767px)").matches && <Logo/>}
                        </> : <Logo/>
                    }
                </div>
                <nav className="hidden lg:flex md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/chi-siamo"}>
                        <a className="mr-5 hover:text-gray-900">{t('header:chisiamo')}</a>
                    </Link>
                    <Link href={"/progetti"}>
                        <a className="mr-5 hover:text-gray-900">{t('header:progetti')}</a>
                    </Link>
                </nav>
                <Link href={"/contatti"}>
                    <button
                        className="hidden lg:flex inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">{t('header:contattaci')}
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2"
                             className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Header;