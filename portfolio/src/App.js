import React from 'react'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Education from './Component/Education/Education'
import Projects from './Component/Projects/Projects'
import Sidebar from './Component/Sidebar/Sidebar'
import TechStack from './Component/TechStack/TechStack'
import WorkExp from './Component/WorkExp/WorkExp'
import ScrollToTop from "react-scroll-to-top";
import "./App.css"
import NavbarMobileView from './Component/NavbarMobileView/NavbarMobileView'

const App = () => {
  return (
    <div>
      <NavbarMobileView />
      <Sidebar />
      <About />
      <TechStack />
      <Projects />
      <Education />
      <WorkExp />
      <Contact />

      <ScrollToTop smooth={true} 
 
      color='white'
      style= {{borderRadius:"90px", backgroundColor:"yellowgreen"}}
      />
 
    </div>
  )
}

export default App
