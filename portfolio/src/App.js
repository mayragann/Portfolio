import React from 'react'
import About from './Component/About/About'
import Education from './Component/Education/Education'
import Projects from './Component/Projects/Projects'

import Sidebar from './Component/Sidebar/Sidebar'
import TechStack from './Component/TechStack/TechStack'
import WorkExp from './Component/WorkExp/WorkExp'

const App = () => {
  return (
    <div>
      <Sidebar />
      <About />
      <TechStack />
      <Projects />
      <Education />
      <WorkExp />
 
    </div>
  )
}

export default App
