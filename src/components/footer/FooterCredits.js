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
                <p className="text-gray-500 text-sm text-center sm:text-left">
                    © {getYear()} Connection4Innovation APS <span className="h-1 block md:hidden" />
                    created by
                    <a
                        href="http://anrighi.dev"
                        className="text-gray-600 ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        andrea righi
                    </a>
                </p>
                <div
                    className="container w-1/2 mx-auto pt-3 flex justify-around md:w-auto lg:w-1/6 md:py-0 sm:justify-end">
                    <FacebookIcon link={"https://www.facebook.com/connection4innovation"} />
                    <span className="lg:w-4 md:w-2" />
                    <InstagramIcon link={"https://www.instagram.com/connection4innovation"} />
                    <span className="lg:w-4 md:w-1" />
                    <LinkedInIcon link={"https://www.linkedin.com/company/71706828"} />
                </div>
                <div
                    className="container md:py-0 pt-3 flex items-center justify-center sm:ml-auto sm:w-auto w-full text-center text-gray-500 text-sm">
                    <LanguageSelector />
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