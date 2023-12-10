import "../LandingPage/Landing.css"
import "./BlogPage.css"
import Header from "../LandingPage/Header"
import BlogFooter from "./BlogFooter"
import Main from "./Main"


const Blog = () => {
    return (
        <div className="blogPage">
            <Header />
            <Main />
            <BlogFooter />
        </div>
    )
}

export default Blog