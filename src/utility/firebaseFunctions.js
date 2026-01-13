import {addDoc, collection} from "@firebase/firestore";
import {db} from "./firebaseInit";
import {publicIpv4} from "public-ip";

export const sendMail = async (to, subject, content) => {
    try {
        await addDoc(collection(db, "mail"), {
            message: {
                subject,
                text: content
            },
            to: [to]
        });
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}

export const subscribeNewsletter = async (ip, email, language) => {

    const getClientIp = async () => publicIpv4({
        fallbackUrls: ["https://ifconfig.co/ip"]
    });

    try {
        await addDoc(collection(db, "newsletter"), {
            language: language,
            signupIP: getClientIp(),
            signupTimestamp: Date.now(),
            email: email
        })

        return true;
    } catch (e) {
        return false;
    }
}
