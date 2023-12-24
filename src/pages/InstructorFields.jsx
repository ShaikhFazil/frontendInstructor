import axios from "axios";
import TextFields from "../styleComponents/CardDetails";
import { useEffect, useState } from "react";

const InstructorFields = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    date: "",
    day: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [existingSchedules, setExistingSchedules] = useState([]);
  const [instructorNames, setInstructorNames] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('https://65362727c620ba9358ed0ab7.mockapi.io/Instructor');
        setExistingSchedules(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSchedules();
  }, []);

  useEffect(() => {
    const fetchInstructorNames = async () => {
      try {
        const response = await axios.get('https://backendinstructor.onrender.com/api/v1/GetInstructorName');
        setInstructorNames(response.data.map((instructor) => instructor.name));
      } catch (error) {
        console.error(error);
      }
    };

    fetchInstructorNames();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!instructorNames.includes(formData.name)) {
      alert('Instructor Name is not in the database. Please enter a valid Instructor Name.');
      return;
    }

    const isScheduleConflict = existingSchedules.some(
      (schedule) => schedule.name === formData.name && schedule.date === formData.date && schedule.day === formData.day
    );

    if (isScheduleConflict) {
      alert('User already has a schedule on this date and day. Please choose another date or user.');
      return;
    }

    try {
      const response = await axios.post(
        "https://65362727c620ba9358ed0ab7.mockapi.io/Instructor",
        formData
      );

      console.log("Server Response:", response.data);

      if (response.status === 201) {
        console.log("Form submitted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error from server:", error);
    }
  };
  return (
    <div className="sticky top-9">
      <form onSubmit={handleSubmit}>
        <div className="store-details flex flex-col gap-1 my-3 border-[0.654px] bg-[#1a1a1a]/90 text-zinc-300 shadow-[0px_0px_28px_-12px_rgba(0,0,0,0.2)] rounded p-10 w-auto max-w-md">
          <h2 className="text-xl font-semibold mb-4">Scheduling Lectures</h2>
          <div className="3/4 mb-5">
            <TextFields
              title="Instructor Name"
              type="text"
              placeholder="Enter First Name"
              required={true}
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="3/4 mb-5">
            <TextFields
              type="text"
              title="Course"
              placeholder="Course"
              required={true}
              name="course"
              value={formData.course}
              onChange={handleInputChange}
            />
          </div>
          <div className="3/4 mb-5">
            <TextFields title="Date" type="date" required={true} name="date"
              value={formData.date}
              onChange={handleInputChange} />
          </div>

          <div className="3/4 mb-5">
            <TextFields title="Day" type="text" required={true} name="day"
              value={formData.day}
              onChange={handleInputChange} />
          </div>

          <button
            className="bg-orange-500 p-2 rounded hover:bg-orange-400 hover:text-black text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InstructorFields;
