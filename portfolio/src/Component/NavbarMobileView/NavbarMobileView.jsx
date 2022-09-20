import React, {useState} from 'react'
import "./NavbarMobileView.css"
import {GiHamburgerMenu} from 'react-icons/gi';
import {
    FcHome,
    FcNightPortrait,
    FcTodoList,
    FcContacts,
    FcFactory

} from 'react-icons/fc';
import {MdBiotech, MdCastForEducation} from "react-icons/md";
import {Link} from "react-scroll";
import Switch from "react-switch";


const NavbarMobileView = ({theme, changeTheme}) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div className='mobile-view-navbar'>
            <div className='navbar-header'>
                <p>
                    <GiHamburgerMenu size={25}
                        onClick={handleClick}/>
                </p>

            </div>

            {
            open ? (
                <div className='mobile-nav'>
                    <ul>
                        <li className='nav-item-mobile-view'>
                            <Link to="home"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}>

                                <FcHome size={30}/>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item-mobile-view'>
                            <Link to="about"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}>

                                <FcNightPortrait size={30}/>
                                About
                            </Link>

                        </li>
                        <li className='nav-item-mobile-view'>
                            <Link to="tech"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}>
                                <MdBiotech size={30}
                                    color='orange'/>
                                Tech Stack
                            </Link>
                        </li>
                        <li className='nav-item-mobile-view'>
                            <Link to="projects"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}>
                                <FcTodoList size={30}/>
                                Projects
                            </Link>
                        </li>

                        <li className='nav-item-mobile-view'>
                            <Link to="education"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}>
                                <MdCastForEducation size={30}/>
                                Education
                            </Link>
                        </li>
                        <li className='nav-item-mobile-view'>
                            <Link to="work"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}>
                                <FcFactory size={30}/>
                                Work Experience
                            </Link>
                        </li>

                        <li className='nav-item-mobile-view'>
                            <Link to="contactme"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}>
                                <FcContacts size={30}/>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item-mobile-view'>
                            <Switch onChange={changeTheme}
                                checked={
                                    theme === "light"
                                }/>
                        </li>
                    </ul>


                </div>

            ) : null
        } </div>
    )
}

export default NavbarMobileView
