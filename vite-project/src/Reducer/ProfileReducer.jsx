import React from 'react'

const ProfileReducer = (state,action) => {
    if (action.type === "ADD_EMAIL_PASSWORD") {
        let {id,email,password} = action.payload;
        console.log("The email and password is ",id,email, password);
            // console.log("The path is ",img);

        let autho;
        autho = {
            id,
            email,
            password,
           
        }
    
    return {
        ...state,
        loader: [...state.loader, autho],

    };


}


   return state;
    
   
  
}

export default ProfileReducer
