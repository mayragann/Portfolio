import React from 'react'
import "./SidebarList.css"
import profilepic from "./../../Picture/ProfilePicture.jpg";


const SidebarList = ({expandSidebar}) => {
    return (
        <React.Fragment> {
            expandSidebar ? (

                <div className='navbar-items'>

                    <div className='sidebar-profile-pic'>
                        <img src={profilepic}
                            alt='profile'/>
                    </div>

                </div>

            ) : (
                <div></div>
            )
        } </React.Fragment>
    )
}

export default SidebarList
