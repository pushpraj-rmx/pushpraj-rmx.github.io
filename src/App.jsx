import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import MainContent from './components/MainContent'

import './App.css'

function App() {

  return (
    <div className="app-wrapper">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
      
    </div>

  )
}

export default App
