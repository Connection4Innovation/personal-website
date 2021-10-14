import * as React from "react"

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {useTranslation} from "react-i18next";

function Timeline() {

    const {t} = useTranslation();

    const timelineEvents = [{
        title: t('timeline:1_title'),
        subtitle: t('timeline:1_subtitle'),
        description: t('timeline:1_description'),
        date: t('timeline:1_date'),
    }, {
        title: t('timeline:2_title'),
        subtitle: t('timeline:2_subtitle'),
        description: t('timeline:2_description'),
        date: t('timeline:2_date'),
        contentStyle: {background: '#7F96EA', color: 'black'}
    }, {
        title: t('timeline:3_title'),
        subtitle: t('timeline:3_subtitle'),
        description: t('timeline:3_description'),
        date: t('timeline:3_date'),
        contentStyle: {background: '#7F96EA', color: 'black',}
    }, {
        title: t('timeline:4_title'),
        subtitle: t('timeline:4_subtitle'),
        description: t('timeline:4_description'),
        date: t('timeline:4_date'),
    }, {
        title: t('timeline:5_title'),
        subtitle: t('timeline:5_subtitle'),
        date: t('timeline:5_date'),
        description: t('timeline:5_description'),
        buttons: [
            {
                link: '/progetti/open-the-data',
                text: t('timeline:5_button1')
            }
        ]
    }];

    return (
        <>
            <VerticalTimeline>
                {timelineEvents.reverse().map((item, idx) => {

                    const alpha = 1 - (1 / (timelineEvents).length * (idx + 1));

                    return (
                        <VerticalTimelineElement
                            key={idx}
                            contentStyle={item.contentStyle ?? {border: '2px solid #7F96EA'}}
                            contentArrowStyle={{borderRight: '7px solid #7F96EA'}}
                            date={item.date}
                            iconStyle={{
                                background: `rgba(127, 150, 134, ${alpha})`,
                                color: '#fff'
                            }}
                        >
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <h4 className="italic">{item.subtitle}</h4>
                            <p className="font-light">{item.description}</p>
                            {(item.buttons ?? []).map((bt, btIdx) => {
                                return (
                                    <button
                                        className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md'
                                        onClick={() => console.log(bt.link, "_self")}
                                    >
                                        {bt.text}
                                    </button>
                                )
                            })}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </>
    );
}

export default Timeline;


