import "../LandingPage/Landing.css"
import "./BlogPage.css"
import Header from "./Header"
import BlogFooter from "./BlogFooter"
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