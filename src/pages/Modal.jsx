import { useState } from "react";
import TextModal from "../styleComponents/Modal";
import axios from 'axios';

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    level: "",
    description: "",
    image: null,
  });

  const handleChange = (name) => (e) => {
    let value = name === "image" ? e.target.files[0] : e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", formData.image);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("level", formData.level);
      formDataToSend.append("description", formData.description);
  
      const res = await axios.post(`https://backendinstructor.onrender.com/api/v1/add`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (res.status === 200) {
        setFormData({ name: "", level: "", description: "", image: null });
        console.log("Form submitted:", formData);
        onClose(); 
      }
      setFormData({ name: "", level: "", description: "", image: null });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black  p-8 w-96 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Add Course</h2>
            {/*close */}
            <span className=" text-white" onClick={onClose}>X</span>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="store-details flex flex-col gap-1 my-3 border-[0.654px] bg-[#1a1a1a]/90 shadow-[0px_0px_28px_-12px_rgba(0,0,0,0.2)] rounded p-10 w-auto max-w-md">
               
                <div className="3/4 mb-5">
                <TextModal
                    type="text"
                    title="Name"
                    placeholder="Name"
                    required={true}
                    name="name"
                    value={formData.name}
                    onChange={handleChange("name")}
                  />
                </div>

                <div className="3/4 mb-5">
                  <TextModal
                    type="text"
                    title="level"
                    placeholder="level"
                    required={true}
                    name="level"
                    value={formData.level}
                    onChange={handleChange("level")}
                  />
                </div>

                <div className="3/4 mb-5">
                  <TextModal
                    type="text"
                    title="Description"
                    placeholder="Description"
                    required={true}
                    name="description"
                    value={formData.description}
                    onChange={handleChange("description")}
                  />
                </div>

                <div className="3/4 mb-5">
                  <TextModal
                    type="file"
                    accept="image/*"
                    name='image'
                    title="Image"
                    placeholder=""
                    required={true}
                    onChange={handleChange("image")}
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

export default Modal;
