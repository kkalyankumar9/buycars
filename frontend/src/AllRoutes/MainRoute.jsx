import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from '../Pages/homepage'
import DealerSignup from '../Components/dealer/signup'
import DealerLogin from '../Components/dealer/login'
import UserSignup from '../Components/user/signup'
import UserLogin from '../Components/user/login'
import DealerPrivateRoute from './DealerPrivateRoute'
import CarsPages from '../Pages/carsPages'
import UserPrivateRoute from './userPrivateRoute'



const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<UserPrivateRoute><Homepage/></UserPrivateRoute>}/>
        <Route path="/dealer_signup" element={<DealerSignup/>}/>
        <Route path="/dealer_login" element={<DealerLogin/>}/>
        <Route path="/user_signup" element={<UserSignup/>}/>
        <Route path="/user_login" element={<UserLogin/>}/>
        <Route path="/cars" element={<UserPrivateRoute><CarsPages/></UserPrivateRoute>}/>
        {/* <Route path="/addcars" element={<DealerPrivateRoute><AddPatient/></DealerPrivateRoute>}/>
        <Route path="/edit/:taskId" element={<DealerPrivateRoute><EditPatient/></DealerPrivateRoute>}/>
        <Route path="/delete/:taskId" element={<DealerPrivateRoute><EditPatient/></DealerPrivateRoute>}/> */}
      
    </Routes>
  )
}

export default MainRoute