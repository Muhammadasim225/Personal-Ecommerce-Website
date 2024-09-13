import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { Cart_provider } from './Context/Cart_context.jsx'
import { FavProvider } from './Context/Fav_context.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { Profile_provider } from './Context/ContextProfile.jsx'
import { store } from './store.jsx';
import {Provider} from 'react-redux';
import { UserProvider } from './Context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter> 
     {/* <UserProvider> */}

     <FavProvider> 
     <Cart_provider> 
     <Profile_provider> 
       {/* <Provider store={store}>  */}
      <App />
       {/* </Provider>  */}
      </Profile_provider>
     </Cart_provider> 

     </FavProvider> 

    

   <ToastContainer></ToastContainer> 
   {/* </UserProvider> */}

     </BrowserRouter> 
  </React.StrictMode>,
)
