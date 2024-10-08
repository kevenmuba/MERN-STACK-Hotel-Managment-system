import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Header from './Components/Header/Header'
import Layout from './LayOut'
 import IndexPage from './Pages/indexPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import axios from "axios";
import { UserContextProvider } from './UserContext'
import ProfilePage from './Pages/ProfilePage'
import PlacePage from './Pages/placePage'
import PlacesPage from './Pages/PlacesPage'
import PlacesFormPage from './Pages/PlacesFormPage'
// import placePage from './Pages/placePage'
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;


function App() {
 

  return (
    <>
     <UserContextProvider>
    <Routes >
    <Route path='/' element={<Layout/>} > 
    <Route path="/home" element={<IndexPage/>}/>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage/>} />
    <Route path="/account" element={<ProfilePage />} />
    <Route path="/account/places" element={<PlacesPage />} />
    <Route path="/account/places/new" element={<PlacesFormPage />} />
    

    {/* <Route path="/account/:subpage?" element={<ProfilePage/>} />
    <Route path="/account/:subpage/:id" element={<ProfilePage/>} /> */}
    </Route>                                                                                                                                                               
    </Routes>
    </UserContextProvider>
    </>
  )
}

export default App
