import axios from "axios";
import { useEffect, useState } from "react";

const Instructor = () => {
  const [storeList, setStoreList] = useState([]);
  const [data,setdata] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://backendinstructor.onrender.com/api/v1/GetInstructorName');
      setStoreList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const fetchName = async () => {
    try {
      const response = await axios.get('https://65362727c620ba9358ed0ab7.mockapi.io/Instructor');
      setdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchName();
  }, []);


  return (
    <>
      <div className=" flex flex-col justify-center gap-9 p-9">
<h1 className="p-3 bg-red-500 text-white">Instructor Name</h1>
        <div className=" flex justify-center ">
          <div className=" w-full border flex md:flex-row text-center   flex-col g-8 border-black p-5">
            {
              storeList.map((e, index) => (
                <div key={index} >
                  <label className="bg-red-600 p-2 md:ml-5 mt-3 flex flex-col text-white rounded">{e.name}</label>
                </div>
              ))
            }
          </div>
        </div>
<div className="">
<h1 className="p-3 bg-red-500 text-white mb-8">Schedule Course Time & Date</h1>
        <table className=" w-full rounded">
          <thead className="">
            <tr className="border border-orange-500 bold-500 rounded ">
              <th>Name</th>
              <th>Course</th>
              <th>Date</th>
              <th>Day</th>
            </tr>
          </thead>
          <tbody className="">
            {
              data.map((e, index) => (
                <tr key={index} className="border border-black ">
                  <td className="border text-center border-black p-2">{e.name}</td>
                  <td className="border text-center border-black p-2">{e.course}</td>
                  <td className="border text-center border-black p-2">{e.date}</td>
                  <td className="border text-center border-black p-2">{e.day}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
</div>
      </div>
    </>
  )
}

export default Instructor;
