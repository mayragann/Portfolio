import React from 'react'
import "./Project.css"
import ProjectList from './ProjectList';

const Projects = () => {
    const data =[
        {
            name:'BeeKeeping App',
            description:"An application created to help beekeepers keep track of their bee yards.",
            projectLink:'https://youtu.be/mzCbEDvPuII',
            techUsed:[
                {
                    techname:'Python'
                },
                {
                    techname:'Django'
                },
                {
                    techname:'Javascript'
                },
                {
                    techname:'React Js'
                },
                {
                    techname:'Youtube API'
                },
            ]

        },
        {
            name:'Company Portfolio',
            description:"A front end application created for a company to use to showcase their talent and services",
            projectLink:'https://react-company-portfolio.netlify.app',
            techUsed:[

                {
                    techname:'Javascript'
                },
                {
                    techname:'React Js'
                },
            ]

        },
        {
            name:'Quote Generator',
            description:"A quote generator from a popular series. It also displays bios of a few of the characters.",
            projectLink:'https://mass-effect-quotes.netlify.app',
            techUsed:[

                {
                    techname:'Javascript'
                },
                {
                    techname:'React Js'
                },
            ]

        },
        {
            name:'Personal Portfolio',
            description:"A personal portfolio site to showcase my talents and accomplishments",
            projectLink:null,
            techUsed:[

                {
                    techname:'Javascript'
                },
                {
                    techname:'React Js'
                },
            ]

        },
    ]
  return (
    <div className='container'>

            <div className='section-title'>
                <h5>Projects</h5>
                <span className='line'></span>
            </div>

      
            <div className='row'>

                {data.map((item,index) =>(

                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <ProjectList {...item}  />
                </div>

                ))}


            </div>


    </div>
  );
};

export default Projects;