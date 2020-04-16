import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="loginside">
          <div className="loginsection">
            <div className="title">
              <h2>Log In</h2>
            </div>
            <div className="subtitle">
              <h5>Welcome Back! Please Log In</h5>
            </div>
            <div className="fieldone">
             <input type="text" name="email" placeholder="Enter Email Address" />
              
            </div>
            <div className="fieldtwo">
            
               <input type="password" name="password" placeholder="Enter Password"/>
              
            </div>
            <div className="button">
              <button > Log In </button >
            </div>

            <div className="regsetion">
            <a href="facebook.com" className="reglink" style={{ textDecoration: 'none' }} >New to here? Register Now</a>
            </div>

          </div>
        </div>
        <div className="imgside" ></div>
      </div>
    </div>
  );
}

export default App;
