import Landing from "../LandingPage/Landing";
import "./BlogPage.css";

const Header = () => {
  return (
    <div className="blogTitle">
            <div>
            <h1 className="typing-animation">Blog Your Ideas!</h1>
            </div>
            <div>
            <button className="create">Create Blog</button>
            </div>
        </div>
  );
};

export default Header;