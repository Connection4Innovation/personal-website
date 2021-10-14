import * as React from "react"
import FooterCTA from "./footer/FooterCTA";
import FooterCredits from "./footer/FooterCredits";
import CookieConsent from "react-cookie-consent";
import {useTranslation} from "react-i18next";

function Footer() {

    const {t} = useTranslation();

    return (
        <footer className="text-gray-600 body-font mt-auto">
            <CookieConsent
                location="bottom"
                buttonText={t('footer:accetta')}
                declineButtonText={t('footer:rifiuta')}
                ariaAcceptLabel={t('footer:accetta_ext')}
                ariaDeclineLabel={t('footer:rifiuta_ext')}
                cookieName="gatsby-gdpr-google-analytics"
                overlay={true}
                enableDeclineButton={true}
                sameSite={"strict"}
                setDeclineCookie={false}
                declineButtonStyle={{background: 'red'}}
                buttonStyle={{background: '#3163E2', color: 'white', fontWeight: 'bold'}}
            >
                {t('footer:cookie')}<a href={"https://www.iubenda.com/privacy-policy/11813572"}> privacy policy</a>
            </CookieConsent>
            <FooterCTA/>
            <FooterCredits/>
        </footer>
    )
}

export default Footer;