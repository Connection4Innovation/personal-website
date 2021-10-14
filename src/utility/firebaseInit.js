import {getApps, initializeApp} from "@firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getPerformance} from "@firebase/performance";
import {getAnalytics, isSupported} from "@firebase/analytics";
import {initializeAppCheck, ReCaptchaV3Provider} from "@firebase/app-check";

const firebaseConfig = {
    apiKey: "AIzaSyDLMu4zd7UVQa36vmLIjL_CnQpXPiz_x1w",
    authDomain: "c4iwebsite.firebaseapp.com",
    projectId: "c4iwebsite",
    storageBucket: "c4iwebsite.appspot.com",
    messagingSenderId: "787533533648",
    appId: "1:787533533648:web:bbfd8b3d7fe404a83be9d5",
    measurementId: "G-HYLS0HXGT0"
};

let firebase, analytics, perf, appCheck, db;

if (typeof window !== 'undefined' && !getApps().length) {
    firebase = initializeApp(firebaseConfig);

    isSupported().then(success => {
        if (success) {
            analytics = getAnalytics();
        }
    });

    appCheck = initializeAppCheck(firebase, {
        provider: new ReCaptchaV3Provider('6Lc7fKscAAAAAFBy3WbaegvVNUUsYX0hVEKMvkC4'),
        isTokenAutoRefreshEnabled: true
    });

    perf = getPerformance(firebase);
    db = getFirestore();
}

export {firebase, analytics, db};
