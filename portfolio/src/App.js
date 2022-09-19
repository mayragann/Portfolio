import React, {useState, createContext} from 'react'
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

export const ThemeContext = createContext(null);

const App = () => {

  const [theme, setTheme] = useState("light")

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark":"light"));
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>

      <div id={theme}>
      <NavbarMobileView />
      
      <Sidebar changeTheme={changeTheme} theme={theme}/>
      <About />
      <TechStack />
      <Projects />
      <Education />
      <WorkExp />
      <Contact />
      </div>


      <ScrollToTop smooth={true} 
 
      color='white'
      style= {{borderRadius:"90px", backgroundColor:"yellowgreen"}}
      />
 
    </ThemeContext.Provider>
  )
}

export default App
