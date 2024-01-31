import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import MainContent from './components/MainContent'
import Modal from './components/Modal/Modal'

import './App.css'

function App() {

  return (
    <div className="app-wrapper">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
      <Modal/>
    </div>

  )
}

export default App
