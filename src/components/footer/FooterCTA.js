import * as React from "react"
import { useTranslation } from "react-i18next";
import { subscribeNewsletter } from "../../utility/firebaseFunctions";

function FooterCTA() {

    const { t, i18n } = useTranslation();
    const [success, setSuccess] = React.useState(false);
    const [subscribed, setSubscribed] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault()
        setSubscribed(true)
        setSuccess(subscribeNewsletter(event.target.elements.email.value, i18n.language))
    }

    return (
        <form
            className="container border-t border-gray-200 pl-5 py-4 flex flex-wrap flex-col md:flex-row text-center md:text-left mx-auto items-center justify-around md:items-end md:justify-start md:flex-nowrap"
            onSubmit={handleSubmit}>
            <div className="relative sm:mr-4 mr-2">
                <label htmlFor="newsletter"
                    className="leading-7 text-sm text-gray-600">{t('footer:newsletter_description')}</label>
                <input type="email" id="newsletter" name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <span className="h-2 md:hidden" />
            <button
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">{t('footer:newsletter_cta')}
            </button>
            <span className="h-2 md:hidden" />
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
    )
}

export default FooterCTA;