import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
import resume from "./Mayra_Gann_resume.pdf"
import {BsMoonStarsFill, BsSunFill} from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import Contact from '../Contact/Contact';


const Home = ({theme, changeTheme}) => {
    return (
        <div className='container-fluid home' id="home">

            <div className='theme-change'
                onClick={changeTheme}>

                {
                theme === "light" ? (
                    <BsMoonStarsFill size={40}/>
                ) : (
                    <p className='sun-theme'><BsSunFill size={40} /> </p>
                )
            } </div>

            <div className='container home-content'>

                <Fade left>

          
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
                </Fade>

                <Fade bottom>
                <div className='button-for-action'>

            
                    <div className='resume-button'>
                        <a href={resume}
                            download='Mayra_Gann_Resume.pdf'>
                            Resume
                        </a>
                    </div>
                    <div className='github-button'>
                        <a target='_' href='https://github.com/mayragann'>Github</a>
                    </div>

                </div>
                </Fade>
            </div>

        </div>
    )
}

export default Home
