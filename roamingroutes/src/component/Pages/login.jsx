import "./login.css"
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (e) => {
      setEmail(e.target.value);
    };
    const passwordHandler = (e) => {
      setPassword(e.target.value);
    };

    const handleLogin = () => {
      const storedData = JSON.parse(localStorage.getItem("formData"));
  
      if (storedData) {
          const user = storedData.find(
              (userData) => userData.email === email && userData.password === password
          );
  
          if (user) {
              // User found, proceed with login logic
              alert("Login successful");
              // Perform any additional logic or navigate to the next page
          } else {
              // User not found or invalid credentials
              alert("Invalid email or password");
              // Display an error message or handle the login failure
          }
      } else {
          // No data in localStorage
          alert("No user data found");
          // Display an error message or handle the login failure
      }
  };
  

    return (
      <div className="logins" style={{height:"10vh"}}>
        <div className="login">
          <div className="section">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="box">
              <div className="square" style={{ "--i": 0 }}></div>
              <div className="square" style={{ "--i": 1 }}></div>
              <div className="square" style={{ "--i": 2 }}></div>
              <div className="square" style={{ "--i": 3 }}></div>
              <div className="square" style={{ "--i": 4 }}></div>
              <div className="container">
                <div className="form">
                  <div className="span">Login Form</div>
                  <form onSubmit={handleLogin}>
                    <div className="input__box">
                      <input type="text" placeholder="Email" onChange={emailHandler}/>
                    </div>
                    <div className="input__box">
                      <input type="password" placeholder="Password" onChange={passwordHandler}/>
                    </div>
                    <div className="input_box">
                      <input type="submit" value="Login" />
                    </div>
                    <p className="forget">
                      Forgot Password? <a href="#">Click Here</a>
                    </p>
                    <p className="forget">
                      Don't have an account? <a href="#">Sign Up</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ overflow: "hidden" }}></div>
      </div>
    );
  }
  
  export default Login;
  
  
          