import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard(props) {

    return (
        <Link href={props.link}>
            <div className="p-4 md:w-1/3 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={props.image.src}
                    width={4}
                    height={2}
                    layout="responsive"
                    alt="blog"
                />
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{props.title}</h1>
                    <p className="leading-relaxed mb-3">{props.description}</p>
                    <div className="flex items-center flex-wrap ">
                        <Link href={props.link} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            {props.linkDescription}
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                 strokeWidth="2"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"/>
                                <path d="M12 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;