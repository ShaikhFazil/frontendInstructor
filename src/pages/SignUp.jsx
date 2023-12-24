import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const SignUp = () => {


  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://backendinstructor.onrender.com/api/v1/register', formData)
      .then((res) => {
        console.log(res);
        alert('Registration successful');
        localStorage.setItem('role', formData.role);
        setFormData({
          username: '',
          password: '',
          email: '',
        });
        navigate('/login');
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err);
      });
  };




  return (
    <>
      <div className="w-full h-full  ">
        <div className=" p-20">
          <form className=" flex justify-center items-center flex-col gap-9  text-center" onSubmit={handleSubmit}>


            <div className="md:flex gap-4 flex-row items-center">
              <div>
                <label>Email</label>
              </div>
              <div>
                <input name='email' value={formData.email} onChange={handleChange} type="text" className="w-[300px] h-[40px] text-white rounded-xl md:ml-8 bg-zinc-700 p-2" />
              </div>
            </div>


            <div className=" md:flex gap-4 flex-row items-center">
              <div>
                <label>UserName</label>
              </div>
              <div>
                <input name="username" value={formData.username} onChange={handleChange} type="text" className="w-[300px] h-[40px] text-white rounded-xl bg-zinc-700 p-2" />
              </div>
            </div>


            <div className="md:flex gap-4 flex-row items-center">
              <label>Password</label>
              <input name="password" value={formData.password} onChange={handleChange} type="text" className="w-[300px] h-[40px] text-white rounded-xl bg-zinc-700 p-2" />
            </div>


            <button className="w-[200px] h-[50px] bg-green-700 rounded-[50px] md:ml-12 hover:bg-teal-900">SignUp</button>

          </form>
        </div>

      </div>

    </>
  )
}

export default SignUp