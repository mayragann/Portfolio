import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';

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
                            delay:5
                        }
                    }/>

                </h3>
            </div>

        </div>
    )
}

export default Home
