import React from 'react'
import {FcCollapse, FcExpand} from "react-icons/fc";

const ProjectList = ({name, description, projectLink, techUsed}) => {
    return (

        <div className='project-list'>

            <div className='title-and-collapse-option'>

                <h5>{name}</h5>
                <p>
                    <FcExpand size={20}>/</FcExpand>
                </p>
            </div>
            <p>{description}</p>
            <div className='row'>
                {
                techUsed && techUsed.map((tech, index) => (
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'
                        key={index}>
                        <div className='tech-used-in-project'>
                            <p>{
                                tech.techname
                            }</p>

                        </div>

                    </div>
                ))}
            </div>
            <div className='live-demo-button'>
                <a target='_' href={projectLink}>Live Demo</a>
            </div>

        </div>
    )
}

export default ProjectList
