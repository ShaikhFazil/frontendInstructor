import { Link } from "react-router-dom"
import InstructorFields from "./InstructorFields"
import UserAddCourse from "./UserAddCourse"
import AdminAddedCourse from "./AdminAddedCourse"
import Modal from "./Modal"
import { useState } from "react"
import Modal2 from "./Modal2"

const Account = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  const [isModalOpen2, setModalOpen2] = useState(false);

  const openModal2 = () => {
    setModalOpen2(true);
  };

  const closeModal2 = () => {
    setModalOpen2(false);
  };


  return (
    <>
      <div className="bg-blue-50">

        <div className=" flex justify-center flex-col items-center">
          <div className=" bg-orange-500 md:w-[50%] md:h-[40px] md:gap-5 mt-4 w-auto h-[5px]  flex justify-between gap-2 items-center rounded shadow-lg p-10">
            <div className="md:p-2 p-3 rounded text-white cursor-pointer hover:bg-blue-950  bg-blue-800">
              <button onClick={openModal2}> Add Instructor</button>
              <Modal2 isOpen2={isModalOpen2} onClose2={closeModal2} />
            </div>

            <div className="p-2 rounded text-white cursor-pointer hover:bg-blue-950  bg-green-700">
              <Link to='/Instructor'> View Instructors</Link>
            </div>

            <div className="p-2 rounded text-white cursor-pointer hover:bg-blue-950  bg-red-800">
              <button onClick={openModal}>ADD Course</button>
              <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>

          </div>

        </div>
        {/*DISPLAY the User CARD DATA */}
        <div className=" md:flex md:flex-row md:justify-around  mt-10">
          <div className=" md:flex md:flex-col md:w-[70%] md:p-8  ">
            <UserAddCourse />
            <div>
              <AdminAddedCourse />
            </div>
          </div>

          {/*Submit the Instructor Fields */}
          <div className="p-10">
            <InstructorFields />
          </div>

        </div>


      </div>
    </>
  )
}

export default Account