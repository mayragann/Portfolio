import React from 'react'
import "./WorkExp.css"
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdGroupWork} from 'react-icons/md';


const WorkExp = () => {
    const data = [
        {
            company: 'Commercial Signs',
            position: 'Graphic Designer',
            description: ` Created Production Ready Renderings of major franchises.
            Assisted senior designer in managing numerous franchises designs. 
            Provided the sales team sign designs for their numerous clients.`,
            year: '2019-2022',
            techskills: [
                {
                    tech: 'Illustrator'
                }, {
                    tech: 'FlexiSign'
                }, {
                    tech: 'Indesign'
                }, {
                    tech: 'Cyrious'
                }

            ]
        }, {
            company: 'Acra Signs',
            position: 'Junior Graphic Designer',
            description: ` Assisted Customers with all their Print and Sign needs.
            Assisted Sign Department with designing signs.`,
            year: '2017-2019',
            techskills: [
                {
                    tech: 'Illustrator'
                }, {
                    tech: 'FlexiSign'
                }, {
                    tech: 'Indesign'
                }, {
                    tech: 'Photoshop'
                },


            ]
        }, {
            company: 'Fast Signs',
            position: 'Junior Graphic Designer',
            description: ` Assisted Customers with all their Print and Sign needs.
            Assisted Sign Department with designing signs.`,
            year: '2016-2017',
            techskills: [
                {
                    tech: 'Illustrator'
                }, {
                    tech: 'Indesign'
                }, {
                    tech: 'Photoshop'
                },

            ]
        }, {
            company: 'US Navy',
            position: 'Aviation Structure Mechanic',
            description: ` Assisted in several major repairs on the aircraft. 
            Assisted with transcription of blueprints for mechanical repair of aircraft.
            Handled classified Information and Materials Security.`,
            year: '2009-2012',
            techskills: [
                {
                    tech: 'Blueprints'
                },

            ]

        },
    ]
    const colors = ["#4BA186", "#ff1042", "#0367AD", "#FF5530",]


    return (
        <div className='container work-section' id='work'>

            <div className='section-title'>
                <h5>Work Experience</h5>
                <span className='line'></span>

            </div>
            <div className='timeline-secion'>
                <VerticalTimeline lineColor='#ff1042'>
                    {
                    data.map((item, index) => (
                        <VerticalTimelineElement className="vertical-timeline-element--work" key={index}
                            contentStyle={
                                {
                                    background: colors[index],
                                    color: '#fff'
                                }
                            }
                            contentArrowStyle={
                                {borderRight: '7px solid  rgb(33, 150, 243)'}
                            }
                            date={
                                item.year
                            }
                            dateClassName='date-class'
                            iconStyle={
                                {
                                    background: colors[index],
                                    color: '#fff'
                                }
                            }
                            icon={<MdGroupWork/>}>
                            <h3 className="vertical-timeline-element-title">
                                {
                                item.company
                            }</h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {
                                item.position
                            }</h4>

                            <div className='row'>
                                {
                                item.techskills.map((tec, index) => (
                                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'
                                        key={index}>
                                        <div className='tech-skills'>
                                            <p> {
                                                tec.tech
                                            } </p>
                                        </div>
                                    </div>
                                ))
                            } </div>

                            <p> {
                                item.description
                            } </p>
                        </VerticalTimelineElement>

                    ))
                } </VerticalTimeline>
            </div>
        </div>
    )
}

export default WorkExp;
