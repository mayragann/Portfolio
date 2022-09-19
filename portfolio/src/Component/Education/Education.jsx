import React from 'react'
import "./Education.css"
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaUserGraduate} from 'react-icons/fa';

const Education = () => {
    const data = [
        {
            name:"devCodeCamp",
            degree: 'Fullstack Software Developer',
            major: 'Certificate',
            year: '2022-2022'
        },
        {
            name:"American Academy of Art",
            degree: 'Bachelors of Fine Arts in',
            major: 'Illustration',
            year: '2013-2015'
        }
    ]
    const colors = ["#365EAD","#AD8636"]
    return (
        <div className='container education-section' id='education'>

            <div className='section-title'>
                <h5>Education</h5>
                <span className='line'></span>
                <div className='timeline-secion'>
                <VerticalTimeline lineColor='#ff1042'>
                    {
                    data.map((item, index) => (
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            contentStyle={
                                {
                                    background: colors[index],
                                    color: '#fff'
                                }
                            }
                            contentArrowStyle={
                                {borderRight: '7px solid  #d4af37 '}
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
                            icon={<FaUserGraduate/>}>
                            <h3 className="vertical-timeline-element-title">
                                {
                                item.name
                            }</h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {
                                item.degree
                            }</h4>

                            <h4> {
                                item.major
                            } </h4>
                        </VerticalTimelineElement>

                    ))
                } </VerticalTimeline>
            </div>

            </div>
        </div>
    )
}

export default Education
