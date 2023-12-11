import "../LandingPage/Landing.css"
import "./BlogPage.css"
import BlogFooter from "./BlogFooter"
import Header from "../LandingPage/Header"
import MainCreate from "./MainCreate"

const Blog = () => {
    return (
        <div className="blogPage">
            <Header />
            <MainCreate />
            <BlogFooter />
        </div>
    )
}

export default Blog