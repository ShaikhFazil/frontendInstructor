import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {

  const isUserSignedIn = !!localStorage.getItem('token')
  const navigate = useNavigate();

  const handlesignout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <>
      <nav className="flex justify-between p-6 border-b  border-xinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300">
        <Link to='/InstructorMain'><h1>AuthDB</h1></Link>

        <ul className="flex gap-5">
          {
            isUserSignedIn ? (
              <>
                <Link to='/dashboard'><li>DashBoard</li></Link>
                <li><button onClick={handlesignout}>SignOut</button></li>
              </>
            ) : (
              <>
                <Link to='/login'><li>Login</li></Link>
                <Link to='/signup'><li>SignUp</li></Link>
              </>
            )
          }
        </ul>

      </nav>

    </>
  )
}

export default Navbar