import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
import resume from "./Mayra_Gann_resume.pdf"

const Home = () => {
    return (
        <div className='container-fluid home'>
            <div className='container home-content'>
                <h1>Hello I'm a</h1>
                <h3>
                    <Typewriter options={
                        {
                            strings: [
                                'Full Stack Software Developer', 'Web Developer', 'UI/UX Designer'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 5
                        }
                    }/>

                </h3>

                <div className='button-for-action'>

                    <div className='contact-button'>Contact</div>
                    <div className='resume-button'>
                        <a href={resume} download='Mayra_Gann_Resume.pdf'>
                        Resume
                        </a>
                        </div>

                </div>
            </div>

        </div>
    )
}

export default Home
