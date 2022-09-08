import React from 'react'
import About from './Component/About/About'
import Projects from './Component/Projects/Projects'

import Sidebar from './Component/Sidebar/Sidebar'
import TechStack from './Component/TechStack/TechStack'

const App = () => {
  return (
    <div>
      <Sidebar />
      <About />
      <TechStack />
      <Projects />
 
    </div>
  )
}

export default App
