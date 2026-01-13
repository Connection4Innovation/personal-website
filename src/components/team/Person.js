import * as React from "react"
import Image from 'next/image'

import LinkedInIcon from "../../assets/js/LinkedInIcon";
import InstagramIcon from "../../assets/js/InstagramIcon";

function Person(props, key) {
    return (
        <div className="p-4 w-full m-auto lg:w-1/2" key={key}>
            <div
                className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div className="shrink-0 w-48 h-48 sm:mb-0 mb-4">
                    <Image
                        alt="team"
                        className="rounded-lg object-cover object-center"
                        width={192}
                        height={192}
                        src={props.image}
                    />
                </div>
                <div className="grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">{props.name}</h2>
                    <h3 className="text-gray-500 mb-3">{props.role}</h3>
                    <p className="mb-4">{props.description}</p>
                    <span className="inline-flex">
                        {props.linkedin?.length > 0 ?
                            <div className="pr-2">
                                <LinkedInIcon link={props.linkedin}/>
                            </div> :
                            <></>
                        }
                        {props.instagram?.length > 0 ?
                            <div className="pr-2">
                                <InstagramIcon link={props.instagram}/>
                            </div> :
                            <></>
                        }
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Person;