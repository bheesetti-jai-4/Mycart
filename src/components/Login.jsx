import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Store/store";

import "./All_CssFiles/Login.css"   // import separate file in css

function Login() {
    let userName = useRef(null);
    let password = useRef(null);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let loginCheck = () =>{
        if(userName.current.value === "jai" && password.current.value === "7410"){
            dispatch(login(userName.current.value))
            navigate('/home');
        }else{
            alert("you enter wrong details");
        }
    }

    //withour using bootstrap 

//   return (
//     <>
//     <h1>Login form</h1>
//     <label > User name : <input type="text" ref={userName} /> </label><br />
//     <label > Password : <input type="text" ref={password} /> </label><br />

//     <button onClick={loginCheck} >Login in </button>
//     </>
//   )
// }

// using bootstrap 
return (
  <div className="login-container">
      <h1 className="login-title">Login Form</h1>
      <div className="form-group">
          <label>User Name:</label>
          <input type="text" ref={userName} className="form-control" />
      </div>
      <div className="form-group">
          <label>Password:</label>
          <input type="password" ref={password} className="form-control" />
      </div>
      <button onClick={loginCheck} className="btn-login">Login</button>
  </div>
);
}

export default Login;