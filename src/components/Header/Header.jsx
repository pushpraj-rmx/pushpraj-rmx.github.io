import './Header.css'

function Header() {
    return (
        <>
            <header>
                <div className="header-left">
                    <h1>Title Here</h1>
                    <ul>
                        <li>Roll No</li>
                        <li>Bachelor of Computer Science</li>
                        <li>Shri Ramdeobaba College of Engineering and Management, Nagpur ï LinkedIn Profile</li>
                    </ul>
                    <p>
                        This is where most of my content will go...
                    </p>
                    <p></p>
                </div>
                <div className="header-right">
                    <a href="">Some Links</a>
                    <a href="">Go Here</a>
                    <a href="">In This</a>
                    <a href="">Nav Bar</a>
                </div>
            </header>
            {/* <div className="divider"></div> */}
        </>

    )
}

export default Header