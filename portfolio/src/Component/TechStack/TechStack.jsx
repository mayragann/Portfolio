import React, {useState} from 'react'
import "./TechStack.css"
import Fade from 'react-reveal/Fade';

const TechStack = () => {
    const [showMoreTech, setShowMoreTech] = useState(3);

    const loadMore = () => {
        setShowMoreTech((prev) => prev + 3);
    }

    const data = [
        {
            name: "Full Stack Developer"
        },
        {
            name: "UI/UX Developer"
        },
        {
            name: "React Js"
        },
        {
            name: "Node Js"
        }, {
            name: "Django"
        }, {
            name: "Javascript"
        }, {
            name: "Python"
        }, {
            name: "Git"
        }, {
            name: "SQL"
        }, {
            name: "Bootstrap"
        }, {
            name: "REST API"
        },

    ]
    const colors = [
        "#0a8c47",
        "#2E5A79",
        "#0c0a8c",
        "#040345",
        "#234503",
        "#450308",
        "#1B5CE7",
        "#714BA1",
        "#4BA186",
        "#1d0345",
        "#032d45",
        "#45032e",
    ]
    return (
        <div className='container tech-stack-section' id="tech">

            <div className='section-title'>
                <h5>Tech Stack</h5>
                <span className='line'></span>

            </div>
            <div className='row'>
                {
                    data.slice(0, showMoreTech).map((item, index) => (
                        
                        <Fade right key={index}>

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'
                        key={index}>

                        <div className={index ===0? 'tech-content-marked tech-content':'tech-content'} >
                            <span className='tech-number'
                                style={
                                    {backgroundColor: colors[index]}
                            }
                            >
                                {/* shows item list starting at 1 versus the usual starting at 0--but it will not change normal index of 0 */}
                                {
                                index + 1
                            } </span>
                            <p> {
                                item.name
                            } </p>
                        </div>

                    </div>
            </Fade>
                ))
            }
            </div>
            {/* this will hide button when it reaches the last position of the array, that is what the null is for */}
            {
            showMoreTech >= data.length ? null : (
                <span className='load-more-tech-stack'
                    onClick={loadMore}>
                    Load More
                </span>

            )
        } </div>
    )
}

export default TechStack
