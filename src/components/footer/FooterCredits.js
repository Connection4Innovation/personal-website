import * as React from "react"
import LanguageSelector from "./LanguageSelector";
import LinkedInIcon from "../../assets/js/LinkedInIcon";
import InstagramIcon from "../../assets/js/InstagramIcon";
import FacebookIcon from "../../assets/js/FacebookIcon";

function FooterCredits() {

    const getYear = () => {
        return (new Date()).getFullYear();
    }

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">© {getYear()} Connection4Innovation APS
                    <span className="hidden md:block"> — </span><div className="md:hidden"><br/></div>
                    created by <a href="http://anrighi.dx.am" className="text-gray-600 ml-1" target="_blank"
                                  rel="noopener noreferrer">andrea righi</a>
                </p>
                <div
                    className="container md:py-0 pt-3 flex items-center justify-center sm:ml-auto sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
                    <FacebookIcon link={"https://www.facebook.com/connection4innovation"}/>
                    <span className="lg:w-4 md:w-1"/>
                    <InstagramIcon link={"https://www.instagram.com/connection4innovation"}/>
                    <span className="lg:w-4 md:w-1"/>
                    <LinkedInIcon link={"https://www.linkedin.com/company/71706828"}/>
                    <span className="lg:w-4 md:w-1"/>
                    <span className="hidden md:block">•</span><br className="md:hidden"/><LanguageSelector/>
                    <a href="https://www.iubenda.com/privacy-policy/11813572"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="">
                        • Privacy policy
                    </a>
                </div>
            </div>
        </div>

    )
}

export default FooterCredits;