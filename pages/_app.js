import '../styles/globals.css'
import '../src/utility/firebaseInit'
import * as fbq from '../src/utility/fpixel'
import {useRouter} from "next/router";
import {useEffect} from "react";
import Script from 'next/script'
import {hotjar} from "react-hotjar";

function MyApp({Component, pageProps}) {

    const router = useRouter()

    useEffect(() => {

        hotjar.initialize(2625870, 6);
        fbq.pageview()

        const handleRouteChange = () => {
            fbq.pageview()
        }

        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <>
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `!function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', ${fbq.FB_PIXEL_ID});
                            
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window, document, "clarity", "script", "8vgo9kbjmx");`,
                }}
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp

