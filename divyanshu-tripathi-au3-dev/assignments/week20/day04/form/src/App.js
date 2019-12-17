import React from 'react';
import LoginInput from "./components/LoginInput"
import LoginButton from "./components/LoginButton"


function App() {
  return (
    <div class ="col-lg-4 col-lg-offset-8">
        <h1><center>Login</center></h1>
        <form>
          <LoginInput placeholder ="Enter Username" label ="UserName"/>
          <LoginInput placeholder ="Enter Password" label ="Password"/>
          <LoginButton/>
        </form>

    </div>
    
  );
}

export default App;
