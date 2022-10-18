import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const LoginPage = () => {
  const handleSuccessWithGoogle = async (credentials) => {
    const token = credentials.credential;
    const data = { googleToken: token };
    await axios.post("/api/auth/login", data);
    window.location.reload();
  };

  return (
    <div className="fullvhHeight bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login To Quiz Test
          </p>
          <div className="flex items-center justify-center m-auto p-24">
            <GoogleLogin
              onSuccess={handleSuccessWithGoogle}
              onError={() => {
                console.log("Login Failed");
                alert("failed to login with google");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
