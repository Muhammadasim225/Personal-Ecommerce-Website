import React, { useState } from 'react';
import Header from "./components/header/Header";
import Breadcrumbs from "./components/header/404/Breadcrumbs";
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { useProfileContext } from './Context/ContextProfile';
import { useEffect } from 'react';

const Profile = () => {
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [isOrdersOpen, setIsOrdersOpen] = useState(false);
    const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        password: ""
    });

    const toggleAccountDropdown = () => {
        setIsAccountOpen(!isAccountOpen);
    };

    const toggleOrdersDropdown = () => {
        setIsOrdersOpen(!isOrdersOpen);
    };

    const { loader } = useProfileContext();

    useEffect(() => {
        if (loader.length > 0) {
            // Assuming loader contains the user data
            const user = loader[0]; // or however you need to access it
            setProfileData({
                ...profileData,
                email: user.email
            });
        }
    }, [loader]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <Header />
            <div className="pt-10 ml-20">
                <Breadcrumbs />
            </div>
            <div className="flex justify-center">
                <aside className="w-1/4 m-14">
                    <ul className="text-gray-700">
                        <li
                            className="font-semibold text-black mb-4 cursor-pointer"
                            onClick={toggleAccountDropdown}
                        >
                            Manage My Account
                        </li>
                        {isAccountOpen && (
                            <ul className="space-y-1 pl-4">
                                <li className="text-gray-700 cursor-pointer">
                                    <Link to="#">My Profile</Link>
                                </li>
                                <li className="cursor-pointer">Address Book</li>
                                <li className="cursor-pointer">My Payment Options</li>
                            </ul>
                        )}
                    </ul>
                    <ul className="text-gray-700 mt-8">
                        <li
                            className="font-semibold text-black mb-4 cursor-pointer"
                            onClick={toggleOrdersDropdown}
                        >
                            My Orders
                        </li>
                        {isOrdersOpen && (
                            <ul className="space-y-1 pl-4">
                                <li className="cursor-pointer">My Returns</li>
                                <li className="cursor-pointer">My Cancellations</li>
                            </ul>
                        )}
                    </ul>
                    <ul className="text-gray-700 mt-8">
                        <li className="font-semibold text-black mb-4 cursor-pointer">My Wishlist</li>
                    </ul>
                </aside>
                <div className="flex space-x-10 w-full max-w-4xl">
                    <div className="flex-1 bg-white shadow-md p-8 rounded-lg mx-20 my-16">
                        <h2 className="text-xl font-semibold text-red-500 mb-6">Edit Your Profile</h2>
                        <form>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700">First Name</label>
                                    <input 
                                        type="text" 
                                        value={profileData.firstName}
                                        onChange={handleChange}

                                        className="w-full mt-2 p-2 border rounded-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Last Name</label>
                                    <input 
                                        type="text" 
                                        value={profileData.lastName}
                                        onChange={handleChange}

                                        className="w-full mt-2 p-2 border rounded-sm"
                                    />
                                </div>
                            </div>
                            {loader.map((item, index) => (

                            <div key={index} className="grid grid-cols-2 gap-4 mt-6">
                                <div>
                                <label className="block text-gray-700">Email</label>
                                <input 
                                    type="email" 
                                    value={profileData.email}
                                    onChange={handleChange}

                                    className="w-full mt-2 p-2 border rounded-sm"
                                />
                                </div>
                            
                            <div>
                                <label className="block text-gray-700 ">Address</label>
                                <input 
                                    type="text" 
                                    value={profileData.address}
                                    onChange={handleChange}

                                    className="w-full mt-2 p-2 border rounded-sm"
                                />
                            </div>
                            </div>
                            ))}
                            <div className="mt-6">
                                <h3 className="text-gray-700 mb-4">Password Changes</h3>
                                <div className="space-y-4">
                                    <input 
                                        type="password" 
                                        // placeholder="Current Password" 
                                        value={profileData.password}
                                        onChange={handleChange}

                                        className="w-full p-2 border rounded-sm"
                                    />
                                    <input 
                                        type="password" 
                                        placeholder="New Password" 
                                        className="w-full p-2 border rounded-sm"
                                    />
                                    <input 
                                        type="password" 
                                        placeholder="Confirm New Password" 
                                        className="w-full p-2 border rounded-sm"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end space-x-4 items-center">
                                <button 
                                    type="button" 
                                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-sm"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className="bg-red-500 text-white py-2 px-4 rounded-sm"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
