import * as React from "react"
import {useTranslation} from "react-i18next";
import publicIp from "public-ip";
import {addDoc, collection} from "@firebase/firestore";
import {db} from "../../utility/firebase";

function FooterCTA() {

    const {t, i18n} = useTranslation();
    const [success, setSuccess] = React.useState(false);
    const [subscribed, setSubscribed] = React.useState(false);

    const getClientIp = async () => publicIp.v4({
        fallbackUrls: ["https://ifconfig.co/ip"]
    });

    const handleSubmit = async (event) => {

        event.preventDefault()

        const result = await subscribe(getClientIp(), event.target.elements.email.value, i18n.language)

        setSubscribed(true)
        setSuccess(result)
    }

    const subscribe = async (ip, email, language) => {
        try {
            await addDoc(collection(db, "newsletter"), {
                language: language,
                signupIP: ip,
                signupTimestamp: Date.now(),
                email: email
            })

            return true;
        } catch (e) {
            return false;
        }
    }

    return (
        <div className="border-t border-gray-200">
            <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                <form className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-between"
                      onSubmit={handleSubmit}>
                    <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                        <label htmlFor="footer-field"
                               className="leading-7 text-sm text-gray-600">{t('footer:newsletter_description')}</label>
                        <input type="text" id="footer-field" name="email"
                               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <button
                        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">{t('footer:newsletter_cta')}
                    </button>
                    {subscribed && <div className="px-10 inline-flex">
                        {success ?
                            <p
                                className="flex mx-auto text-white border-0 py-2 px-8 rounded text-md bg-green-500">
                                {t('footer:feedback_success')}
                            </p> :
                            <p
                                className="flex mx-auto text-white border-0 py-2 px-8 rounded text-md bg-red-500">
                                {t('footer:feedback_failure')}
                            </p>
                        }
                    </div>
                    }
                </form>
                <span
                    className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                </span>
            </div>
        </div>
    )
}

export default FooterCTA;