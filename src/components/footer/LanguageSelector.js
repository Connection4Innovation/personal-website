import * as React from "react"
import {useTranslation} from "react-i18next";

function LanguageSelector() {

    let button;
    const {t, i18n} = useTranslation();

    switch (i18n.language) {
        case 'it':
            button =
                <button type="button" onClick={() => i18n.changeLanguage('en')} className="px-2">
                    <img src="https://www.countryflags.io/gb/flat/24.png" width={24} alt={t('footer:ukFlag')}/>
                </button>
            break;
        default:
            button =
                <button type="button" onClick={() => i18n.changeLanguage('it')} className="px-2">
                    <img src="https://www.countryflags.io/it/flat/24.png" width={24} alt={t('footer:italyFlag')}/>
                </button>
    }

    return button;
}

export default LanguageSelector;