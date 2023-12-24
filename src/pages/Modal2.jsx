import { useState } from "react";
import TextModal from "../styleComponents/Modal";
import axios from "axios";

const Modal2 = ({ isOpen2, onClose2 }) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
  
      const res = await axios.post(
        `https://backendinstructor.onrender.com/api/v1/AddInstructorName`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data', 
          },
        }
      );
  
      if (res.status === 200) {
        setFormData({ name: "" });
        console.log("Form submitted:", formData);
        onClose2();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black  p-8 w-96 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Add Instructor</h2>
            {/* close */}
            <span className="text-white" onClick={onClose2}>X</span>
            <form onSubmit={handleSubmit}>
              <div className="store-details flex flex-col gap-1 my-3 border-[0.654px] bg-[#1a1a1a]/90  shadow-[0px_0px_28px_-12px_rgba(0,0,0,0.2)] rounded p-10 w-auto max-w-md">
                <div className="3/4 mb-5">
                  <TextModal
                    type="text"
                    title="Name"
                    placeholder="Enter First Name"
                    required={true}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <button className="bg-orange-500 p-2 rounded hover:bg-orange-400 hover:text-black text-white" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal2;
