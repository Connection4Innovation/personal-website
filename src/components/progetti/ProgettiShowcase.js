import * as React from "react";
import ProjectCard from "./ProjectCard";

function ProgettiShowcase() {

    const projects = [
        {
            title: "Open The Data",
            description: "Mini-corso online riguardante analisi dati con Python.",
            linkDescription: "Iscriviti",
            link: '/progetti/open-the-data',
            image: "/assets/img/openthedata.png"
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