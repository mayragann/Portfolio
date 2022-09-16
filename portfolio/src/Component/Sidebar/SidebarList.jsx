import React from 'react'
import "./SidebarList.css"
import profilepic from "./../../Picture/ProfilePicture.jpg";
import {
    FcHome,
    FcNightPortrait,
    FcTodoList,
    FcContacts,
    FcFactory,

} from 'react-icons/fc';
import {MdBiotech, MdCastForEducation} from "react-icons/md";
import { Link } from "react-scroll";


const SidebarList = ({expandSidebar}) => {
    return (
        <React.Fragment> {
            expandSidebar ? (

                <div className='navbar-items'>

                    <div className='sidebar-profile-pic'>
                        <img src={profilepic}
                            alt='profile'/>
                    </div>

                    <ul>
                        <li className='nav-item'>
                            <Link to="home"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            
                            <FcHome size={30}/>
                            Home
                            </Link>
                            </li>

                        <li className='nav-item'>
                        <Link to="about"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            
                            <FcNightPortrait size={30}/>
                            About
                            </Link>
                            
                            </li>
                            <li className='nav-item'>
                            <Link to="tech"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            <MdBiotech size={30}
                                color='orange'/>
                            Tech Stack
                            </Link>
                            </li>
                            <li className='nav-item'>
                            <Link to="projects"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            <FcTodoList size={30}/>
                            Projects
                            </Link></li>

                            <li className='nav-item'>
                            <Link to="education"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            <MdCastForEducation size={30}/>
                            Education
                            </Link>
                            </li>
                        <li className='nav-item'>
                        <Link to="work"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            <FcFactory size={30}/>
                            Work Experience
                            </Link>
                            </li>



  
                        <li className='nav-item'>
                        <Link to="contactme"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            <FcContacts size={30}/>
                            Contact
                            </Link>
                            </li>
                    </ul>

                </div>

            ) : (
                <div className='navbar-items-only-icons'>
                                       <ul>
                        <li className='nav-item'>
                            <Link to="home"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            
                            <FcHome size={30}/>
                           
                            </Link>
                            </li>

                        <li className='nav-item'>
                        <Link to="about"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            
                            <FcNightPortrait size={30}/>
                           
                            </Link>
                            
                            </li>
                            <li className='nav-item'>
                            <Link to="tech"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            <MdBiotech size={30}
                                color='orange'/>
                        
                            </Link>
                            </li>
                            <li className='nav-item'>
                            <Link to="projects"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            <FcTodoList size={30}/>
                           
                            </Link></li>

                            <li className='nav-item'>
                            <Link to="education"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            <MdCastForEducation size={30} color="white"/>
                       
                            </Link>
                            </li>
                        <li className='nav-item'>
                        <Link to="work"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            <FcFactory size={30}/>
                        
                            </Link>
                            </li>



  
                        <li className='nav-item'>
                        <Link to="contactme"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            <FcContacts size={30}/>
                           
                            </Link>
                            </li>
                    </ul>
                </div>
            )
        } </React.Fragment>
    )
}

export default SidebarList
