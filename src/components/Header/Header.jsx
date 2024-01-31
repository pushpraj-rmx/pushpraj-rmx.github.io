import './Header.css'

function Header() {
  return (
    <>
      <header>
        <div className="header-left">
          <h1>Pushpraj Dwivedi</h1>
          <h6>Web Developer</h6>
          <p>
            Passionate ERB Developer with a solid foundation in Ruby on Rails and web development. With [Number] years of hands-on
            experience, I specialize in crafting robust and scalable solutions. My proficiency extends to front-end technologies, ensuring
            seamless user experiences through dynamic and responsive interfaces.
          </p>
        </div>
        <div className="header-right">
          <a href="">+91-8358-91-8519</a>
          <a href="">example@email.com</a>
          <a href="">GitHub</a>
          <a href="">LinkedIn</a>
          <a href=""></a>
        </div>
      </header>
      <div className="divider"></div>
    </>
  )
}

export default Header
