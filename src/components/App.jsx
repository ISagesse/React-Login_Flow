import React from "react";
import Login from "./Login";

let isLogin = true;

function App() {
  return (
    <div className="container">
      {isLogin === true ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
