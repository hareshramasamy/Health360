import React from "react"
import "./Landing.css"
import Header from "./Header"
import Main from "./Main"
import Review from "./Reviews"
import Footer from "./Footer"
import Chat from "./Chat"

const Landing = () => {
    return (
        <div className="landing">
            <Header />
            <Main />
            <Review />
            <Footer />
            <Chat />
        </div>
    )
}

export default Landing