import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
// import styles from "./login.css";
import "./login.css"
import "./global.css"
const Login: FunctionComponent = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "Forgot Password" to the project
  }, []);

  const onStyleaccentStatedefaultLClick = useCallback(() => {
    // Please sync "Register" to the project
  }, []);

  const onStyleaccentStatedefaultL1Click = useCallback(() => {
    // Please sync "Register-1" to the project
  }, []);

  return (
    <div className= "login">
      <div className= "loginChild" onClick={onRectangleClick} />
      <div className= "rectangleParent">
        <div className="groupChild" />
        <div className= "ellipseParent">
          <div className= "groupItem" />
          <div className="rectangleGroup">
            <div className= "groupInner" />
            <div className= "rectangleDiv" />
            <div className= "groupChild1" />
          </div>
        </div>
        <div className= "login1"> LOGIN</div>
        <div className= "health360">HEALTH 360°</div>
        <img className= "email1Icon" alt="" src="/email-1@2x.png" />
        <input
          className= "rectangleInput"
          placeholder="EMAIL"
          type="email"
        />
        <img className= "key1Icon" alt="" src="/key-1@2x.png" />
        <input
          className= "groupChild2"
          placeholder="PASSWORD"
          type="password"
        />
        <a className= "forgotPassword" target="_blank">
          FORGOT PASSWORD ?
        </a>
        <img className= "lineIcon" alt="" src="/line-1.svg" />
        <div className= "lineDiv" />
      </div>
      <div className= "loginItem" />
      <div className= "div">360°</div>
      <div className= "groupParent">
        <div className= "styleaccentStatedefaultLWrapper">
          <Button
            className= "styleaccentStatedefaultL"
            sx={{ width: 140 }}
            color="inherit"
            variant="contained"
            onClick={onStyleaccentStatedefaultLClick}
          >LOGIN
          </Button>
        </div>
        {/* <div className= "login2"></div> */}
      </div>
      <div className= "styleaccentStatedefaultLParent">
        <Button
          className= "styleaccentStatedefaultL"
          sx={{ width: 140,
            }} 
          color="inherit"  
          variant="contained"
          onClick={onStyleaccentStatedefaultL1Click}
        >SIGN UP
        </Button>
        {/* <div className= "signUp"></div> */}
      </div>
    </div>
  );
};

export default Login;
