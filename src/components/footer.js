import * as React from "react"
import FooterCTA from "./footer/FooterCTA";
import FooterCredits from "./footer/FooterCredits";
import CookieConsent from "react-cookie-consent";

function Footer() {

    return (
        <footer className="text-gray-600 body-font mt-auto">
            <CookieConsent
                location="bottom"
                buttonText="Accetta"
                declineButtonText="Rifiuta"
                ariaAcceptLabel="Accetta cookies"
                ariaDeclineLabel="Rifiuta cookies"
                cookieName="gatsby-gdpr-google-analytics"
                overlay={true}
                enableDeclineButton={true}
                sameSite={"strict"}
                setDeclineCookie={false}
                declineButtonStyle={{background: 'red'}}
                buttonStyle={{background: '#3163E2', color: 'white', fontWeight: 'bold'}}
            >
                Questo sito utilizza cookie - vedi di più nella<a href={"https://www.iubenda.com/privacy-policy/11813572"}> privacy policy</a>
            </CookieConsent>
            <FooterCTA/>
            <FooterCredits/>
        </footer>
    )
}

export default Footer;