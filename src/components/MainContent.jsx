import Header from "./Header/Header"
import Section1 from "./Sections/Section1"
import Section2 from "./Sections/Section2"
import Section3 from "./Sections/Section3"


function MainContent() {
  return (
    <div className="main-content">
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default MainContent  
