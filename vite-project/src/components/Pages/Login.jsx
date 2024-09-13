import React from 'react';
import sidepage from '../../assets/images/Side Image.jpg';
import google from '../../assets/images/googleicon.png';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-custom bg-white">
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
        <div className="md:flex-shrink-0">
          <img className="w-full h-full md:w-[500px]" src={sidepage} alt="Shopping" />
        </div>
        <div className="py-10 px-10 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
          <p className="text-gray-700 mb-4 text-sm">Enter your details below</p>
          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border-b text-md outline-none border-gray-300" required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full p-2 border-b outline-none border-gray-300 text-md" required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border-b text-md outline-none border-gray-300" required
              />
            </div>
            <button className="w-full p-3 bg-red-500 text-white rounded-md text-md font-light">Create Account</button>
            <button className="w-full p-2 flex items-center justify-center border border-gray-300 rounded-md">
              <img src={google} alt="Google" className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
          </form>
          <p className="text-sm text-gray-700 mt-4 p-3">Already have an account?&nbsp;&nbsp; &nbsp; <a href="#" className="text-black underline">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
