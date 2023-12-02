import "./Landing.css"


const Footer = () => {
    return (
        <footer>
            <section>
                <div className="footer-logo">
                    <img className= "logo" src={process.env.PUBLIC_URL + "/Health360LOGO.png"} alt="Logo"></img>
                    <p>Health360</p>
                </div>
                <p className="slogan">Embrace Your Fitness Journey with Health360</p>
            </section>
            <button className= "footer-start">
                    Start Now 
            </button>
            <div>
                <p className="certificate">©2023 Health360, Inc.</p>
                <div className="social">
                    <img className= "icon" src={process.env.PUBLIC_URL + "/instagram.png"} alt="icon"></img>
                    <img className= "icon" src={process.env.PUBLIC_URL + "/facebook.png"} alt="icon"></img>
                    <img className= "icon" src={process.env.PUBLIC_URL + "/twitterx.png"} alt="icon"></img>
                    <img className= "icon" src={process.env.PUBLIC_URL + "/reddit.png"} alt="icon"></img>
                </div>
            </div>
        </footer>
    )
}

export default Footer