import * as React from "react";
import {useTranslation} from "react-i18next";
import Image from 'next/image'
import Link from 'next/link'

function SingleProject(props) {

    const {t} = useTranslation();

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="md:w-3/6 w-5/6 mb-10 object-cover object-center rounded">
                    <Image
                        layout={"responsive"}
                        width={4}
                        height={2}
                        alt="hero"
                        src={props.image.src}
                    />
                </div>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{t(`progetti:${props.title}`)}</h1>
                    <p className="leading-relaxed">{t(`progetti:${props.description}`)}</p>
                </div>
            </div>
            <div className="flex justify-around">
                <iframe
                    src={"https://docs.google.com/forms/d/e/1FAIpQLSco1sMT1rMlwExDmVbmiyqe6_JzmT_2mxZ_ZbBfkCubPkatNw/viewform?embedded=true"}
                    width="640" height="1500" frameBorder="0" marginHeight="0" marginWidth="0"/>
            </div>
            <div className="text-center my-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{t('progetti:partners')}</h1>
            </div>
            <div className="flex flex-wrap justify-around -m-4">
                {props.partners.map((part, idx) => {
                    return (
                        <div className="p-4 lg:w-1/4 md:w-1/2" key={idx}>
                            <a href={part.link} target={"_blank"}>
                                <div className="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4">
                                    <Image
                                        layout={"responsive"}
                                        width={4}
                                        height={2}
                                        alt={part.name}
                                        src={part.image.src}/>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default SingleProject;