import { useState, useEffect } from 'react';
import axios from 'axios';
import StoreCard from '../styleComponents/StoreCard';
import { Link } from 'react-router-dom';

const AdminAddedCourse = () => {
  const [storeList, setStoreList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://backendinstructor.onrender.com/api/v1/');
      setStoreList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
 


  return (
    <>
      <div className="md:w-[90%] p-10">
        <h3 className="text-black text-2xl font-semibold">Admin Added Course</h3>
        <hr className="border-t-2 my-2" />
        <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {storeList &&
            storeList.map((data) => (
              <div key={data._id} className="relative">
              <StoreCard
                image={data.image}
                name={data.name}
                level={data.level}
                Description={data.description}
              />
              {/*Edit */}
             <Link
                  to={`/edit/${data._id}`} 
                  className=" m-2 bg-blue-500 text-white p-2 rounded"
                >
                  Edit
                </Link>
             
            </div>
              ))}
      </div>
    </div >
    </>
  );
};

export default AdminAddedCourse;
