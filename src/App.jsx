
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from './components/Navbar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Account from './pages/Account'
import Instructor from './pages/Instructor'
import EditPage from './pages/EditPage'
import Addto from './pages/Addto'
import InstructorMain from './pages/InstructorMain'

function App() {

  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/edit/:id' element={<EditPage />} />
          <Route path='/addto/:id' element={<Addto />} />
          <Route path='/InstructorMain' element={<InstructorMain />} />
          <Route path='/Instructor' element={<Instructor />} />
          {isUserSignedIn ? (
            <Route path="/dashboard" element={<Account />} />
          ) : (
            <Route path="/dashboard" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </>
  )
}

export default App
