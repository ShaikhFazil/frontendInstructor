import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [username, setusername] = useState();
  const [password, setpassword] = useState();


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backendinstructor.onrender.com/api/v1/login', { username, password });
      const token = response.data.token;
      const role = response.data.role;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      setusername("");
      setpassword("");

      if (role === 'admin') {

        navigate('/dashboard');
      } else {

        navigate('/InstructorMain');
      }

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <>
      <div className="w-full h-fullflex justify-center  ">
        <div className=" p-20">
          <form className=" flex justify-center items-center flex-col gap-9  text-center" onSubmit={handleSubmit}>


            <div className="flex justify-center flex-col g-5">
              <div className=" flex flex-col items-center">
                <label>UserName</label>
                <input value={username} onChange={(e) => setusername(e.target.value)} type="text" className="w-auto h-[40px] text-white rounded-xl bg-zinc-700 p-2" />
              </div>

              <div className="flex mt-5  flex-row md:flex flex-col items-center">
                <label>Password</label>
                <input value={password} onChange={(e) => setpassword(e.target.value)} type="text" className="w-auto mb-5 h-[40px] text-white rounded-xl bg-zinc-700 p-2" />
              </div>

              <div>
                <button className="w-[200px] h-[50px] bg-green-700 rounded-[50px] hover:bg-teal-900">Login</button>
              </div>
            </div>
          </form>
        </div>

      </div>

    </>
  )
}

export default Login