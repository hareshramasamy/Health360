import "./Landing.css"

const Header = () => {
    return (
        <header className="navbar">
            <div className="top-logo">
                <img className= "logo" src={process.env.PUBLIC_URL + "/Health360LOGO.png"} alt="Logo"></img>
                <h2 className="name">Health360</h2>
            </div>
            <nav>Login</nav>
        </header>
    )
}

export default Header