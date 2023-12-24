import axios from "axios";
import { useEffect, useState } from "react";

const InstructorMain = () => {
  const [data, setdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="">
        <div>
        <h1 className="p-3 bg-red-500 text-white mb-8">Instructors</h1>
          <div className="m-8 flex justify-center">
            <label className="mt-2 mr-2">Search Box</label>
            <input
              type="text"
              className="w-[50%] border p-2 border-orange-500 border-9"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        <h1 className="p-3 bg-red-500 text-white mb-8">Schedule Course Time & Date</h1>
        <table className="w-full rounded">
          <thead>
            <tr className="border border-orange-500 bold-500 rounded">
              <th>Name</th>
              <th>Course</th>
              <th>Date</th>
              <th>Day</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((e, index) => (
              <tr key={index} className={`border border-black ${e.name.toLowerCase().includes(searchQuery.toLowerCase()) ? 'bg-green-200' : ''}`}>
                <td className="border text-center border-black p-2">{e.name}</td>
                <td className="border text-center border-black p-2">{e.course}</td>
                <td className="border text-center border-black p-2">{e.date}</td>
                <td className="border text-center border-black p-2">{e.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InstructorMain;
