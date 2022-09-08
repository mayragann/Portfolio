import React from 'react'
import "./Project.css"
import ProjectList from './ProjectList';

const Projects = () => {
    const data =[
        {
            name:'BeeKeeping App',
            description:`Application features include
            User account registration, login, and logout (Authentication & JWT)
            Profile creation
            The ability to create, update, and view Hives.
            Hives have notifications if the user is delayed in updating the Hive inspection date using
            React.js alert notifications.
            The ability to create, update and view Inspections based on Hive using React and Django.
            Users have the ability to search inspections to narrow down which inspections.
            match their query, using React-Table.js
            Users get a graph that shows data on that particular graph on overall Hive Health.
            using Google-React Chart.
            Ability to search the most common beekeeping questions and display Youtube videos
            related to that question using Youtube Web API.`,
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

            ]

        },
        {
            name:'Company Portfolio',
            description:"A front end application created for a company to use to showcase, talent, services, and a contact form to gather more information. It is mobile-user friendly as well as allows the user to change between dark and light colored themes. ",
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
            description:"A quote generator from a popular series. It also displays bios of a few of the characters. It has the ability to randomize quotes from a given list. The displayed characters are in a modal, making it user friendly. It also has the ability to change between two different themes. It is mobile friendly",
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
            description:"A personal portfolio site to showcase my talents and accomplishments. It is mobile friendly, as well as has a contact form to reach out to me. It has the ability to switch between two different themes.",
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