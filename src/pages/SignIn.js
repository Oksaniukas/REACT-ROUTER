import React from "react";

function SignIn () {
   return (
      <div> 
         <div>Enter your email address to login or register.</div>
         <input type='email' placeholder="email" ></input>
         <button> Continue</button>
      </div>
   )
}

export { SignIn }