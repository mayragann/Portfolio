import React, {useState} from 'react'
import "./Sidebar.css"
import Home from '../Home/Home'
import {BsChevronBarRight, BsChevronBarLeft} from "react-icons/bs";
import SidebarList from './SidebarList';

const Sidebar = ({theme,changeTheme}) => {
    const [expandSidebar, setExpandSidebar] = useState(false);
    const handleExpandClick = () => { // if clicked becomes opposite of state
        setExpandSidebar(!expandSidebar)
    }
    return (
        <div className='container-fluid sidebar-section'>
            {/* this is toggle for state, if not one state will be other */}
            <div className={
                expandSidebar ? 'sidebar-expand sidebar' : 'sidebar'
            }>
                <div className='icon-for-sidebar-expand-and-collapse'>
                    <p onClick={handleExpandClick}>
                        {
                        expandSidebar ? (
                            <BsChevronBarLeft size={30}/>
                        ) : (
                            <BsChevronBarRight size={30}/>
                        )
                    } </p>

                </div>

                        <SidebarList expandSidebar={expandSidebar}/>

            </div>


            <div className='container'>
                <Home changeTheme={changeTheme} theme={theme}/>

            </div>

        </div>
    )
}

export default Sidebar
