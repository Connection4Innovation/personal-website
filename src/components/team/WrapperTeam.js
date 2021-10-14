import * as React from "react"

import Person from "./Person";
import {useTranslation} from "react-i18next";

import cut from "../../assets/img/cut.jpg";
import dani from "../../assets/img/dani.jpg";
import righi from "../../assets/img/me.jpeg";
import gio from "../../assets/img/gio.jpeg";
import lorena from "../../assets/img/lorena.jpg";

function WrapperTeam() {

    const {t} = useTranslation();

    const team = [
        {
            name: 'Daniele Tappa',
            role: t('team:tappa_role'),
            description: t('team:tappa_bio'),
            linkedin: "https://www.linkedin.com/in/daniele-tappa-792072185/",
            instagram: "https://www.instagram.com/daniele_tappa/",
            image: dani
        },
        {
            name: 'Andrea Righi',
            role: t('team:righi_role'),
            description: t('team:righi_bio'),
            linkedin: "https://www.linkedin.com/in/an-righi7/",
            instagram: "https://www.instagram.com/an.righi7/",
            image: righi
        },
        {
            name: 'Andrea Cutrera',
            role: t('team:cutrera_role'),
            description: t('team:cutrera_bio'),
            linkedin: "https://www.linkedin.com/in/andrea-cutrera-901908179/",
            instagram: "https://www.instagram.com/andreacutrera/",
            image: cut
        },
        {
            name: 'Giovanni Bellandi',
            role: t('team:bellandi_role'),
            description: t('team:bellandi_bio'),
            linkedin: "https://www.linkedin.com/in/giovanni-bellandi-a348b6198/",
            instagram: "https://www.instagram.com/giovanni_bellandi/",
            image: gio
        },
        {
            name: 'Lorena Gioviani',
            role: t('team:gioviani_role'),
            description: t('team:gioviani_bio'),
            linkedin: "https://www.linkedin.com/in/lorena-gioviani-98b08519b/",
            instagram: "https://www.instagram.com/lorenagioviani/",
            image: lorena
        }
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 lg:py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{t('team:title')}</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">{t('team:description')}</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {team.map((person, idx) => Person(person, idx))}
                </div>
            </div>
        </section>
    )
}

export default WrapperTeam;