import React from 'react'
import "./SidebarList.css"
import profilepic from "./../../Picture/ProfilePicture.jpg";
import {
    FcHome,
    FcNightPortrait,
    FcTodoList,
    FcContacts,
    FcFactory,
    FcSalesPerformance
} from 'react-icons/fc';
import {MdBiotech, MdCastForEducation} from "react-icons/md";


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
                            <FcHome size={30}/>
                            Home</li>
                        <li className='nav-item'>
                            <FcNightPortrait size={30}/>
                            About</li>
                        <li className='nav-item'>
                            <FcFactory size={30}/>
                            Work Experience</li>
                        <li className='nav-item'>
                            <MdBiotech size={30}
                                color='orange'/>
                            Tech Stack</li>
                        <li className='nav-item'>
                            <MdCastForEducation size={30}/>
                            Education</li>
                        <li className='nav-item'>
                            <FcTodoList size={30}/>
                            Projects</li>
                        <li className='nav-item'>
                            <FcSalesPerformance size={30}/>
                            Testimonal</li>
                        <li className='nav-item'>
                            <FcContacts size={30}/>
                            Contact</li>
                    </ul>

                </div>

            ) : (
                <div className='navbar-items-only-icons'>
                    <ul>


                        <li className='nav-item'>
                            <FcHome size={30}/>
                        </li>
                        <li className='nav-item'>
                            <FcNightPortrait size={30}/>
                        </li>
                        <li className='nav-item'>
                            <FcFactory size={30}/>
                        </li>


                        <li className='nav-item'>
                            <MdBiotech size={30}
                                color='orange'/>
                        </li>

                        <li className='nav-item'>
                            <MdCastForEducation size={30} color="white"/>
                           </li>


                        <li className='nav-item'>
                            <FcTodoList size={30}/></li>
                        <li className='nav-item'>
                            <FcSalesPerformance size={30}/></li>
                        <li className='nav-item'>
                            <FcContacts size={30}/>
                        </li>
                    </ul>
                </div>
            )
        } </React.Fragment>
    )
}

export default SidebarList
