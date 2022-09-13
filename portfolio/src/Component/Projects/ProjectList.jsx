import React, {useState} from 'react'
import {FcCollapse, FcExpand} from "react-icons/fc";

const ProjectList = ({name, description, projectLink, techUsed, githubLink}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (

        <div className={
                show ? 'project-list-opened project-list' : 'project-list'
            }
            onClick={handleShow}

            // onMouseEnter={
            //     () => setShow(true)
            // }
            // onMouseLeave={
            //     () => setShow(false)}
                >

            <div className='title-and-collapse-option'>

                <h5>{name}</h5>
                <p> {
                    show ? <FcCollapse size={20}>/</FcCollapse> : <FcExpand size={20}>/</FcExpand>
                } </p>
            </div>
            <div className='description'>
                {
                show ? <p>{description}</p> : <p>{
                    description.substring(0, 150)
                }...</p>
            } </div>

            <div className='row'>
                {
                techUsed && techUsed.map((tech, index) => (
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'
                        key={index}>
                        {
                        show ? <div className='tech-used-in-project'>
                            <p> {
                                tech.techname
                            } </p>
                    

                        </div> : null
                    } </div>
                ))
            } </div>
               <div className='button-for-action'>

            <div className='live-demo-button'>
                
                <a target='_'
                    href={projectLink}>Demo</a>
            </div>
            <div className='live-demo-button'>
                
                <a target='_'
                    href={githubLink}>Github</a>
            </div>


                    </div>
        </div>
    )
}

export default ProjectList
