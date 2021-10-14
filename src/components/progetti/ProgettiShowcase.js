import * as React from "react";
import {useTranslation} from "react-i18next";
import ProjectCard from "./ProjectCard";

import openthedata from '../../../public/assets/img/openthedata.png'

function ProgettiShowcase() {

    const {t} = useTranslation();

    const projects = [
        {
            title: t('progetti:1_title'),
            description: t('progetti:1_description'),
            linkDescription: t('progetti:1_link'),
            link: '/progetti/open-the-data',
            image: openthedata
        },
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="flex flex-wrap justify-around space-y-6">
                {projects.map((item, idx) => {
                    return (
                        <ProjectCard title={item.title} description={item.description} link={item.link}
                                     linkDescription={item.linkDescription} image={item.image}/>
                    );
                })}
            </div>
        </section>
    );
}

export default ProgettiShowcase;