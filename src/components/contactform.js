import * as React from "react";
import {useTranslation} from "react-i18next";
import {sendMail, subscribeNewsletter} from "../utility/firebaseFunctions";

function ContactForm() {

    const {t, i18n} = useTranslation();
    const [success, setSuccess] = React.useState(false);
    const [mailSent, setMailSent] = React.useState(false);


    const sendInquiry = async (to, name, content) => {

        const contentOng = `Nuova mail da ${name} - ${to}:\n${content}`;
        const contentClient = `Ciao ${name},\necco qua la copia della messaggio che hai inviato:\n${content}`;

        const sendToOng = sendMail("segreteria@connection4innovation.it", "Nuova mail da form online", contentOng);
        return sendToOng ? sendMail(to, "Copia mail inviata a Connection4Innovation APS", contentClient) : sendToOng;
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (event.target.elements.newsletter.value) {
            subscribeNewsletter(event.target.elements.email.value, i18n.language)
        }

        sendInquiry(event.target.elements.email.value, event.target.elements.name.value, event.target.elements.message.value)
            .then(result => {
                console.log('email sent ' + result)
                setMailSent(true)
                setSuccess(result)
            });
    }

    return (
        <form className="lg:w-1/2 md:w-2/3 mx-auto flex flex-wrap mb-10 md:mb-0" onSubmit={handleSubmit}>
            <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">{t('contacts:nome')}</label>
                    <input type="text" id="name" name="name" required={true}
                           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
            <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">{t('contacts:email')}</label>
                    <input type="email" id="email" name="email" required={true}
                           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
            <div className="p-2 w-full">
                <div className="relative">
                    <label htmlFor="message"
                           className="leading-7 text-sm text-gray-600">{t('contacts:messaggio')}</label>
                    <textarea id="message" name="message" required={true}
                              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                    <input type={"checkbox"} name={"privacy"} required={true}/>
                    <label htmlFor={"privacy"} className="leading-7 text-sm text-gray-600"> {t('contacts:privacy')}
                        <a href={"https://www.iubenda.com/privacy-policy/11813572"}>{t('privacy policy')}</a></label>
                    <br/>
                    <input type={"checkbox"} name={"newsletter"}/>
                    <label htmlFor={"newsletter"}
                           className="leading-7 text-sm text-gray-600"> {t('contacts:newsletter')}</label>
                </div>
            </div>
            <div className="p-2 w-full">
                <button
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{t('contacts:invia')}
                </button>
            </div>
            {mailSent && <div className="p-2 w-full">
                {success ?
                    <p
                        className="flex mx-auto text-white border-0 py-2 px-8 rounded text-md bg-green-500">
                        {t('contacts:feedback_success')}
                    </p> :
                    <p
                        className="flex mx-auto text-white border-0 py-2 px-8 rounded text-md bg-red-500">
                        {t('contacts:feedback_failure')}
                    </p>
                }
            </div>
            }
        </form>
    )
}

export default ContactForm;