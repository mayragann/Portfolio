import React from 'react'
import Picture from "../../Picture/ProfilePicture.jpg"
import "./About.css"

const About = () => {
    return (
        <div className='container about-section' id="about">

            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm 12'>

                    <div className='about-image'>
                        <img src={Picture}
                            alt='Profile'/>

                    </div>

                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm 12'>
                    <div className='about-details'>
                        <h5>About Me</h5>
                        <span className='line'></span>
                        <div className='about-information'>
                            💻 I discovered my passion for coding in college.


                            <p>
                                ⚓Navy Veteran turned ➟ Sign Designer turned ➟ Software Developer


                            </p>
                            <p>

                            My practical experience in coding and testing comes from numerous projects.
                            </p>
                            <p>
                                📲Check out my github: github.com/mayragann
                                  These projects have real-world application. My Vast knowledge of 
                                  object-oriented designs, algorithms, and data structures is available for hire 
                                 to benefit your next project.
                            </p>

                            👉🏻I am a detail-oriented professional with exceptional interpersonal skills 
                               developed from my time in the military and the time I spent in the Sign Industry. 
                                I always enjoy watching when the customer received their sign and they loved it.
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default About
