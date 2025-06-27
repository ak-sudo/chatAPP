import React, { useState } from "react";  
import Input from "../../components/Input";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

const Form = ({
  isSignIn = false, // Default to false for Sign Up
}) => {

  const [data, setData] = useState({
    ...(!isSignIn && { name: "" }), // Include name only if not signing in
    email: "",
    password: "",
  });

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log("Form submitted with data:", data);

    const res = await fetch(`http://localhost:3000/api/${isSignIn ? "login" : "register"}`, {method: "POST", headers: {
      "Content-Type": "application/json"}, body: JSON.stringify(data)});

      if (res.status === 400) {
        alert("Incorrect Email or Password Entered! Please try again.");
      }
      else{
        const responseData = await res.json();
  
        if (responseData.token){
          localStorage.setItem("user:token", responseData.token);
          localStorage.setItem("user:detail", JSON.stringify(responseData.user));
          navigate('/')
        }
      }
  }

  return (
   <div className='bg-[#e1edff] h-screen flex justify-center items-center'>
    <div className="bg-white w-100 h-[80dvh] flex flex-col justify-center items-center shadow-lg rounded-lg">
        <div className="text-4xl font-extrabold">Welcome {isSignIn ? "Back" : ""}</div>
        <div className="text-xl font-light mb-10">{isSignIn ? "Enter your credientials to continue" : "Sign up now to get started!"}</div>

        <form className="flex flex-col justify-center items-center" onSubmit={(e) => handleSubmit(e )}>

          {!isSignIn ? <Input className="w-90 rounded-md focus:ring-2 focus:ring-blue-500" label="Full Name : " Name="name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} type="text" placeholder="Enter Your Full Name"  isRequired="true"/> : null}
          <Input className="w-90 rounded-md focus:ring-2 focus:ring-blue-500" label="Email Address : " Name="email" type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} placeholder="Enter Your Email"  isRequired="true"/>
          <Input className="w-90 rounded-md focus:ring-2 focus:ring-blue-500" label="Password : " Name="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} type="password" placeholder="Enter Your Password" isRequired="true"/>

          <Button type='submit' btnName={isSignIn ? "Sign In" : "Sign Up"}/>

        </form>

        {isSignIn ? <div>Don't have an account? <span className="text-primary underline cursor-pointer"><a href='/users/sign_up'>Sign Up</a></span></div> : <div>Already have an account? <span className="text-primary underline cursor-pointer"><a href="/users/sign_in">Sign In</a></span></div> }
    </div>
  </div>
  );
}
export default Form;