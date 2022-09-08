import React from 'react'
import "./TechStack.css"

const TechStack = () => {
    const data = [
        {
            name: "Full Stack Developer"
        },
        {
            name: "UI/UX Developer"
        },
        {
            name: "Node js"
        },
        {
            name: "React js"
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
        <div className='container tech-stack-section'>

            <div className='section-title'>
                <h5>Tech Stack</h5>
                <span className='line'></span>

            </div>
            <div className='row'>
                {
                data.map((item, index) => (
                    <div className='col-xl-4 col-lg-4 col-md-6 col-md-12'
                        key={index}>

                        <div className='tech-content'>
                            <span className='tech-number' style={{backgroundColor: colors[index]}}> {/* shows item list starting at 1 versus the usual starting at 0 */}
                                {
                                index + 1
                            } </span>
                            <p> {
                                item.name
                            } </p>
                        </div>

                    </div>
                ))
            } </div>


        </div>
    )
}

export default TechStack
