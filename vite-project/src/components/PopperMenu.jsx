import React, { useState } from 'react';
// import { usePopper } from 'react-popper';
import { useNavigate } from 'react-router-dom';

const PopperMenu = () => {

  const navigate=useNavigate();
 

  const handleLogout=(e)=>{
    window.alert('Logout clicked');
    localStorage.removeItem('Hamara token');
    localStorage.removeItem('LoggedIn User');

    setTimeout(()=>{
      navigate('/login');
    },1000)



  }

  console.log('Menu open:', isOpen);


  return (
    <div>

        <div>
          <div >Profile</div>
          <div >My account</div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      
    </div>
  );
};

export default PopperMenu;
