import * as React from "react";
import Image from 'next/image'

function SingleProject(props) {

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-sm relative" style={{paddingBottom: '50%'}}>
                    <Image
                        fill
                        alt="hero"
                        src={typeof props.image === 'string' ? props.image : props.image.src}
                        className="object-cover rounded-sm"
                    />
                </div>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{props.title}</h1>
                    <p className="leading-relaxed whitespace-pre-line">{props.description}</p>
                </div>
            </div>
            <div className="text-center my-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Partners</h1>
            </div>
            <div className="flex flex-wrap justify-around -m-4">
                {props.partners.map((part, idx) => {
                    return (
                        <div className="p-4 lg:w-1/4 md:w-1/2" key={idx}>
                            <a href={part.link} target={"_blank"}>
                                <div className="shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4 relative">
                                    <Image
                                        fill
                                        alt={part.name}
                                        src={typeof part.image === 'string' ? part.image : part.image.src}
                                        className="object-contain" />
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