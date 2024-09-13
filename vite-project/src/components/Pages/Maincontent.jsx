import React, { useState } from 'react';
import sidepage from '../../assets/images/Side Image.jpg';
import google from '../../assets/images/googleicon.png';
import { Link } from 'react-router-dom';
import { handleError, handleSuccess } from '../../Utils';
import { useNavigate } from 'react-router-dom';
import { useProfileContext } from '../../Context/ContextProfile';

const Maincontent = (props) => {
  const { title, blank, secondblank, thirdblank, fourcontent } = props;
  const navigate = useNavigate();

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };




  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("All fields are required");
    }
    try {
      const url = "http://localhost:5000/account/signup";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (error) {
        handleError(error.details[0].message);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  const {handleEmailPassword}=useProfileContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("All fields are required");
    }
    try {
      const url = "http://localhost:5000/account/login";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      console.log(result); // Check what is actually being returned

      const { success, message,jsonweb,name ,email,error } = result;

      if (success) {
        handleSuccess(message);
        console.log("JWT Token:", jsonweb);
console.log("User Name:", name);
console.log("Email:", email);

        localStorage.setItem('Hamara token',jsonweb);
        localStorage.setItem('LoggedIn User',name);
        localStorage.setItem('LoggedIn Email', email); // Storing email in localStorage

        // handleEmailPassword(id, email, password);

        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else if (error) {
        handleError(error.details[0].message);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmailPassword(null, email, password);
    // Optionally, reset form fields after submission
    setId('');
    setEmail('');
    setPassword('');
};

  return (
    <div className="min-h-screen flex items-center justify-center font-custom bg-white">
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
        <div className="md:flex-shrink-0 w-full md:w-[500px] h-full md:h-auto">
          <img className="w-full h-full object-cover" src={sidepage} alt="Shopping" />
        </div>
        <div className="py-20 px-10 flex flex-col">
          {title ? (
            <>
              <h2 className="text-2xl font-semibold mb-4">Log in to Exclusive</h2>
              <p className="text-gray-700 mb-4 text-sm">Enter your details below</p>
              <form className="space-y-5" onSubmit={handleLogin}>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email or Phone Number"
                    className="w-full p-2 border-b outline-none border-gray-300 text-md"
                    onChange={handleLoginChange}
                    value={loginInfo.email}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-2 border-b text-md outline-none border-gray-300"
                    onChange={handleLoginChange}
                    value={loginInfo.password}
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <button className="p-3 bg-red-500 text-white rounded-md text-md font-light py-2 px-4 font-custom my-10">
                    Log In
                  </button>
                  <a href="#" className="text-red-500 font-custom">
                    Forget Password?
                  </a>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-4">Create your account</h2>
              <p className="text-gray-700 mb-4 text-sm">Enter your details below</p>
              <form className="space-y-5" onSubmit={handleSignup}>
                {blank && (
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full p-2 border-b text-md outline-none border-gray-300"
                      onChange={handleSignupChange}
                      value={signupInfo.name}
                    />
                  </div>
                )}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email or Phone Number"
                    className="w-full p-2 border-b outline-none border-gray-300 text-md"
                    onChange={handleSignupChange}
                    value={signupInfo.email}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-2 border-b text-md outline-none border-gray-300"
                    onChange={handleSignupChange}
                    value={signupInfo.password}
                  />
                </div>
                {secondblank && (
                  <button className="w-full p-3 bg-red-500 text-white rounded-md text-md font-light">
                    Create Account
                  </button>
                )}
                {thirdblank && (
                  <button className="w-full p-2 flex items-center justify-center border border-gray-300 rounded-md">
                    <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                    Sign up with Google
                  </button>
                )}
              </form>
              {fourcontent && (
                <p className="text-sm text-gray-700 mt-4 p-3">
                  Already have an account?&nbsp;&nbsp; &nbsp;
                  <Link to="/login" className="text-black underline">
                    Log in
                  </Link>
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
